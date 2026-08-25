#!/usr/bin/env node
// Inyecta los bloques de cerebros/COMUN.md en cada cerebros/<slug>/CEREBRO.md,
// entre los marcadores `<!-- comun: <nombre> -->` y `<!-- /comun: <nombre> -->`.
//
// Se inyecta en vez de referenciarse porque un CEREBRO.md tiene que valer solo:
// en un Claude Project se sube una carpeta de cliente y un puntero a un archivo
// hermano de la raíz no resuelve.
//
// (las rutas son las del dashboard; en el plugin viralidad-cerebros la carpeta
// es `scripts/` en la raíz)
//   node cerebros/scripts/sincronizar-comun.mjs           escribe
//   node cerebros/scripts/sincronizar-comun.mjs --check   falla si algo quedó viejo
//
// El --check es lo que evita que vuelva a pasar lo de agosto 2026: siete copias
// a mano del mismo bloque, tres de ellas ya distintas entre sí.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { CEREBROS, SCRIPTS } from './raiz.mjs'

const FUENTE = join(CEREBROS, 'COMUN.md')
const check = process.argv.includes('--check')

function bloquesDe(texto, prefijo) {
  const re = new RegExp(
    `<!-- ${prefijo}: ([a-z-]+) -->\\n([\\s\\S]*?)<!-- /${prefijo}: \\1 -->`,
    'g'
  )
  const out = new Map()
  for (const m of texto.matchAll(re)) out.set(m[1], m[2])
  return out
}

const fuente = bloquesDe(readFileSync(FUENTE, 'utf8'), 'bloque')
if (fuente.size === 0) {
  console.error('COMUN.md no tiene ningún <!-- bloque: ... -->. Nada que sincronizar.')
  process.exit(1)
}

const slugs = readdirSync(CEREBROS).filter((d) => {
  try {
    return statSync(join(CEREBROS, d, 'CEREBRO.md')).isFile()
  } catch {
    return false
  }
})

let desactualizados = 0
let escritos = 0
const faltantes = []

for (const slug of slugs) {
  const ruta = join(CEREBROS, slug, 'CEREBRO.md')
  const antes = readFileSync(ruta, 'utf8')
  const presentes = bloquesDe(antes, 'comun')

  for (const nombre of fuente.keys()) {
    if (!presentes.has(nombre)) faltantes.push(`${slug}: falta el marcador '${nombre}'`)
  }

  let despues = antes
  for (const [nombre, cuerpo] of fuente) {
    const re = new RegExp(
      `(<!-- comun: ${nombre} -->\\n)[\\s\\S]*?(<!-- /comun: ${nombre} -->)`,
      'g'
    )
    despues = despues.replace(re, (_, abre, cierra) => `${abre}${cuerpo}${cierra}`)
  }

  if (despues === antes) {
    console.log(`  = ${slug}`)
    continue
  }
  desactualizados++
  if (check) {
    console.log(`  ✗ ${slug} — desactualizado contra COMUN.md`)
  } else {
    writeFileSync(ruta, despues)
    escritos++
    console.log(`  ✓ ${slug} — actualizado`)
  }
}

for (const f of faltantes) console.log(`  ! ${f}`)

if (check && (desactualizados > 0 || faltantes.length > 0)) {
  console.error(
    `\n${desactualizados} cerebro(s) desactualizado(s) y ${faltantes.length} marcador(es) faltante(s).` +
      `\nCorré: node ${SCRIPTS}/sincronizar-comun.mjs`
  )
  process.exit(1)
}

if (faltantes.length > 0) process.exit(1)

console.log(
  check
    ? `\n${slugs.length} cerebros al día con COMUN.md.`
    : `\n${escritos} escrito(s), ${slugs.length - escritos} ya estaban al día.`
)
