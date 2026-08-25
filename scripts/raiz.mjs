// Dónde está la carpeta `cerebros/` y cómo se invoca este script, resuelto en
// runtime.
//
// Los scripts viven en dos repos con layouts distintos: `cerebros/scripts/`
// dentro de viralidad-dashboard (la fuente) y `scripts/` en la raíz de
// viralidad-cerebros (el plugin que instala el equipo). Fijar la profundidad con
// `'..', '..'` obliga a editar cada archivo al copiarlo de un repo al otro, y
// eso es exactamente lo que hizo que las dos copias se separaran: en agosto 2026
// la del plugin estaba cuatro arreglos atrás sin que nadie se enterara.
//
// Con esto el archivo es **el mismo en los dos repos** y publicar es un `cp`.

import { existsSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const AQUI = dirname(fileURLToPath(import.meta.url))

function buscarCerebros(desde) {
  let dir = desde
  for (let i = 0; i < 5; i++) {
    const cand = join(dir, 'cerebros')
    if (existsSync(cand) && statSync(cand).isDirectory()) return cand
    // Estamos parados adentro de `cerebros/` mismo (layout del dashboard).
    if (dir.endsWith('/cerebros') && existsSync(join(dir, '..', 'cerebros'))) return dir
    const arriba = resolve(dir, '..')
    if (arriba === dir) break
    dir = arriba
  }
  console.error('✗ No encontré la carpeta cerebros/ arriba de este script.')
  process.exit(1)
}

/** `<repo>/cerebros` en los dos layouts. */
export const CEREBROS = buscarCerebros(AQUI)

/** La raíz del repo: `viralidad-dashboard/` o `viralidad-cerebros/`. */
export const REPO = resolve(CEREBROS, '..')

/** Cómo escribir la invocación desde donde está parado el usuario:
 *  `cerebros/scripts` en el dashboard, `scripts` en el plugin. Sirve para que
 *  los mensajes de uso digan el comando que de verdad funciona acá. */
export const SCRIPTS = relative(process.cwd(), AQUI) || '.'
