# Hooks — El Sensei

> Los primeros 3 segundos de cada video transcripto, **ordenados por views**.
> Esta es la pieza más rentable del cerebro: es la evidencia de qué abre bien en
> su audiencia concreta, no en la teoría.

Cada fila es un hook real. La columna `patrón` clasifica la estructura para poder
pedir "dame 5 hooks con el patrón que mejor funcionó".

| Views | Hook verbatim | Patrón | Cuenta | Video |
|---|---|---|---|---|
| _(pendiente de transcripciones)_ | | | | |

## Nota sobre el orden

En el catálogo (`fuentes/catalogo.csv`) las columnas `views`, `likes` y `comments`
están **vacías a propósito**: los CSVs de Notion no guardan métricas por video,
sólo por handle × semana. El número que se usó para ordenar la cola es **las
vistas del handle en la semana** en que ese video fue el más visto — un proxy
declarado, no las views del video.

Consecuencia: cuando se llene esta tabla, la columna `Views` se completa a mano
mirando el video (o desde la app), no copiando el catálogo. Un hook con views
inventadas es peor que un hook sin views.

## Patrones detectados

Se completa después de tener ~30 hooks. Un patrón sólo cuenta si aparece en 3+
videos con buen rendimiento; con menos es ruido.

_(pendiente)_

## Qué mirar cuando se transcriba

- Si el hook cambia según el ángulo del satélite (lujo vs libros vs mentalidad) o
  si es el mismo hook reciclado con B-roll distinto. Eso define si hay una voz o
  treinta.
- Si el clip es corte de un video largo (podcast, live) o pieza nativa. Se anota
  en el frontmatter (`formato`).
- Si el CTA está dicho en el audio o sólo en el caption: hoy el CTA de reel es
  SIN DATO (`oferta.md`), y este es el lugar donde va a aparecer.
