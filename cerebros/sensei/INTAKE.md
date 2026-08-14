# Intake de transcripciones — modo manual

Las transcripciones se hacen a mano en el chat (decisión tomada: no consumir API).
Este archivo define el loop para que sea lo más rápido posible.

## El loop

1. **Cola:** `fuentes/catalogo.csv` tiene 879 videos numerados. Se trabaja de
   arriba hacia abajo, pero **leé la advertencia de orden** más abajo antes de
   empezar: el orden es un proxy, no las views del video.

2. **Audio listo para arrastrar:** corré esto y quedan los `.m4a` numerados en
   `fuentes/audio/`. Así no tenés que abrir Instagram ni buscar cada reel: los
   arrastrás al chat de a 10.

   ```bash
   node cerebros/scripts/bajar-audio.mjs sensei --desde 1 --hasta 10
   ```

   Bajar el audio de un reel puntual **sí** funciona con yt-dlp (lo que no
   funciona es listar el perfil completo). Requiere estar logueado en Chrome: el
   script toma las cookies de ahí.

   Ojo con los links de TikTok: 326 de los 879 son shortlinks `vm.tiktok.com` /
   `vt.tiktok.com` copiados a mano por las CMs. Algunos van a fallar o a
   redirigir a un video distinto del que se cargó en Notion. Los fallidos los
   lista el script al final; esos se bajan a mano.

3. **Transcribís** el lote en el chat.

4. **Me pegás el resultado** con el número adelante, así:

   ```
   #1 <transcript>
   #2 <transcript>
   ```

   Con eso yo genero un archivo por video en `fuentes/transcripciones/` con el
   frontmatter y los datos ya cruzados del catálogo. No hace falta que formatees
   nada.

5. Cada 10 videos actualizo el destilado (`voz.md`, `hooks.md`, `historias.md`).
   Se hace incremental a propósito: a los ~30 videos ya vas a poder pedir guiones
   decentes, sin esperar a tener todo.

## Convención de archivo

`fuentes/transcripciones/NNN-slug.md`, donde `NNN` es el número de la cola.
Plantilla en `_PLANTILLA.md`.

## Advertencia sobre el orden de la cola

El catálogo **no tiene views por video** y las columnas `views`, `likes` y
`comments` están vacías a propósito. Los CSVs de Notion sólo guardan métricas por
handle × semana (`src/lib/importers/notion-csv-importer.ts:25-32`), no por post.

Lo que se usó para ordenar `n` es **las vistas del handle en la semana** en la que
ese video fue "Publicación más Vista". Es un proxy declarado: te dice que ese
video salió en una semana buena de ese handle, no que el video hizo esos números.

Al llenar `hooks.md`, la columna de views se completa mirando el video, nunca
copiando del catálogo.

## Qué priorizar si el tiempo aprieta

Este cliente tiene 879 links y **cero** transcripciones. Transcribir todo a mano
no va a pasar. Orden de valor real:

1. **El VSL de `go.institutodeltrading.com/4ca4eec2`** — devuelve 403 a WebFetch,
   así que hay que abrirlo a mano y grabar la pantalla. Es donde está el argumento
   de venta completo: promesa, objeciones, precio, garantía. Uno solo vale más que
   50 clips.
2. **Muestra cruzada de la red, no top-N a ciegas.** 5 videos de cada uno de los
   handles más cargados — `@habitosdelsensei` (53 links), `@senseialma` (52),
   `@librosdelsensei` (51), `@relojesdelsensei` (37), `@carrosdelsensei` (35),
   `@senseielcoach` (34). Con eso se responde la pregunta que bloquea todo:
   **¿es una voz o son treinta?** Si es una sola persona en cámara, el cerebro es
   uno; si no, hay que partirlo.
3. **Un video de `@elsensei` y uno de `@senseiprofe`** para resolver si son la
   misma persona (ver `voz.md`). Ninguno de los dos está en el catálogo: los links
   del CSV son todos de handles satélite, así que estos dos hay que traerlos a
   mano.
4. Todo lo demás.

## Hueco de fuentes: 2026 no tiene links

Dato duro: en las 329 filas fechadas en 2026 de los tres CSVs (181 IG, 106 TT, 42
YT), la columna "Publicación más Vista" **no trae URL** — trae un número (las
vistas del top post). El cambio de convención es visible en el archivo: hasta
diciembre 2025 se cargaba el link, desde enero 2026 se carga la cifra.

Consecuencia: **los 879 links del catálogo son todos de agosto a diciembre de
2025.** Del contenido de 2026 no hay ni una URL en el repo. Si el material reciente
importa (y para hooks importa), hay que pedirle a las CMs que vuelvan a cargar el
link, o cosecharlo desde los perfiles.
