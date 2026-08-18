# Voz — Ramón (Academia de Construcción)

Base: **85 reels de `@lordconstruye` transcriptos, 18.146 palabras.** Publicados
entre **2025-05-26 y 2026-08-09**, 24.207.897 views acumuladas. Fuente:
Deepgram sobre el audio de IG (`fuentes/transcripciones/`), inventario con
métricas en `fuentes/catalogo-instagram.csv`.

Es el primer material hablado que entra a este cerebro. Antes había sólo web y
125 títulos de brief de ClickUp — eso sigue abajo, marcado como lo que es.

## Advertencia sobre la fuente — leer antes de citar

Es **ASR**. Los giros de lengua son confiables (el reconocimiento no inventa un
"chévere" que no se dijo). **Las cifras y los nombres propios no lo son.** En
este corpus, medido:

| Qué destroza | Evidencia |
|---|---|
| **La marca propia.** "Lord Construye" aparece de 9 formas distintas | 22 ocurrencias en 12 reels: "lo construye", "los construye", "lo reconstruye", "Redconstruye", "Lord Construir", "Lorconstruye", "Loors construye", "seguirla o construye", "hello, construyo" |
| **Los porcentajes.** "por ciento" → **"por 100"** | 49 veces en 21 reels |
| **Los ordinales.** "primero / segundo / tercero" → **"1º / 2º / 3º"** | 96 veces en 32 reels ("Lo 1º fue el terreno") |
| **Zillow** → "Silo punto com" / "Zilo punto com" | 5 reels |
| **Los montos.** Pega y parte números | "400 500 dólares" (ig-089), "entre 950000 y 1000800" (ig-012), "un buen crédito por encima de 701 empresa registrada" (ig-041, son dos cosas: 700 puntos + 1 empresa) |
| **El arranque del hook.** Se come las primeras 1–2 palabras | **25 de 85** transcripts empiezan con una pregunta *sin* su "¿" de apertura, cuando el ASR sí escribe 260 "¿" en el resto del corpus |

Sobre lo último, que es lo que más molesta al copiar hooks: la palabra que falta
es casi siempre **"¿Cuánto…"** o **"¿Cuál(es)…"**, y se puede reconstruir porque
el mismo hook aparece intacto en un reel gemelo o en el caption.

- ig-023 arranca `Son los 5 mejores estados de Estados Unidos para comprar una casa?` — su gemelo ig-025 lo trae entero: `¿Cuáles son los 5 mejores estados para comprar una casa?`
- ig-001 arranca `Es mejor?` — su caption dice `¿Qué es mejor para ti? 👇`

**Regla: ningún número dicho en un reel entra a una pieza como dato.** Los
montos van de `oferta.md` o de una verificación contra el video.

Las **métricas sí son duras** (API de IG, no ASR): views, likes y comentarios de
cada reel están en el frontmatter y son con lo que se ordena todo este archivo.

---

## Los dos moldes — se hablan distinto y hay que medirlos aparte

No son dos "eras": conviven en el mismo mes. Son dos formatos de reel, y el
léxico cambia de forma medible entre uno y otro.

| | **Sketch** (hay una segunda voz) | **A cámara** (habla solo) |
|---|---|---|
| Reels | 47 | 38 |
| Palabras | 11.201 | 6.945 |
| Qué es | llama al banco, lo para un desconocido en la calle, un obrero lo interroga, un vecino adivina el precio | desglose de costos, ranking de estados, "nunca hagas estas 3 cosas" |

Palabras que **sólo** existen en el sketch (0 ocurrencias en las 6.945 palabras
de los reels a cámara):

| Palabra | Sketch | A cámara |
|---|---|---|
| **aló** | 14 (7 reels) | **0** |
| **ajá** | 9 (8 reels) | **0** |
| **perdona / disculpe / oiga** | 12 (9 reels) | **0** |
| **espera / espérate** | 12 (8 reels) | **0** |
| **ven** ("ven que te explico") | 11 (8 reels) | **0** |
| **"¿cómo que…?"** | 9 (9 reels) | **0** |
| **muy sencillo / sencillísimo** | 9 (8 reels) | **0** |
| **chévere** | 6 (5 reels) | **0** |
| **definitivamente** | 5 (5 reels) | **0** |
| **claro** | 14 (10 reels) | 1 |
| **pero** | 107,1 /10k | 17,3 /10k |

Y al revés, marcadores del reel a cámara:

| Palabra | A cámara | Sketch |
|---|---|---|
| **desglose** | 7 (7 reels) | **0** |
| **"por 100"** (= por ciento) | 53,3 /10k | 10,7 /10k |
| **dólares** | 367,2 /10k | 200,0 /10k |

Lo que **no** cambia entre moldes es la frase firma: `me lo dio el banco` corre
14,3/10k en el sketch y 15,8/10k a cámara. Es suya, no del formato.

**Regla operativa:** un guion de sketch sin un "aló", un "ajá" o un "¿cómo que…?"
no suena a él. Un desglose de costos con "chévere" adentro tampoco.

## Tutea siempre. El "usted" no es suyo

`tú` y sus formas: **181 veces en 72 de los 85 reels** (99,7/10k). `usted`: **2
veces**, y las dos están en boca del **desconocido que lo entrevista**, no en la
suya:

> "O sea, **¿usted tiene** que tener mucho dinero para construir una casa…?" (ig-045)
> "**¿Y usted enseña** a hacer esto?" (ig-045)

**Voseo rioplatense: 0.** `vos`, `tenés`, `podés`, `sabés` no aparecen ni una vez
en 18.146 palabras. (Esto confirma por audio lo que ya estaba fichado: el copy
con voseo de `lordconstruye.com/plan-personalizado` es un bug de la landing, ver
`fase-0-pedido.md`.)

## Léxico propio, con frecuencias reales

85 reels, 18.146 palabras. La columna /10k permite comparar con otros cerebros.

| Expresión | Veces | /10k | Reels | Para qué la usa |
|---|---|---|---|---|
| **dólares** | 479 | 264,0 | 80 de 85 | la unidad de todo; casi no hay reel sin monto |
| casa / casas | 421 | 232,0 | **85 de 85** | |
| **banco / el banco** | 214 / 101 | 117,9 | 72 | el personaje central, no un concepto |
| dinero | 193 | 106,4 | 65 | |
| construir | 183 | 100,8 | 71 | |
| ganar / gano / gana | 175 | 96,4 | 64 | siempre "me voy a ganar", nunca "rentabilidad" |
| terreno / terrenos | 158 | 87,1 | 65 | **nunca "lote" ni "parcela"** |
| negocio | 139 | 76,6 | 66 | |
| vender / vendo / vendí | 136 | 74,9 | 71 | |
| **"negocio de (la) construcción"** | 65 | 35,8 | **42** | así se llama lo que vende |
| Estados Unidos | 80 | 44,1 | 54 | el escenario, dicho entero |
| **"me lo dio el banco"** | 27 | 14,9 | 21 | **la frase firma** |
| **"el resto"** | 37 | 20,4 | 30 | el 90% del capital que no es suyo |
| "el dinero del banco" | 17 | 9,4 | 14 | |
| **"1 a 1"** (consulta/consultoría) | 28 | 15,4 | 28 | la oferta del CTA |
| "escribe la palabra" | 29 | 16,0 | 26 | |
| "comenta la palabra" | 17 | 9,4 | 16 | |
| "escríbelo / escríbela" | 19 | 10,5 | 16 | el remate final, aislado |
| sígueme | 21 | 11,6 | 16 | CTA viejo, ver abajo |
| **diminutivos** (dinerito, platica, casita, terrenito, poquito, camioncito) | 31 | 17,1 | 17 | el registro cariñoso del sketch con el banco |
| "buen crédito" / "700 puntos" | 18 | 9,9 | 13 | |
| "social security number" | 9 | 5,0 | 9 | |
| "lo único que (te hace falta / necesitas)" | 11 | 6,1 | 9 | fórmula de requisitos |
| "si (tú) quieres…" | 33 | 18,2 | 33 | bisagra al CTA |
| framing | 15 | 8,3 | 14 | |
| pie / pies cuadrados | 13 | 7,2 | 10 | |
| "por supuesto" | 20 | 11,0 | 18 | |
| bueno (arranque de respuesta) | 26 | 14,3 | 18 | |
| "así que" | 22 | 12,1 | 17 | empalma con el CTA |
| "o sea" | 19 | 10,5 | 14 | reformula |
| exactamente | 13 | 7,2 | 12 | |

Vocabulario técnico que sí usa sin traducir, en inglés, y que su audiencia
entiende: **framing, slab, grading, drive, siding, underground plumbing, grinder
pump, fix and flip, waterfront, realtor, appliances, overtime**. No los explica
salvo cuando el sketch le da pie ("le hice el grading, es decir, lo nivelé",
ig-003).

**Cuidado con lo que NO está en la lista.** Palabras de manual publicitario que
uno escribiría solo y que él casi no dice: `plata` 3 (y sólo dentro del sketch
del banco, ig-018), `inversión/invertir` 18, `deuda` 2, `préstamo` 4, `hipoteca`
2, `mercado` 13, `material/es` 3 (**en un solo reel**, ig-059), `mano de obra` **0**, `contratista` 2,
`equity/plusvalía` 1, `la mayoría` 4, `realmente` **0**.

## Muletillas y conectores

- Abre respuestas con **"Bueno,"** (26) y con **"Claro,"** (15). En el sketch,
  la respuesta empieza casi siempre con una de las dos.
- **"Y es que…"** (11 en 10 reels) para meter la explicación después de la
  afirmación. **"De manera que"** (3) y **"por lo tanto"** para cerrar la cuenta.
- **"Así que"** (22) es el empalme al CTA, casi siempre.
- **Repite la palabra para dar el golpe** — es un tic real, no ruido del ASR:
  > "porque **el resto, el resto** me lo dio el banco" (ig-026)

  El mismo tic en ig-076, ig-041 y ig-090.
  > "**Esto, esto** pierde valor con el tiempo" (ig-024, ig-094)
  > "**Esa casa, esa casa** la compré en 400000" (ig-024)
  > "allí **allí** donde están los 1000000 de dólares, **1000000 de dólares**" (ig-084)
- Se autocorrige en voz alta y **no lo edita**: "¿Cómo que, cómo es eso?"
  (ig-045), "O me hago yo no los especialistas" (ig-048).
- **Deícticos escasos, y eso importa.** `mira` 9, `fíjate` 9, `imagínate` 3. No
  es un tipo de pantalla compartida: señala **con la casa que tiene atrás**. El
  equivalente suyo del "fíjate" es el gesto — "esta casa", "este terreno", "aquí
  atrás" — no la palabra.

## Ritmo y estructura

Todo medido sobre los 85 reels.

- **Duración: mediana 56 segundos** (mín 37, máx 112, media 61). No hay reels de
  15 segundos en este corpus: el molde es de ~1 minuto.
- **200 palabras por reel** de mediana (mín 90, máx 408).
- **3,56 palabras por segundo.** Habla rápido y sin pausas de aire.
- **Oración de 9 palabras de mediana** (1.590 oraciones medidas, media 11,4).
  Golpes cortos, no párrafos.
- **3,1 preguntas por reel** (260 "¿" en el corpus). Pregunta y contesta él
  mismo, o le pregunta el otro. **33 de 85 reels arrancan directamente con una
  pregunta**; 9 arrancan con una cifra desnuda ("276000 dólares para construir
  esta casa y el desglose es el siguiente", ig-021).

**Nunca saluda, nunca se presenta.** No hay un solo "hola", "qué tal", "soy
Ramón" ni "bienvenidos" abriendo un reel en los 85. El primer sonido es el
gancho.

### Las cuatro aperturas canónicas, verbatim

1. **Llamada al banco** (7 reels): la palabra `aló` seguida del interlocutor.
   > "**Aló, banco**, conseguí un terreno que vale 100000 dólares, pero no los tengo. ¿Tú me los prestas?" (ig-003 · 1.683.330 views)
   > "**Aló, banco.** Buenas tardes, lo reconstruyes. Me encontré un terreno de 40000 dólares, necesito que me lo prestes" (ig-038)

2. **Aborda a un desconocido** (9 reels): `perdona` / `disculpe` / `oiga` + pregunta directa por dinero.
   > "**Perdona, ¿a qué te dedicas?**" (ig-010 · 496.963 views, y calcado en ig-100)
   > "**Hey, disculpe, disculpe. ¿A qué se dedica?**" (ig-031)
   > "**Oiga, disculpe, ¿cuánto dinero se ganó este mes?**" (ig-045)
   > "**Perdona, ¿qué es mejor? ¿Comprar esta casa o alquilarla?**" (ig-064, ig-086)

3. **La cifra y el desglose** (7 reels dicen "desglose"; 9 arrancan con la cifra
   desnuda): monto + "y este es el desglose completo".
   > "**Pagué 700000 dólares por construir esta mansión y aquí está el desglose completo.**" (ig-004 · 1.628.883 views)
   > "**276000 dólares para construir esta casa y el desglose es el siguiente.**" (ig-021, ig-062)

4. **Pobres / ricos** (3 reels), la comparación moral:
   > "**Los pobres se compran el carro del año para aparentar que tienen dinero.** Los ricos entran en Silo punto com y se buscan un terreno de menos de 20000 dólares" (ig-002 · 2.418.616 views, calcado en ig-014 y ig-049)

### Cómo cierra — la fórmula, verbatim

El cierre es un bloque de cuatro piezas, casi siempre en este orden:

1. condicional: **"Y si tú quieres aprender…"** (33 reels tienen "si quieres")
2. imperativo con la palabra: **"escribe / comenta la palabra X"** (55 reels)
3. qué recibe: **"una consulta 1 a 1 conmigo y con mi equipo"** (28 reels) o **"una clase privada… de la A a la Z"** (10 reels)
4. **el remate aislado, repitiendo la orden** (16 reels): "Escríbelo." · "Comenta clase." · "Escríbela."

> "Y si quieres aprender a ganar dinero construyendo casas con dinero del banco,
> **escríbela la palabra construir en los comentarios**. Vamos a hacer una
> **consulta 1 a 1** para explicarte cómo se hace el negocio en los Estados
> Unidos de construcción de casas." (ig-002)

> "Así que **comenta la palabra clase**. Te voy a mandar una clase privada en la
> que te explico **desde la A hasta la Z**, cómo iniciarte en el negocio de
> construcción de casa en Estados Unidos sin conocer la construcción y con dinero
> del banco. **Escribe clase**." (ig-039)

> "…así que **comenta aquí la palabra construir, coméntala**." (ig-026)

En el sketch, el CTA se lo dice **al personaje**, no a cámara, y el personaje
contesta — el reel cierra con la conversión actuada:

> "**Comenta la palabra casa en este reel** y vamos a hablar por mensaje directo.
> Te explico cómo se hace. — **Ok, ok, comento.**" (ig-018)
> "Que voy a hacerlo ya, Ramón, gracias. — **Epa, toma tus 1000 dólares.** Ah, bueno, gracias. Chao." (ig-097)

## El dato que cambia decisiones: el CTA hablado vale más que las views

Los tres reels más vistos del corpus están casi al fondo de la tabla de
comentarios:

| Reel | Views | Tasa de comentarios |
|---|---|---|
| ig-001 | **5.201.426** | 0,079% |
| ig-004 | 1.628.883 | 0,078% |
| ig-006 | 932.754 | 0,097% |
| — mediana del corpus — | 93.272 | **0,536%** |
| ig-035 | 151.246 | **2,302%** |
| ig-059 | 63.690 | 2,220% |
| ig-009 | 516.611 | 1,944% |

Los tres de arriba tienen algo en común y no es el tema: **cierran con "sígueme
en Lord Construye"**, no con una palabra clave.

| CTA hablado | Reels | Views (mediana) | Comentarios (mediana) |
|---|---|---|---|
| **"sígueme aquí en lo construye"** | 19 | **178.809** | **0,174%** |
| **palabra clave a comentar** | 63 | 76.360 | **0,702%** |
| sin CTA | 3 | 67.030 | 0,391% |

El CTA de seguimiento se llevó **más del doble de views** y **un cuarto de los
comentarios**. Y no es efecto de la fecha en la dirección obvia: los 19 reels de
"sígueme" son de **2025-06-15 a 2025-11-13** (más uno suelto en 2026-02-25), la
etapa de mayor alcance de la cuenta. Views altas ahí, ManyChat vacío.

Dentro de los que sí piden palabra, la palabra importa. Comparando por el
**caption** (fuente no-ASR, es el texto exacto que él publicó):

| Palabra pedida | Reels | Views (mediana) | Comentarios (mediana) |
|---|---|---|---|
| **"CLASE"** | 14 | 95.021 | **1,191%** |
| "ESTUDIANTE" | 7 | 65.415 | 0,767% |
| "CONSTRUIR" | 49 | 94.407 | **0,387%** |

**Mismas views, tres veces los comentarios.** "Clase" nombra lo que se recibe;
"construir" nombra el tema. Para llenar el ManyChat, la palabra que se pide es
`clase`. (Salvedad honesta: los 14 de "clase" son todos de **2026-05-06 en
adelante** — es también la etapa en que mejoró el guion. La medianas de views
siendo casi idénticas es lo que hace la comparación defendible, pero no es un
A/B.)

El caption tiene su propia fórmula, estable en 85 reels: `Escribe la palabra
"X" en comentarios👇` (70 de 85) + `👇` (80 de 85) + hashtags fijos
`#lordconstruye #realstate #southcarolina`. Y escribe **`diner0` (74 de 85) y
`banc0` (56 de 85) con cero en vez de o** — evasión de moderación, ya
incorporada por él. Al escribir captions nuevos, respetar los ceros.

## Devices de autoridad (los suyos, textuales)

1. **La casa que tiene atrás, con los dos números.** Es su prueba y está en casi
   todos los reels: lo que costó y en cuánto la vende.
   > "esta casa que tiene 2900 pies cuadrados, con garaje, con 2 porches, 4 habitaciones y 3 baños, la voy a vender en 880000 dólares. ¿Sabes cuánto me costó? 400000 dólares." (ig-009)

2. **"Yo no sé clavar un clavo."** El anti-experto: se quita la credencial
   técnica a propósito, porque es la objeción del avatar.
   > "Y seamos honestos, **yo ni siquiera sé clavar un clavo**, de lo que sé es del negocio de la construcción." (ig-052)
   > "**Que yo no tengo que agarrar ni un martillo ni un clavo.** Yo contrato al que sabe hacer la casa." (ig-012)
   > "**¿Y te parece que yo sé manejar un martillo y un taladro?** No vale, yo contrato a la gente que sabe hacerla, el del concreto, el del framing, hasta el de la grama, vale." (ig-018)
   Es su mejor material y está en 4 reels de 85. Se puede usar mucho más.

3. **"Yo soy el empresario, no el obrero."** La distinción sobre la que descansa
   toda la oferta (`empresario` 9 veces, 6 reels).
   > "¿tú no trabajas en la obra? — **Yo soy el dueño de la empresa, yo soy el empresario de la construcción de casas.**" (ig-012)
   > "**Entonces, ¿tú no haces nada aquí?** — yo no hago nada técnico, pero yo me encargo de conseguir el terreno, de conseguir el financiamiento y luego vender la casa. **¿Y a eso cómo se le llama?** — Empresario de construcción de casas en los Estados Unidos." (ig-048)

4. **La credencial que desactiva, no que impresiona.** Dice qué estudió sólo
   para aclarar que no le sirve. **2 veces en 85 reels**, siempre con la misma
   construcción:
   > "**Yo lo que estudié fue economía**, pero no la ejerzo, no la necesito para mi negocio de construcción de casa." (ig-012)
   > "**Yo lo que estudié fue economía en Venezuela.** Aquí lo que hago es contratar a los que saben construirle." (ig-048)

5. **Amanda, la estudiante con nombre.** Su prueba social recurrente: 7 reels.
   > "**Amanda era vendedora de carros**, no sabía nada de construcción y está terminando su 1º casa" (ig-012)
   > "aquí, a menos de 10 calles, tengo a **la estudiante Amanda** haciendo exactamente lo mismo" (ig-046)
   > "Haz lo mismo que hizo **Amanda, Rafael, Mateo, Brandon, Ricardo, Andrés, Álvaro**." (ig-044)
   ⚠️ Los montos que le atribuye **no coinciden entre reels** (180.000 en ig-012,
   145.000 en ig-046). Nombres y cifras de alumnos: verificar antes de usar.

6. **La lista de requisitos mínimos** — su forma de cerrar la objeción "yo no
   puedo". Fórmula: **"lo único que te hace falta es…"** (11 veces, 9 reels).
   > "lo único que te hace falta es tener **buen crédito, más de 700 puntos, una empresa registrada**" (ig-031)
   > "no soy ciudadano americano, tengo social security number, vivo en Estados Unidos, tengo buen crédito, **eso es todo lo necesario**" (ig-078)

7. **El banco como personaje que dice que sí.** No argumenta que el banco
   presta: lo actúa.
   > "el banco sabe que yo voy a ganar un buen dinero, en cada casa construyo y vendo, **me sigue prestando dinero, porque ese es su negocio, prestar dinero**" (ig-052)
   > "**el banco quiere prestarte el dinero, pero tienes que saber cómo pedírselo**" (ig-005)

## Qué NUNCA dice

Medido: **0 ocurrencias en 18.146 palabras** salvo donde se aclare.

- **Nada de vocabulario de infoproducto.** `curso` 0 · `mentor` 0 · `coach` 0 ·
  `masterclass` 0 · `webinar` 0 · `comunidad` 0 · `programa` 2 (y es la palabra
  clave de un CTA, no el nombre de su oferta) · `garantía` 0 · `cupos` 0.
  Cuando nombra lo que vende dice **"una clase"**, **"una consulta 1 a 1"**,
  **"mi equipo y yo"**, **"la academia"** (3).
- **Nunca dice "gratis".** 0 en todo el corpus; la única vez que lo insinúa es
  `"una clase completamente gratuita"` (ig-070, 1 vez). El gancho no es el
  precio cero.
- **Nunca manda a un link.** `link` 0 · `bio` 0 · `DM` 0 · `abajo`
  como ubicación de link, 0 (las 2 ocurrencias de "abajo" son "más abajo" del
  regateo y "de Central Florida hacia abajo"). Todo pasa por el comentario. (Sí dice "mensaje
  directo"/"en privado", 3 reels, como lo que sucede *después* del comentario.)
- **Nada de LinkedIn ni de motivación.** `mindset` 0 · `libertad financiera` 0 ·
  `libertad` 0 · `riqueza` 0 · `ingreso pasivo` 0 · `éxito` 1 · `disciplina` 1 ·
  `esfuerzo` 0 · `sacrificio` 0 · `sueño americano` 0 · `Dios` 0.
- **Nunca dice "bienes raíces".** 0. Dice `real estate` (en inglés) y
  `#realstate` en los captions.
- **No apela a la familia ni a los hijos.** `hijos` 0 · `familia` 1 (dentro de
  una frase hecha: "celébralo con tu familia en silencio", ig-052). Su promesa
  es de negocio, no de propósito.
- **No toca migración ni política.** `papeles` 0 · `migra` 0 · `ilegal` 0 ·
  `crisis` 0 · `gobierno / Trump / Biden` 0. Lo más cerca que llega es la
  aclaración operativa **"no soy ciudadano americano"** (ig-078, 3 reels), y ahí
  es un requisito, no una bandera.
- **No usa vocativos de calle.** `pana` 0 · `chamo` 0 · `mi gente` 0 ·
  `hermano` 1 (en boca de otro personaje, ig-048). Es venezolano y **no
  venezolaniza**: `chévere` (6) es lo único, y sólo dentro del sketch.
- **Nada de voseo rioplatense.** `vos` / `tenés` / `podés` / `sabés`: 0. (Ver
  arriba: el copy con voseo de `lordconstruye.com/plan-personalizado` es un bug
  de la landing, `fase-0-pedido.md`.)
- **No dice "los pobres" a cámara.** El eje pobres/ricos existe (`rico`/`ricos` 36) pero
  `pobres` aparece 3 veces, todas en la misma línea calcada de un solo guion
  ("Los pobres se compran el carro del año", ig-002/ig-014/ig-049). No es su
  vocabulario habitual: es un hook puntual.
- **No habla en nombre de una empresa.** La promesa de la web es "Sin Empresa y
  Sin Gran Capital" (https://academiadeconstruccion.com/) y el registro suyo es
  de persona a persona. Ojo con esto: **contradice lo que dice en cámara** — ver
  la alerta de abajo.

## ⚠️ Alerta: la web y los reels se contradicen en los requisitos

No es un tema de voz, pero sale de esta medición y hay que resolverlo antes de
escribir un ad.

| Fuente | Qué promete / pide |
|---|---|
| `academiadeconstruccion.com` | "**Sin Empresa y Sin Gran Capital**" |
| Los reels | "una **empresa registrada**" (ig-031, ig-041, ig-056, ig-076, ig-024, ig-094) · "**700 puntos** de crédito" (8 reels) · "**social security number**" (9 reels) · "cuenta con **20000 dólares al menos** para comprar tu 1º terreno" (ig-025, ig-073) · "algo de **capital** para comprar tu terreno" (ig-097) |

Un ad que use el claim de la web y un reel que pida empresa + 700 puntos +
20.000 dólares no pueden convivir en el mismo embudo. **Preguntar cuál rige.**

## Ejemplos de anclaje

Para contagiar el tono, pegar **enteros**. El tono se transmite mejor con
ejemplo largo que con reglas.

| Para | Reel | Métrica | Por qué |
|---|---|---|---|
| **Sketch con el banco** (el molde estrella) | `ig-018` | 256.682 views · **1,117%** com · 83 s | tres llamadas encadenadas, diminutivos ("terrenito", "casita", "la platica"), y el CTA actuado adentro del sketch. El mejor ejemplo completo del formato. |
| Sketch con el banco, versión corta | `ig-003` | 1.683.330 views · 0,387% · 45 s | el original de 1,7M. Mismo molde en 45 s. Cierra con "sígueme" — no copiar el cierre. |
| **Entrevista en obra** | `ig-048` | 87.756 views · 1,116% · 94 s | recorre oficio por oficio preguntando cuánto gana cada uno hasta llegar a él. Trae las dos credenciales ("yo lo que estudié fue economía en Venezuela") y la objeción "esto tiene que ser un negocio de ricos". |
| **El argumento completo, sin utilería** | `ig-012` | 427.544 views · **1,764%** · 88 s | "el peor error que puede cometer un latino": empresario vs obrero, déficit de casas, 4 meses/60 días/40%, Amanda, y el CTA de "clase". Si sólo se puede pegar uno, es este. |
| **Voz de manifiesto / frase suelta** | `ig-052` | 74.830 views · 1,266% · 63 s | "Compra terrenos en silencio…" + "yo ni siquiera sé clavar un clavo" + "es como jugar al ajedrez". Es el más citable del corpus. |
| **Desglose de costos a cámara** | `ig-004` | 1.628.883 views · 0,078% · 60 s | el molde numerado ("1, pagué… 2, la limpieza…"). Ojo: **peor tasa de comentarios del top de views**; sirve como molde de estructura, no de CTA. |
| Desglose con las 3 advertencias | `ig-026` | 205.419 views · 0,681% · 52 s | "Nunca compres una casa sin antes revisar estas 3 cosas" + el tartamudeo firma "el resto, el resto me lo dio el banco". |
| **Comparación pobres/ricos** | `ig-002` | 2.418.616 views · 0,531% · 45 s | el hook de 2,4M, con el mini-sketch del banco adentro y el CTA de palabra clave. |
| Argumento de venta directo a cámara | `ig-009` | 516.611 views · **1,944%** · 51 s | "la peor forma de comprar una casa es la más popular". La mejor tasa de comentarios de todo lo que pasó las 500k views. |
| Pieza de posicionamiento | `ig-084` | 43.007 views · 0,116% · 41 s | "Una verdadera paradoja": el negocio de la construcción no necesita que seas el constructor. Argumento puro, sin CTA — por eso la tasa baja. Sirve de párrafo, no de reel. |

---

## Léxico observable en los briefs de ClickUp (NO confirmado como habla)

Se mantiene de la versión anterior de este archivo. Sale de títulos de tarea
(`content_edit_task`, `fuentes/catalogo.csv`), o sea **briefs escritos**, no
habla literal. Sirve para elegir temas, no para calcar tono. Ahora que hay audio,
varias de estas líneas **quedaron confirmadas** contra los reels y se marca cuál.

| Expresión | Ejemplo verbatim del brief | ¿Confirmado en audio? |
|---|---|---|
| "terreno" (no "lote", no "parcela") | "Compre este terreno en $8k" | ✅ 158 veces, 65 reels · el de $8k es ig-042 |
| "desglose completo" | `Pagué 276.000 por construir esta casa y este es el desglose completo.` (frase del brief, no dicha así) | ⚠️ el molde existe pero la frase del brief no: **"Pagué 700000 dólares por construir esta mansión y aquí está el desglose completo"** (ig-004). Con la casa de 276.000 dice **"y el desglose es el siguiente"** (ig-021, ig-062). El brief mezcla las dos. |
| "los pobres / los ricos" como eje | "Los pobres compran carros de año para aparentar que tienen dinero. Los ricos," | ✅ ig-002, ig-014, ig-049 |
| "Oye banco…" (diálogo con el banco) | "oye banco quiero hacer esto tu me prestas" · "Hola Banco mira, quiero comprar un terreno que cuesta 100k dolares pero yo no los tengo ¿Tú me los prestas" | ✅ pero **en cámara dice "Aló, banco"**, no "Oye banco" / "Hola banco" (14 "aló" en 7 reels). El brief y la boca no coinciden: manda la boca. |
| "Vecino" como interlocutor | "Oye Vecino está bonita su casa nueva ¿Cuánto le costó construirla?" | ❌ `vecino` como vocativo no aparece en los 85 reels |
| "en EEUU" / referencias a estados | "Cuales son los 5 mejores estados para invertir en EEUU" | ✅ 6 reels con el ranking de estados; dice **"Estados Unidos"** entero (80 veces), nunca "EEUU" |
| Cifras en dólares con punto de miles | "Pagué 400.000", "$8k", "650 puntos de credito" | ⚠️ en audio dice "700 puntos", no 650 (13 reels). Verificar cuál es el número real. |
| Registro crudo, sin filtro corporativo | "…y luego véndela al público, porque lo que no se puede ver no se puede joder" | ⚠️ en cámara lo suavizó: "porque **lo que no se puede ver, no se puede fastidiar**" (ig-052). **Manda la versión suave.** |

## Lo que falta

- **El VSL y los 5 videos de `/ty-page`.** Es él vendiendo largo, y es otro
  registro que ninguno de estos 85 reels cubre. Bloqueados por los players
  ConverteAI/VTurb. Es la fuente más valiosa que sigue faltando.
- **Cómo habla cuando no está actuando.** Los 85 reels son piezas producidas y
  guionadas: no hay live, no hay podcast, no hay Q&A. Todo lo de arriba describe
  su **voz de contenido**, y no hay material para separar un registro de
  nutrición como sí se pudo en Gocho.
- **Precio, garantía y nombre de la oferta:** `SIN DATO`, y en 18.146 palabras
  **no dice ninguno de los tres**. Sigue viniendo de `oferta.md`.
- **Verificar contra video, sin excepción:** todos los montos, los nombres de los
  alumnos (Amanda, Rafael, Mateo, Brandon, Ricardo, Andrés, Álvaro — ig-044), el
  puntaje de crédito (700 vs 650), el "método 4-60-40" (dicho una sola vez,
  ig-039) y el "déficit de 4000000 de casas" (ig-012).
- **Cómo firma / cómo quiere que lo llamen.** En cámara nunca se nombra. El único
  "Ramón" del corpus está en boca de otros personajes (ig-018, ig-044, ig-056,
  ig-097). "Lord Ramón" no lo dice nunca. `SIN DATO`.
- **Testimonios en video de `/ty-page` (17):** sirven para `audiencia.md`, no
  para voz.

### Ya no es `SIN DATO`: el CTA hablado

La versión anterior de este archivo marcaba el CTA como desconocido (la bio se
cortaba en "💬 Envíame la palabra"). Resuelto por los captions, que son fuente
no-ASR: las palabras que pide son **CONSTRUIR** (49 reels), **CLASE** (14),
**ESTUDIANTE** (7), **CONSULTA** (2), y sueltas TERRENO, BANCO, CASA, NEGOCIO,
RENTA, GUIA, PROGRAMA. Lo que recibe quien comenta: una **consulta/consultoría
1 a 1 "conmigo y con mi equipo"** o una **clase privada "de la A a la Z"**.
