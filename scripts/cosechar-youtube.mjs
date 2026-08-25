#!/usr/bin/env node
/* =================================================================
   Cosecha un canal de YouTube entero: catálogo + subtítulos automáticos.

   Uso (las rutas son las del dashboard; en el plugin viralidad-cerebros
   la carpeta es `scripts/` en la raíz):

     node cerebros/scripts/cosechar-youtube.mjs victor https://www.youtube.com/@victorherasmedia
     node cerebros/scripts/cosechar-youtube.mjs sensei <url> --shorts
     node cerebros/scripts/cosechar-youtube.mjs victor <url> --solo-catalogo
     node cerebros/scripts/cosechar-youtube.mjs victor <url> --solo-metadata

   Escribe cerebros/<slug>/fuentes/catalogo-youtube.csv y
          cerebros/<slug>/fuentes/subs-youtube/NNN-<id>-<titulo>.es.vtt
   Después: node cerebros/scripts/subs-a-transcripcion.mjs <slug>

   Por qué existe. Los cerebros de sensei, academia, bernardo y victor se
   escribieron sobre reels de 30 segundos: un reel es un guion, no una forma de
   hablar. El habla larga —donde aparecen las muletillas, las digresiones, cómo
   arma un argumento y cómo contesta una objeción— está en YouTube y sale gratis
   porque los subtítulos automáticos se bajan sin descargar el video. Gocho se
   cosechó a mano y por eso su catálogo quedó sin views ni fechas; acá se
   capturan.

   Es reanudable: si el .vtt ya está, no lo vuelve a pedir. Cortarlo y volver a
   correrlo es seguro y es lo normal en un canal de 400 videos.

   Ojo con dos cosas que ya costaron tiempo:
   - yt-dlp sale con exit 0 y 0 archivos si se corta la red. Este script cuenta
     archivos y reporta cuántos faltan, en vez de confiar en el exit code.
   - No todo video tiene subtítulos automáticos. Los que no, quedan listados al
     final: si son pocos se transcriben con Deepgram (bajar-audio.mjs), y si son
     muchos es que el canal los tiene deshabilitados.
   ================================================================= */
import { execFileSync, spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { REPO as RAIZ, SCRIPTS } from './raiz.mjs'


const args = process.argv.slice(2)
const slug = args[0]
const canal = args[1]
const conShorts = args.includes('--shorts')
const soloCatalogo = args.includes('--solo-catalogo')
const soloMetadata = args.includes('--solo-metadata')
const maxArg = args.find((a) => a.startsWith('--max='))
const max = maxArg ? Number(maxArg.split('=')[1]) : Infinity

if (!slug || !canal || canal.startsWith('--')) {
  console.error(`Uso: node ${SCRIPTS}/cosechar-youtube.mjs <slug> <url-del-canal> [--shorts] [--max=N] [--solo-catalogo] [--solo-metadata]`)
  process.exit(1)
}

const base = join(RAIZ, 'cerebros', slug)
if (!existsSync(base)) {
  console.error(`✗ No existe cerebros/${slug}/`)
  process.exit(1)
}
const fuentes = join(base, 'fuentes')
const subsDir = join(fuentes, 'subs-youtube')
mkdirSync(subsDir, { recursive: true })

const csvSeguro = (v) => {
  const s = String(v ?? '').replace(/\r?\n/g, ' ').trim()
  return /[",]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}
const slugify = (s) =>
  String(s)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50) || 'sin-titulo'

const SEP = '␟' // separador improbable en un título

/** Lista una pestaña del canal sin descargar nada. */
const listar = (tab) => {
  const url = `${canal.replace(/\/$/, '')}/${tab}`
  process.stdout.write(`· listando /${tab} … `)
  const r = spawnSync(
    'yt-dlp',
    ['--flat-playlist', '--ignore-errors', '--print', ['%(id)s', '%(title)s', '%(duration)s', '%(view_count)s', '%(upload_date)s', '%(channel)s'].join(SEP), url],
    { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  )
  const filas = (r.stdout || '')
    .split('\n')
    .filter((l) => l.includes(SEP))
    .map((l) => {
      const [id, titulo, duracion, views, fecha, cuenta] = l.split(SEP)
      return { id, titulo, duracion, views, fecha, cuenta, formato: tab === 'shorts' ? 'short' : tab === 'streams' ? 'live' : 'video-largo' }
    })
  console.log(`${filas.length}`)
  return filas
}

const tabs = conShorts ? ['videos', 'streams', 'shorts'] : ['videos', 'streams']
let items = []
for (const tab of tabs) items = items.concat(listar(tab))

if (items.length === 0) {
  console.error('✗ 0 items. ¿La URL del canal es correcta? Probá abrirla en el browser.')
  process.exit(1)
}


const cuenta = items.find((i) => i.cuenta && i.cuenta !== 'NA')?.cuenta || canal.split('/').pop()
const dato = (v) => (v === undefined || v === null || v === '' || v === 'NA' ? 'SIN DATO' : v)
const cab = ['n', 'url', 'titulo', 'plataforma', 'cuenta', 'fecha', 'views', 'likes', 'comments', 'duracion_seg', 'formato', 'transcripto']
const csv = join(fuentes, 'catalogo-youtube.csv')

// Todo lo que el catálogo anterior sabía y esta corrida no puede volver a
// deducir se hereda por id de video. Son dos cosas, y las dos cuestan caro:
//
// 1. El **número**. `yt-NNN` es la ref que citan los archivos curados, y acá se
//    asignaba por posición en el listado del canal. YouTube lista lo más nuevo
//    primero: un solo video publicado desde la última cosecha corre todos los
//    números uno, y cada `yt-042` de `voz.md` pasa a apuntar a otro video. La
//    numeración no puede depender del orden; depende del id.
// 2. El **formato** editado a mano —`entrevista`, `serie-reto`, cualquier marca
//    de que ahí habla más de una persona— es una decisión curatorial: acá sólo
//    se sabe si el video salió de /videos, de /shorts o de /streams. Sin esto un
//    `--solo-metadata` las borra en silencio y el siguiente conteo de voz vuelve
//    a mezclar la voz del invitado con la del cliente.
const previo = new Map()
if (existsSync(csv)) {
  const lineasPrevias = readFileSync(csv, 'utf8').split('\n')
  const cabPrevia = (lineasPrevias[0] || '').split(',')
  const iFormato = cabPrevia.indexOf('formato')
  const iUrl = cabPrevia.indexOf('url')
  const iN = cabPrevia.indexOf('n')
  if (iFormato !== -1 && iUrl !== -1) {
    for (const linea of lineasPrevias.slice(1)) {
      if (!linea.trim()) continue
      const campos = []
      let campo = ''
      let comillas = false
      for (let i = 0; i < linea.length; i += 1) {
        const c = linea[i]
        if (comillas) {
          if (c === '"' && linea[i + 1] === '"') { campo += '"'; i += 1 } else if (c === '"') comillas = false
          else campo += c
        } else if (c === '"') comillas = true
        else if (c === ',') { campos.push(campo); campo = '' } else campo += c
      }
      campos.push(campo)
      // Los shorts se catalogan como /shorts/<id> y los largos como watch?v=<id>:
      // partir por 'v=' deja afuera a todos los shorts, y un id que no se
      // reconoce es un video que pierde su número y se renumera.
      const id = (campos[iUrl] || '').match(/(?:v=|\/shorts\/)([A-Za-z0-9_-]{11})/)?.[1]
      // Catálogos viejos guardaron el número sin ceros a la izquierda ('7'), pero
      // en disco y en las refs siempre va con tres ('yt-007'): se normaliza acá.
      const n = iN === -1 ? '' : (campos[iN] || '').trim()
      const nOk = /^s?\d+$/.test(n) ? `${n.startsWith('s') ? 's' : ''}${String(Number(n.replace(/^s/, ''))).padStart(3, '0')}` : n
      if (id) previo.set(id, { n: nOk, formato: campos[iFormato] })
    }
  }
}

// Numeración: los largos y los lives comparten NNN; los shorts van sNNN, igual
// que en gocho, para que las refs yt-NNN no se pisen entre formatos. Los que ya
// estaban conservan su número; los nuevos siguen desde el más alto que haya.
const derivado = new Set(['video-largo', 'short', 'live'])
const usados = new Set()
let heredados = 0
let reformateados = 0
for (const it of items) {
  const antes = previo.get(it.id)
  if (!antes) continue
  if (antes.formato && !derivado.has(antes.formato) && antes.formato !== it.formato) {
    it.formato = antes.formato
    reformateados += 1
  }
  if (antes.n && !usados.has(antes.n)) {
    it.n = antes.n
    usados.add(antes.n)
    heredados += 1
  }
}
const siguiente = (pref) => {
  const alto = [...usados]
    .filter((n) => (pref ? n.startsWith('s') : !n.startsWith('s')))
    .reduce((max, n) => Math.max(max, Number(n.replace(/^s/, '')) || 0), 0)
  let i = alto
  return () => {
    i += 1
    return `${pref}${String(i).padStart(3, '0')}`
  }
}
const proxLargo = siguiente('')
const proxShort = siguiente('s')
let nuevos = 0
for (const it of items) {
  if (it.n) continue
  it.n = it.formato === 'short' ? proxShort() : proxLargo()
  usados.add(it.n)
  nuevos += 1
}
if (heredados) console.log(`· ${heredados} números heredados del catálogo anterior · ${nuevos} nuevos`)
if (reformateados) console.log(`· ${reformateados} formatos marcados a mano en el catálogo anterior, respetados`)

function escribirCsv() {
  const lineas = [cab.join(',')]
  for (const it of items) {
    const fecha = /^\d{8}$/.test(it.fecha) ? `${it.fecha.slice(0, 4)}-${it.fecha.slice(4, 6)}-${it.fecha.slice(6, 8)}` : 'SIN DATO'
    lineas.push(
      [
        it.n,
        `https://www.youtube.com/watch?v=${it.id}`,
        csvSeguro(it.titulo),
        'youtube',
        csvSeguro(cuenta),
        fecha,
        dato(it.views),
        dato(it.likes),
        dato(it.comments),
        it.duracion && it.duracion !== 'NA' ? Math.round(Number(it.duracion)) : 'SIN DATO',
        it.formato,
        'no',
      ].join(','),
    )
  }
  writeFileSync(csv, `${lineas.join('\n')}\n`)
}

escribirCsv()

const minutos = Math.round(items.reduce((s, i) => s + (Number(i.duracion) || 0), 0) / 60)
console.log(`\n✓ ${csv}`)
console.log(`  ${items.length} items · ~${minutos} min (~${(minutos / 60).toFixed(1)} h) · cuenta ${cuenta}`)

if (soloCatalogo) {
  console.log('\n--solo-catalogo: no bajo subtítulos.\n')
  process.exit(0)
}

// ---- Subtítulos + metadatos, de a uno y reanudable -------------------------
// El listado /videos de muchos canales viene sin views ni fecha (yt-dlp las deja
// en NA). La única forma de tenerlas es abrir cada video, y como igual hay que
// abrirlo para bajarle los subtítulos, se piden en la misma request con --print:
// cuesta cero pedidos extra. --solo-metadata hace sólo esta parte, para los
// canales que ya se cosecharon sin ellas.
const MARCA = 'META␟'
const CAMPOS = ['view_count', 'like_count', 'comment_count', 'upload_date', 'duration']

const yaEsta = (n, id) => readdirSync(subsDir).some((f) => f.startsWith(`${n}-${id}-`) && f.endsWith('.vtt'))

const pendientes = soloMetadata ? items.slice(0, max) : items.filter((it) => !yaEsta(it.n, it.id)).slice(0, max)
console.log(
  soloMetadata
    ? `\n· --solo-metadata: pido metadatos de ${pendientes.length}, no toco subtítulos\n`
    : `\n· subtítulos: ${items.length - pendientes.length} ya estaban, bajo ${pendientes.length}\n`,
)

const sinSubs = []
let bajados = 0
let conMeta = 0
for (const [i, it] of pendientes.entries()) {
  const nombre = `${it.n}-${it.id}-${slugify(it.titulo)}`
  const argv = ['--skip-download', '--no-warnings', '--ignore-errors', '--sleep-requests', '1', '--print', `${MARCA}${CAMPOS.map((c) => `%(${c})s`).join('␟')}`]
  if (!soloMetadata) {
    // `--print` implica `--simulate`, y en simulacro yt-dlp no escribe nada al
    // disco: pide los subtítulos, dice que los baja y no deja archivo. El
    // síntoma es idéntico a "este video no tiene subtítulos", así que sin
    // `--no-simulate` un canal entero se diagnostica mal. Va acá y no arriba
    // porque `--solo-metadata` sí quiere el simulacro: no toca los .vtt.
    argv.push('--no-simulate', '--write-auto-subs', '--sub-langs', 'es.*', '--sub-format', 'vtt', '-o', join(subsDir, `${nombre}.%(ext)s`))
  }
  argv.push(`https://www.youtube.com/watch?v=${it.id}`)
  const r = spawnSync('yt-dlp', argv, { encoding: 'utf8' })

  const linea = (r.stdout || '')
    .split('\n')
    .find((l) => l.startsWith(MARCA))
  if (linea) {
    const [views, likes, comments, fecha, duracion] = linea.slice(MARCA.length).split('␟')
    if (views !== 'NA') it.views = views
    if (likes !== 'NA') it.likes = likes
    if (comments !== 'NA') it.comments = comments
    if (fecha !== 'NA') it.fecha = fecha
    if (duracion !== 'NA') it.duracion = duracion
    conMeta += 1
  }

  if (soloMetadata) {
    // nada que contar acá: los .vtt ya estaban
  } else if (yaEsta(it.n, it.id)) {
    bajados += 1
  } else {
    sinSubs.push({ ...it, motivo: (r.stderr || '').trim().split('\n').pop() || 'sin subtítulos automáticos' })
  }

  if ((i + 1) % 25 === 0 || i === pendientes.length - 1) {
    escribirCsv() // guardo el avance: si se corta, no se pierden los metadatos
    process.stdout.write(
      soloMetadata
        ? `  ${i + 1}/${pendientes.length} — ${conMeta} con metadatos\n`
        : `  ${i + 1}/${pendientes.length} — ${bajados} ok, ${sinSubs.length} sin subs, ${conMeta} con metadatos\n`,
    )
  }
}

escribirCsv()

if (soloMetadata) {
  const conViews = items.filter((i) => i.views && i.views !== 'NA').length
  console.log(`\n✓ ${csv}\n  ${conViews}/${items.length} con views`)
  console.log(`\nSiguiente: node ${SCRIPTS}/subs-a-transcripcion.mjs ${slug}  (reescribe el frontmatter con las views)\n`)
  process.exit(0)
}

// El exit code de yt-dlp no sirve para saber si funcionó: contamos archivos.
const total = readdirSync(subsDir).filter((f) => f.endsWith('.vtt') && !f.endsWith('.es-orig.vtt')).length
console.log(`\n✓ ${total} videos con subtítulos en fuentes/subs-youtube/`)

if (sinSubs.length) {
  // "No bajó el subtítulo" y "el video no tiene subtítulo" son dos cosas
  // distintas y confundirlas cuesta caro: si YouTube te limita después de
  // cientos de pedidos seguidos, el motivo es un 429 y el arreglo es esperar y
  // volver a correr —es reanudable—, no mandar 16 videos a transcripción por
  // audio. Por eso se imprime el stderr real de yt-dlp.
  const limitados = sinSubs.filter((s) => /429|too many|rate|throttl|sign in to confirm/i.test(s.motivo)).length
  console.log(`\n⚠ ${sinSubs.length} sin subtítulo bajado:`)
  for (const s of sinSubs.slice(0, 15)) {
    console.log(`  ${s.n} ${s.id} — ${s.titulo?.slice(0, 55)}`)
    if (s.motivo) console.log(`      ${s.motivo.slice(0, 110)}`)
  }
  if (sinSubs.length > 15) console.log(`  … y ${sinSubs.length - 15} más`)
  if (limitados) {
    console.log(`\n  ${limitados} son límite de YouTube, no ausencia de subtítulo.`)
    console.log('  Esperá un rato y volvé a correr el mismo comando: sólo baja los que faltan.')
  } else {
    console.log('\n  Si de verdad no tienen subtítulo y son pocos, van por audio:')
    console.log(`  ${SCRIPTS}/bajar-audio.mjs`)
    console.log('  Antes de mandarlos a audio, confirmá con:')
    console.log('  yt-dlp --list-subs --skip-download <url>')
  }
}

console.log(`\nSiguiente: node ${SCRIPTS}/subs-a-transcripcion.mjs ${slug}\n`)
