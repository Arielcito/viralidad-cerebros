#!/usr/bin/env node
// Empaqueta un cerebro para entregárselo a alguien de afuera del repo.
//
// Uso (las rutas son las del dashboard; en el plugin viralidad-cerebros la
// carpeta es `scripts/` en la raíz):
//
//   node cerebros/scripts/empaquetar.mjs gocho
//   node cerebros/scripts/empaquetar.mjs --todos        (los 5, para la agencia)
//
// Por defecto va UN cliente por paquete. No es burocracia: el cerebro de un
// cliente tiene su oferta, sus precios y su investigación de audiencia, y eso no
// tiene por qué viajar dentro del paquete de otro. --todos es para el equipo de
// la agencia, que ya los maneja a todos.
//
// Qué entra: el markdown curado, las transcripciones, los catálogos, la skill y
// un LEEME. Qué no: los .vtt y los .m4a de fuentes/, que pesan 69 MB, se
// regeneran con los otros scripts de esta carpeta y no le sirven a nadie que no
// esté cosechando.

import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { CEREBROS, REPO as RAIZ, SCRIPTS } from './raiz.mjs'

// Los dos repos guardan estas tres cosas en lugares distintos (`skills/` en la
// raíz del plugin, `.claude/skills/` en el dashboard; `docs/` contra `cerebros/`).
// Se resuelve por existencia y no por profundidad para que este archivo sea
// **el mismo en los dos** y publicarlo sea un `cp`.
const primeroQueExista = (...rutas) => rutas.find((r) => existsSync(r)) ?? rutas.at(-1)

const SKILLS = primeroQueExista(join(RAIZ, 'skills'), join(RAIZ, '.claude/skills'))
const DOCS = primeroQueExista(join(RAIZ, 'docs'), CEREBROS)
const SALIDA = primeroQueExista(join(RAIZ, 'paquetes'), join(CEREBROS, 'paquetes'))

const CLIENTES = {
  gocho: 'Gocho — Franklin Ovalles (El Trading Club)',
  sensei: 'El Sensei',
  academia: 'Ramón — Academia de Construcción',
  bernardo: 'Bernardo Jurado',
  victor: 'Víctor Heras',
}

const args = process.argv.slice(2)
const todos = args.includes('--todos')
const slugs = todos ? Object.keys(CLIENTES) : args.filter((a) => !a.startsWith('--'))

if (slugs.length === 0) {
  console.error(`Uso: node ${SCRIPTS}/empaquetar.mjs <slug> [slug...] | --todos`)
  console.error(`Slugs: ${Object.keys(CLIENTES).join(', ')}`)
  process.exit(1)
}

for (const slug of slugs) {
  if (!CLIENTES[slug]) {
    console.error(`✗ "${slug}" no es un cliente. Slugs: ${Object.keys(CLIENTES).join(', ')}`)
    process.exit(1)
  }
  if (!existsSync(join(CEREBROS, slug))) {
    console.error(`✗ No existe cerebros/${slug}/`)
    process.exit(1)
  }
}

const nombre = todos ? 'cerebros-viralidad' : `cerebro-${slugs.join('-')}`
const stage = mkdtempSync(join(tmpdir(), 'cerebro-pkg-'))
const raizPaquete = join(stage, nombre)

// La skill viaja adentro, en la misma ruta que usa Claude Code. Así, cuando
// abren la carpeta, la skill ya está disponible sin que nadie instale nada.
cpSync(join(SKILLS, 'cerebro-cliente'), join(raizPaquete, '.claude/skills/cerebro-cliente'), {
  recursive: true,
})

// COMUN.md viaja porque es de donde sale el bloque de reglas y de formato que
// cada CEREBRO.md trae inyectado: sin él, quien reciba el paquete puede editar
// las siete copias a mano sin enterarse de que hay una sola fuente.
for (const doc of ['PARA-EL-EQUIPO.md', 'INSTRUCCIONES-PROJECT.md', 'COMUN.md']) {
  // COMUN.md vive con los cerebros en los dos repos; los otros dos, en `docs/`
  // cuando ese directorio existe.
  const desde = primeroQueExista(join(DOCS, doc), join(CEREBROS, doc))
  cpSync(desde, join(raizPaquete, doc === 'PARA-EL-EQUIPO.md' ? 'LEEME.md' : doc))
}

for (const slug of slugs) {
  const desde = join(CEREBROS, slug)
  const hasta = join(raizPaquete, 'cerebros', slug)
  cpSync(desde, hasta, {
    recursive: true,
    // Los intermedios de cosecha no viajan.
    filter: (src) =>
      !/\/fuentes\/(subs-youtube|audio)(\/|$)/.test(src) &&
      !src.endsWith('.raw') &&
      // El volcado de Apify son URLs firmadas que caducan en horas: adentro de
      // un zip que se abre mañana es peso muerto y links rotos.
      !src.endsWith('/fuentes/instagram.json'),
  })
}

mkdirSync(SALIDA, { recursive: true })
const zip = join(SALIDA, `${nombre}.zip`)
rmSync(zip, { force: true })
execFileSync('zip', ['-rq', zip, nombre, '-x', '.DS_Store'], { cwd: stage })
rmSync(stage, { recursive: true, force: true })

// `_PLANTILLA.md` vive con las transcripciones pero no es una: si se cuenta, el
// número que reporta el script deja de coincidir con el de CEREBRO.md.
const contar = (dir) =>
  existsSync(dir)
    ? readdirSync(dir, { recursive: true }).filter((f) => f.endsWith('.md') && !f.startsWith('_')).length
    : 0

console.log(`\n✓ ${zip}`)
console.log(`  ${(statSync(zip).size / 1024 / 1024).toFixed(1)} MB`)
for (const slug of slugs) {
  const t = contar(join(CEREBROS, slug, 'fuentes/transcripciones'))
  console.log(`  ${CLIENTES[slug]} — ${t} transcripciones`)
}
console.log('\nLa carpeta trae LEEME.md con las formas de usarlo.\n')
