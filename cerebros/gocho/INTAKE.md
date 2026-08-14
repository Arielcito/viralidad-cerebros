# Intake de transcripciones

Actualizado 2026-08-13. **YouTube y ahora también Instagram están resueltos.**
Lo que queda manual es el VSL.

## Estado

| Fuente | Cantidad | Cómo | Estado |
|---|---|---|---|
| YouTube videos largos | 80 de 81 | subtítulos automáticos | ✅ listo |
| YouTube shorts | 26 de 29 | subtítulos automáticos | ✅ listo |
| YouTube lives (`/streams`) | 0 de 28 | subtítulos automáticos | pendiente, opcional |
| **Reels de Instagram** | **90 de 200 cosechados** | **Apify + Deepgram** | ✅ listo |
| VSL | 0 | pedido a Emilio | bloqueado |

**506.545 palabras** transcriptas (488.435 de YouTube + 18.110 de reels de IG).
Alcanza para `voz.md` con los tres registros, `hooks.md` §3 y `historias.md`.

## YouTube — automático, no requiere trabajo manual

YouTube genera subtítulos automáticos para todo el canal y `yt-dlp` los baja sin
descargar video. Salen **con puntuación** y son sorprendentemente usables.

```bash
# 1. Bajar los .vtt (una tab por vez: /videos, /shorts, /streams)
yt-dlp --skip-download --write-auto-subs --sub-langs "es" --sub-format vtt \
  --no-warnings --ignore-errors --sleep-requests 0.5 \
  -o "cerebros/gocho/fuentes/subs-youtube/%(autonumber)03d-%(id)s-%(title).60B.%(ext)s" \
  "https://www.youtube.com/@Gocholive/videos"

# 2. Convertirlos a transcripciones del cerebro
node cerebros/scripts/subs-a-transcripcion.mjs gocho
```

Tres cosas que cuestan una hora si no se saben:

- **El handle es `@Gocholive`, con G mayúscula.** Con `@gocholive` yt-dlp devuelve
  cero resultados y **ningún error**.
- Para los shorts, cambiar el prefijo del `-o` a `s%(autonumber)03d-` para no
  pisar la numeración de los largos. El conversor ya entiende ese prefijo.
- yt-dlp baja el mismo subtítulo dos veces (`.es.vtt` y `.es-orig.vtt`), idénticos
  byte a byte. El conversor descarta uno.

Si se corta la red a mitad de camino, yt-dlp sigue "terminando bien" con exit 0 y
0 archivos. **Verificar siempre contando archivos, no leyendo el exit code.**

## Instagram — ya no es manual

**Desde 2026-08-13 hay atajo.** Los reels se cosechan y transcriben con dos
comandos; el detalle de por qué funciona está en `cerebros/INTAKE-INSTAGRAM.md`.

```bash
node cerebros/scripts/cosechar-instagram.mjs gocho elgocho
node cerebros/scripts/transcribir-instagram.mjs gocho --top 100
```

Quedaron **90 reels transcriptos** (18.110 palabras) en
`fuentes/transcripciones/ig-*.md`, con views/likes/comments reales en el
frontmatter. Es la fuente de `biblioteca/hooks.md` §"Hooks de IG con métrica",
que hasta ahora figuraba en 0.

El loop manual que sigue queda como respaldo: sirve para un reel puntual, para
el VSL, o si el CDN de Instagram deja de dar `videoUrl`.

1. **Cola:** `fuentes/catalogo.csv`, 193 reels ordenados por views. De arriba
   hacia abajo — los que más vieron son los que definen el hook.

2. **Audio listo para arrastrar:**

   ```bash
   node cerebros/scripts/bajar-audio.mjs gocho --desde 1 --hasta 10
   ```

   Quedan los `.m4a` numerados en `fuentes/audio/`. Se arrastran al chat de a 10.
   Bajar un reel puntual con yt-dlp **sí** funciona; lo que no funciona es listar
   el perfil.

3. **Transcribís** el lote en el chat.

4. **Me lo pegás con el número adelante:**

   ```
   #1 <transcript>
   #2 <transcript>
   ```

   Yo genero un archivo por video con el frontmatter y las métricas ya cruzadas.
   No hace falta formatear nada.

5. Cada 10 actualizo el destilado.

## Qué priorizar

Para la entrega del viernes (ideas de ads + guiones + planos):

1. **El VSL.** Sigue siendo lo de mayor valor por unidad de esfuerzo: 40 minutos
   de él vendiendo seguido. Está pedido en `fase-0-pedido.md` #5.
2. ~~**Top 10 reels de IG por views.**~~ ✅ Hecho: 90 reels, el #1 con 9,08M
   views. Era lo único que daba el **hook hablado con métrica real** — todo lo de
   YouTube tiene 1.800 views o menos.
3. **Los 5 testimonios en video** de `eltradingclub.com/homevideo`. Un caso con
   nombre y arco vale más que cualquier hook.
4. Los 28 lives de YouTube. Muchísimo volumen (los 25 ya transcriptos dan 412.420
   palabras) pero es registro de comunidad, no de venta. Sirve para nutrición.

## Convención de archivo

- IG automático: `fuentes/transcripciones/ig-NNN-slug.md` (`NNN` = puesto por
  views, `fuente: deepgram-nova-2`).
- IG manual (respaldo): `fuentes/transcripciones/NNN-slug.md`.
- YouTube: `fuentes/transcripciones/yt-NNN-slug.md`, shorts `yt-sNNN-slug.md`.

Plantilla en `fuentes/transcripciones/_PLANTILLA.md`. El frontmatter de las de
YouTube lleva `fuente: subtitulos-automaticos` — eso marca que el texto es ASR y
que **una cifra o un nombre propio de ahí no se cita como literal sin verificar**.
