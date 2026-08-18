# Intake de transcripciones — Víctor Heras

> A diferencia de Bernardo o Gocho, **Víctor no tuvo loop manual.** Su
> cosecha se hizo directo con el pipeline automático descrito en
> `cerebros/INTAKE-INSTAGRAM.md` (vivo desde 2026-08-13). Este archivo
> documenta lo que ya se corrió y cómo seguir, no un método alternativo.

## Lo que ya se corrió

```bash
node cerebros/scripts/cosechar-instagram.mjs victor herasmedia victorherasemprendedor --limit 120
```

Resultado: **240 reels cosechados** en `fuentes/catalogo-instagram.csv`
(2022-09-08 → 2026-08-12), de dos cuentas: `@herasmedia` y
`@victorherasemprendedor`. Después:

```bash
node cerebros/scripts/transcribir-instagram.mjs victor --top 80
```

(o equivalente) — **80 transcripciones** en `fuentes/transcripciones/`,
17.705 palabras, las de más views del catálogo. Quedan **160 reels
cosechados pero sin transcribir**.

⚠️ **`@victorherasreels` no está en el comando de cosecha de arriba**, pero
existe **1 transcripción de esa cuenta** (`ig-010`, 2026-04-15, 176
palabras) en el corpus actual — probablemente de una corrida anterior o de
una prueba puntual. Si se quiere ampliar el registro de esa cuenta, hay que
sumar el handle explícito:

```bash
node cerebros/scripts/cosechar-instagram.mjs victor victorherasreels --limit 60
```

## Cómo seguir — los 160 que faltan

```bash
node cerebros/scripts/transcribir-instagram.mjs victor --top 200 --concurrency 5
```

(el script salta los `.md` que ya existen — es reanudable, no vuelve a
gastar Deepgram en los 80 ya hechos). Al terminar, actualizar
`voz.md`/`biblioteca/hooks.md`/`biblioteca/frases.md`/`biblioteca/historias.md`
con los conteos recalculados sobre la base nueva — **todo grep de este
cerebro está escrito para correr de nuevo**, no hay ningún número que no se
pueda reproducir.

## Qué priorizar si el tiempo aprieta

1. **Los 60 reels de `@victorherasemprendedor` sin transcribir todavía.**
   Sólo 32 de esa cuenta están en el corpus actual (22 VHE-A + 10 VHE-B);
   el catálogo tiene muchos más entre esas fechas. Ampliar VHE-A/VHE-B es
   lo que más ayudaría a `biblioteca/frases.md` §1 (más muestra para el
   cierre canónico) y a resolver si "PostMe" sigue vigente en algún reel
   más reciente de esa cuenta.
2. **Cualquier reel nuevo de `@victorherasreels`.** Hoy hay 1 sola
   transcripción — insuficiente para saber si ese registro
   místico-motivacional es un formato reusable o un experimento aislado.
3. **Reels de `@herasmedia` fuera del top-47 actual**, sobre todo si
   alguno menciona precio, el máster o la agencia — son los huecos que
   bloquean `oferta.md` completo (ver `fase-0-pedido.md` #1-5).
4. Todo lo demás, por views descendente — es como se armó la base actual.

## Formato de archivo (ya generado automáticamente, no tocar a mano)

`fuentes/transcripciones/ig-NNN-slug.md`, con frontmatter (`n, url,
plataforma, cuenta, fecha, views, likes, comments, duracion_seg, formato,
fuente, palabras, tema, vende`) y cuerpo `## Caption` / `## Hook (0-3s)` /
`## Transcript` / `## Notas` / `## Cifras dichas`. Los campos `tema` y
`vende` están en `SIN DATO` en los 80 archivos — nadie los curó todavía; no
inventarlos al leerlos, y si se decide llenarlos a mano, documentar el
criterio en este archivo.

## Lo que este pipeline no trae — sigue siendo manual

- **Comentarios/DMs reales.** El scraper trae el video y su caption, no la
  conversación posterior — `audiencia.md` sigue sin una sola palabra de un
  lead real.
- **Contenido de formato largo.** El pipeline cosecha reels; si existe una
  clase, live o VSL en otro formato, hay que pedirlo aparte
  (`fase-0-pedido.md` #12).
- **Videos mudos.** Fallan en `ffmpeg` y se cuentan aparte — no es un bug
  del script, es que no tienen pista de audio.
