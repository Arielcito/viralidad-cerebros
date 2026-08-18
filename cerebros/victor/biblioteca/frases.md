# Frases — Víctor Heras

> Líneas verbatim pegables sin retocar el texto. Distinto de `hooks.md` (los
> primeros 3s, por estructura y métrica) y de `historias.md` (relatos
> completos). Acá sólo la frase suelta.
>
> Regla, la misma que en `voz.md`: **no mezclar los cuatro sub-corpus**. Una
> frase de VHE-A (2022-2023, `@victorherasemprendedor` era PostMe) no es lo
> mismo que una de HM (2025-2026, `@herasmedia`) aunque las diga la misma
> persona — son dos productos y dos públicos distintos.

Base: los mismos **80 reels / 17.705 palabras** de `voz.md` y `hooks.md`.
Cada conteo de abajo se corrió de nuevo para este archivo — comando al lado,
corrible desde `cerebros/victor/fuentes/transcripciones/`.

---

## 1 — El cierre canónico de VHE-A (2022-2023)

Es la firma más repetible de todo el corpus, y es exclusiva de
`@victorherasemprendedor` era PostMe. **17 de los 22 reels de VHE-A** cierran
con esta fórmula de tres partes: identidad + invitación + firma de marca.

```
grep -lI "vete por la sombra\|vete por las sombras\|mete por la sombra" ig-*.md | wc -l
```

**La versión completa, verbatim** (ig-043):

> "Soy Víctor Heras, CEO de la agencia PostMi, la agencia de marca personal
> más grande de España, y si quieres aprender más sobre marca personal y
> redes sociales, sígueme por aquí y, como siempre, vete por la sombra."
> (`ig-043`)

**El molde tiene tres piezas, y cada una varía por separado:**

| Pieza | Variantes encontradas | Reels |
|---|---|---|
| Identidad | "Soy Víctor Heras, CEO de la agencia PostMi" / "…Posmi" / "…PostMean" / "…Teo de la agencia PostMi" / "…feo de la agencia Cosme" | `ig-043`, `ig-069`, `ig-080`, `ig-087`, `ig-100` |
| Invitación | "sígueme por aquí" (más frecuente) / "sígueme por Instagram" | — |
| Firma | "vete por la sombra" / "mete por la sombra" (`ig-069`) | — |

⚠️ **El nombre de la agencia no es citable tal cual.** Cinco reels dan cinco
grafías distintas del mismo nombre (PostMi ×4, Posmi, PostMean, y una vez
"Cosme" en vez de "CEO... PostMe"):

```
grep -ihoE "(CEO|Teo|feo) de la agencia [A-Za-zÁÉÍÓÚñ]+" ig-*.md | sort | uniq -c
#   1 CEO de la agencia Posmi
#   1 CEO de la agencia PostMean
#   4 CEO de la agencia PostMi
#   1 feo de la agencia Cosme
#   1 Teo de la agencia PostMi
```

Es casi seguro **"PostMe"** (así lo escribe `voz.md` en su título de agencia,
y "PostMean"/"Cosme" son ASR sobre esa misma palabra), pero **no hay una sola
instancia limpia** en 17 repeticiones. Sigue `SIN DATO` hasta que se confirme
con el cliente o con una fuente escrita (ver `oferta.md` y
`fase-0-pedido.md`).

**Por qué importa hoy:** VHE-A nunca pide comentario (`voz.md`, `hooks.md`
§6 — "comenta/coméntame" aparece 0 veces en los 22 reels). Esta firma es
**el CTA completo de esa cuenta**: no vende nada, sólo pide seguir. Sirve
para brand, no para llenar el bot de ManyChat — ver `hooks.md` §6.

---

## 2 — El molde de pregunta-y-veredicto de HM: "no es arte, no es suerte, es X"

**Sólo 2 reels**, así que no es firma en el sentido de repetición masiva —
es un molde que la cuenta reusó una vez, con el mismo armazón y contenido
distinto. Vale la pena tenerlo porque es el único caso en HM de una frase
completa repetida casi palabra por palabra:

```
grep -n "no es arte, no es suerte" ig-*.md
```

> "¿Cómo coño hace la gente para hacer vídeos virales? Así, entendiendo que
> hacer vídeos virales no es arte, no es suerte, es estructura." (`ig-036`)

> "¿Cómo coño hace la gente para hacer guiones virales? Así, entendiendo que
> hacer guiones virales no es arte, no es suerte, es usar el método FR."
> (`ig-062`)

Molde para escribir una variante nueva: **"¿Cómo coño hace la gente para
hacer [X] virales? Así, entendiendo que hacer [X] virales no es arte, no es
suerte, es [respuesta de una palabra o sigla]."** — el patrón es
pregunta-cruda + negación doble + veredicto seco, el mismo dispositivo que
`hooks.md` §3k documenta como el formato de mayor alcance de la cuenta
("Repostear tus reels en historias. Baja las visitas.").

---

## 3 — El pivote "simplemente comenta / simplemente poniendo"

La bisagra verbal entre el cuerpo del reel y el CTA. Aparece con esta
redacción exacta en **11 reels**, todos HM salvo `ig-001` (VHE-B):

```
grep -icE "simplemente (comenta|poniendo)" ig-*.md | grep -v ':0'
```

`ig-001`, `ig-020`, `ig-022`, `ig-029`, `ig-033`, `ig-071`, `ig-075` (×2),
`ig-079`, `ig-085`, `ig-091`, `ig-098`.

> "¿Y cómo puede aprender la gente de este vídeo hacerlo? Simplemente
> poniendo reto en los comentarios de este vídeo." (`ig-020`)

> "¿Y cómo puedo ver yo? Simplemente comenta sistema en este vídeo y te lo
> mando." (`ig-079`)

No es información nueva frente a `hooks.md` §2 (que ya mide el CTA por
familia de keyword y por com/1k) — está acá porque es la frase literal que
conecta la pregunta retórica con el pedido de comentario, y **sirve para
pegar tal cual** en un guion nuevo. Para elegir qué keyword poner después de
"simplemente comenta", la tabla que manda sigue siendo la de `hooks.md` §2,
no ésta.

---

## 4 — Frases memorables de un solo uso — **no son frase firma**

Cada una aparece **una vez en 80 reels**. Se citan porque son las mejores
líneas sueltas del corpus (varias son además los hooks de mejor rendimiento
de `hooks.md`), pero repetirlas como si fueran su firma inventaría un patrón
que no existe. Sirven para robar el tono, no para asumir "así habla
siempre".

```
grep -c "Aquí 200000 euros y me quiero comprar un coche" ig-*.md | grep -v ':0'
grep -c "El otro día pagué 18 euros por un sándwich" ig-*.md | grep -v ':0'
grep -c "Cómodos, finísimos y extragrandes" ig-*.md | grep -v ':0'
grep -c "no tenía ningún futuro" ig-*.md | grep -v ':0'
```
Las cuatro dan `1`.

> "Aquí 200.000 euros y me quiero comprar un coche. ¿Traes 200.000 ahí? Sí."
> (`ig-001` — VHE-B, 7,26 M views, el reel más visto del cerebro entero)

> "El otro día pagué 18 euros por un sándwich, y no te rías tanto porque tú
> habrías hecho exactamente lo mismo que yo." (`ig-080` — VHE-A, la anécdota
> del *App Shelling*, ver `historias.md` §1)

> "Esta caja de condones. Cómodos, finísimos y extragrandes." (`ig-081` —
> VHE-A, hook de objeto-en-la-mano)

> "Y sé que la mejor forma ahora de celebrar dónde he llegado no es yéndome a
> Dubái a llamar el dinero en fiestas, yates o un reloj de 20.000 euros, sino
> dándole todo a la gente que siempre estuvo ahí en el camino difícil."
> (`ig-016` — VHE-B/lifestyle, el Rolex para la madre, ver `historias.md` §4)

> "El 1º mejor momento fue la 1º vez que pensaste en esto, y el 2º es al
> acabar de ver este vídeo." (`ig-063` — VHE-A, cierre de la parábola del
> avión de Sully, ver `historias.md` §1)

---

## Lo que falta — `SIN DATO`

- **Frases del registro largo.** Los 80 son reels de 21-166s. No hay una
  clase, un live ni un VSL transcripto — una muletilla que sólo aparece en
  formato largo no puede aparecer acá porque no hay ningún formato largo en
  el corpus (mismo límite que documenta `voz.md` §"Lo que falta" #8).
- **Frases de `@victorherasreels`.** 1 sola transcripción (`ig-010`, 176
  palabras) — insuficiente para saber si tiene frases firma propias del
  registro místico-motivacional, o si `ig-010` es un experimento aislado.
- **El nombre real de la agencia (PostMe vs. PostMi vs. otra grafía).**
  Ninguna de las 17 repeticiones del cierre de VHE-A lo dice limpio — ver §1.
