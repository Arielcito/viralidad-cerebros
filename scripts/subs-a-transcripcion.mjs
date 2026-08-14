#!/usr/bin/env node
/* =================================================================
   Convierte los subtítulos automáticos de YouTube (.vtt) en archivos
   de transcripción del cerebro, con frontmatter y métricas cruzadas
   del catálogo de YouTube.

   Uso:
     node scripts/subs-a-transcripcion.mjs gocho

   Lee  cerebros/<cliente>/fuentes/subs-youtube/*.vtt
   Cruza cerebros/<cliente>/fuentes/catalogo-youtube.csv (por id de video)
   Escribe cerebros/<cliente>/fuentes/transcripciones/yt-NNN-slug.md

   Los subtítulos automáticos son ASR: no traen puntuación ni distinguen
   muletillas de palabras. Sirven para léxico, argumentos y estructura.
   Para el hook literal de un reel, la transcripción a mano sigue siendo
   mejor — por eso el frontmatter marca `fuente: subtitulos-automaticos`.
   ================================================================= */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const slugify = (s) =>
  String(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50) || "sin-titulo";

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
        } else quoted = false;
      } else field += ch;
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

/**
 * Los subtítulos automáticos de YouTube repiten cada línea dos veces: una vez
 * como texto plano (ya dicha) y otra con marcas `<c>` palabra por palabra
 * (mientras se dice). Quedarse sólo con las que traen marcas da cada línea una
 * sola vez. Si el archivo no tiene marcas, se deduplica por línea consecutiva.
 */
const vttATexto = (vtt) => {
  const lineas = vtt.split("\n").map((l) => l.trimEnd());
  const conMarcas = [];
  const planas = [];
  for (const l of lineas) {
    if (!l.trim()) continue;
    if (l.startsWith("WEBVTT") || /^(Kind|Language):/.test(l)) continue;
    if (l.includes("-->") || /^\d+$/.test(l.trim())) continue;
    const limpia = l
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (!limpia) continue;
    if (l.includes("<c")) conMarcas.push(limpia);
    else planas.push(limpia);
  }
  let salida = conMarcas;
  if (salida.length === 0) {
    salida = planas.filter((l, i) => l !== planas[i - 1]);
  }
  // Aun así puede haber repeticiones sueltas cuando el ASR corrige.
  return salida.filter((l, i) => l !== salida[i - 1]).join("\n");
};

const cliente = process.argv[2];
if (!cliente) {
  console.error("Falta el cliente. Ej: node scripts/subs-a-transcripcion.mjs gocho");
  process.exit(1);
}

const base = join(ROOT, "cerebros", cliente);
const subsDir = join(base, "fuentes", "subs-youtube");
if (!existsSync(subsDir)) {
  console.error(`No existe ${subsDir}. Bajá los subtítulos primero.`);
  process.exit(1);
}

const catalogo = join(base, "fuentes", "catalogo-youtube.csv");
const porId = new Map();
if (existsSync(catalogo)) {
  const rows = parseCsv(readFileSync(catalogo, "utf8"));
  const header = rows[0].map((h) => h.trim());
  const idx = (n) => header.indexOf(n);
  for (const r of rows.slice(1)) {
    const url = (r[idx("url")] || "").trim();
    const id = url.split(/[?=/]/).pop();
    if (id) porId.set(id, { titulo: r[idx("titulo")], duracion: r[idx("duracion_seg")], formato: r[idx("formato")], views: r[idx("views")], url });
  }
}

const outDir = join(base, "fuentes", "transcripciones");
mkdirSync(outDir, { recursive: true });

// yt-dlp baja el mismo subtítulo dos veces: `.es.vtt` y `.es-orig.vtt`, byte a
// byte idénticos. Nos quedamos con uno solo.
const archivos = readdirSync(subsDir)
  .filter((f) => f.endsWith(".vtt") && !f.endsWith(".es-orig.vtt"))
  .sort();
if (archivos.length === 0) {
  console.error("No hay .vtt en subs-youtube/.");
  process.exit(1);
}

let escritos = 0;
let vacios = 0;
for (const f of archivos) {
  // Los shorts se bajan con prefijo `s` para no colisionar con la numeración
  // de los videos largos: s001-, s002-, …
  const m = f.match(/^(s?)(\d{3})-([A-Za-z0-9_-]{11})-(.*)\.[^.]+\.vtt$/);
  if (!m) {
    console.log(`? ${f} — nombre inesperado, salteo`);
    continue;
  }
  const [, pref, num, id, tituloArchivo] = m;
  const nn = `${pref}${num}`;
  const texto = vttATexto(readFileSync(join(subsDir, f), "utf8"));
  if (!texto.trim()) {
    console.log(`= ${nn} ${id} — subtítulo vacío`);
    vacios += 1;
    continue;
  }
  const meta = porId.get(id) || {};
  const titulo = meta.titulo || tituloArchivo.replace(/[_ ]+/g, " ");
  const palabras = texto.split(/\s+/).length;
  const cuerpo = `---
n: yt-${nn}
url: ${meta.url || `https://www.youtube.com/watch?v=${id}`}
plataforma: youtube
cuenta: "@Gocholive"
fecha: ${"SIN DATO"}
views: ${meta.views || "SIN DATO"}
likes: SIN DATO
comments: SIN DATO
duracion_seg: ${meta.duracion || "SIN DATO"}
formato: ${meta.formato || (pref === "s" ? "short" : "video-largo")}
fuente: subtitulos-automaticos
palabras: ${palabras}
tema:
vende:
---

## Título

${titulo}

## Transcript

${texto}

## Notas

Subtítulo automático de YouTube (ASR). Sin puntuación y sin distinguir
muletillas. Para citar una frase textual en \`voz.md\`, verificar contra el
video antes de darla por literal.
`;
  writeFileSync(join(outDir, `yt-${nn}-${slugify(titulo)}.md`), cuerpo);
  escritos += 1;
}

console.log(`\nTranscripciones escritas: ${escritos} · vacías: ${vacios} · total .vtt: ${archivos.length}`);
