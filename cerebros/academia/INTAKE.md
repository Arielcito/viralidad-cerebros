# Intake de transcripciones — modo manual

> **Los reels de Instagram ya no son manuales.** Desde 2026-08-13 se cosechan y
> transcriben con dos comandos — ver `cerebros/INTAKE-INSTAGRAM.md`. Lo que sigue
> acá vale para lo que ese pipeline no cubre (TikTok, YouTube, VSL) y como
> respaldo manual.

El loop manual que sigue se escribió cuando transcribir un reel costaba pegarlo a
mano en el chat. Se conserva porque el catálogo, la numeración y el formato de
salida siguen siendo los mismos.

> **Este cerebro arranca un paso antes que el de Gocho.** Para Gocho el catálogo
> ya tenía las URLs de los reels y sus views, así que se podía bajar el audio
> directo. Acá **no hay ni una URL**: `content_video` tiene 0 filas, no tiene
> columna de URL, y la cuenta no está en el pipeline Apify (`handle` = 0 filas).
> Lo que hay es la **cola de producción de ClickUp**: 125 conceptos de guion con
> fecha y estado. Paso 1 existe sólo por eso.

## El loop

1. **Conseguir las URLs (bloqueante).** `fuentes/catalogo.csv` tiene los 125
   conceptos numerados y ordenados por fecha (más nuevo primero), con `url`,
   `views`, `likes`, `comments` en `SIN DATO`. Hay que llenar al menos `url` y
   `views` de los reels de `@lordconstruye`. Dos caminos:

   - **Apify** (lo que ya se usa para las otras cuentas): sumar el handle
     `@lordconstruye` a la tabla `handle` y correr la ingesta de IG. Ver
     `src/lib/avatars.ts:22-28` para el perfil y la memoria del proyecto sobre el
     scraper dual de IG (grid + reel).
   - **Browser**, a mano, cosechando el grid de
     https://www.instagram.com/lordconstruye/ y pegando URL + views por fila.

   El match entre reel y concepto se hace por fecha + texto del hook; muchos
   títulos del catálogo traen incluso el nombre del archivo original
   (`IMG_4525`, `IMG_0380.MOV`), que puede servir para cruzar con el Drive del
   cliente si lo comparte.

2. **Audio listo para arrastrar:** una vez que la columna `url` tenga URLs
   reales, corré esto y quedan los `.m4a` numerados en `fuentes/audio/`. Así no
   tenés que abrir Instagram ni buscar cada reel: los arrastrás al chat de a 10.

   ```bash
   node cerebros/scripts/bajar-audio.mjs academia --desde 1 --hasta 10
   ```

   Bajar el audio de un reel puntual **sí** funciona con yt-dlp (lo que no
   funciona es listar el perfil completo). Con `url = SIN DATO` el script no
   puede hacer nada, así que el paso 1 va primero.

3. **Transcribís** el lote en el chat.

4. **Me pegás el resultado** con el número adelante, así:

   ```
   #1 <transcript>
   #2 <transcript>
   ```

   Con eso yo genero un archivo por video en `fuentes/transcripciones/` con el
   frontmatter y las métricas ya cruzadas del catálogo. No hace falta que
   formatees nada.

5. Cada 10 videos actualizo el destilado (`voz.md`, `biblioteca/hooks.md`,
   `biblioteca/historias.md`). Se hace incremental a propósito: a los ~30 videos
   ya vas a poder pedir guiones decentes, sin esperar a tener todo.

## Convención de archivo

`fuentes/transcripciones/NNN-slug.md`, donde `NNN` es el número de la cola.
Plantilla en `_PLANTILLA.md`.

## Qué priorizar si el tiempo aprieta

Orden de valor para poder escribir ads de esta cuenta:

1. **Los 5 videos de `/ty-page`** — ahí está el argumento de venta completo en su
   boca, incluida la respuesta a "¿y si no me funciona?" (que hoy es la garantía
   `SIN DATO`). Están en https://academiadeconstruccion.com/ty-page pero los
   players son **ConverteAI/VTurb**
   (`scripts.converteai.net/703d36dd-bc4c-4a36-beb2-9efa3ee231cb/players/<id>/v4/player.js`),
   así que WebFetch no alcanza: hace falta browser o que el cliente pase los
   archivos. Uno solo de estos vale más que 20 reels.
2. **El video hero de `academiadeconstruccion.com`** — misma traba técnica.
3. **Top reels por views de `@lordconstruye`** — de ahí salen los hooks reales
   con evidencia de rendimiento. Requiere el paso 1.
4. **Los reels que corresponden a los moldes más repetidos del catálogo**
   (comparación binaria 18×, listicle 11×, "cuánto costó esta casa" 10×,
   desglose 8×) — para calcar estructura.
5. Los 17 testimonios de `/ty-page` — sirven para `audiencia.md` y prueba social,
   no para voz.

## Cola de contenido que se refresca sola

`fuentes/catalogo.csv` es una foto de la tabla `content_edit_task`. Esa tabla se
sincroniza **por cron diario** desde ClickUp
(`src/app/api/cron/clickup/route.ts`, lista fija `901112267825` en el workspace
"Usa Credito", `src/lib/clickup-source.ts:5-16`). Para refrescar el CSV se vuelve
a exportar de la DB — pero ojo: si ya llenaste `url`/`views` a mano, hay que
mergear, no sobrescribir.
