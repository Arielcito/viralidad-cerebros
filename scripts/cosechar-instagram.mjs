#!/usr/bin/env node
/* =================================================================
   Cosecha de reels de Instagram → catálogo del cerebro.

   Corre apify/instagram-reel-scraper sobre uno o más handles y deja:

     cerebros/<slug>/fuentes/instagram.json          ← items crudos de Apify
     cerebros/<slug>/fuentes/catalogo-instagram.csv  ← inventario ordenado por views

   El JSON crudo se guarda porque trae `videoUrl`: una URL firmada del CDN de
   Instagram que permite bajar el video **sin login**. Es el atajo que hace
   viable transcribir IG en serie — yt-dlp sobre instagram.com choca contra el
   login wall. Esa URL caduca en horas, así que transcribir-instagram.mjs se
   corre enseguida después de esta cosecha; si caducó, se recosecha.

   El scraper devuelve los N reels **más recientes**, no los más vistos. Por eso
   se cosecha de más (--limit 200) y el recorte por views lo hace el
   transcriptor con --top. Cualquier ranking de views que salga de acá es
   "top dentro de los últimos N", y así hay que citarlo en el cerebro.

   Uso:
     node scripts/cosechar-instagram.mjs <slug> <handle...> [--limit N]

   Ejemplo:
     node scripts/cosechar-instagram.mjs academia lordconstruye
     node scripts/cosechar-instagram.mjs victor herasmedia victorherasemprendedor

   Requiere APIFY_TOKEN en el entorno (o en .env / .env.local del repo).
   ================================================================= */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REEL_ACTOR_ID = "xMc5Ga1oCONPmWJIa"; // apify/instagram-reel-scraper
const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** Lee una clave de los .env del repo sin depender de dotenv. */
function fromEnvFiles(key) {
  for (const file of [".env.local", ".env"]) {
    const path = join(REPO, file);
    if (!existsSync(path)) continue;
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const trimmed = line.trim();
      if (!trimmed.startsWith(`${key}=`)) continue;
      return trimmed.slice(key.length + 1).trim().replace(/^["']|["']$/g, "");
    }
  }
  return "";
}

const args = process.argv.slice(2);
const limitFlag = args.indexOf("--limit");
const limit = limitFlag === -1 ? 200 : Number(args[limitFlag + 1]);
const positional = args.filter(
  (a, i) => !a.startsWith("--") && i !== limitFlag + 1
);
const [slug, ...handles] = positional;

if (!slug || handles.length === 0) {
  console.error(
    "Uso: node scripts/cosechar-instagram.mjs <slug> <handle...> [--limit N]"
  );
  process.exit(1);
}

const token = process.env.APIFY_TOKEN || fromEnvFiles("APIFY_TOKEN");
if (!token) {
  console.error("Falta APIFY_TOKEN (entorno, .env.local o .env).");
  process.exit(1);
}

const usernames = handles.map((h) => h.trim().replace(/^@+/, "").toLowerCase());
const destino = join(REPO, "cerebros", slug, "fuentes");
if (!existsSync(destino)) mkdirSync(destino, { recursive: true });

console.log(`[cosecha] ${slug} ← @${usernames.join(", @")} (hasta ${limit} c/u)`);

/** Un run por handle: mezclar handles en un solo input hace que el actor
 *  reparta el límite y a veces devuelva 0 filas para el segundo. */
async function cosechar(username) {
  const url = `https://api.apify.com/v2/acts/${REEL_ACTOR_ID}/run-sync-get-dataset-items?token=${token}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username: [username], resultsLimit: limit }),
  });
  if (!res.ok) {
    throw new Error(`Apify HTTP ${res.status} para @${username}: ${(await res.text()).slice(0, 300)}`);
  }
  const items = await res.json();
  if (!Array.isArray(items)) {
    throw new Error(`Apify devolvió algo que no es una lista para @${username}`);
  }
  const videos = items.filter((it) => it.videoUrl);
  console.log(
    `[cosecha] @${username}: ${items.length} ítems, ${videos.length} con video descargable`
  );
  return videos;
}

const porHandle = await Promise.all(usernames.map(cosechar));
const items = porHandle.flat();

if (items.length === 0) {
  console.error("[cosecha] 0 reels. Nada que escribir — revisá el handle.");
  process.exit(1);
}

// Ordenado por views desc: es el orden en que el transcriptor va a trabajar y
// el orden en que el cerebro lee el catálogo.
const views = (it) => Number(it.videoPlayCount ?? it.videoViewCount ?? 0);
items.sort((a, b) => views(b) - views(a));

writeFileSync(join(destino, "instagram.json"), JSON.stringify(items, null, 1));

const csvCell = (v) => {
  const s = String(v ?? "").replace(/\r?\n/g, " ").trim();
  return /[",]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const header =
  "n,shortcode,url,caption,cuenta,fecha,views,likes,comments,duracion_seg,transcripto";
const filas = items.map((it, i) =>
  [
    i + 1,
    it.shortCode ?? "",
    it.url ?? "",
    (it.caption ?? "").split("\n")[0].slice(0, 160),
    `@${it.ownerUsername ?? ""}`,
    (it.timestamp ?? "").slice(0, 10),
    views(it),
    it.likesCount ?? 0,
    it.commentsCount ?? 0,
    Math.round(Number(it.videoDuration ?? 0)),
    "no",
  ]
    .map(csvCell)
    .join(",")
);
writeFileSync(
  join(destino, "catalogo-instagram.csv"),
  `${[header, ...filas].join("\n")}\n`
);

const totalViews = items.reduce((acc, it) => acc + views(it), 0);
console.log(
  `[cosecha] ${items.length} reels → ${slug}/fuentes/catalogo-instagram.csv` +
    ` (top ${views(items[0]).toLocaleString("es")} views, total ${totalViews.toLocaleString("es")})`
);
