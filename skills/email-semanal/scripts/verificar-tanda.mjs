#!/usr/bin/env node
// Corre verificar-citas.mjs sobre una tanda de emails que todavía no vive en
// cerebros/<slug>/piezas/ (está en un outputs/, en el escritorio, donde sea).
//
// Por qué existe: verificar-citas sólo mira las carpetas curadas del cerebro,
// así que una tanda entregada afuera se quedaba sin test de trazabilidad — y
// en la primera tanda de Academia salió un verbatim atribuido al video
// equivocado que el test habría cazado. Acá se arma un cerebro sombra en /tmp
// con fuentes/ enlazado y la tanda copiada a piezas/, se corre el verificador
// y se borra. El cerebro real no se toca (puede ser un plugin instalado).
//
// Uso: node verificar-tanda.mjs <slug> <archivo.md> [más.md] [--cerebros <ruta>]

import { cpSync, existsSync, mkdirSync, mkdtempSync, rmSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const iC = args.indexOf("--cerebros");
const cerebrosArg = iC >= 0 ? args.splice(iC, 2)[1] : null;
const [slug, ...archivos] = args;
if (!slug || !archivos.length) {
  console.error("Uso: node verificar-tanda.mjs <slug> <archivo.md> [más.md] [--cerebros <ruta>]");
  process.exit(2);
}

const candidatos = [
  cerebrosArg,
  process.env.CLAUDE_PLUGIN_ROOT && join(process.env.CLAUDE_PLUGIN_ROOT, "cerebros"),
  join(process.cwd(), "cerebros"),
].filter(Boolean).map((p) => resolve(p));
const cerebros = candidatos.find((p) => existsSync(join(p, slug, "fuentes")));
if (!cerebros) {
  console.error(`✗ No encontré cerebros/${slug}/fuentes en: ${candidatos.join(", ")}. Pasá --cerebros <ruta>.`);
  process.exit(2);
}
// Dashboard: cerebros/scripts/verificar-citas.mjs. Plugin: scripts/ al lado de cerebros/.
const script = [join(cerebros, "scripts/verificar-citas.mjs"), join(cerebros, "../scripts/verificar-citas.mjs")].find(existsSync);
if (!script) {
  console.error(`✗ No encontré verificar-citas.mjs cerca de ${cerebros}.`);
  process.exit(2);
}

const sombra = mkdtempSync(join(tmpdir(), "tanda-"));
try {
  mkdirSync(join(sombra, "cerebros", slug, "piezas"), { recursive: true });
  mkdirSync(join(sombra, "cerebros", "scripts"), { recursive: true });
  symlinkSync(join(cerebros, slug, "fuentes"), join(sombra, "cerebros", slug, "fuentes"));
  for (const a of archivos) cpSync(resolve(a), join(sombra, "cerebros", slug, "piezas", basename(a)));
  cpSync(script, join(sombra, "cerebros/scripts/verificar-citas.mjs"));
  const r = spawnSync("node", ["cerebros/scripts/verificar-citas.mjs", slug], { cwd: sombra, stdio: "inherit" });
  process.exit(r.status ?? 1);
} finally {
  rmSync(sombra, { recursive: true, force: true });
}
