#!/usr/bin/env node
// Empaqueta un cerebro para entregárselo a alguien de afuera del repo.
//
//   node scripts/empaquetar.mjs gocho
//   node scripts/empaquetar.mjs --todos        (los 4, para la agencia)
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
import { join, resolve } from 'node:path'

const RAIZ = resolve(import.meta.dirname, '..')
const CEREBROS = join(RAIZ, 'cerebros')
const SALIDA = join(RAIZ, 'paquetes')

const CLIENTES = {
  gocho: 'Gocho — Franklin Ovalles (El Trading Club)',
  sensei: 'El Sensei',
  academia: 'Ramón — Academia de Construcción',
  bernardo: 'Bernardo Jurado',
}

const args = process.argv.slice(2)
const todos = args.includes('--todos')
const slugs = todos ? Object.keys(CLIENTES) : args.filter((a) => !a.startsWith('--'))

if (slugs.length === 0) {
  console.error('Uso: node scripts/empaquetar.mjs <slug> [slug...] | --todos')
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
cpSync(join(RAIZ, 'skills/cerebro-cliente'), join(raizPaquete, '.claude/skills/cerebro-cliente'), {
  recursive: true,
})

for (const doc of ['PARA-EL-EQUIPO.md', 'INSTRUCCIONES-PROJECT.md']) {
  cpSync(join(RAIZ, 'docs', doc), join(raizPaquete, doc === 'PARA-EL-EQUIPO.md' ? 'LEEME.md' : doc))
}

for (const slug of slugs) {
  const desde = join(CEREBROS, slug)
  const hasta = join(raizPaquete, 'cerebros', slug)
  cpSync(desde, hasta, {
    recursive: true,
    // Los intermedios de cosecha no viajan.
    filter: (src) => !/\/fuentes\/(subs-youtube|audio)(\/|$)/.test(src) && !src.endsWith('.raw'),
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
