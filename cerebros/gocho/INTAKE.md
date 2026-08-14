# Intake de transcripciones

Actualizado 2026-07-29. **YouTube ya está resuelto y fue gratis.** Lo único que
queda manual son los reels de Instagram.

## Estado

| Fuente | Cantidad | Cómo | Estado |
|---|---|---|---|
| YouTube videos largos | 80 de 81 | subtítulos automáticos | ✅ listo |
| YouTube shorts | 26 de 29 | subtítulos automáticos | ✅ listo |
| YouTube lives (`/streams`) | 0 de 28 | subtítulos automáticos | pendiente, opcional |
| **Reels de Instagram** | **0 de 193** | **manual en el chat** | pendiente |
| VSL | 0 | pedido a Emilio | bloqueado |

**488.435 palabras** transcriptas. Ya alcanza para `voz.md`, `hooks.md` §3 y
`historias.md`.

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

## Instagram — sí es manual

Instagram no tiene subtítulos descargables, así que acá no hay atajo. Se
transcribe a mano en el chat (decisión tomada: no gastar API).

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
2. **Top 10 reels de IG por views.** Es lo único que da el **hook hablado con
   métrica real**. Todo lo de YouTube tiene 1.800 views o menos; el reel #1 tiene
   8,66M. Para ads, 10 reels de IG valen más que los 80 videos de YouTube.
3. **Los 5 testimonios en video** de `eltradingclub.com/homevideo`. Un caso con
   nombre y arco vale más que cualquier hook.
4. Los 28 lives de YouTube. Muchísimo volumen (los 25 ya transcriptos dan 412.420
   palabras) pero es registro de comunidad, no de venta. Sirve para nutrición.

## Convención de archivo

- IG manual: `fuentes/transcripciones/NNN-slug.md` (`NNN` = número de la cola).
- YouTube: `fuentes/transcripciones/yt-NNN-slug.md`, shorts `yt-sNNN-slug.md`.

Plantilla en `fuentes/transcripciones/_PLANTILLA.md`. El frontmatter de las de
YouTube lleva `fuente: subtitulos-automaticos` — eso marca que el texto es ASR y
que **una cifra o un nombre propio de ahí no se cita como literal sin verificar**.
