# Frases — Bernardo Jurado

> Líneas verbatim que se pueden pegar en un ad, un caption o un email **sin
> retocar el texto**. Distinto de `hooks.md` (los primeros 3s, por estructura)
> y de `historias.md` (relatos completos). Acá sólo importa la frase suelta.
>
> Regla: una frase que aparece **una sola vez** en el corpus no es una frase
> firma — es sólo una frase, y así se marca abajo. Firma = se repite.

Base: los mismos **88 reels / 14.708 palabras** de `voz.md`. Cada conteo de
abajo se corrió de nuevo para este archivo — comando incluido al lado de cada
uno, corrible desde `cerebros/bernardo/fuentes/transcripciones/`.

---

## 1 — Las frases firma: las que más repite

Las cinco líneas que arman el cierre canónico (ver `voz.md` §"Registro B — el
cierre" para el desglose completo por molde A-E). Acá van como lo que son:
texto pegable, con el conteo verificado de nuevo.

| Frase | Veces | Comando |
|---|---|---|
| "Yo soy Bernardo Jurado" | **56** | `grep -o "Yo soy Bernardo Jurado" ig-*.md \| wc -l` |
| "Mi nombre es Bernardo Jurado" / "mi nombre es Bernardo Jurado" | **30** | `grep -oi "mi nombre es Bernardo Jurado" ig-*.md \| wc -l` |
| "comenta [aquí] [la palabra] jurado" (variantes) | **50** | `grep -oiE "comenta( aquí\| aqui\| aca\| acá)? (la palabra )?jurado" ig-*.md \| wc -l` |
| "…estarás condenado a ser **ignorado**" | **46** | `grep -o "condenado a ser ignorado" ig-*.md \| wc -l` |
| "…estarás condenado a ser **olvidado**" | **9** | `grep -o "condenado a ser olvidado" ig-*.md \| wc -l` |

Los cinco conteos coinciden con `voz.md` — se re-corrieron acá para no confiar
en el número transcripto, sólo en el grep.

**Las líneas pegables, una por una, con su ref:**

> "Yo soy Bernardo Jurado, y quiero ayudarte a transformar tu vida a través de
> la comunicación." (`ig-002`)

> "Comenta aquí la palabra jurado, porque si no logras que te escuchen,
> estarás condenado a ser ignorado." (`ig-003`)

> "Y recuerda que si no te haces notar, estás condenado a ser olvidado."
> (`ig-001`)

> "Si quieres mejorar tu comunicación y oratoria, mi nombre es Bernardo
> Jurado. Sígueme aquí." (`ig-013`)

⚠️ **La más repetida no es la que mejor convierte.** "Sólo sígueme aquí" (sin
pedir comentario) es el segundo cierre más usado (26 de 88) y el que peor
rinde: 0,2 com/1k contra 1,5 de "comenta jurado" — ver `voz.md`. Repetición no
es lo mismo que rendimiento; para elegir cuál usar en una pieza nueva, la
tabla que manda es la de `voz.md` §"Lo que el cierre hace con los
comentarios", no ésta.

---

## 2 — La copla de amenaza: la firma más citable de la cuenta

54 de 88 reels cierran con una condicional de amenaza rítmica. Es lo más
suyo que tiene — cualquier cierre nuevo se calca de acá, no se "mejora"
(`voz.md`). Cuatro variantes, verbatim, cada una con su ref:

> "porque si no logras que te escuchen, estarás condenado a ser ignorado."
> (`ig-003` — 30 reels con esta variante)

> "porque si no eres capaz de hacer que la gente te escuche, estás condenado a
> ser ignorado." (`ig-009` — 15 reels)

> "y recuerda que si no haces que te recuerden, estarás condenado a ser
> olvidado." (`ig-041` — 6 reels)

> "Y recuerda que si no te haces notar, estás condenado a ser olvidado."
> (`ig-001` — 4 reels)

Molde para escribir una variante nueva sin salirse del personaje: **"si no
[verbo de ser percibido/escuchado], [estás/estarás] condenado a ser [participio
de invisibilidad]."** No cambiar "condenado a ser" — es la parte que nunca
varía en las 54.

---

## 3 — Moldes retóricos repetidos (la estructura se repite, el contenido no)

Estas no son la misma frase dos veces — son la misma **fórmula** rellenada
distinto cada vez. Sirven para escribir líneas nuevas que suenen a él, no para
pegar tal cual.

### "No es X, es Y" — la negación de la objeción

**18 apariciones en 14 reels distintos** (dos son el mismo repost: `ig-006` /
`ig-089`, Ley de Murphy).

```
grep -oiE "no es [a-záéíóúñ ]+, es [a-záéíóúñ ]+" ig-*.md
```

Ejemplos, cada uno con su ref:

> "No es pesimismo, es ingeniería." (`ig-006`)

> "no es egoísmo, no es falta de amor" (`ig-003`)

> "no es noble, es una presa" (`ig-014`)

> "no es la falta de caídas, es la capacidad de levantarse" (`ig-083`)

> "no es lo opuesto al éxito, es solo parte del proceso" (`ig-083`)

Es el device #5 de `voz.md` ("Devices de autoridad") — ahí estaba sin contar;
acá queda el número: **14 reels de 88 (16%) usan este molde al menos una
vez.**

### "Ley de [nombre propio]" — la ley con autoridad prestada

**3 reels** (2 son el mismo guion repostado): `ig-006` y `ig-089` ("Ley de
Murphy", "Ley de no decidir"), y `ig-075`, guion distinto ("Ley de Pareto").

```
grep -oiE "ley de [a-záéíóúñ]+" ig-*.md | sort | uniq -c
```

⚠️ Los nombres de ley fuera de Murphy y Pareto salen rotos del ASR ("Ley de
Kittyn", "Ley de Gilbert", "Ley de Kiddle", "Ley de Padland") — ver `voz.md`
§"Ruido de transcripción". No usar esos nombres tal cual sin verificar contra
el video.

### "Satanás [el maligno] hará todo lo posible para que [tú] no escuches esto"

**8 reels, 2 variantes exactas** — es el mismo guion repostado, no 8 líneas
distintas.

```
grep -lciE "satanás.{0,30}hará todo lo posible" ig-*.md | grep -v ":0" | wc -l
```

> "¿Sabías que Satanás, el maligno, hará todo lo posible para que tú no
> escuches esto?" (`ig-012` — 5 reels con esta variante)

> "Satanás hará todo lo posible para que no escuches esto." (`ig-011` — 3
> reels con esta variante)

Rinde 1,4 com/1k de mediana como guion (`hooks.md` §1) — no es el mejor
devocional (ver `historias.md`/`hooks.md` para el que sí lo es), pero es el
único que se repostó 8 veces, así que es la fórmula devocional que la cuenta
ya validó como reusable.

---

## 4 — Frases memorables de un solo uso — **NO son frase firma**

Estas se citan seguido porque son las mejores líneas del corpus (varias son
los hooks de mejor rendimiento de `hooks.md`), pero cada una aparece **una
vez en 88 reels**. Repetirlas como si fueran su firma sería inventarle un
patrón que no tiene. Sirven para robar el *tono*, no para asumir que "así
habla siempre".

```
grep -c "Tiro un facto y me voy" ig-*.md | grep -v ":0"
grep -c "Si la leche se corta y se transforma en yogurt" ig-*.md | grep -v ":0"
grep -c "No puedes odiar todas las rosas" ig-*.md | grep -v ":0"
grep -c "El diablo conoce tu nombre, pero él te llamará por tu error" ig-*.md | grep -v ":0"
```
Las cuatro dan `1`.

> "Tiro un facto y me voy." (`ig-003` — 11,4M views; el hook más raro y más
> suyo del corpus, ver `voz.md`)

> "Si la leche se corta y se transforma en yogurt, y el yogurt vale mucho más
> que la leche." (`ig-045` — el mejor com/1k de toda la cuenta, 5,7; ver
> `historias.md`)

> "No puedes odiar todas las rosas solo porque una te hirió." (`ig-074`)

> "El diablo conoce tu nombre, pero él te llamará por tu error. Dios conoce tu
> error, pero te llamará por tu nombre." (`ig-056`)

---

## Lo que falta — `SIN DATO`

- **Frases de `@bernardojuradofacts`.** 0 transcripciones de esa cuenta (ver
  `voz.md`). Si es la cuenta de técnica de oratoria pura, puede tener frases
  firma propias que acá no aparecen.
- **Frases dichas en pieza larga (clase, live, VSL).** Los 88 son reels de
  26-166s. No hay transcripción de una clase completa — una frase que se
  repite en cada clase en vivo no puede aparecer en este archivo porque no
  hay ninguna clase transcripta.
