# Frases firma — El Sensei

Las frases que **repite**, las que **sólo él dice** y las que se pueden pegar en
una pieza sin retocar. Cada una con su ref, cuántos reels la contienen y —lo que
de verdad importa— **en cuántos guiones distintos**.

> **Dos cuentas, dos personajes.** Todo lo de acá viene de `@elsensei` (madre) y
> `@librosdelsensei` (satélite temático). Las columnas van separadas por handle y
> nunca se suman como si fueran una sola voz: hay frases que existen en una y
> valen 0 en la otra, y esa es la mitad del valor de este archivo.
> `@senseiprofe` no tiene ninguna transcripción.

> **Los CTA no están acá.** `comenta clase`, `comenta invertir` y `sígueme en
> esta cuenta`, con su rendimiento medido, están en `hooks.md` §4. Este archivo
> cubre lo otro: las fórmulas del cuerpo, las sentencias de cierre y el marco con
> el que explica lo que hace.

---

## 0. Método declarado

Mismo corpus que `hooks.md` §0: **85 transcripciones, 14.043 palabras**, 31 de
`@elsensei` y 54 de `@librosdelsensei`, ventana 2026-03-30 → 2026-08-13.

**Cómo se contó.** Con `grep` sobre las fichas, desde la raíz del repo:

```bash
cd cerebros/sensei/fuentes/transcripciones
grep -lih "una habilidad de alto valor" ig-*.md | wc -l   # → 4  (cuántos reels)
grep -lih "una habilidad de alto valor" ig-*.md           # → cuáles
```

- **La unidad es el reel (`grep -l`), no la ocurrencia (`grep -o`).** Cada ficha
  repite los primeros segundos en el bloque `## Hook (0-3s)`, así que contar
  ocurrencias infla toda frase de apertura al doble. Ejemplo verificable:
  `grep -oih "millonario de tu familia" ig-*.md | wc -l` da **6** y
  `grep -lih` da **3** — son 3 reels, no 6 apariciones.
- **Guiones distintos** = clusters de Jaccard ≥ 0,55 sobre el set de palabras del
  transcript, el mismo criterio de `hooks.md` §0. Los 85 reels son **68 guiones**
  agrupados en 13 clusters.
- `grep -i` ignora mayúsculas; los acentos van escritos tal cual están en la
  ficha (el ASR los pone).

**El umbral.** Una frase que dijo una sola vez no es una frase firma: es una
frase. Acá se separan tres cosas y no se mezclan:

| Categoría | Criterio | Dónde |
|---|---|---|
| **Firma** | aparece en **≥3 guiones distintos** | §1 y §2 |
| **Fórmula de un guion reciclado** | varios reels, **1 o 2 guiones** | §3 |
| **Frase suelta** | **1 sola vez** en todo el corpus | §4 |

**La trampa de los reels repetidos.** `ig-091`, `ig-092`, `ig-093`, `ig-094` e
`ig-095` son el mismo guion subido cinco veces el mismo día (2026-08-10). Todo lo
que digan cuenta **una vez**. Lo mismo con `ig-009`/`ig-016`/`ig-072`,
`ig-021`/`ig-083`, `ig-057`/`ig-061`, `ig-067`/`ig-075`, `ig-082`/`ig-087`,
`ig-043`/`ig-056`, `ig-046`/`ig-060`, `ig-014`/`ig-044`, `ig-023`/`ig-062`,
`ig-034`/`ig-085`, `ig-036`/`ig-088`, `ig-039`/`ig-090`.

**Es ASR (Deepgram).** El giro de lengua es confiable; **las cifras y los nombres
propios no**. Ninguna cifra dicha en un reel entra a una pieza. Corrupciones
sistemáticas de este corpus, ya identificadas: `1º` (=primero) ×47, `2º` ×20,
`3º` ×12, `1000000º` ×9 (dijo "primer millón"), `por 100` (=por ciento) ×21 —
`por ciento` aparece **0** veces en las 85 fichas.

---

## 1. Las frases firma — verificadas en ≥3 guiones distintos

| Frase | Reels | Guiones | Madre | Satélite | Refs |
|---|---:|---:|---:|---:|---|
| `una habilidad de alto valor` | 4 | **4** | 2 | 2 | ig-002, ig-003, ig-050, ig-058 |
| `es imposible` | 7 | **4** | 5 | 2 | ig-009, ig-013, ig-016, ig-023, ig-028, ig-062, ig-072 |
| `el precio va a subir` | 5 | **4** | 0 | 5 | ig-005, ig-040, ig-046, ig-060, ig-068 |
| `tomé la decisión de` | 4 | **3** | 2 | 2 | ig-001, ig-021, ig-027, ig-083 |
| `en mi caso` | 5 | **3** | 3 | 2 | ig-002, ig-009, ig-016, ig-050, ig-072 |
| `imperio que te va a sostener` | 4 | **3** | 2 | 2 | ig-024, ig-034, ig-085, ig-086 |
| `la mayoría` | 8 | **7** | 6 | 2 | ig-006, ig-010, ig-020, ig-027, ig-028, ig-034, ig-078, ig-085 |
| `todo el mundo` | 12 | **10** | 2 | 10 | ig-011, ig-036, ig-042, ig-043, ig-056, ig-057, ig-065, ig-070, ig-074, ig-077, ig-086, ig-088 |
| `tienes que` | 26 | **16** | 7 | 19 | (26 fichas — la fórmula imperativa dominante) |
| `si quieres` | 10 | **8** | 3 | 7 | ig-009, ig-014, ig-027, ig-040, ig-044, ig-050, ig-051, ig-063, ig-082, ig-087 |

### 1a. `una habilidad de alto valor` — la frase-oferta

Es el nombre de lo que vende **sin nombrar un producto**. Aparece en las dos
cuentas y en 4 guiones distintos: es la única fórmula del corpus que hace de
puente entre el consejo genérico y su credencial.

> "necesitas eso combinado a una habilidad de alto valor que te permita generar dinero, no por el tiempo invertido, sino por el conocimiento que tienes sobre esa habilidad." (ig-002)

> "Que desarrollen una habilidad de alto valor, que le paguen no por el tiempo invertido, sino por la habilidad en sí misma, que puedas hacer desde tu casa o cualquier parte del mundo solamente utilizando una computadora." (ig-003)

> "aprendería una habilidad de alto valor, una habilidad que no requiera demasiadas horas de trabajo y que pueda ganar dinero desde mi casa." (ig-050)

**La definición completa está en ig-003**: "que le paguen no por el tiempo
invertido, sino por la habilidad en sí misma". Es la versión más limpia y la
única sin cifras: **la citable**.

### 1b. `tomé la decisión de` — su fórmula de punto de giro

Nunca dice "un día decidí" ni "me di cuenta de que". Cuando marca el momento en
que su vida cambia, usa siempre la misma construcción, y siempre en pretérito:

> "Por eso, tomé la decisión de no prestarle dinero a nadie, preferiría regalarte." (ig-001)

> "tomé la decisión de aprender alguna habilidad que me diera mucho dinero" (ig-021)

> "Hasta que tomé la decisión de mudarme a Estados Unidos y no a cualquier lugar, directamente en Miami" (ig-027)

Tres guiones, tres decisiones distintas, la misma sintaxis. **Es el molde para
escribirle un punto de giro nuevo sin inventarle la voz.**

### 1c. `es imposible` — el negativo con el que abre cada regla

5 de los 7 reels son de la cuenta madre. Es el device de autoridad de `@elsensei`:
plantea el imposible y después se ofrece como excepción.

> "es imposible que tú puedas llegar al éxito si ni siquiera sabes qué paso tienes que dar" (ig-009)

> "Pero en el momento en que tú consideras que algo es imposible, se vuelve más imposible." (ig-013)

> "yo creo que es imposible conseguir el éxito sin dios" (ig-023)

> "Si no controlas tus emociones, es imposible tener resultados en ninguna área de tu vida." (ig-028)

La de ig-013 es la mejor de las cuatro y la más rara: es la única vez en 85 reels
que usa la palabra contra sí misma.

### 1d. `el precio va a subir` — el mecanismo, y sólo vive en la satélite

**0 reels de `@elsensei`, 5 de `@librosdelsensei`.** La única explicación de qué
hace para ganar dinero existe exclusivamente en la cuenta satélite. La cuenta
madre, que reparte una mediana de views 11,9 veces mayor (`hooks.md` §5), nunca
lo explica.

> "yo analizo un gráfico y veo si el precio va a subir. Si yo digo que va a subir y sube, gano dinero" (ig-005)

> "aquí tú vas a analizar si el precio va a subir o va a bajar" (ig-040)

> "Todos los días yo me conecto en el gráfico de 8 de la mañana a 10, analizo si el precio va a subir y si sube gano dinero. Analizo si va a bajar y si baja gano dinero también." (ig-046)

> "Yo tengo una estrategia que me dice cuándo el precio va a subir o cuándo el precio va a bajar." (ig-068)

La de ig-046 es la versión completa y simétrica (sube/baja) y es la que conviene
calcar: no promete monto ni plazo, sólo describe. **Es el único párrafo de
mecanismo que pasa compliance tal como está.**

### 1e. `imperio que te va a sostener` — la metáfora de la juventud

Tres guiones, las dos cuentas. Es la imagen que usa para vender esfuerzo hoy sin
poner una cifra.

> "Los 20 es la edad de crear, de crear el gran imperio que te va a sostener el resto de tus días." (ig-024)

> "es el momento de crear este imperio que te va a sostener para cuando tú tengas 30, 40, 50" (ig-034)

> "¿Qué tal si creas ese imperio que te va a sostener toda tu vida y los años que vienen?" (ig-086)

### 1f. `la mayoría` — el antagonista

8 reels, 7 guiones, **6 de ellos en la cuenta madre**. `@elsensei` es donde se
define contra el resto; la satélite casi no usa el recurso.

> "La mayoría de personas dice que tienen fe, pero cuando se les presenta cualquier situación que parece volver eso que deseas algo difícil, su fe tiembla" (ig-006)

> "Y aunque lo hago muy cordial, la mayoría se molesta." (ig-010)

> "pero la mayoría solamente lo hace 20 días, 30 días e incluso una semana, y quieren ver resultados grandes" (ig-020)

> "la mayoría de personas que ganan mucho dinero ni siquiera son profesionales" (ig-028)

---

## 2. El canon de libros — las frases-objeto

Los títulos son lo más repetido del corpus después de "dinero", y **el canon
cambia según el handle**. Eso no es ruido: es la prueba de que las dos cuentas
son dos personajes con dos bibliotecas.

| Título | Reels | Guiones | Madre | Satélite |
|---|---:|---:|---:|---:|
| `los secretos de la mente millonaria` | 13 | **11** | 5 | 8 |
| `el hombre más rico de Babilonia` | 9 | **8** | 4 | 5 |
| `piense y hágase rico` | 4 | 4 | **4** | **0** |
| `cómo ganar amigos e influir sobre las personas` | 3 | 3 | 3 | 0 |
| `el club de las 5 am` | 4 | 2 | **0** | **4** |
| `padre rico, padre pobre` | 2 | 2 | 1 | 1 |
| `los 4 acuerdos` | 2 | 1 | 0 | 2 |
| `tus zonas erróneas` | 2 | 1 | 0 | 2 |
| `hábitos atómicos` | 1 | 1 | 1 | 0 |

**Los dos hallazgos de la tabla:**

1. `piense y hágase rico` es una frase **exclusiva de la cuenta madre** (4 reels,
   0 en la satélite). `el club de las 5 am` es **exclusiva de la satélite** (4
   reels, 0 en la madre). Si una pieza de `@elsensei` cita El club de las 5 am,
   está inventando; y viceversa.
2. `los secretos de la mente millonaria` aparece en **11 guiones distintos** —
   más que cualquier otra frase de contenido del corpus. Es **el** libro de la
   marca, y el único que reaparece en las dos cuentas con el mismo rol: el que
   cambia la mentalidad.

Verbatims del libro dominante, uno por guion:

> "Los secretos de la mente millonaria. La única forma de ser millonario es pensando como tal." (ig-011)

> "El 1º me cambió la mentalidad al 100 por 100 y me enseñó cómo realmente ser un millonario, y este es los secretos de la mente millonaria." (ig-022)

> "Ese libro te cambia la mentalidad al 100 por 100 y te permite pensar cómo piensan los millonarios" (ig-015)

> "los secretos de la mente millonaria, que te va a dar acciones específicas para que hagas todos los días y aumentes tus capacidades" (ig-004)

Y la línea de cierre del tema, que es la más dura y la más suya:

> "A mí no me gusta leer. ¿Cuál me recomiendas? Si no te gusta leer, entonces no quieres ser millonario." (ig-022)

**⚠️ `100 por 100` es ASR.** Aparece en 10 reels / 5 guiones y la reconstrucción
es **"cien por ciento"** (`por ciento` da 0 en el corpus porque el ASR lo escribe
siempre como `por 100`). Ninguna frase que contenga `100 por 100` se puede
imprimir tal cual: hay que escribir "cien por ciento" y **eso ya es una
reconstrucción, no un verbatim**. Si la frase va a un ad, se verifica contra el
audio primero.

---

## 3. Fórmulas de un guion reciclado — repite el reel, no la frase

Aparecen en varios reels pero salen de **1 o 2 guiones**. Se pueden usar, pero no
son evidencia de que sea una muletilla suya: son evidencia de que resubió el
video.

| Frase | Reels | Guiones | Refs |
|---|---:|---:|---|
| `millonario de tu familia` | 3 | **1** | ig-009, ig-016, ig-072 |
| `una cosa a la vez` | 3 | **1** | ig-009, ig-016, ig-072 |
| `he leído más de 500 libros en mi vida` | 3 | **2** | ig-022, ig-067, ig-075 |
| `mi 1000000º de dólares` (= "mi primer millón") | 7 | **5** | ig-012, ig-058, ig-067, ig-075, ig-080, ig-082, ig-087 |
| `4 y 47` | 4 | **3** | ig-005, ig-043, ig-056, ig-071 |
| `100 por 100` | 10 | **5** | ig-014, ig-015, ig-022, ig-044, ig-068, ig-091…ig-095 |
| `mis meses no tienen 30 días` | 2 | **1** | ig-043, ig-056 |
| `el dinero solamente se consigue esforzándose` | 2 | **1** | ig-021, ig-083 |
| `la vida es un videojuego` | 2 | **1** | ig-039, ig-090 |
| `deuda` / `deudas` | 3 | **2** | ig-067, ig-075, ig-077 |

Las que valen:

> "Ser el 1º millonario de tu familia 1º tienes que saber esto." (ig-009)

> "Es imposible lograr un gran resultado si estás desenfocado queriendo 1000 cosas al mismo tiempo, una cosa a la vez." (ig-009)

> "He leído más de 500 libros en mi vida, pero si tuviera que elegir 3 que me ayudaron a hacer mi 1000000º de dólares serían estos." (ig-067)

> "mis meses no tienen 30 días, mis meses tienen 32 días" (ig-043)

**El dato de `deuda`: 3 reels, los 3 en la satélite, 0 en la madre.** La única
admisión de haber tenido deudas vive en `@librosdelsensei`:

> "Yo leí este libro y en poco tiempo logré pagar todas mis deudas y hacer 1000000." (ig-077)

En la cuenta madre no existe ni la palabra. Cualquier pieza de `@elsensei` que
apoye el ángulo "yo también estuve endeudado" está usando material de la otra
cuenta.

---

## 4. Frases sueltas — dichas **una sola vez**, y buenas igual

No son firma. Son las mejores líneas del corpus que dijo una vez y no volvió a
decir. Se pueden usar, pero declarándolo: si un guion nuevo las repite tres
veces, deja de sonar a él.

**Sentencias morales de cierre** (nunca cierra con pregunta — `voz.md`):

> "Muchas personas cuando les empieza a ir bien dejan de esforzarse como lo hacían al inicio, y es por eso que yo sigo mis mismos hábitos desde que era pobre hasta que fui rico." (ig-071)

> "Sufre hoy y disfruta luego, o disfruta ahora y sufre después." (ig-017)

> "porque la riqueza no es de dinero, la riqueza es de mente" (ig-065)

> "sacrifícate hoy para que vivas mañana como un rey" (ig-086)

> "y así como la buena mentalidad se pega, la mala también" (ig-069)

> "El que se conforma con su vida y no mejora diariamente, estará sometido a una larga vida de arrepentimientos." (ig-090)

> "A los 40 años, tú puedes estar haciendo 2 cosas, o disfrutando la vida que hiciste o lamentándote de las decisiones que no tomaste." (ig-090)

> "Nunca vas a ver resultados grandes si tu esfuerzo es muy pequeño" (ig-020)

**Frases de ambiente y entorno:**

> "Eres la media de las 5 personas con las que más te juntas, así que elige bien con quién compartes tu vida" (ig-054)

> "Cuando tú estás en un ambiente donde no se desarrollan habilidades y donde eres el mejor de todo tu ambiente, te estás poniendo un techo y no vas a tener la oportunidad de crecer." (ig-027)

> "y al final el ambiente te obliga a crecer" (ig-027)

> "tienes que llevarte directamente del consejo de la persona que tiene el resultado que tú quieres" (ig-042)

**Frases de fe** (13 reels tienen `dios`, 12 guiones — es el tema dominante de las
dos cuentas, por encima de libros):

> "Dios nunca pondrá un sueño en tu mente que no puedas cumplir." (ig-052)

> "y si él puso en tu mente es porque sabes que tú puedes lograrlo, pero no te lo va a regalar, él va a hacer que tú te lo ganes" (ig-052)

> "La fe es la certeza de lo que se espera y la convicción de lo que no se ve." (ig-006)

> "Dios realmente sabe lo que hace, no te estreses, su tiempo es perfecto, su plan es perfecto, él te tiene exactamente donde quiere." (ig-073)

> "Nada de lo que pasa en tu vida es malo, y Dios nunca te va a enviar una situación que él no sepa que tú tienes la capacidad de superar." (ig-025)

**Frases sobre mujeres y pareja** — son un bloque grande del corpus y hay que
saber que existe, aunque casi nada de esto es usable en una pieza de agencia:

> "es por eso que digo que las mujeres no son interesadas, son inteligentes" (ig-018)

> "Elige la paz sobre el caos porque el verdadero amor no te agota, te hace crecer." (ig-045)

> "La mujer puede ser la peor perdición del hombre si no la elige correctamente." (ig-091)

**La frase emocional más fuerte del corpus**, dicha una vez, sin ninguna cifra:

> "llegar a casa de tu madre montado en el auto de tus sueños, tocarle la puerta y decirle mamá, finalmente lo logré, ya no tienes que trabajar más" (ig-081)

`mamá` aparece en 7 reels / 5 guiones (ig-010, ig-021, ig-023, ig-042, ig-062,
ig-081, ig-083) — 3 en la madre, 4 en la satélite. Es el ancla emocional más
consistente que tiene y el único que no arrastra riesgo de compliance.

---

## 5. Lo que **nunca** dice — y por qué importa acá

Detalle completo en `voz.md`. Lo que hay que tener a mano al escribir frases:

- **`mi estrategia` da 0.** Dice `una estrategia` (4 reels) y `la estrategia que
  he creado` (ig-009, ig-072). No es dueño de la estrategia en primera persona.
- **`método`, `sistema`, `fórmula`, `curso`, `academia`, `comunidad`, `mentor`,
  `coach`, `masterclass`, `webinar`, `membresía` dan 0.** Su palabra para el
  entregable es **`clase`**.
- **`mindset` da 0**; dice `mentalidad` (13 reels / 11 guiones).
- **`mierda` aparece una sola vez en 85 reels** (ig-040, "quite esa mierda y pon
  el Trading View"). No es un hablante que putea: si un guion nuevo mete
  vulgaridad, no es él.
- **Ninguna palabra de riesgo aparece nunca.** No existe disclaimer en su voz. El
  disclaimer de una pieza hay que escribirlo desde cero, no tomarlo de acá.

---

## 6. 🚨 Compliance — frases que no se reusan tal cual

`oferta.md` bloquea ads para este cliente. Estas son las frases que, además, no
se copian ni a nutrición sin reescribir:

| Frase | Reels | Por qué |
|---|---|---|
| `generar entre 3000 y 8000 dólares extra todos los meses` | ig-050, ig-063, ig-080 | monto + plazo explícito |
| `sin usar su propio capital` | ig-075, ig-079 | promesa de operar con capital ajeno |
| `El 90 por 100 de las personas que se han leído este libro se han convertido en millonarios` | ig-007, ig-058 | estadística de terceros inverificable, y `100 por 100` es ASR |
| `mis estudiantes han ganado más de 10000000 de dólares` | ig-009, ig-050, ig-072 | resultado de alumnos con cifra |
| `convertir 1000 dólares en 1000000 de dólares` | ig-046, ig-060 | monto + plazo, es el reto del Corolla |
| `esos 1000 de dólares se convirtieron en 1000000` | ig-037 | monto, causalidad directa |
| `un libro que me hizo ganar mis primeros 10000 dólares` | ig-082, ig-087 | causalidad libro → dinero con cifra |

**La cifra personal se contradice entre handles, dentro del mismo guion.** El
mismo script de "ser el primer millonario de tu familia" dice:

> "Soy Sebastián Rodríguez, alias el sensei, y a mis 23 años he ganado más de 7000000 de dólares" (ig-009)

> "Soy Sebastián Rodríguez, también conocido como el sensei, y a mis 25 años he ganado más de 10000000 de dólares" (ig-072)

`ig-016` (2026-03-31, madre) dice 23/7M, `ig-072` (2026-07-01, satélite) dice
25/10M, `ig-009` (2026-08-01, madre) vuelve a 23/7M. No es una progresión: es una
contradicción que va y vuelve. **Ninguna de las dos versiones se usa hasta que el
cliente confirme edad y monto por escrito.**

---

## 7. SIN DATO

1. **La frase de precio.** No hay ninguna. En 85 reels no dice cuánto cuesta
   nada. `oferta.md` tiene el precio `SIN DATO` y este archivo no lo puede
   llenar.
2. **La frase de garantía.** Tampoco existe: 0 menciones de devolución,
   reembolso o garantía.
3. **`@senseiprofe`** — la cuenta a la que manda con "sígueme" (caption de
   ig-014) no tiene ninguna transcripción. Si tiene frases firma propias, no
   están medidas.
4. **La frase de la pérdida de US$18.000** — está escrita en
   `wealthy-trades.teachable.com` pero **no en su boca en ningún reel**. Ver
   `historias.md`. Falta el video donde la cuente.
5. **Verbatim de una pieza larga.** Todo lo de acá sale de reels de entre 18 y 90
   segundos. No hay VSL, ni live, ni entrevista transcripta: las frases de
   argumentación larga —las que sostienen un ad de 2 minutos— no existen en el
   corpus.
6. **El nombre real de su estrategia.** Dice `una estrategia` y `la estrategia
   que he creado` y nunca la nombra. Si tiene nombre comercial, hay que pedirlo.
