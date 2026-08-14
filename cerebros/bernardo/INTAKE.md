# Intake de transcripciones — modo manual

Las transcripciones se hacen a mano en el chat (decisión tomada: no consumir API).
Este archivo define el loop para que sea lo más rápido posible.

## ⚠️ Paso 0 — el catálogo está vacío y hay que llenarlo primero

Con Gocho el catálogo ya venía cosechado (193 reels con views). **Con Bernardo
no hay nada:** `fuentes/catalogo.csv` tiene sólo el encabezado.

Por qué: `content_video` tiene 0 filas para la cuenta `bernardo` y esa tabla ni
tiene columna de URL, así que el dashboard no guarda ni un link de sus videos.
Bernardo tampoco está en la ingesta de Apify (verificado en `import_log`: las
únicas fuentes con filas son `clickup_api` y `google_sheets`; hay además 2
corridas de `content_rollup_xlsx` del 12-jun-2026 con `rows_imported = 0`. Nada
de Apify, Notion, GHL ni ManyChat).

Sin catálogo, `bajar-audio.mjs` no tiene de dónde bajar. Hay tres caminos, en
orden de preferencia:

1. **Sumar Bernardo al pipeline de Apify** (el mismo que ya corre para Víctor:
   grid + reel scraper mergeados por `shortCode`). Es el único camino que trae
   URLs **con views**, que es lo que permite ordenar la cola por rendimiento.
2. **Pedirle al cliente la lista de sus mejores reels** — ver
   `fase-0-pedido.md`. Rápido, pero trae su opinión, no el dato.
3. **Copiar a mano las URLs de los top reels desde IG.** Último recurso.

Mientras no haya views, `biblioteca/hooks.md` no se puede ordenar por
rendimiento — y ese orden es la mitad del valor del archivo.

## El loop

1. **Cola:** `fuentes/catalogo.csv` tiene los videos numerados y ordenados por
   views. Se trabaja de arriba hacia abajo — los que más vieron son los que
   definen la voz.

2. **Audio listo para arrastrar:** corré esto y quedan los `.m4a` numerados en
   `fuentes/audio/`. Así no tenés que abrir Instagram ni buscar cada reel: los
   arrastrás al chat de a 10.

   ```bash
   node cerebros/scripts/bajar-audio.mjs bernardo --desde 1 --hasta 10
   ```

   Bajar el audio de un reel puntual **sí** funciona con yt-dlp (lo que no
   funciona es listar el perfil completo). Requiere estar logueado en Chrome.

3. **Transcribís** el lote en el chat.

4. **Me pegás el resultado** con el número adelante, así:

   ```
   #1 <transcript>
   #2 <transcript>
   ```

   Con eso yo genero un archivo por video en `fuentes/transcripciones/` con el
   frontmatter y las métricas ya cruzadas del catálogo. No hace falta que
   formatees nada.

5. Cada 10 videos actualizo el destilado (`voz.md`, `hooks.md`, `historias.md`).
   Se hace incremental a propósito: a los ~30 videos ya vas a poder pedir
   guiones decentes, sin esperar a tener todo.

## Convención de archivo

`fuentes/transcripciones/NNN-slug.md`, donde `NNN` es el número de la cola.
Plantilla en `_PLANTILLA.md`.

## Qué priorizar si el tiempo aprieta

Bernardo tiene dos cuentas con contenido distinto y una landing ya escrita, así
que el orden de valor es distinto al de Gocho:

1. **La clase gratuita** (grabación o guion). Es el equivalente al VSL: ahí está
   el argumento de venta completo, el nombre del programa pago y el precio. Uno
   solo vale más que 30 reels. Está gated tras el opt-in de GoHighLevel — hay que
   pedirla.
2. **Top 15 reels de `@juradonegocios`** — de ahí sale su voz y sus hooks al
   público masivo (filosofía, reglas, facts).
3. **Top 15 reels de `@bernardojuradofacts`** — de ahí sale el eje oratoria
   táctica, que es el puente natural hacia la oferta.
4. **Los 7 conceptos narrativos** listados al final de
   `biblioteca/historias.md` (Diógenes vs Alejandro Magno primero) — son las
   historias reusables.
5. Todo lo demás.

## Balance de cuentas en la cola

Hay que transcribir de **las dos** cuentas, no de una. Evidencia: la lista
"Bernardo" de ClickUp concentra filosofía y reglas de hombre, y la lista
"Secundaria" concentra técnica de oratoria pura (fuente: 52 filas de
`content_edit_task`, ver `biblioteca/hooks.md`). Si transcribís sólo la principal,
`voz.md` va a quedar creyendo que Bernardo es un cuentacitas y va a fallar
justamente en los guiones que empujan la clase.
