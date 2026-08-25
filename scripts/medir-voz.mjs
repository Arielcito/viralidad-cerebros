#!/usr/bin/env node
/* =================================================================
   Mide cómo habla un cliente. Es la mitad mecánica de la destilación:
   produce los números que después `voz.md` interpreta.

   Uso (las rutas son las del dashboard; en el plugin viralidad-cerebros
   la carpeta es `scripts/` en la raíz):

     node cerebros/scripts/medir-voz.mjs victor
     node cerebros/scripts/medir-voz.mjs victor --top 40
     node cerebros/scripts/medir-voz.mjs victor > /tmp/victor-medicion.md

   Por qué existe. Tener 700.000 palabras transcriptas no es tener una voz: es
   tener un archivo. Lo que convierte transcripción en voz es el **contraste
   entre registros** — la misma persona habla distinto vendiendo que charlando,
   y la palabra que aparece 700 veces en sus lives y 0 en sus reels es el dato
   que hace que una imitación se caiga o no. Eso se cuenta, no se percibe.

   Separa el corpus por registro (reel de IG · video largo de YT · live · short)
   y saca, por cada uno: volumen, léxico por cada 10.000 palabras con la
   frecuencia de los otros registros al lado, las palabras y muletillas
   **distintivas** de ese registro contra el resto, largo de oración, el trato
   (tú/usted/vos/ustedes) y las aperturas y cierres reales.

   Lo que NO hace: decidir qué significa. Un número alto puede ser el tema del
   mes y no un rasgo de voz. La lectura la hace la skill `destilar-voz`, que
   abre los videos y cita.
   ================================================================= */
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { CEREBROS, SCRIPTS } from './raiz.mjs'


const args = process.argv.slice(2)
const slug = args.find((a) => !a.startsWith('--'))
const topArg = args.find((a) => a.startsWith('--top'))
const TOP = topArg ? Number(topArg.split(/[= ]/)[1] || args[args.indexOf(topArg) + 1]) || 30 : 30

if (!slug) {
  console.error(`Uso: node ${SCRIPTS}/medir-voz.mjs <slug> [--top N]`)
  process.exit(1)
}

const dir = join(CEREBROS, slug, 'fuentes', 'transcripciones')
if (!existsSync(dir)) {
  console.error(`✗ No existe ${dir}`)
  process.exit(1)
}

/** El cuerpo hablado es la sección `## Transcript`. Contarlo sobre el archivo
 *  entero mete el caption y el hook —que están escritos, no dichos— y hace que
 *  el total no coincida con el que declara CEREBRO.md. Ya pasó. */
// Ojo con el corte: `\\Z` no existe en JavaScript. En un regex JS `\\Z` es la
// letra Z, así que `(?=^## |\\Z)` cortaba la transcripción en la primera Z
// mayúscula del texto —una `[Música]` no, pero un "Zuckerberg" o una "Z" suelta
// del ASR sí— y se perdía todo lo que venía después sin decir nada. En gocho
// eran 22 archivos y uno perdía el 97% de lo dicho. Se corta por índice.
const transcriptDe = (texto) => {
  const i = texto.indexOf('## Transcript')
  if (i === -1) return ''
  const resto = texto.slice(i + '## Transcript'.length)
  const j = resto.search(/\n## /)
  return (j === -1 ? resto : resto.slice(0, j)).trim()
}
const frontmatter = (texto) => {
  const m = texto.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const fm = {}
  for (const l of m[1].split('\n')) {
    const i = l.indexOf(':')
    if (i > 0) fm[l.slice(0, i).trim()] = l.slice(i + 1).trim().replace(/^"|"$/g, '')
  }
  return fm
}

const REGISTROS = {
  reel: 'Reel de Instagram',
  'video-largo': 'Video largo de YouTube',
  live: 'Live / stream',
  short: 'Short de YouTube',
  mixto: '⚠️ Serie con invitados (voz mixta)',
}
const registroDe = (fm, nombre) => {
  const f = (fm.formato || '').toLowerCase()
  // Marcá con `formato: serie-reto` (o cualquier cosa con "reto"/"mixt"/"invitad")
  // los videos donde habla más de una persona: un podcast, una entrevista, un
  // reality. Cuentan como corpus pero no son su voz, y si se mezclan bajan
  // artificialmente sus muletillas y suben las del invitado.
  if (f.includes('reto') || f.includes('mixt') || f.includes('invitad') || f.includes('entrevista') || f.includes('podcast')) return 'mixto'
  if (f.includes('short')) return 'short'
  if (f.includes('live') || f.includes('stream')) return 'live'
  if (f.includes('largo') || f.includes('video')) return 'video-largo'
  if ((fm.plataforma || '').includes('instagram') || nombre.startsWith('ig-')) return 'reel'
  return 'video-largo'
}

const piezas = []
for (const f of readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_'))) {
  const texto = readFileSync(join(dir, f), 'utf8')
  const fm = frontmatter(texto)
  const cuerpo = transcriptDe(texto)
  if (!cuerpo) continue
  piezas.push({ ref: fm.n || f.replace(/-.*/, ''), archivo: f, registro: registroDe(fm, f), cuerpo, views: Number(fm.views) || null, dur: Number(fm.duracion_seg) || null })
}

if (piezas.length === 0) {
  console.error('✗ 0 transcripciones con sección `## Transcript`.')
  process.exit(1)
}

// ---- tokenización ----------------------------------------------------------
const normalizar = (s) =>
  s
    .toLowerCase()
    .replace(/\[[^\]]*\]/g, ' ') // [música], [aplausos]
    .replace(/[^\p{L}\p{N}\s'’-]/gu, ' ')
// Las de una letra que sí son palabras en español entran: filtrarlas por largo
// deja afuera la `a`, que es una de cada treinta palabras dichas, y con eso el
// volumen del corpus queda ~20% por debajo de lo que dice el frontmatter.
// Los dígitos sueltos siguen afuera a propósito: el ASR los destroza y "0 0 0"
// no es vocabulario.
const MONO = new Set(['a', 'y', 'o', 'e', 'u'])
const palabrasDe = (s) => normalizar(s).split(/\s+/).filter((w) => (w.length > 1 ? !/^\d+$/.test(w) : MONO.has(w)))

// Función pura de conteo: n-gramas de 1 a 3.
const contar = (tokens, n) => {
  const m = new Map()
  for (let i = 0; i + n <= tokens.length; i += 1) {
    const g = tokens.slice(i, i + n).join(' ')
    m.set(g, (m.get(g) || 0) + 1)
  }
  return m
}

const grupos = new Map()
for (const p of piezas) {
  if (!grupos.has(p.registro)) grupos.set(p.registro, [])
  grupos.get(p.registro).push(p)
}

const datos = new Map()
for (const [reg, ps] of grupos) {
  const tokens = ps.flatMap((p) => palabrasDe(p.cuerpo))
  datos.set(reg, {
    piezas: ps,
    tokens,
    total: tokens.length,
    uni: contar(tokens, 1),
    bi: contar(tokens, 2),
    tri: contar(tokens, 3),
  })
}

const regs = [...datos.keys()].sort((a, b) => datos.get(b).total - datos.get(a).total)
const por10k = (reg, g, n = 1) => {
  const d = datos.get(reg)
  const c = (n === 1 ? d.uni : n === 2 ? d.bi : d.tri).get(g) || 0
  return d.total ? (c * 10000) / d.total : 0
}

const fmt = (x) => (x >= 100 ? x.toFixed(0) : x >= 10 ? x.toFixed(1) : x.toFixed(2))
const miles = (n) => n.toLocaleString('es-AR')

// ---- salida ----------------------------------------------------------------
const L = []
L.push(`# Medición de voz — ${slug}`)
L.push('')
L.push(`Generado con \`node ${SCRIPTS}/medir-voz.mjs ${slug}\` sobre ${piezas.length} transcripciones.`)
L.push('Todo lo de acá es conteo. La lectura la hace `voz.md`, con refs abribles.')
L.push('')

L.push('## Volumen por registro')
L.push('')
L.push('| Registro | Piezas | Palabras | % del corpus | Palabras/pieza |')
L.push('|---|---:|---:|---:|---:|')
const totalCorpus = regs.reduce((s, r) => s + datos.get(r).total, 0)
for (const r of regs) {
  const d = datos.get(r)
  L.push(`| ${REGISTROS[r] || r} | ${d.piezas.length} | ${miles(d.total)} | ${((d.total * 100) / totalCorpus).toFixed(1)}% | ${Math.round(d.total / d.piezas.length)} |`)
}
L.push(`| **Total** | **${piezas.length}** | **${miles(totalCorpus)}** | | |`)
L.push('')
if (datos.has('mixto')) {
  L.push('> ⚠ **Hay un registro de voz mixta.** Esas piezas tienen más de una')
  L.push('> persona hablando, así que sus muletillas no son las del cliente.')
  L.push('> Están acá para que se vea cuánto pesan, no para escribir reglas sobre')
  L.push('> ellas. Sirven para otra cosa: cómo hace una pregunta y cómo escucha.')
  L.push('')
}
if (regs.length === 1) {
  L.push('> ⚠ **Un solo registro.** Sin contraste no se puede separar "cómo habla"')
  L.push('> de "de qué habló este mes". Cosechá otra fuente antes de escribir reglas')
  L.push(`> de registro: \`${SCRIPTS}/cosechar-youtube.mjs\`.`)
  L.push('')
}

// Palabras distintivas: lo que hace a un registro reconocible es lo que dice
// acá y no allá. Ratio con suavizado, mínimo de apariciones para que una
// palabra usada 2 veces no encabece la tabla.
const distintivas = (reg, n, minC) => {
  const d = datos.get(reg)
  const mapa = n === 1 ? d.uni : n === 2 ? d.bi : d.tri
  const otros = regs.filter((r) => r !== reg)
  const filas = []
  for (const [g, c] of mapa) {
    if (c < minC) continue
    const aqui = (c * 10000) / d.total
    const alla = otros.length ? otros.reduce((s, r) => s + por10k(r, g, n), 0) / otros.length : 0
    filas.push({ g, c, aqui, alla, ratio: (aqui + 0.5) / (alla + 0.5) })
  }
  return filas.sort((a, b) => b.ratio - a.ratio || b.c - a.c)
}

if (regs.length > 1) {
  L.push('## Lo que dice acá y no allá')
  L.push('')
  L.push('La columna que importa es **ratio**: cuántas veces más frecuente es en este')
  L.push('registro que en el promedio de los otros. Un ratio alto con muchas apariciones')
  L.push('es un marcador de registro; un ratio alto con pocas puede ser el tema del mes.')
  L.push('')
  for (const r of regs) {
    const d = datos.get(r)
    const minC = Math.max(3, Math.round(d.total / 20000))
    L.push(`### ${REGISTROS[r] || r} — ${miles(d.total)} palabras`)
    L.push('')
    L.push('| Palabra | Veces | Por 10k acá | Por 10k en los otros | Ratio |')
    L.push('|---|---:|---:|---:|---:|')
    for (const f of distintivas(r, 1, minC).slice(0, TOP)) {
      L.push(`| ${f.g} | ${miles(f.c)} | ${fmt(f.aqui)} | ${fmt(f.alla)} | ${f.ratio >= 100 ? '∞' : `${fmt(f.ratio)}×`} |`)
    }
    L.push('')
    const mule = distintivas(r, 3, Math.max(3, minC)).slice(0, 12)
    if (mule.length) {
      L.push('Muletillas y giros propios de este registro (trigramas):')
      L.push('')
      for (const f of mule) L.push(`- «${f.g}» — ${miles(f.c)} veces (${fmt(f.aqui)}/10k, ${fmt(f.ratio)}× vs el resto)`)
      L.push('')
    }
  }
}

L.push('## Léxico más usado, lado a lado')
L.push('')
L.push('Las mismas palabras medidas en todos los registros. Es la tabla que hace')
L.push('falta para decidir qué vocabulario va en un ad y cuál en nutrición.')
L.push('')
const candidatas = new Set()
for (const r of regs) {
  const d = datos.get(r)
  for (const [g] of [...d.uni.entries()].sort((a, b) => b[1] - a[1]).slice(0, TOP * 2)) candidatas.add(g)
}
L.push(`| Palabra | ${regs.map((r) => REGISTROS[r] || r).join(' | ')} |`)
L.push(`|---|${regs.map(() => '---:').join('|')}|`)
const filasLex = [...candidatas]
  .map((g) => ({ g, vals: regs.map((r) => por10k(r, g)), spread: Math.max(...regs.map((r) => por10k(r, g))) - Math.min(...regs.map((r) => por10k(r, g))) }))
  .sort((a, b) => b.spread - a.spread)
  .slice(0, TOP)
for (const f of filasLex) L.push(`| ${f.g} | ${f.vals.map(fmt).join(' | ')} |`)
L.push('')

L.push('## Trato y persona')
L.push('')
L.push(`| Forma | ${regs.map((r) => REGISTROS[r] || r).join(' | ')} |`)
L.push(`|---|${regs.map(() => '---:').join('|')}|`)
for (const w of ['tú', 'te', 'ti', 'tu', 'usted', 'ustedes', 'vos', 'vosotros', 'yo', 'nosotros', 'mira', 'mirá', 'fíjate', 'escucha', 'oye']) {
  const vals = regs.map((r) => por10k(r, w))
  if (vals.every((v) => v === 0)) continue
  L.push(`| ${w} | ${vals.map(fmt).join(' | ')} |`)
}
L.push('')
L.push('El trato es lo que más delata una imitación y lo que más se mezcla al escribir.')
L.push('Si dos formas de trato conviven en el mismo registro, `voz.md` tiene que decir')
L.push('**cuándo usa cada una**, no promediarlas.')
L.push('')

L.push('## Largo de oración')
L.push('')
L.push('| Registro | Palabras/oración | Oración más larga |')
L.push('|---|---:|---:|')
for (const r of regs) {
  const d = datos.get(r)
  const oraciones = d.piezas
    .flatMap((p) => p.cuerpo.split(/(?<=[.!?…])\s+|\n/))
    .map((o) => palabrasDe(o).length)
    .filter((n) => n > 0)
  if (!oraciones.length) continue
  const med = oraciones.reduce((s, n) => s + n, 0) / oraciones.length
  L.push(`| ${REGISTROS[r] || r} | ${med.toFixed(1)} | ${oraciones.reduce((a, b) => (b > a ? b : a), 0)} |`)
}
L.push('')
L.push('Ojo: los subtítulos automáticos vienen sin puntuación, así que en los')
L.push('registros de YouTube este número mide el corte de línea del ASR, no cómo')
L.push('respira. Sirve para comparar registros transcriptos igual, no entre fuentes.')
L.push('')

const recorte = (s, n) => palabrasDe(s).slice(0, n).join(' ')
const recorteFin = (s, n) => palabrasDe(s).slice(-n).join(' ')
for (const r of regs) {
  const d = datos.get(r)
  const orden = [...d.piezas].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 15)
  L.push(`## Aperturas y cierres — ${REGISTROS[r] || r}`)
  L.push('')
  L.push(`Las ${orden.length} piezas más vistas del registro. La apertura es el activo`)
  L.push('más reusable que hay: si hay un molde, se ve acá.')
  L.push('')
  for (const p of orden) {
    L.push(`- \`${p.ref}\`${p.views ? ` (${miles(p.views)} views)` : ''}`)
    L.push(`  - abre: «${recorte(p.cuerpo, 18)}…»`)
    L.push(`  - cierra: «…${recorteFin(p.cuerpo, 14)}»`)
  }
  L.push('')
}

L.push('## Qué hacer con esto')
L.push('')
L.push('1. Abrí los videos de las filas que más te llamen y escuchá antes de escribir')
L.push('   una regla. Un ratio no explica *cuándo* usa la palabra.')
L.push('2. Toda cifra que pase a `voz.md` va con su registro y su base:')
L.push('   «772 veces en las 552.293 palabras de los lives», no «lo dice mucho».')
L.push('3. Todo rasgo va con al menos un verbatim y su ref abrible (`ig-NNN`/`yt-NNN`).')
L.push('4. Los números y nombres propios que veas acá son ASR: no los cites como dato')
L.push('   del cliente, sólo como forma de hablar.')
L.push('')

console.log(L.join('\n'))
