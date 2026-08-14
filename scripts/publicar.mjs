#!/usr/bin/env node
// Publica los cambios del repo para que le lleguen a quien ya lo tiene instalado.
//
//   node scripts/publicar.mjs "cerebro: fulanito"     # sube el patch (1.0.0 → 1.0.1)
//   node scripts/publicar.mjs --minor "cerebro nuevo" # sube el minor (1.0.1 → 1.1.0)
//
// Por qué existe: Claude Code cachea el plugin instalado POR VERSIÓN, en
// ~/.claude/plugins/cache/<marketplace>/<plugin>/<version>/. Si pusheás un
// cerebro nuevo sin tocar la versión, `/plugin update` contesta "already at the
// latest version" y el equipo se queda con el contenido viejo sin enterarse.
// Verificado a mano el 2026-08-13. Este script sube la versión en los dos
// manifiestos (tienen que coincidir), commitea y pushea.

import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const RAIZ = resolve(import.meta.dirname, '..')
const PLUGIN = join(RAIZ, '.claude-plugin/plugin.json')
const MARKET = join(RAIZ, '.claude-plugin/marketplace.json')

const args = process.argv.slice(2)
const minor = args.includes('--minor')
const mensaje = args.filter((a) => !a.startsWith('--')).join(' ')

if (!mensaje) {
  console.error('Uso: node scripts/publicar.mjs [--minor] "<mensaje de commit>"')
  process.exit(1)
}

const git = (...a) => execFileSync('git', a, { cwd: RAIZ, encoding: 'utf8' }).trim()

if (!git('status', '--porcelain')) {
  console.error('✗ No hay nada que publicar: el working tree está limpio.')
  process.exit(1)
}

const plugin = JSON.parse(readFileSync(PLUGIN, 'utf8'))
const market = JSON.parse(readFileSync(MARKET, 'utf8'))

const [may, men, par] = plugin.version.split('.').map(Number)
if ([may, men, par].some(Number.isNaN)) {
  console.error(`✗ Versión ilegible en plugin.json: "${plugin.version}". Se espera x.y.z`)
  process.exit(1)
}
const nueva = minor ? `${may}.${men + 1}.0` : `${may}.${men}.${par + 1}`

plugin.version = nueva
market.metadata.version = nueva
market.plugins.find((p) => p.name === plugin.name).version = nueva

writeFileSync(PLUGIN, `${JSON.stringify(plugin, null, 2)}\n`)
writeFileSync(MARKET, `${JSON.stringify(market, null, 2)}\n`)

git('add', '-A')
git('commit', '-m', `${mensaje}\n\nPublica ${nueva}.`)
git('push')

console.log(`\n✓ Publicado ${nueva}`)
console.log('  Para recibirlo, cada uno corre:  /plugin update cerebros@viralidad-cerebros')
console.log('  (y reinicia la sesión de Claude Code)\n')
