# Frases — Ramón (Academia de Construcción)

> Archivo nuevo — no existía antes. Tics verbales, autodesignaciones y muletillas
> que se repiten en las **85 transcripciones** de `@lordconstruye`
> (`fuentes/transcripciones/`), con conteo real (grep normalizado sobre el
> texto plano de `## Transcript`, no impresión) y referencia a cada archivo
> donde aparecen.

## 0. Método declarado

- Conteo con `grep -io` sobre el contenido de `fuentes/transcripciones/*.md`
  (excluyendo `_PLANTILLA.md`), buscando la frase y variantes cercanas
  (mayúsculas, con/sin acento, con/sin artículo).
- Se cuenta **ocurrencias** (n de matches) y **archivos** (n de videos
  distintos donde aparece) por separado — una frase puede repetirse más de
  una vez dentro del mismo video.
- **Se excluye la caption como fuente de "frase dicha"**: varias captions
  repiten un eslogan de marketing ("construyendo con el diner0 del banc0")
  que no está en boca de Ramón en cámara — es texto escrito, no hablado. Las
  frases de esta lista están tomadas de `## Transcript`, no de `## Caption`.
  Si una frase existe en ambos lugares, se aclara.
- Regla de la casa: 3+ archivos para contar como "frase de firma" repetida.
  Con 1-2 queda anotada como variante suelta, no como tic confirmado.

---

## 1. "(Con) dinero del banco" — la frase de firma más repetida

**31 ocurrencias en 27 archivos.** Es la frase que más se repite en todo el
corpus — encaja con la propuesta central de la oferta (construir apalancado
con préstamo bancario, no con ahorro propio). Ejemplos:

- "...y los ricos entramos en Zilo punto com para comprar un terreno y
  construir una casa como este, que me costó 20000 dólares." — el resto del
  guion explica que ese capital viene de un préstamo bancario. (ig-049)
- Diálogos completos armados alrededor de esta frase: ver la familia "Aló,
  banco" en §5 (ig-003, ig-018, ig-038, ig-092).
- También aparece fuera de los diálogos actuados, como remate de un
  desglose de costos, aclarando que el grueso del capital fue prestado, no
  propio (ig-004, ig-021, ig-028, ig-046, entre otros).

## 2. "Consultoría / consulta 1 a 1" — el CTA de venta directa

**28 apariciones, 1 por archivo, en 28 archivos.** Es la frase de cierre de
funnel más consistente del corpus: cuando el reel no pide una palabra clave
de contenido gratis (CLASE, ESTUDIANTE — ver `hooks.md` §5), pide agendar
una consultoría uno a uno. Aparece siempre al final del guion, nunca en el
hook. Archivos donde se confirmó (muestra, no exhaustiva): ig-002, ig-008,
ig-014, ig-015, ig-021, ig-022, ig-029, ig-036, ig-043, ig-046, ig-053,
ig-057, ig-060, ig-061, ig-062, ig-065, ig-078, ig-080, ig-083, ig-088,
ig-090, ig-091, ig-094, ig-097, ig-098, ig-099, ig-100 (y uno más sin
identificar en el barrido).

## 3. "Desglose completo" / "el desglose es el siguiente" — tres variantes que NO son intercambiables

**14 apariciones en 7 archivos.** Ver el desarrollo completo de por qué estas
tres NO se pueden mezclar en `hooks.md` §3 y `historias.md` §2 — acá sólo el
conteo de frase:

- "...y aquí está el desglose completo" — mansión de 700k. (ig-004, ig-080)
- "...y el desglose es el siguiente" — casa de 276k. (ig-021, ig-062)
- "...y este es el desglose completo" — casa de 400k. (ig-046, ig-091,
  ig-028 con variante "Postuó esta casa..." probable error de ASR)

**Aviso repetido de `hooks.md`:** el brief de ClickUp fechado 2026-01-26
("08. Pagué 276.000 por construir esta casa y este es el desglose
completo.") mezcla la cifra de 276k con el remate de 700k/400k. No es lo que
Ramón dice en el video de 276k.

## 4. "De la A a la Z" — cierre de ciclo completo

**7 ocurrencias en 7 archivos**, todas como cierre de un argumento de
principio a fin (el proceso completo, la reinversión completa, el ciclo
completo). (ig-012, ig-016, ig-019, ig-038, ig-039, ig-044, ig-048)

## 5. "Aló, banco" — la llamada telefónica como personaje

**11 archivos** con la estructura de llamada telefónica actuada al banco
(ver patrón C en `hooks.md` y la historia completa en `historias.md` §14):
ig-002, ig-003, ig-014, ig-018, ig-038, ig-043, ig-048, ig-049, ig-065,
ig-092, ig-099.

**Ojo:** esta lista de 11 archivos es más amplia que los 3 hooks del patrón C
de `hooks.md` — incluye videos donde la llamada al banco aparece en el
cuerpo del guion, no como apertura.

## 6. "Empresario de (la) construcción" — la autodesignación

**7 ocurrencias en 5 archivos.** Se cuenta como una sola familia de frase con
y sin el artículo "la" — es la misma autodesignación:

- "empresario de la construcción" — con artículo. (ig-012 ×2, ig-039,
  ig-074 ×1 de sus 3 apariciones)
- "empresario de construcción" — sin artículo. (ig-016, ig-048, ig-074 ×2 de
  sus 3 apariciones)

`ig-074` (ranking de sueldos por oficio, ver `historias.md` §8) es el video
con más repeticiones de esta autodesignación: 3 veces en un solo reel.

## 7. Familia "no sé (manejar) un martillo / clavo / taladro" — credencial que se descarta

**4 archivos.** Ramón se resta a sí mismo la habilidad manual como forma de
reforzar que el negocio es de gestión/capital, no de mano de obra —
"disarming credential":

- "no tengo que agarrar ni un martillo ni un clavo" (ig-012)
- "¿te parece que yo sé manejar un martillo y un taladro?" (ig-018)
- "no requiere que sepas pegar un clavo o poner un techo, no" (ig-039)
- "ni siquiera sé clavar un clavo... es como jugar al ajedrez" (ig-052)

## 8. "En mi / de mi bolsillo" — cuánto capital propio puso

**17 ocurrencias en 15 archivos.** Frase que ancla la promesa de "poco
capital propio, el resto es del banco" — casi siempre acompañada de una
cifra chica (8.500, 20.000, 40.000). Se repite en la mayoría de los
desgloses de costos y en varias de las historias de §historias.md (madera vs.
concreto con 40k propios, fix-and-flip con 8.500, etc.).

## 9. "Sin usar (mi/tu/su) dinero" — variante del punto 8

**6 ocurrencias.** Menos frecuente que "bolsillo" pero misma función —
enfatiza apalancamiento sin capital propio. Aparece típicamente junto a
"dinero del banco" (§1) en el mismo tramo de guion, no como frase aislada.

## 10. Palabra de CTA pedida en comentarios — cruce con `hooks.md` §5

Referencia cruzada — el detalle de rendimiento por palabra (views/com1k) está
en `hooks.md` §5, acá sólo la distribución de cuántos reels piden cada una:

| Palabra | Reels que la piden |
|---|---|
| CONSTRUIR | 46 |
| CLASE | 14 |
| (sin palabra identificable en caption) | 8 |
| ESTUDIANTE | 7 |
| CONSULTA | 2 |
| TERRENO, BANCO, CASA, TERRENOS, NEGOCIO, RENTA, GUIA, PROGRAMA | 1 cada una |

Las de n=1 no tienen evidencia suficiente para decir si rinden mejor o peor
— quedan listadas para no perder el dato, no para sacar conclusión.

## SIN DATO

- Si "empresario de la construcción" y "empresario de construcción" son la
  misma frase para Ramón o si elige una u otra a propósito según contexto —
  se trataron como una sola familia por default (mismo significado), pero no
  hay forma de confirmar la intención sin preguntarle.
- Cobertura exacta de "consultoría 1 a 1": el barrido dio 28 apariciones en
  28 archivos (una por archivo), pero no se revisó dos veces cada uno de los
  28 — si algún archivo la repite 2 veces, el conteo de archivos (no de
  ocurrencias) seguiría siendo 28 igual.
