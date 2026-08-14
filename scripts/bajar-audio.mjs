#!/usr/bin/env node
/* =================================================================
   Baja el audio de un rango de la cola de un cerebro, numerado, para
   arrastrarlo al chat y transcribir a mano.

   Uso:
     node scripts/bajar-audio.mjs gocho --desde 1 --hasta 10
     node scripts/bajar-audio.mjs gocho --n 7          # uno solo
     node scripts/bajar-audio.mjs gocho                # toda la cola

   Lee cerebros/<cliente>/fuentes/catalogo.csv y escribe .m4a en
   cerebros/<cliente>/fuentes/audio/NNN-slug.m4a.

   Instagram no deja listar un perfil, pero sí bajar un reel puntual, por eso
   esto funciona con las URLs ya cosechadas. Requiere estar logueado en Chrome
   (se toman las cookies de ahí).
   ================================================================= */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** Parseo mínimo de CSV con soporte de comillas dobles y comas internas. */
const parseCsv = (text) => {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          quoted = false;
        }
      } else {
        field += ch;
      }
      continue;
    }
    if (ch === '"') quoted = true;
    else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n") {
      row.push(field);
      if (row.some((c) => c.trim() !== "")) rows.push(row);
      row = [];
      field = "";
    } else if (ch !== "\r") field += ch;
  }
  row.push(field);
  if (row.some((c) => c.trim() !== "")) rows.push(row);
  return rows;
};

const slugify = (s) =>
  String(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50) || "sin-titulo";

const args = process.argv.slice(2);
const cliente = args.find((a) => !a.startsWith("--"));
if (!cliente) {
  console.error("Falta el cliente. Ej: node scripts/bajar-audio.mjs gocho");
  process.exit(1);
}
const flag = (name) => {
  const i = args.indexOf(`--${name}`);
  if (i === -1) return null;
  const v = Number(args[i + 1]);
  return Number.isFinite(v) ? v : null;
};
const only = flag("n");
const desde = only ?? flag("desde") ?? 1;
const hasta = only ?? flag("hasta") ?? Number.POSITIVE_INFINITY;

const base = join(ROOT, "cerebros", cliente);
const catalogo = join(base, "fuentes", "catalogo.csv");
if (!existsSync(catalogo)) {
  console.error(`No existe ${catalogo}. Cosechá el catálogo primero.`);
  process.exit(1);
}

const rows = parseCsv(readFileSync(catalogo, "utf8"));
if (rows.length < 2) {
  console.error("El catálogo está vacío (sólo tiene encabezado).");
  process.exit(1);
}
const header = rows[0].map((h) => h.trim());
const col = (name) => header.indexOf(name);
const [iN, iUrl, iTitulo] = [col("n"), col("url"), col("titulo")];
if (iN === -1 || iUrl === -1) {
  console.error(`El catálogo necesita columnas "n" y "url". Tiene: ${header.join(", ")}`);
  process.exit(1);
}

const outDir = join(base, "fuentes", "audio");
mkdirSync(outDir, { recursive: true });
const yaBajados = new Set(
  readdirSync(outDir)
    .map((f) => f.match(/^(\d{3})-/))
    .filter(Boolean)
    .map((m) => Number(m[1])),
);

const cola = rows
  .slice(1)
  .map((r) => ({ n: Number(r[iN]), url: (r[iUrl] || "").trim(), titulo: iTitulo === -1 ? "" : r[iTitulo] }))
  .filter((v) => Number.isFinite(v.n) && v.url && v.n >= desde && v.n <= hasta);

if (cola.length === 0) {
  console.error(`Nada en la cola para el rango ${desde}-${hasta}.`);
  process.exit(1);
}

console.log(`Bajando audio de ${cola.length} video(s) de ${cliente} → ${outDir}\n`);

let ok = 0;
let saltados = 0;
const fallidos = [];

for (const v of cola) {
  const nn = String(v.n).padStart(3, "0");
  if (yaBajados.has(v.n)) {
    console.log(`= ${nn} ya estaba, salteo`);
    saltados += 1;
    continue;
  }
  const salida = join(outDir, `${nn}-${slugify(v.titulo)}.%(ext)s`);
  const res = spawnSync(
    "yt-dlp",
    [
      "--no-warnings",
      "--no-playlist",
      "--cookies-from-browser",
      "chrome",
      "-f",
      "bestaudio/best",
      "-x",
      "--audio-format",
      "m4a",
      "-o",
      salida,
      v.url,
    ],
    { encoding: "utf8" },
  );
  if (res.status === 0) {
    console.log(`✓ ${nn} ${v.titulo || v.url}`);
    ok += 1;
  } else {
    const err = (res.stderr || "").trim().split("\n").pop() || `exit ${res.status}`;
    console.log(`✗ ${nn} ${v.url}\n    ${err}`);
    fallidos.push({ n: v.n, url: v.url, err });
  }
}

console.log(`\nListos: ${ok} · salteados: ${saltados} · fallidos: ${fallidos.length}`);
if (fallidos.length > 0) {
  console.log("\nFallidos (bajalos a mano o reintentá):");
  for (const f of fallidos) console.log(`  ${String(f.n).padStart(3, "0")}  ${f.url}`);
  process.exitCode = 1;
}
