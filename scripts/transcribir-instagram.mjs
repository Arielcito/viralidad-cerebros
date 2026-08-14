#!/usr/bin/env node
/* =================================================================
   Transcribe los reels cosechados con Deepgram.

   Lee cerebros/<slug>/fuentes/instagram.json (lo deja cosechar-instagram.mjs),
   toma los --top N por views y deja un .md por reel en
   cerebros/<slug>/fuentes/transcripciones/ig-NNN-<slug-del-caption>.md, con el
   frontmatter del _PLANTILLA.md y el transcript literal.

   Cadena por reel: videoUrl del CDN → curl → ffmpeg (audio mp3 64k) → Deepgram
   nova-2 en español. yt-dlp no sirve acá: instagram.com devuelve login wall.

   Es reanudable: un reel cuyo .md ya existe se saltea. Si un videoUrl caducó
   (el CDN los firma por horas), se reporta y hay que recosechar.

   Uso:
     node scripts/transcribir-instagram.mjs <slug> [--top 100] [--concurrency 5]

   Requiere ffmpeg y curl en PATH, y DEEPGRAM_API_KEY en el entorno (con
   fallback al .env de la skill reel-to-guion, que ya lo tiene).
   ================================================================= */

import { execFile } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const run = promisify(execFile);
const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DEEPGRAM =
  "https://api.deepgram.com/v1/listen?model=nova-2&language=es&smart_format=true&punctuate=true&paragraphs=true";

function claveDeepgram() {
  if (process.env.DEEPGRAM_API_KEY) return process.env.DEEPGRAM_API_KEY.trim();
  // Fallback: la skill reel-to-guion ya guarda la clave y es la misma cuenta.
  const path = join(homedir(), ".claude", "skills", "reel-to-guion", ".env");
  if (existsSync(path)) {
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const trimmed = line.trim();
      if (trimmed.startsWith("DEEPGRAM_API_KEY=")) {
        return trimmed.split("=").slice(1).join("=").trim().replace(/^["']|["']$/g, "");
      }
    }
  }
  return "";
}

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : Number(args[i + 1]);
};
const slug = args.find((a) => !a.startsWith("--") && Number.isNaN(Number(a)));
const top = flag("top", 100);
const concurrency = flag("concurrency", 5);

if (!slug) {
  console.error("Uso: node scripts/transcribir-instagram.mjs <slug> [--top N] [--concurrency N]");
  process.exit(1);
}

const key = claveDeepgram();
if (!key) {
  console.error("Falta DEEPGRAM_API_KEY (entorno o .env de la skill reel-to-guion).");
  process.exit(1);
}

const fuentes = join(REPO, "cerebros", slug, "fuentes");
const origen = join(fuentes, "instagram.json");
if (!existsSync(origen)) {
  console.error(`No existe ${origen}. Corré primero cosechar-instagram.mjs ${slug} <handle>.`);
  process.exit(1);
}
const destino = join(fuentes, "transcripciones");
if (!existsSync(destino)) mkdirSync(destino, { recursive: true });

const views = (it) => Number(it.videoPlayCount ?? it.videoViewCount ?? 0);
const todos = JSON.parse(readFileSync(origen, "utf8")).sort((a, b) => views(b) - views(a));
const cola = todos.slice(0, top);

const kebab = (s) =>
  (s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 50) || "sin-caption";

const yaml = (v) => {
  const s = String(v ?? "").trim();
  if (!s) return "SIN DATO";
  return /[:#"']/.test(s) ? JSON.stringify(s) : s;
};

async function transcribirUno(item, i) {
  const n = String(i + 1).padStart(3, "0");
  const nombre = `ig-${n}-${kebab((item.caption || "").split("\n")[0])}.md`;
  const salida = join(destino, nombre);
  if (existsSync(salida)) return { estado: "saltado", nombre };

  const trabajo = join(tmpdir(), `cerebro-${slug}-${item.shortCode}`);
  mkdirSync(trabajo, { recursive: true });
  const video = join(trabajo, "v.mp4");
  const audio = join(trabajo, "a.mp3");

  try {
    await run("curl", ["-sL", "--fail", "--max-time", "240", "-o", video, item.videoUrl]);
    await run("ffmpeg", ["-v", "error", "-y", "-i", video, "-vn", "-acodec", "libmp3lame", "-b:a", "64k", audio]);

    const res = await fetch(DEEPGRAM, {
      method: "POST",
      headers: { Authorization: `Token ${key}`, "Content-Type": "audio/mpeg" },
      body: readFileSync(audio),
    });
    if (!res.ok) throw new Error(`Deepgram HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const payload = await res.json();
    const alt = payload?.results?.channels?.[0]?.alternatives?.[0];
    const texto = alt?.paragraphs?.transcript || alt?.transcript || "";
    if (!texto.trim()) return { estado: "sin-audio", nombre };

    const palabras = texto.trim().split(/\s+/).length;
    const hook = (texto.trim().split(/(?<=[.?!])\s+/)[0] || "").trim();
    const caption = (item.caption || "").trim();

    const md = `---
n: ig-${n}
url: ${item.url ?? "SIN DATO"}
plataforma: instagram
cuenta: "@${item.ownerUsername ?? ""}"
fecha: ${(item.timestamp ?? "").slice(0, 10) || "SIN DATO"}
views: ${views(item) || "SIN DATO"}
likes: ${item.likesCount ?? "SIN DATO"}
comments: ${item.commentsCount ?? "SIN DATO"}
duracion_seg: ${Math.round(Number(item.videoDuration ?? 0)) || "SIN DATO"}
formato: reel
fuente: deepgram-nova-2
palabras: ${palabras}
tema: ${yaml("")}
vende: ${yaml("")}
---

## Caption

${caption || "SIN DATO"}

## Hook (0-3s)

> ${hook || "SIN DATO"}

_Recorte automático: la primera oración del ASR. Verificar contra el video antes
de citarlo como hook en \`biblioteca/hooks.md\`._

## Transcript

${texto.trim()}

## Notas

SIN DATO — el ASR no ve planos, rótulos ni quién está en cámara.

## Cifras dichas

SIN DATO — Deepgram se come dígitos. Todo monto se verifica contra el video.
`;
    writeFileSync(salida, md);
    return { estado: "ok", nombre, palabras, views: views(item) };
  } catch (err) {
    const msg = String(err?.stderr || err?.message || err).slice(0, 200);
    return { estado: "error", nombre, error: msg };
  } finally {
    rmSync(trabajo, { recursive: true, force: true });
  }
}

console.log(`[transcribir] ${slug}: ${cola.length} reels (de ${todos.length} cosechados), ${concurrency} en paralelo`);

const resultados = [];
let cursor = 0;
await Promise.all(
  Array.from({ length: Math.min(concurrency, cola.length) }, async () => {
    while (cursor < cola.length) {
      const i = cursor++;
      const r = await transcribirUno(cola[i], i);
      resultados.push(r);
      const hechos = resultados.length;
      if (r.estado === "error") console.error(`[transcribir] ${slug} ${r.nombre}: ${r.error}`);
      if (hechos % 10 === 0 || hechos === cola.length) {
        console.log(`[transcribir] ${slug} ${hechos}/${cola.length}`);
      }
    }
  })
);

const cuenta = (estado) => resultados.filter((r) => r.estado === estado).length;
const palabras = resultados.reduce((acc, r) => acc + (r.palabras ?? 0), 0);
console.log(
  `[transcribir] ${slug} listo — ${cuenta("ok")} nuevas, ${cuenta("saltado")} ya estaban, ` +
    `${cuenta("sin-audio")} sin audio, ${cuenta("error")} con error. ${palabras.toLocaleString("es")} palabras.`
);
if (cuenta("error") > 0) {
  console.error(
    "[transcribir] Si los errores son 403/404 del CDN, los videoUrl caducaron: recosechá y volvé a correr."
  );
}
