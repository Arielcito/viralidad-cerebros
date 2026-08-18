# Voz — Bernardo Jurado

> Cada regla lleva entre paréntesis el video del que salió (`ig-NNN` en
> `fuentes/transcripciones/`) o el conteo que la respalda. Regla sin fuente =
> regla borrada.

## Base de medición

| | |
|---|---|
| Reels transcriptos y leídos | **88** de `@juradonegocios` |
| Palabras | **14.708** |
| Ventana | 2026-04-07 (`ig-018`) → 2026-08-12 (`ig-026`) |
| Excluido | `ig-100` — es un reel de **Víctor Heras** (`@victorherasemprendedor`) hablando *sobre* Bernardo. No es su voz y contaminaba todos los conteos. No lo uses nunca como referencia de habla. |
| Sin transcribir | `@bernardojuradofacts`: **0 videos**. Todo lo de acá es la cuenta madre. |

Toda frecuencia va normalizada **cada 10.000 palabras** para que sea comparable
con los otros cerebros.

⚠️ **Es ASR (Deepgram).** Los giros de lengua son confiables. **Las cifras y los
nombres propios NO.** Ver la sección "Ruido de transcripción" antes de copiar
cualquier número o apellido de una transcripción a una pieza.

---

## El hallazgo que ordena todo lo demás: son dos voces, no una

El corpus se parte limpio en dos con este corte:

```
/((?:yo soy|mi nombre es|soy) bernardo jurado|si (?:tú )?quieres mejorar tu comunicación|si usted quiere mejorar su comunicación)/i
```

| | Palabras | % del corpus | Mediana por reel |
|---|---|---|---|
| **Cuerpo** (el contenido) | 11.838 | 80,5% | 134 palabras |
| **Cierre** (el CTA hablado) | 2.870 | **19,5%** | 34 palabras |

86 de 88 reels tienen cierre. Los dos que no: `ig-018`, `ig-078` (no dicen su
nombre en todo el audio).

**Casi una quinta parte de todo lo que Bernardo dice al año es el mismo cierre.**
Y las dos mitades no comparten léxico:

| Palabra | Cuerpo (11.838 pal.) | Cierre (2.870 pal.) |
|---|---|---|
| "comunicación" | **2** | **86** |
| "oratoria" | **0** | 22 |
| "escuchar / escuchan / escuche" | 3 en total | 15 |
| "yo" | 4 (3,4 /10k) | 57 (**198,6 /10k**) |
| "hombre / hombres" | 69 (58,3 /10k) | **0** |
| "Dios" | 28 (23,7 /10k) | **0** |

Leelo así: **el producto que vende no existe en el contenido.** En 11.838
palabras de cuerpo dice "comunicación" dos veces y "oratoria" cero. Habla de
hombres, de Dios, de miedo y de dinero — y recién en el segundo 55 aparece un
señor que dice que enseña oratoria. Eso no es un defecto de estilo: es la
decisión estructural más fuerte de la cuenta y hay que respetarla al escribir.
Una pieza nueva que hable de oratoria en el cuerpo **no suena a él**.

**Regla operativa:** cuerpo y cierre se escriben con reglas distintas. Todo lo
que sigue está separado por registro.

---

## Registro A — el cuerpo (11.838 palabras)

### Léxico propio, medido

Conteos sobre el cuerpo, normalizados /10k, y en cuántos de los 88 reels aparece.

| Palabra | Veces | /10k | Reels |
|---|---|---|---|
| hombre | 61 | 51,5 | 20 |
| vida | 40 | 33,8 | 49 |
| Dios | 28 | 23,7 | 15 |
| miedo | 26 | 22,0 | 17 |
| nunca | 24 | 20,3 | 16 |
| tiempo | 23 | 19,4 | 14 |
| mujer | 20 | 16,9 | 6 |
| dinero | 19 | 16,1 | 11 |
| mente | 18 | 15,2 | 11 |
| poder | 16 | 13,5 | 13 |
| "deja de…" | 15 | 12,7 | 7 |
| gente | 14 | 11,8 | 20 |
| éxito | 13 | 11,0 | 12 |
| silencio | 11 | 9,3 | 8 |
| energía | 9 | 7,6 | 7 |
| presencia | 8 | 6,8 | 7 |
| fuerte | 8 | 6,8 | 7 |
| reglas | 7 | 5,9 | 4 |
| respeto | 6 | 5,1 | 4 |
| autoridad | 6 | 5,1 | 6 |
| fe | 6 | 5,1 | 5 |
| contacto visual | 4 | 3,4 | 4 |
| **comunicación** | **2** | **1,7** | (54 reels, pero en el cierre) |
| **oratoria** | **0** | **0** | (22 veces, sólo en el cierre) |

El vocabulario del cuerpo es **hombre / vida / Dios / miedo / dinero / poder**.
No es el vocabulario de un profesor de oratoria; es el de un canal de
autosuperación masculina con capa devocional.

### Muletillas: no tiene. Y está verificado contra control

| Muletilla | Veces en 14.708 palabras |
|---|---|
| "o sea" | **0** |
| "bueno," (de arranque) | **0** — los 4 "bueno" del corpus son adjetivo ("el verdadero hombre bueno", `ig-092`) |
| "mira" | **0** |
| "ok" / "okay" | **0** |
| "eh" / "ehh" | **0** |
| "este," (relleno) | **0** |
| "fíjate" | **1** — "Fíjate bien, una persona va al…" (`ig-039`) |

Esto **podría** ser un artefacto del ASR, así que se corrió el mismo pipeline
(mismo Deepgram, misma extracción) sobre el corpus de control de Gocho —
`cerebros/gocho/fuentes/transcripciones/ig-*.md`, ~28.563 palabras:

| | Gocho (control) | Bernardo |
|---|---|---|
| "bueno" | 56 | 0 |
| "ok" | 32 | 0 |
| "mira" | 31 | 0 |
| "o sea" | 11 | 0 |

Método: `grep -oiw '<palabra>'` sobre `cerebros/gocho/fuentes/transcripciones/ig-*.md`
(90 reels), con `\b` de por medio — la trampa de "o sea" es que "no sea"
(negación + subjuntivo) contiene el substring "o sea" y hay que filtrarlo con
frontera de palabra, no sólo substring, o infla el conteo.

**El pipeline sí preserva muletillas.** Los ceros de Bernardo son reales. Es la
prueba dura de lo que su ficha de cliente sugería: es un tipo que enseña a no
tener muletillas y no las tiene. Al escribir para él, **cero relleno**: ninguna
oración arranca con "bueno", "mira" ni "o sea".

### Conectores que sí usa

El cuerpo empalma con **"porque"** (explicación causal inmediatamente después de
la afirmación) y con **yuxtaposición seca** — punto y otra oración, sin bisagra:

> "Mucha gente confunde estar cansado con estar avanzando. Se levantan temprano,
> trabajan sin parar, terminan agotados y aún así siguen pobres. ¿Por qué? Porque
> vivir ocupado no es lo mismo que construir riqueza." (`ig-036`)

Ese **"¿Por qué? Porque…"** es su bisagra retórica más reconocible.

### Ritmo, medido

| | |
|---|---|
| Duración mediana del reel | **70,5 s** (mín. 26, máx. 166) |
| Palabras por reel (mediana) | 161 (mín. 52, máx. 344) |
| **Palabras por minuto** | **132** — Gocho, mismo pipeline: 218 |
| Oraciones de cuerpo | 949; mediana **11 palabras**, media 12,5 |
| Interrogativas | 94 = **10%** de las oraciones del cuerpo |
| Primera oración | mediana **10,5 palabras** |

**132 palabras por minuto es lento.** Es un 40% más lento que Gocho. Oración
corta, pausa, oración corta. Si escribís un guion de 60 segundos para Bernardo,
son **~130 palabras**, no 200. Un guion denso lo obliga a acelerar y ahí deja de
sonar a él.

### Cómo abre (88 primeras oraciones, clasificadas)

| Molde de apertura | Reels | Ejemplo verbatim |
|---|---|---|
| Imperativo directo | 14 | "No te metas con la ex de un amigo." (`ig-002`, 22,1M) |
| Lista numerada arrancando en el ítem 1 | 12 | "1, ve al cine solo." (`ig-001`, 23,9M) · "Número 1, cuentas demasiado sobre tu vida." (`ig-022`) |
| Pregunta | 11 | "¿Cómo diferenciar un tonto de un imbécil?" (`ig-005`, 7,3M) |
| Cifra-promesa en la primera frase | 8 | "5 hobbies que todos deberíamos tener en nuestra vida." (`ig-007`, 6,0M) · "7 señales de que un hombre maduró demasiado pronto." (`ig-009`) |
| Condicional "Si…" | 8 | "Si una persona te gusta por su cuerpo, eso se llama deseo." (`ig-004`, 8,2M) |
| Atribución a un autor | 7 | "John Rockefeller dijo, quien trabaja todo el día no tiene tiempo para ganar dinero." (`ig-036`) · "Maquiavelo nos dice, dale amor a un hombre y cambiará una corona por un beso." (`ig-018`) |

Nunca saluda. Nunca se presenta al principio. **Cero reels abren con "hola",
"qué tal" o el nombre propio.** La primera oración mediana tiene 10,5 palabras y
ya es la tesis completa.

El hook más raro y más suyo, vale copiarlo tal cual como molde:

> "Tiro un facto y me voy." (`ig-003`, 11,4M views)

### Los cuatro moldes de cuerpo

1. **Letanía de imperativos sin desarrollo.** Una orden por oración, doce
   seguidas, sin transición. Es el molde de los dos reels más grandes de la
   cuenta (`ig-001` 23,9M, `ig-002` 22,1M).
2. **Lista numerada de señales.** "Número 1… Número 2…", cada ítem una regla de
   lectura de conducta masculina (`ig-021`, `ig-020`, `ig-053`).
3. **Sentencia de autor + glosa.** Cita atribuida, después tres o cuatro
   oraciones explicando qué significa para vos (`ig-036`, `ig-090`, `ig-097`).
4. **Devocional con estructura pregunta-respuesta.** "¿Tienes miedo? Refúgiate
   en el Salmo 91." (`ig-011`, 4,8M, 2,4 com/1k).

### Persona gramatical

**Tú, siempre.** "usted" aparece **8 veces en todo el corpus y las 8 están en el
cierre** (`ig-028`, `ig-029`, `ig-049`, `ig-050`, `ig-070`, `ig-072`, `ig-081`,
`ig-096`) — nunca en el cuerpo. El cuerpo es 100% tuteo neutro.

Y **el "yo" no existe en el cuerpo**: 4 casos en 11.838 palabras, y varios están
dentro de un diálogo de ejemplo, no hablando de sí ("Si yo quiero saber cuánto
gana el conductor de Uber…", `ig-066`). No cuenta anécdotas propias, no se
acredita, no dice "mis alumnos" (0 veces), ni "Capitán de Navío" (0), ni
"escuela naval" (0), ni "transustanciación" (0).

---

## Registro B — el cierre (2.870 palabras)

Acá aparece la primera persona de golpe: **198,6 "yo" cada 10.000 palabras**
contra 3,4 en el cuerpo.

### Los cinco moldes de cierre, verbatim

| # | Molde | Reels |
|---|---|---|
| **A** | "Yo soy Bernardo Jurado, y quiero ayudarte a transformar tu vida a través de la comunicación. Comenta aquí la palabra jurado, porque si no logras que te escuchen, estarás condenado a ser ignorado." (`ig-003`) | **45** |
| **C** | "Si quieres mejorar tu comunicación y oratoria, mi nombre es Bernardo Jurado. Sígueme aquí." (`ig-013`, `ig-036`) | **13** |
| **B** | "Yo soy Bernardo Jurado, y este 14 de julio voy a dar una clase en directo para ayudarte a cambiar tu vida y tu comunicación. Simplemente pon la palabra jurado…" (`ig-006`) | **14** |
| **D** | "Si usted quiere mejorar su comunicación oratoria, mi nombre es Bernardo Jurado. Sígueme aquí." (`ig-070`) | **8** |
| **E** | "Yo soy Bernardo Jurado. Si quieres mejorar tu comunicación oratoria, sígueme aquí." (`ig-004`) | **5** |

⚠️ **Corregido tras reproducir con grep/regex sobre los 86 cierres.** La tabla
traía C=18, y 45+18+14+8+5=90 — más cierres que los 86 reels que tienen
cierre, imposible si las categorías no se pisan. Reclasificando los 86 con los
fragmentos textuales de cada molde (aceptando variantes de ASR: "comunicación
giratoria"/"oral" por "oratoria", "Mi nombre es"/"Comienza aquí" como
sinónimos de apertura de A), el reparto real es A=45 · B=14 · C=**13** · D=8 ·
E=5 = 85, más **1 cierre que no calza en ninguno de los cinco moldes**:
`ig-073` — arranca "soy Bernardo Jurado, soy cardiólogo" y monta un caso
completo (antes/después de nombrar la profesión) antes de llegar al CTA de
JURADO. Es un outlier de estructura, no un error de conteo — 85+1=86, cierra
la cuenta.

Conteos duros de los componentes:

| Elemento | Veces |
|---|---|
| "jurado" (la palabra) | **150** — 102,0 /10k, en **87 de 88 reels** |
| "Yo soy Bernardo Jurado" | 56 |
| "Mi nombre es Bernardo Jurado" | 30 |
| "comenta aquí la palabra jurado" | 50 |
| "sígueme" | 26 |
| "condenado a ser ignorado" | 46 |
| "condenado a ser olvidado" | 9 |

### La copla de cierre — es su firma

54 de 88 reels terminan con una **condicional de amenaza rítmica**. Cuatro
variantes, textuales:

> "porque si no logras que te escuchen (correctamente), estarás condenado a ser
> **ignorado**." — 30 reels (`ig-003`)
> "porque si no eres capaz de hacer que la gente te escuche, estás condenado a ser
> **ignorado**." — 15 (`ig-009`)
> "y recuerda que si no haces que te recuerden, estarás condenado a ser
> **olvidado**." — 6 (`ig-041`)
> "Y recuerda que si no te haces notar, estás condenado a ser **olvidado**." — 4
> (`ig-001`)

El patrón es siempre el mismo: **si no [verbo de ser percibido], condenado a ser
[participio de invisibilidad]**. Es lo más citable que tiene. Cualquier cierre
nuevo se calca de ahí; no se "mejora".

### Confirmación del brief viejo

La ficha de cliente (`~/.claude/skills/reel-to-guion/clients.json`) traía este
CTA sin fuente de audio:

> "Si quieres mejorar tu comunicación y oratoria, mi nombre es Bernardo Jurado,
> sígueme aquí."

**Confirmado en audio**: aparece en 18 reels con esa forma exacta (molde C, p.ej.
`ig-013`, `ig-036`, `ig-005`) y "sígueme" en 26. La estructura que anotaba el
archivo viejo — **condición → nombre propio → pedido** — es real y medida. Deja
de ser hipótesis.

Lo que el archivo viejo **no** sabía: ese es el molde **secundario**. El
dominante (45 reels) invierte el orden a **nombre propio → promesa → pedido →
copla**.

---

## Lo que el cierre hace con los comentarios (esto es lo que vende)

Las views son de la API y son duras, pero **views altas no prueban que el
creativo sea bueno**: la cuenta creció y reparte más views por fecha. La métrica
que importa para llenar el ManyChat es **comentarios cada 1.000 views**.

| Cierre | n | Views (mediana) | **com/1k** |
|---|---|---|---|
| Pide comentar la palabra JURADO | 60 | 694k | **1,5** |
| Sólo "sígueme aquí" | 26 | 818k | **0,2** |
| No pide nada | 2 | 1.558k | 0,8 |

**Los reels que sólo piden seguir tienen MÁS views y 7 veces menos comentarios.**
La correlación views↔conversión es negativa acá.

Control de confusión por fecha (el CTA hablado empieza en junio, y junio-agosto
es otra era de la cuenta). Restringido a jun–ago: **pide n=60 → 1,7 · no pide
n=5 → 0,3**. El efecto sobrevive.

### El caption no mueve la aguja; la voz sí

Cruce 2×2 sobre los 88 (caption pide comentar × voz pide comentar):

| | Voz NO pide | Voz SÍ pide |
|---|---|---|
| **Caption NO pide** | n=27 → **0,2** com/1k | n=28 → **1,4** com/1k |
| **Caption SÍ pide** | n=1 → 1,1 | n=32 → **1,5** com/1k |

Con el caption callado, agregar el pedido **a la voz** multiplica los
comentarios por 7 (0,2 → 1,4). Con la voz ya pidiendo, agregar el pedido al
caption no mueve nada (1,4 → 1,5). *(El caption solo, sin voz, tiene n=1: no
alcanza para concluir sobre él.)*

**28 reels están desalineados**: la voz pide comentar JURADO y el caption sólo
dice "Sígueme en @juradonegocios". Entre ellos, `ig-002` — el segundo reel más
visto de la cuenta, 22,1M views. Es plata en la mesa y es un fix de copy, no de
creativo.

### El lead magnet nombrado convierte el doble

| Qué ofrece el cierre | n | com/1k |
|---|---|---|
| **"una guía con los 3 pasos más importantes para que nadie te olvide cuando hablas"** | 5 | **4,0** |
| "te mando mi newsletter" | 3 | 2,8 |
| "clase en directo del 14 de julio" | 14 | 1,8 |
| Sólo "comenta la palabra jurado" (sin objeto) | resto | 1,5 |

Verbatim del mejor (`ig-045`, 5,7 com/1k — el mejor del corpus entero):

> "He preparado una guía con 3 pasos, los 3 pasos más importantes para que nadie
> te olvide cuando hablas. Comenta aquí la palabra jurado y te la mando."

**Nombrar el entregable duplica largo la tasa.** "Comenta jurado" a secas es la
versión pobre de su propio CTA.

---

## Temas, con su rendimiento

Clasificación de los 88 por tema dominante del cuerpo.

| Tema | Reels | Palabras | Views (med.) | com/1k | com/1k **sólo con CTA hablado** |
|---|---|---|---|---|---|
| Listas de reglas / autosuperación | 44 | 6.115 | 1.345k | 1,3 | 1,5 (n=33) |
| Devocional / bíblico | 17 | 2.035 | 953k | 1,9 | **2,6** (n=10) |
| Pensador citado (Maquiavelo, Nietzsche, Sócrates) | 16 | 2.215 | 408k | 0,9 | 1,8 (n=10) |
| **Técnica de comunicación** | **7** | **1.022** | 441k | 1,3 | 1,8 (n=5) |
| Hombre vs mujer | 4 | 451 | 1.214k | 1,5 | 1,7 (n=2) |

Dos cosas: el **devocional convierte mejor que todo lo demás** (2,6 con CTA), y
**sólo 7 de 88 reels (7% de las palabras) hablan del tema que vende**.

---

## Devices de autoridad

Cómo se hace creer sin acreditarse nunca a sí mismo.

1. **Atribución a un nombre grande.** "Maquiavelo dijo…", "Sócrates dijo…",
   "John Rockefeller dijo…", "Nietzsche dijo, si te quedas solo por pensar
   diferente, entonces vas por el camino correcto." (`ig-090`). ⚠️ Los apellidos
   vienen del ASR y varios están rotos — ver abajo.
2. **La ley con nombre propio.** "Ley de Murphy", "Ley de Pareto", "Ley de
   Gilbert", "Ley de no decidir" (`ig-006`, 6,9M, 2,3 com/1k). Da el aura de
   sistema sin exigir credencial.
3. **La técnica con nombre técnico.** "Lo que tienes que utilizar es una técnica
   encantadora que se llama **elicitación**. La elicitación es una técnica de
   interrogadores profesionales." (`ig-066`)
4. **El dato numérico psicológico.** "Esto hace psicológicamente que la otra
   persona baje la guardia en un 60 por 100." (`ig-066`) — **cifra ASR, no
   verificada, no la uses como dato.**
5. **La negación de la objeción.** "No es pesimismo, es ingeniería." (`ig-006`) ·
   "no es egoísmo, no es falta de amor" (`ig-003`). Molde: **"No es X, es Y."**
6. **La escritura sagrada con capítulo y versículo.** "Refúgiate en el Salmo 91",
   "Isaías 40, 28 al 31" (`ig-011`). ⚠️ Las referencias bíblicas también son ASR:
   verificar cada una antes de publicar.
7. **La revelación amenazada.** "Satanás hará todo lo posible para que no
   escuches esto" — 8 reels con esta apertura, el mejor a 3,6 com/1k (`ig-071`).

---

## Qué NUNCA dice — con la evidencia de la ausencia

`grep` sobre las **14.708 palabras**. Todos estos dan **0**:

**Rioplatense y regionalismos** — confirma "español neutro" de la ficha:
`vos` 0 · `che` 0 · `boludo` 0 · `laburo` 0 · `tenés` 0 · `podés` 0 · `vaina` 0 ·
`chamo` 0 · `pana` 0 · `güey` 0 · `chido` 0

**Vocabulario de venta / infoproducto:**
`curso` 0 · `dólares` 0 · `garantizado` 0 · `garantía` 0 · `inversión` 0 ·
`agenda` 0 · `llamada` 0 · `cita` 0 · `webinar` 0 · `masterclass` 0 ·
`mentoría` 0 · `coach` 0 · `alumno`/`alumnos` 0

`precio` aparece 3 veces y **siempre en sentido metafórico** ("el precio que
pagas"), nunca comercial.

**Jerga corporativa / LinkedIn:**
`sinergia` 0 · `escalar` 0 · `hackear` 0 · `empoderar` 0 · `desbloquear` 0 ·
`LinkedIn` 0 · `podcast` 0

**Referencias a plataforma:**
`whatsapp` 0 · `link` 0 · `bio` 0 · `DM` 0 · `negocio` 0

Y por diferencia estructural, además: **no cuenta anécdotas propias, no se
acredita, no da cifras de resultado de alumnos, no menciona precio, y no nombra
su producto**. En 88 reels.

Prohibiciones fijadas por riesgo, no por transcript (ver `oferta.md`):

- Nada de "ingresos garantizados", "resultados garantizados", cifras de retorno.
- No mezclar la oferta B2B de Jurado Grupo Editorial (publicar tu libro) con el
  funnel de oratoria: son dos negocios distintos.

---

## Ruido de transcripción — leer antes de copiar cualquier cifra o nombre

Deepgram le hace dos cosas sistemáticas al audio de Bernardo:

**Ordinales convertidos a símbolo.** "1º" 24 veces, "2º" 8, "3º" 6 — es él
diciendo "**lo primero**", "**segunda cuestión**". Nunca lo escribas como "1º" en
un guion.

**Números que no son números.** "1 hobby" 13 veces = "**un** hobby". "por 100" 5
veces = "por **ciento**".

**Nombres propios destrozados.** Todos estos están mal en la transcripción:

| Como salió | Casi seguro es | Reel |
|---|---|---|
| "Lady Wilson" (3×), "Lady Gilbert", "Ley de Kittyn" | Wilson / Gilbert / **Kidlin** | `ig-006`, `ig-089` |
| "Maquiaveh" | Maquiavelo | `ig-093` |
| "Doftoyevski" | Dostoyevski | — |
| "Carol Weck" | Carol **Dweck** | — |
| "Morgan Hulson" | Morgan **Housel** | — |
| "Benjamin Frankl" | Benjamin Franklin | — |
| **"comunicación giratoria" (2×)** | **comunicación / oratoria** | `ig-005` |

**Regla dura:** ninguna cifra dicha en un reel y ningún apellido citado entra a
una pieza como dato. Entra como "dijo algo así, verificar contra el video".

---

## Repost masivo: por qué las views no miden el creativo

**31 de los 88 reels son repost de 11 guiones.** Quedan ~68 guiones distintos.
El mismo texto, dicho igual, en la misma cuenta:

| Guion | Reels | Views máx / mín | Dispersión |
|---|---|---|---|
| "No te metas con la ex de un amigo…" | `ig-002` `ig-008` `ig-032` `ig-058` | 22,1M / 581k | **38,1x** |
| "Satanás hará todo lo posible…" | 8 reels (`ig-011` `ig-012` `ig-017` `ig-019` `ig-028` `ig-071` `ig-081` `ig-096`) | 4,8M / 283k | 16,8x |
| "Ley de Murphy…" | `ig-006` `ig-089` | 6,9M / 314k | 21,9x |
| "1, ve al cine solo" | `ig-001` `ig-026` | 23,9M / 1,9M | 12,6x |
| "El idioma que manejamos los hombres" | `ig-020` `ig-021` `ig-053` | 2,5M / 688k | 3,6x |

`ig-002` (22,1M) e `ig-058` (581k) son **el mismo guion, la misma semana de
julio**, y difieren 38 veces en views. Cualquier lectura de "este hook hizo 22M,
copiémoslo" es ruido de distribución.

Y la contracara: `ig-058`, con 38 veces menos views, tiene **2,8 com/1k** contra
1,6 de `ig-002`. Para llenar el ManyChat, el "perdedor" ganó.

### Evolución por mes (contexto para leer cualquier número)

| Mes | n | Views (med.) | com/1k | % con CTA hablado |
|---|---|---|---|---|
| 2026-04 | 2 | 2.029k | 0,3 | 0% |
| 2026-05 | 21 | 747k | 0,2 | 0% |
| 2026-06 | 15 | 339k | 0,8 | 73% |
| 2026-07 | 37 | 826k | 1,6 | 97% |
| 2026-08 | 13 | 1.063k | 1,5 | 100% |

El salto de conversión es de junio y coincide exactamente con la aparición del
CTA hablado, no con las views.

---

## Ejes temáticos del pipeline de producción

Evidencia independiente de las transcripciones: 52 conceptos de video de julio
2026 (tabla `content_edit_task`, cuenta `bernardo`, 31 en la lista "Bernardo" y
21 en "Secundaria"). Sirve para elegir de qué habla.

| Eje | Ejemplos verbatim del pipeline | ¿Se confirma en el audio? |
|---|---|---|
| Filosofía aplicada | "las 4 frases mas valiosas de maquiavelo", "socrates dijo" | **Sí** — 16 reels (`ig-095`, `ig-097`, `ig-080`) |
| Poder y estrategia | "maquiavelo dijo, nunca juegues limpio en un juego" | **Sí** — `ig-014`, `ig-046`, `ig-067`, `ig-093` |
| Oratoria táctica | "como dejar de decir muletillas", "3 trabalenguas para pronunciar mejor" | **Apenas** — 7 de 88 reels |
| Manejo de situaciones sociales | "cuando alguien te haga una pregunta trampa delante de otras personas" | **Sí** — `ig-066`, `ig-029` |
| Listas de reglas para hombres | "15 Reglas del hombre", "todo hombre necesita un alter ego" | **Sí, es el eje #1** — 44 reels (`ig-001`, `ig-002`, `ig-051`) |
| Lenguaje / vocabulario | "en español decimos me gustas" | **Sí** — `ig-025`, `ig-078`, `ig-088`, `ig-070` |
| Anécdota histórica | "Diogenes vs Alejandro Magno, ''Apartate!…''" | **Sí** — `ig-086` abre literal con "Apártate." |
| Religioso / bíblico | "satanas el maligno hará todo lo posible…" | **Sí, y es el que mejor convierte** — 17 reels |
| Persuasión / ventas | "usa estas preguntas para persuadir a cualquiera" | Parcial — `ig-066` |

**Reparto de cuentas (sigue sin confirmar):** la lista "Secundaria" concentra la
técnica de oratoria pura y "Bernardo" la filosofía + reglas. No está confirmado
que "Secundaria" = `@bernardojuradofacts`. Pedido en `fase-0-pedido.md`.

---

## Ejemplos de anclaje

Diez fragmentos completos, textuales. El tono se contagia mejor con ejemplo largo
que con reglas. **No los edites** al reusarlos como referencia.

**1. Letanía de imperativos — el molde más grande de la cuenta**
`ig-002` · 2026-07-03 · 22.148.337 views · 35.298 com · 1,6 com/1k

> No te metas con la ex de un amigo. Vístete bien, no importa la ocasión. No
> ruegues por una relación. Nunca des la mano sentado. No dejes que las emociones
> te dominen. Mantén contacto visual. Habla menos. Aprende a hacer el dinero.
> Dile a tu madre que la amas. Cumple tu palabra. No culpes a los demás, hazte
> responsable de tu vida. Aprende a estar solo, ponte en forma, habla con
> seguridad, no desperdicies tu tiempo.
>
> *Yo soy Bernardo Jurado, y quiero ayudarte a transformar tu vida a través de la
> comunicación. Comenta aquí la palabra jurado, porque si no logras que te
> escuchen, estarás condenado a ser ignorado.*

**2. Devocional pregunta-respuesta — el mejor conversor por tema**
`ig-011` · 2026-07-22 · 4.750.378 views · 2,4 com/1k

> Satanás hará todo lo posible para que no escuches esto, porque sabe que la
> palabra de dios te da fuerza, te levanta y lo derrota a él, pero aún así tú vas
> a recibir lo que él no quiere que tengas. ¿Tienes miedo? Refúgiate en el Salmo
> 91. ¿Te sientes triste o perdido? Jesús te consuela en Juan 14. ¿Te sientes
> tentado? Ora con el Salmo 141. ¿Pero estás ansioso? Ah, Salmo 34. ¿Sientes que
> ya no puedes más? Recarga tus fuerzas, con Isaías 40, 28 al 31. […] Úsalo como
> tus armas espirituales cada día.

⚠️ Todas las citas bíblicas son ASR — verificar capítulo y versículo.

**3. Sentencia de autor + glosa — el "¿Por qué? Porque…"**
`ig-036` · 2026-04-30 · 1.333.942 views · 0,1 com/1k (sin CTA hablado)

> John Rockefeller dijo, quien trabaja todo el día no tiene tiempo para ganar
> dinero, porque mucha gente confunde estar cansado con estar avanzando. Se
> levantan temprano, trabajan sin parar, terminan agotados y aún así siguen
> pobres. ¿Por qué? Porque vivir ocupado no es lo mismo que construir riqueza. Si
> tú estás todo el día resolviendo cosas pequeñas, obedeciendo horarios y
> cambiando tu tiempo por dinero, no estás ganando de verdad, estás sobreviviendo
> con apariencia de productividad. A mucha gente le enseñaron a admirar al que
> más trabaja, no al que mejor piensa, y por eso pasan la vida entera sudando por
> dinero que nunca termina siendo suyo.
>
> *Si quieres mejorar tu comunicación y oratoria, mi nombre es Bernardo Jurado.
> Sígueme aquí.*

**4. Técnica de comunicación real — el único reel largo del tema que vende**
`ig-066` · 2026-06-07 · 480.958 views · 3,2 com/1k · 265 palabras

> Cuando saludes a alguien, lo 1º que tienes que hacer es levantar las cejas.
> Esto hace psicológicamente que la otra persona baje la guardia en un 60 por
> 100. […] Lo que tienes que utilizar es una técnica encantadora que se llama
> elicitación. La elicitación es una técnica de interrogadores profesionales. Tú
> lo que realizas es una afirmación con cierta autoridad. Por ejemplo, vas en el
> coche con el conductor de Uber y dice, estarás contento, ¿no? Porque ahora ha
> salido en las noticias que el Ministerio ha aprobado que los conductores de
> Uber cobren un 30 por 100 más. Y el conductor va a decir, ¿qué? ¿De qué noticia
> hablas? Si yo gano 1200 euros al mes. No me ha dicho nadie nada. De forma que,
> sin preguntarte cuánto gana, ya te lo ha dicho.

⚠️ Este reel dice "**euros**", "**Ministerio**", "**coche**". Es español de
España, no neutro, y no coincide con el registro del resto. Ver "Autoría" abajo.

**5. Maquiavelo / poder**
`ig-014` · 2026-05-08 · 3.128.160 views · 0,5 com/1k

> Nunca juegues limpio en un juego donde otros hacen trampa. La justicia es un
> arma inventada por los débiles para contener a los fuertes. El hombre que se
> aferra a las reglas mientras otros conspiran contra él no es noble, es una
> presa. En la política, la guerra y el poder, quien hace trampa 1º termina
> escribiendo la ley, y la ley siempre favorece al vencedor. Enfrentar la
> traición con honestidad es entrar a la batalla desarmado. […] La historia de
> los gobernantes no la escribe el jugador más justo, sino el que ganó a
> cualquier costo. Una vez que ganas, nadie se atreve a llamarlo trampa. ¿Lo
> llaman estrategia?

**6. Hombre vs mujer, con el hook más suyo**
`ig-003` · 2026-07-23 · 11.412.044 views · 1,0 com/1k

> Tiro un facto y me voy. Cuando el mundo de un hombre se está cayendo a pedazos,
> su 1º instinto es alejar a la mujer que más ama. […] A ese hombre le enseñaron
> que no puede romperse, que tiene que poder con todo y, cuando no puede, siente
> vergüenza. Él prefiere hundirse solo antes que arrastrarte con él, y no es
> egoísmo, no es falta de amor, Es el autosabotaje más triste que tenemos la
> mayoría de los hombres. Soltar la única mano que te estaba sosteniendo creyendo
> que así te protege.

**7. Ley con nombre propio**
`ig-006` · 2026-07-07 · 6.869.978 views · 15.492 com · 2,3 com/1k

> Ley de Murphy. Si algo puede salir mal, saldrá mal. No es pesimismo, es
> ingeniería. El que gana no reza para que salga bien. Elimina todas las formas
> posibles de que salga mal. Ley de no decidir. Si no hace falta tomar una
> decisión, no la tomes. Cada decisión inútil gasta la misma energía que una
> importante y llegas vacío a las que de verdad deciden tu vida. […] Ley de
> Kittyn, si escribes tu problema de manera clara y concreta, ya tienes la mitad
> del resultado. Lo que te bloquea no es el problema, es tenerlo en tu cabeza
> hecho una bola y sin nombre.

⚠️ "Kittyn" y "Lady Wilson" son ASR roto. Verificar los nombres.

**8. Lista numerada de señales**
`ig-021` · 2026-07-24 · 2.429.713 views · 0,4 com/1k

> El idioma que manejamos los hombres. Número 1, cuando un hombre se te queda
> mirando fijo durante un tiempo largo, está viendo más allá de lo que muestras.
> Número 2, cuando un hombre está enojado, da un abrazo muy fuerte. Número 3,
> cuando un hombre pide perdón sin haber tenido la culpa, está priorizando el
> amor antes que su orgullo. […] Número 6, cuando un hombre te dice que no hables
> con esa persona, es porque ya descubrió las verdaderas intenciones que esa
> persona tiene contigo.

**9. "No digas X, di Y" — el molde de lenguaje, el más corto del corpus**
`ig-070` · 2026-05-23 · 440.544 views · 58 palabras

> No digas pienso, di yo creo. No digas disculpa la molestia, di gracias por tu
> tiempo. No digas lo voy a intentar, di voy a ejecutar la estrategia. No digas
> tenemos un problema, di, tenemos un reto. No digas, más o menos, di
> parcialmente.
>
> *Si usted quiere mejorar su comunicación oratoria, mi nombre es Bernardo
> Jurado. Sígueme aquí.*

**10. Devocional + trabajo — y el mejor cierre medido del corpus**
`ig-052` · 2026-08-05 · 700.687 views · 3,6 com/1k

> Dios te mostrará este video justo antes de ser rico. La fe no es superstición
> ni un amuleto de buena suerte para esperar millonadas caídas del cielo mientras
> te quedas de brazos cruzados. Dios no bendice la pereza. Dios bendice la
> acción, el trabajo honesto, la disciplina y la capacidad de levantarte a
> construir todos los días. […] Deja de buscar atajos milagrosos y atajos fáciles
> en las redes sociales. Ponte de pie. Trabaja con excelencia.

Y el cierre con mejor tasa de todo el corpus (`ig-045`, 5,7 com/1k):

> He preparado una guía con 3 pasos, los 3 pasos más importantes para que nadie
> te olvide cuando hablas. Comenta aquí la palabra jurado y te la mando.

---

## Autoría del material — bandera amarilla

Hay señales de que buena parte del cuerpo **no está escrito por él**:

- **`ig-066`** dice "euros", "Ministerio", "coche", "de forma que" — español
  peninsular, no neutro. El resto del corpus es neutro.
- **`ig-099`** ("La frase más poderosa que he conocido en mi vida es la
  siguiente…") es material de *Un Curso de Milagros* — "Espíritu Santo,
  ayúdame a ver esto de una manera distinta". Registro ajeno al resto.
- 31 de 88 reels son repost de 11 guiones, y los guiones de listas de reglas
  ("No te metas con la ex de un amigo") circulan idénticos en decenas de cuentas
  de autosuperación masculina.

Esto **no cambia** cómo hay que escribir para él — el corpus es lo que la
audiencia escuchó y es la voz de la cuenta. Pero significa que "su voz" en el
cuerpo es en buena medida **voz de formato**, y la voz que es indiscutiblemente
suya vive en el cierre. Si hay que elegir dónde ser fiel, es en el cierre.

---

## Cómo escribir para Bernardo — resumen operativo

1. **Cuerpo: 130 palabras para 60 segundos.** Oraciones de 11 palabras. Nada de
   muletillas.
2. **Abrí con la tesis, sin saludo, sin nombre.** Imperativo, número 1, o
   pregunta. 10 palabras.
3. **El cuerpo no habla de oratoria.** Habla de hombre, vida, Dios, miedo,
   dinero, poder.
4. **Tú, nunca usted, nunca vos.** Cero primera persona en el cuerpo.
5. **Cerrá con el molde A completo**, textual, incluida la copla de condena.
6. **Nombrá el entregable** ("la guía con los 3 pasos para que nadie te olvide
   cuando hablas") — duplica la tasa de comentarios contra "comenta jurado" pelado.
7. **Alineá el caption con la voz.** Si la voz pide JURADO, el caption pide
   JURADO. Hay 28 reels donde no pasa.
8. **Ninguna cifra ni apellido de una transcripción va a una pieza sin verificar
   contra el video.**

---

## Lo que este corpus NO puede medir — SIN DATO

Pedir esto al cliente / a la agencia:

1. **El hook visual de los 0-3 s.** Las transcripciones son sólo audio. No sé si
   hay rótulo en pantalla, B-roll, si habla a cámara o en voz en off. Para
   `ig-001` y `ig-002` (23,9M y 22,1M) esto es lo más valioso que falta.
2. **Qué reels fueron pauta paga.** Sin esto, la dispersión 38x de views en el
   mismo guion no se puede explicar. Es la pregunta #1.
3. **Retención y % de reproducción.** Sin retención, "duración mediana 70,5 s"
   no dice si conviene alargar o acortar.
4. **Autoría de los guiones.** ¿Los escribe él, un guionista, o son guiones que
   circulan? Cambia cuánta libertad hay para escribirle material nuevo.
5. **Precio, nombre y contenido del programa pago.** El corpus tiene 0
   menciones de precio, curso, o nombre de producto. `oferta.md` sigue con el
   precio en SIN DATO.
6. **Cómo suena en pieza larga.** Todo esto son reels de 26-166 s. No hay ni una
   clase, live, VSL o conferencia transcripta. **No se puede escribir un VSL con
   este cerebro** — no sé cómo argumenta cuando tiene 20 minutos.
7. **`@bernardojuradofacts`: 0 transcripciones.** Si es la cuenta de técnica de
   oratoria pura, es exactamente el registro que falta y el que más se parece a
   lo que vende.
8. **Qué pasó con la "clase en directo del 14 de julio".** 14 reels la
   empujaron. No hay dato de asistencia ni de si se repite.
9. **Si "Capitán de Navío" y "Transustanciación Comunicativa" son de él.** La
   landing (`https://juradoacademia.com/`) los usa en primera persona, pero
   `fase-0-pedido.md` #12 sigue sin respuesta y **en 14.708 palabras habladas no
   dice ninguna de las dos, ni una vez**. Tratalos como copy de marca, no como
   léxico hablado.
