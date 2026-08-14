# Intake de Instagram — automático desde 2026-08-13

Hasta hoy los reels de IG se transcribían **a mano en el chat**: bajar los `.m4a`
con `bajar-audio.mjs`, arrastrarlos de a diez, pegar el resultado numerado. Era el
cuello de botella de todos los cerebros menos el de Gocho, y es la razón por la
que tres de ellos tenían `voz.md` vacío meses después de tener el catálogo.

Ya no. Dos comandos por cliente:

```bash
node scripts/cosechar-instagram.mjs <slug> <handle...> [--limit 200]
node scripts/transcribir-instagram.mjs <slug> [--top 100] [--concurrency 5]
```

Corridos así para los cinco cerebros:

```bash
node scripts/cosechar-instagram.mjs academia lordconstruye
node scripts/cosechar-instagram.mjs bernardo juradonegocios
node scripts/cosechar-instagram.mjs gocho    elgocho
node scripts/cosechar-instagram.mjs sensei   elsensei librosdelsensei --limit 60
node scripts/cosechar-instagram.mjs victor   herasmedia victorherasemprendedor --limit 120
```

## Por qué funciona ahora y no antes

La creencia registrada era "Instagram no tiene subtítulos, así que no hay atajo".
Es cierto a medias: subtítulos no hay, pero el problema real nunca fue ese, fue
que **`yt-dlp` contra `instagram.com/p/<code>/` choca contra el login wall** y
devuelve *"Instagram sent an empty media response"*.

El atajo es que el scraper de Apify que ya usamos para el panel (`APIFY_TOKEN`,
mismo actor que la ingesta de métricas) devuelve, además de views y caption, un
campo **`videoUrl`**: una URL firmada del CDN que se baja con `curl` **sin
sesión**. De ahí en adelante es una cadena trivial:

```
Apify (videoUrl) → curl → ffmpeg (mp3 64k) → Deepgram nova-2 es → .md
```

Esa URL **caduca en horas**, así que transcribir se corre enseguida después de
cosechar. Si aparecen errores 403/404 del CDN, no es un bug: caducó, hay que
recosechar. Por eso `instagram.json` está gitignoreado — commitear un link
firmado muerto no le sirve a nadie.

## Lo que cuesta

La corrida de los 5 cerebros — 900 reels cosechados, 429 transcriptos, ~84.000
palabras — costó unos pocos dólares entre Apify y Deepgram, y unos 20 minutos de
reloj corriendo los cinco en paralelo. La decisión vieja de "no gastar API" se
tomó cuando la alternativa era transcribir a mano en el chat; a este precio no se
sostiene.

## Lo que hay que saber al leer el resultado

- **Es ASR.** Los giros de lengua son confiables. Las cifras y los nombres
  propios **no**: Deepgram se come dígitos. Ninguna cifra dicha en cámara entra a
  un cerebro como dato; entra como "dijo algo así, verificar".
- **Las métricas sí son duras.** Views, likes y comments salen de la API, no del
  audio. Son las que ordenan `biblioteca/hooks.md`.
- **El hook del `.md` es un recorte automático** (la primera oración del ASR).
  Antes de citarlo como hook se verifica contra el transcript.
- **El scraper devuelve los N más recientes, no los más vistos.** El ranking por
  views es "top dentro de los últimos N cosechados", y así hay que citarlo.
- **Los reels mudos fallan y está bien.** Un video sin pista de audio hace fallar
  a ffmpeg con "Output file does not contain any stream". Salen contados aparte.
- **Es reanudable.** Un reel cuyo `.md` ya existe se saltea, así que volver a
  correr el transcriptor sólo reintenta lo que faltó.

## Handles: verificar antes de cosechar

`@senseielcoach` — el handle que figuraba como cuenta de El Sensei — **no existe
en Instagram**: es sólo TikTok y YouTube. Devolvió 0 reels. Lo mismo
`@habitosdelsensei`, `@senseialma` y `@frasesdelcalvito`. Una cosecha que
devuelve "1 ítem, 0 con video descargable" es eso: el handle no está en IG o es
privado, no un problema del script.

Para clientes con red de cuentas (Sensei), cosechar handle por handle y dejar que
el campo `cuenta` del frontmatter los distinga: la voz se mide **por handle**
antes de generalizar.
