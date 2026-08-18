# Cómo se prueba un cerebro

La regla de oro del repo — **nada se inventa** — hasta acá era una promesa de
quien escribía. El problema aparece después: el cliente lee un guion, dice "yo no
hablo así", y no hay con qué contestarle. O peor, el cerebro afirma que dice algo
que nunca dijo y nadie se entera hasta que sale al aire.

Un cerebro está probado cuando **cada frase que le atribuye al cliente se puede
abrir y escuchar**. Eso se chequea solo:

```bash
node scripts/verificar-citas.mjs            # los cinco
node scripts/verificar-citas.mjs gocho      # uno
node scripts/verificar-citas.mjs gocho --cobertura 20
node scripts/verificar-citas.mjs --json     # para pegarlo en un reporte
```

Devuelve exit 1 si hay errores, así que sirve como test en cualquier lado.

## Qué chequea

Recorre lo curado (`voz.md`, `oferta.md`, `audiencia.md`, `biblioteca/`,
`salidas/`, `piezas/`) y deja `fuentes/` afuera a propósito: las transcripciones
son la evidencia, no la afirmación.

| | Qué significa | Por qué importa |
|---|---|---|
| ✗ `cita ig-012, que no existe` | referencia rota | El equipo abre el link y no hay nada. Es lo que hace que dejen de confiar en las refs. |
| ✗ `atribuida a yt-021; está en yt-020` | verbatim mal atribuido | La frase es real, el video es otro. Nadie lo nota hasta que alguien va a buscarla. |
| ✗ `no aparece en yt-018 (lo más parecido: yt-006 al 43%)` | verbatim sin respaldo | O se citó de memoria, o el video que lo respalda no está transcripto. Las dos cosas hay que resolverlas. |
| ⚠ `sin ref; es de ig-084` | falta la referencia, pero la encontró | Arreglo de 5 segundos: pegarle la ref. |
| ⚠ `retocada sobre yt-s006 (73% literal)` | se limpió el ASR | Legítimo, pero conviene saber cuánto se editó antes de venderlo como textual. |
| ⚠ `sin fuente citable` | comillas sin origen | Sólo se reporta en `voz.md`, `biblioteca/` y las piezas, donde el verbatim es el punto. |

Más la **cobertura**: cuántas transcripciones se usan al menos una vez, y cuáles
de las más vistas quedaron sin mirar. Un `voz.md` escrito sobre 12 de 196 videos
no está mal necesariamente, pero si el reel de 9M de views está en esa lista, la
voz se escribió sin mirar lo que más funcionó.

## Cómo compara

No exige igualdad byte a byte: compara por 3-gramas y acepta desde 80% de
coincidencia. Una cita curada casi nunca es idéntica al ASR — se le sacan los
`[música]`, los tartamudeos, un "eh". Exigir literalidad marcaría como inventado
todo lo que alguien limpió a mano, que es justo lo que queremos que haga.

Entre 55% y 80% no es error: es la advertencia `retocada`, con el porcentaje.

## Qué NO chequea

- **Que la afirmación sobre la voz sea representativa.** Que una frase exista no
  la vuelve una muletilla. Eso se resuelve contando: `grep -oih "usted" | wc -l`
  normalizado por cada 10.000 palabras, y el número va escrito en `voz.md`. Un
  rasgo sin frecuencia es una impresión, no un dato.
- **Que las cifras sean ciertas.** El ASR se come dígitos. Que "9 años" aparezca
  en la transcripción no prueba que sean 9 — prueba que Deepgram entendió 9.
  Los montos, años y nombres propios salen de `oferta.md` o se preguntan.
- **Que la pieza sea buena.** Es un test de trazabilidad, no de criterio.

## La prueba de aceptación, antes de entregarle un cerebro a alguien

Cinco minutos, y es la que contesta "¿esto realmente sabe hablar como él?":

1. Pedile tres piezas de ángulos distintos.
2. Por cada verbatim, pedile **de qué video sale**. Tiene que contestar con un
   `ig-NNN` / `yt-NNN`, no con "de su estilo general".
3. Abrí una al azar en `fuentes/transcripciones/` y leela. Si no está, el cerebro
   está alucinando y hay que frenar ahí.
4. Guardá las piezas en `salidas/` y corré el validador: chequea las piezas igual
   que el resto.

## Qué encontró la primera corrida

Nueve verbatim reales mandados al video equivocado, todos en Gocho — el cerebro
más completo y el único que ya había producido piezas. El más caro, la frase de
cierre:

> "Si tú quieres que yo sea tu mentor y te guíe paso a paso para que no cometas
> los errores que yo cometí en el pasado, rellena el formulario aquí abajo."

citada como `yt-021` en `voz.md` y en **cuatro lugares** de la entrega de ads del
29 de julio. Está en `yt-020`. Los otros ocho, iguales: la frase es real, la
pieza es usable, la referencia mandaba a leer otra cosa. Nadie los iba a notar
sin esto. Ya están corregidos, y con ellos el corpus queda en **0 errores**.

En Academia el error fue de otro tipo y también vale registrarlo: la tabla que
audita el brief contra el audio daba por "casi textual" una frase
—"Pagué 276.000 por construir esta casa y este es el desglose completo"— que él
nunca dijo así. El molde es de `ig-004` (700.000, una mansión) y la casa de
276.000 la desglosa con otras palabras (`ig-021`, `ig-062`). El brief mezclaba
las dos y la tabla lo estaba avalando.

Quedan 21 advertencias, y son todas de las dos clases benignas: media docena de
verbatim retocados sobre el ASR con el porcentaje a la vista, y las líneas de
encabezado de tres archivos, que el script lee como cita porque van
entrecomilladas.

Una advertencia nueva salió de ahí y vale la pena: **el caption también es
fuente**. `audiencia.md` cita "Comenta CLASE 👇🏽 si estás en Estados Unidos…", que
Gocho nunca dijo en cámara — está escrito en el post. El validador lo mandaba a
buscar a las transcripciones y lo marcaba inventado, que es el peor tipo de falso
positivo: empuja a borrar una cita verdadera. Ahora indexa los captions de
`fuentes/*.csv` y, si la frase está ahí y no en el audio, avisa
`es caption, no dicho en cámara`. Busca primero en las transcripciones, así que
una atribución mal puesta sigue siendo error.
