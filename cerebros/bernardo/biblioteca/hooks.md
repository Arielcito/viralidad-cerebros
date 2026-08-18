# Hooks — Bernardo Jurado

> Los primeros 3 segundos de cada video transcripto, agrupados por **estructura**
> (no por tema) y medidos con views/likes/comments reales de la API. Estructura
> es lo que se calca en una pieza nueva; tema es lo reemplazable.

## Método — leer antes de usar cualquier número de acá

| | |
|---|---|
| Reels con hook medido | **88** de `@juradonegocios` — los mismos 88 de `voz.md` |
| Excluido | `ig-100` (1 archivo de 89 en `fuentes/transcripciones/`): reel de **Víctor Heras**, no es voz de Bernardo |
| Comando de conteo | `grep -c . cerebros/bernardo/fuentes/transcripciones/ig-*.md \| wc -l` → 89 líneas (88 útiles) |
| Suma de views (88 transcriptos) | **186.915.417** (suma del campo `views:` en los 88 frontmatters, verificado 1 a 1 contra `catalogo-instagram.csv`, 0 discrepancias) — distinto de la suma del catálogo completo (200 filas, **204.234.937**, `csv.DictReader` en Python — ⚠️ `awk -F, '{s+=$7}'` da 203.714.642, un número **falso**: las captions del CSV tienen comas adentro de las comillas y `awk -F,` corta ahí, corriendo la columna `views` para varias filas. No usar `awk -F,` sobre este archivo, usar un parser de CSV real): el catálogo trae **111** posts más que todavía no están transcriptos (200 filas − 89 archivos en `fuentes/transcripciones/` incluyendo `ig-100`, que sí está transcripto aunque se excluya de todo conteo de voz por ser de Víctor Heras) |
| Suma de comentarios (88) | 256.117 |
| Mediana de views (88) | **743.016** — línea de base para leer las tablas de abajo |
| Mediana de com/1k (88) | **1,15** — línea de base |
| Ventana | 2026-04-07 (`ig-018`) → 2026-08-12 (`ig-068`) |

**Qué es `com/1k`:** comentarios cada 1.000 views. Es el proxy de llenado del
ManyChat (ver `voz.md`). Views manda alcance; com/1k manda conversación. Un
reel puede ganar en una columna y perder en la otra — pasa seguido acá abajo.

**El campo "Hook (0-3s)" es un recorte automático** (primera oración del ASR) y
había que verificarlo contra el transcript en los 88. Resultado: **coincide en
los 88 de 88.** Deepgram corta bien en la pausa real que hace Bernardo después
de la 1ª frase — no hizo falta corregir ni un hook. Es medible porque Bernardo
casi nunca abre con una oración compuesta larga: la mediana de la 1ª oración es
10,5 palabras (`voz.md`).

⚠️ **Es ASR.** Ninguna cifra dicha en un hook (edades, montos, porcentajes) es
un dato verificado — entra como "dicho en `ig-NNN`, SIN VERIFICAR". Las views,
likes y comments sí son de la API y son duros.

---

## 1 — Estructuras, medidas

Cada uno de los 88 hooks se clasificó en **una sola** estructura por su primera
frase. Mediana de views y de com/1k por grupo (no promedio: acá adentro hay
reels de 23,9M y de 258k, un promedio lo arruina un solo viral). Cuando el
com/1k del grupo sale mayormente de un reel, va la advertencia al lado —
n pequeño se contamina fácil con un solo hit, es la misma trampa que ya
apareció en el cerebro de Gocho.

| Estructura | n | Mediana views | Mediana com/1k | Ojo |
|---|---|---|---|---|
| **Lista sin cifra, arranca en "1," / "Número 1,"** | 8 | **2.374.086** | 1,2 | `ig-001` (23,9M) es el 57% de los comentarios del grupo, pero sacándolo la mediana de views de los 7 restantes sigue en 2,3M — no es sólo ese reel |
| Devocional — fórmula "Satanás hará todo lo posible" (repost, 8 reels del mismo guion) | 8 | 2.184.810 | 1,4 | dispersión 16,8× dentro del mismo guion (`voz.md`); usar el guion, no un reel puntual, como prueba de estructura |
| **Imperativo / orden directo** | 12 | 1.485.078 | 1,4 | `ig-002` ("No te metas con la ex…") es el 57% de los comentarios del grupo — el guion más repostado de la cuenta (4 veces) tira del número |
| Anuncio propio ("voy a…", "tiro un facto y me voy") | 3 | 1.306.172 | 0,5 | **n=3 y 97% de los comentarios son de `ig-003`.** Es material, no patrón — un solo dato, aunque sea el 3er reel más visto de la cuenta |
| Paralelismo hombre / mujer ("el hombre X, la mujer Y") | 4 | 1.214.437 | **0,5** | 82% de los comentarios son de `ig-015`. Buen alcance, el peor com/1k de todos los grupos con n≥4 |
| Cifra explícita al frente ("5 hobbies que…", "7 señales de…") | 10 | 555.562 | 1,3 | — |
| Condicional "Si… / Cuando…" | 11 | 952.920 | 0,7 | el mejor com/1k individual de todo el corpus (`ig-045`, 5,7) vive acá, pero la mediana del grupo es baja: el resto del grupo no llega |
| Corrección de lenguaje ("en español decimos X, en poesía Y" / "no digas X, di Y") | 5 | 440.544 | 1,1 | 74% de los comentarios son de `ig-025` |
| Ley con nombre propio ("Ley de Murphy.", "Ley de Pareto.") | 3 | 404.943 | 2,3 | **n=3 y 90% de los comentarios son de `ig-006`.** Material, no patrón todavía |
| Pregunta directa | 5 | 763.912 | 0,8 | dos reels (`ig-005`, `ig-038`) son el 90% de los comentarios del grupo |
| Sentencia declarativa / aforismo suelto | 7 | 360.472 | 0,9 | el grupo de menos alcance |
| Devocional — otras (sin la fórmula fija de Satanás) | 4 | 646.580 | **3,8** | n=4, y 3 de los 4 (`ig-052`, `ig-056`, `ig-064`) están entre 3,6 y 4,7; el 4º (`ig-049`) da 0,3. No alcanza para regla, pero es la única familia con com/1k por encima de 3 en más de un reel |
| Atribución a un autor ("Maquiavelo dijo…", "Sócrates dijo…") | 7 | **384.533** | **0,5** | el grupo de peor rendimiento en las dos columnas |
| Escena / anécdota histórica | 1 | 326.274 | 3,8 | **n=1** (`ig-086`, Diógenes). Un solo dato — no se puede sacar mediana de un reel, va acá para no perderlo |

**Total: 88.** (`8+8+12+3+4+10+11+5+3+5+7+4+7+1 = 88`)

### Lo que no es obvio hasta que se mide

1. **Arrancar en "1," sin decir cuántos hobbies/señales hay rinde 4,3× más views
   que anunciar la cifra primero** (2.374.086 vs 555.562 de mediana, mismo
   formato de lista numerada, la única diferencia es si la 1ª frase dice "5
   hobbies que…" o directo "1, ve al cine solo"). Es contraintuitivo — la
   sabiduría de ads dice "promete el número arriba" — y acá pasa lo contrario.
   No hay forma de aislar si es el enganche mismo o que a Bernardo el ASR le
   corta distinto una lista sin cifra (entra más rápido en el 1er ítem, sin la
   frase-título de por medio) — pero el patrón se repite en los tres pares
   directamente comparables (`ig-001`/`ig-026` "1, ve al cine solo" vs
   `ig-007`/`ig-063` "5 hobbies…"): siempre gana la versión sin cifra.

2. **Atribuir la idea a un autor de entrada es la peor estructura de las 14,
   y hay un par que lo prueba con el mismo contenido.** `ig-014` abre "Nunca
   juegues limpio en un juego donde otros hacen trampa" (sin atribución) y
   tiene **3.128.160 views**. `ig-067` es la misma idea — "Maquiavelo dijo,
   nunca juegues limpio en un juego donde los otros hacen trampas" — y tiene
   **461.949**, 6,8× menos. No es una coincidencia de fecha: `ig-014` es de
   mayo y `ig-067` de julio, el mes con mejor mediana general (`voz.md`), así
   que si algo el sesgo de fecha favorecía a `ig-067` y aun así perdió.
   **Regla para escribir: la idea va sola arriba, el nombre del filósofo va
   después (o no va).**

3. **La familia "devocional sin la fórmula fija" (n=4) es la única con com/1k
   consistentemente arriba de 3** — mejor que la fórmula repetida de Satanás
   (1,4) y mucho mejor que cualquier otra estructura. Con n=4 no es regla
   todavía, pero es la pista más fuerte de dónde probar el próximo hook.

4. **El hook más raro de la cuenta ("Tiro un facto y me voy.", `ig-003`) no se
   puede generalizar:** es 1 solo reel con 97% de los comentarios de su propio
   grupo. Vale como ejemplo de voz, no como fórmula que "funciona".

---

## 2 — Los hooks que más convierten a comentario (top 15 de 88 por com/1k)

Para llenar el ManyChat, este ranking manda sobre el de views.

| # | Hook, verbatim | Views | Com/1k | Estructura |
|---|---|---|---|---|
| `ig-045` | "**Si la leche se corta y se transforma en yogurt, y el yogurt vale mucho más que la leche.**" (`ig-045`) | 952.920 | **5,7** | Condicional |
| `ig-056` | "**El diablo conoce tu nombre, pero él te llamará por tu error.**" (`ig-056`) | 592.473 | 4,7 | Devocional (otras) |
| `ig-047` | "**1, disciplina.**" (`ig-047`) | 825.811 | 4,0 | Lista sin cifra |
| `ig-038` | "**¿Perdiste esa relación que querías?**" (`ig-038`) | 1.301.084 | 4,0 | Pregunta |
| `ig-064` | "**El diablo no puede tocar a los hijos de dios, pero sí puede distraerlos.**" (`ig-064`) | 500.772 | 4,0 | Devocional (otras) |
| `ig-075` | "**Ley de Pareto.**" (`ig-075`) | 404.943 | 3,9 | Ley con nombre |
| `ig-086` | "**Apártate.** Me estás tapando el sol, le dijo Diógenes." (`ig-086`) | 326.274 | 3,8 | Escena (n=1) |
| `ig-052` | "**Dios te mostrará este video justo antes de ser rico.**" (`ig-052`) | 700.687 | 3,6 | Devocional (otras) |
| `ig-071` | "**Satanás hará todo lo posible para que no escuches esto.**" (`ig-071`) | 431.847 | 3,6 | Devocional (Satanás) |
| `ig-066` | "**Cuando saludes a alguien, lo 1º que tienes que hacer es levantar las cejas.**" (`ig-066`) | 480.958 | 3,2 | Condicional |
| `ig-058` | "**No te metas con la ex de un amigo.**" (`ig-058`) | 580.636 | 2,8 | Imperativo (repost, la copia "perdedora" en views) |
| `ig-091` | "**A los cuarentas deberías ser lo suficientemente sabio para entender estas verdades psicológicas.**" (`ig-091`) | 304.100 | 2,8 | Sentencia |
| `ig-017` | "**Satanás hará todo lo posible para que no escuches esto.**" (`ig-017`) | 2.877.356 | 2,8 | Devocional (Satanás) — el mejor com/1k **con** alcance grande de toda la lista |
| `ig-060` | "**Las personas con estos 4 rasgos son de las más raras que existen, y la mayoría ni siquiera lo sabe.**" (`ig-060`) | 562.949 | 2,5 | Cifra al frente |
| `ig-015` | "Cuando un hombre descubre que su mujer le ha sido infiel, la 1º pregunta que sale de su boca es, **¿te acostaste con él?**" (`ig-015`) | 2.976.354 | 2,4 | Paralelismo hombre/mujer |

**Lectura:** 7 de los 15 son devocionales o de ley — el registro religioso/de
autoridad-con-nombre-de-ley convierte mejor que el resto, coincide con lo que
ya medía `voz.md` sobre el tema devocional en el cuerpo completo (2,6 com/1k
con CTA hablado, el mejor de los 5 temas).

**`ig-045` es el mejor hook Y el mejor cierre del corpus, en el mismo reel:**
el hook de la leche-yogurt-vino (arriba) y el CTA nombran el entregable —
"He preparado una guía con **3 pasos**, los 3 pasos más importantes para que
nadie te olvide cuando hablas. Comenta aquí la palabra jurado y te la mando."
(`ig-045`) — el mismo lead magnet que `voz.md` ya identificó como el que
duplica la tasa. Cuando las dos piezas (hook + CTA) están en su mejor versión
a la vez, da 5,7 com/1k: es el techo medido de la cuenta.

---

## 3 — Los hooks de más alcance (top 8 de 88 por views) — y por qué no alcanza con mirar esto solo

| # | Hook, verbatim | Views | Com/1k |
|---|---|---|---|
| `ig-001` | "**1, ve al cine solo.**" (`ig-001`) | 23.889.364 | 1,3 |
| `ig-002` | "**No te metas con la ex de un amigo.**" (`ig-002`) | 22.148.337 | 1,6 |
| `ig-003` | "**Tiro un facto y me voy.**" (`ig-003`) | 11.412.044 | 1,0 |
| `ig-004` | "**Si una persona te gusta por su cuerpo, eso se llama deseo.**" (`ig-004`) | 8.193.919 | **0,2** |
| `ig-005` | "**¿Cómo diferenciar un tonto de un imbécil?**" (`ig-005`) | 7.309.358 | 0,8 |
| `ig-006` | "**Ley de Murphy.**" (`ig-006`) | 6.869.978 | 2,3 |
| `ig-007` | "**5 hobbies que todos deberíamos tener en nuestra vida.**" (`ig-007`) | 6.004.433 | 1,7 |
| `ig-008` | "No te metas con la ex de un amigo." (`ig-008`) | 5.727.629 | 2,3 |

`ig-004` tiene el 4º más views de la cuenta y el **peor com/1k de todo este
top 8** (0,2 — 28× menos que `ig-045`, que tiene 8,6× menos views). Si el
objetivo es pauta/alcance, este ranking manda; si es ManyChat, manda la
tabla de arriba. Son dos objetivos y hoy `ig-004` sirve al primero, no al
segundo.

---

## 4 — CTA: cuál usa más vs cuál rinde mejor

Esto ya está medido con detalle en `voz.md` ("Lo que el cierre hace con los
comentarios"); acá va el resumen aplicado a la elección de hook + cierre.

| Cierre hablado | n | Com/1k |
|---|---|---|
| Pide comentar la palabra JURADO (genérico, sin nombrar el regalo) | 55 (el resto de los 60 que piden JURADO) | 1,5 |
| Sólo "sígueme aquí" | 26 | **0,2** |
| **Nombra el entregable** ("la guía con los 3 pasos…") | 5 | **4,0** |

**El CTA que más se usa no es el que mejor rinde.** "Sólo sígueme" es el 2º
cierre más usado de la cuenta (26 de 88 reels, casi un tercio) y es el que
peor convierte por lejos (0,2 com/1k). El cierre que más convierte —nombrar
el entregable— se usó sólo 5 veces. La brecha es de **20×** entre el peor y
el mejor cierre medido acá, y **8×** entre el genérico ("comenta jurado" a
secas, el más usado de los que sí piden algo) y el que nombra el regalo.

Verbatim del molde ganador, completo (`ig-045`, el mejor com/1k del corpus):

> "He preparado una guía con 3 pasos, los 3 pasos más importantes para que
> nadie te olvide cuando hablas. Comenta aquí la palabra jurado y te la
> mando." (`ig-045`)

---

## 5 — Fecha: ¿está inflado el ranking de arriba por una cuenta creciendo?

Chequeo obligatorio antes de creer cualquier "este hook rindió mejor". La
evolución mensual completa está en `voz.md` ("Evolución por mes"):

| Mes | Mediana views |
|---|---|
| 2026-04 | 2.029k (n=2, poca base) |
| 2026-05 | 747k |
| 2026-06 | 339k |
| 2026-07 | 826k |
| 2026-08 | 1.063k |

**No hay una curva de crecimiento limpia** — junio es el piso, no el arranque.
Los dos reels más vistos de la cuenta (`ig-001`, ago-2026, y `ig-002`,
jul-2026) son **recientes**, no del período de lanzamiento: si el efecto
fuera "cuenta chica con más alcance orgánico relativo", debería pasar al
revés. Esto **no descarta** que hayan sido pauta paga — sigue siendo
`SIN DATO` (ver abajo) — pero descarta la explicación más simple de "es
sólo una cuenta en crecimiento repartiendo más views por fecha".

Lo que sí es fecha, y ya está documentado en `voz.md`: la dispersión de
12×-38× entre reposts del mismo guion (`ig-001`/`ig-026`, `ig-002`/`ig-008`/
`ig-032`/`ig-058`) prueba que hay una variable fuerte fuera del hook mismo
—pauta, momento del feed, algo— y que ningún ranking de arriba se puede leer
como "este texto es 20× mejor que este otro texto".

---

## 6 — Qué falta para que esto sea más que material — `SIN DATO`

1. **Qué reels fueron pauta paga.** Es la pregunta que más cambiaría la
   lectura de §1 y §3 — la dispersión 38× en el mismo guion no se explica sin
   esto (`voz.md`).
2. **El hook visual de los 0-3s.** Todo esto es audio. Para `ig-001` (23,9M)
   e `ig-002` (22,1M) no sé si hay rótulo en pantalla, corte, o Bernardo a
   cámara fija — y es lo más valioso que falta para calcar el hook completo,
   no sólo el texto.
3. **Los grupos con n≤4** (Anuncio propio, Ley con nombre propio, Devocional
   otras, Escena, Paralelismo hombre/mujer) son material, no patrón todavía.
   Un patrón pasa a regla con 3+ piezas de buen rendimiento — varios de estos
   grupos tienen ese piso apenas, o menos. Hace falta más cosecha de esas
   estructuras específicas antes de escribirlas como fórmula fija.

---

## Conceptos de producción — 52 verbatim, jul-2026

⚠️ **Esto NO son hooks.** Son los títulos internos que el equipo escribe en
ClickUp para producir cada video, de **antes** de que hubiera métricas de IG
para esta cuenta. Hoy que §1-§3 ya miden estructura con views/comments reales,
esta lista sirve para tres cosas nada más: saber de qué habla el pipeline,
calcar la **forma** del ángulo, y elegir qué reel transcribir a continuación
si aparece uno nuevo. No sirve para copiar el texto hablado: nadie dice
"arriba : diogenes vs alejandro magno" a cámara — y de hecho ese concepto es
`ig-086`, ya transcripto y medido arriba (3,8 com/1k, escena de Diógenes).

Fuente: tabla `content_edit_task`, cuenta `bernardo`
(`f2aa594b-835d-45e4-b627-57156727e352`), 52 filas, `due_date` del 2026-07-01 al
2026-07-28, editor "Emilio" en las 52, ingesta `clickup_folder:901318169377`.
Sin views asociadas — la tabla no las tiene.

### Lista "Bernardo" (cuenta principal) — 31 filas

| Estado | Concepto verbatim |
|---|---|
| publicado | 10 habitos que debes dejar de hacer |
| publicado | 10 hobbies para ser mas inteloigente |
| publicado | 15 Reglas del hombre |
| publicado | 3 errores segun maquiavelo que te mantienen debil |
| publicado | 5 hobbies que todos deberiamos teenr |
| publicado | 5 leyes del universo que deberias conocer |
| publicado | 5 leyes para el éxito |
| publicado | 7señales de que un hombre maduró demasiado pronto |
| publicado | 8 señales de que eres insoportable |
| publicado | arriba : diogenes vs alejandro magno, ''Apartate! me estas tapando el sol'' le dijo Diogenes, un vagabundo, a Alejandro Magno, |
| publicado | como ser un hombre 10 de 10 |
| publicado | cuando un hombre descubre |
| publicado | directamente : el diablo conoce tu nombre ... |
| publicado | el idioma de los hombres |
| listo para publicar | en español decimos ... |
| publicado | en español decimos me gustas |
| publicado | en español decimos me haces feliz |
| publicado | las 4 frases mas valiosas de maquiavelo |
| publicado | las personas con estos 4 rasgos |
| publicado | Ley de Pareto |
| publicado | maquiavelo dijo, nunca juegues limpio en un juego |
| publicado | Nicholas Taleb dijo, ser odiado por idiotas es el precio que pagas por no ser uno de ellos... pero como sabes |
| publicado | nietszche dijo |
| publicado | no puedes odiar a todas las rosas |
| publicado | satanas el maligno hará todo lo posible para que no escuches esto, modificar los versiculos y decir el versiculo , cortitos solo |
| publicado | segun maquiavelo el poder pertenece |
| listo para publicar | si la leche se echa a perder.. |
| publicado | si quieres dejar de hablar como un niño de primaria, y hablar como los mejores, ... |
| publicado | tiro un facto y me voy |
| publicado | todas las teorias filosoficas explicadas en 1 minuto |
| publicado | todo hombre necesita un alter ego |

### Lista "Secundaria" — 21 filas

| Estado | Concepto verbatim |
|---|---|
| publicado | 3 libros que no quieren que leas |
| publicado | 3 trabalenguas para pronunciar mejor y que todo el mundo deje de preguntartee ''que dijiste'' ??? |
| publicado | a que nivel dejas de entenderme |
| publicado | bernardo como dirias esto |
| publicado | como dejar de decir muletillas ( recopilacion de muletillas - ahh - ehhh- yyy clips de gente ) |
| publicado | Como responder una pregunta que NO quieres respodner |
| publicado | CS POLICIA |
| publicado | cuando alguien te haga una pregunta trampa delante de otras personas, no titubees, responde asi |
| publicado | cuando un payaso se muda a un palacio |
| publicado | las manos cerradas x la postura abierta y ... |
| publicado | maquiavelo nos dice no te cases si eres pobre |
| publicado | necesitas un alter ego, pero que es? |
| publicado | no se dice ( con 2 columnas ) |
| publicado | palabras que haran que los demas piensen que eres un catedrático |
| publicado | por esta razon nadie te escucha cando hablas |
| listo para publicar | Si le vendes a gente rica |
| publicado | si quieres intimidar, mirale a ( zona del cuerpo), si quiers gustarle mirale a ( zona del cuerpo) , si quieres que te respeten x, si quieres seducir x s |
| publicado | si te llaman para robarte dinero responde asi : |
| publicado | socrates dijo |
| en edicion | top oradores con CEOS ( elon musk , mark zukerberg, bezzos, ... ) TRIALS REELS |
| publicado | usa estas preguntas para persuadir a cualquiera e influir en la mente de cualquiera |

**Nota sobre el reparto:** los nombres de lista son "Bernardo" y "Secundaria"
(fuente: `content_edit_task.account_handle` = 31 "Bernardo" + 21 "Secundaria", y
`import_log.source_label` = `clickup_folder:901318169377:Bernardo_Julio+Secundaria_Julio`.
Ojo: `src/lib/importers/clickup-importer.ts:140,284` **no** dice eso — sus
comentarios usan de ejemplo "Bernardo Secundaria_mayo", que es otra forma de
nombrar la sub-cuenta). Que "Secundaria" corresponda a
`@bernardojuradofacts` es lo lógico pero **no está escrito en ningún lado** —
pedido en `../fase-0-pedido.md`.

### Formas de ángulo que se repiten (cuenta cruda, sin views)

Se cuentan sobre los 52 conceptos. Sirve para pedir "dame 5 ángulos con la forma
de lista numerada". **No** dice cuál rinde mejor: eso lo mide §1 de arriba con
los 88 reels transcriptos.

| Forma | Veces | Ejemplo |
|---|---|---|
| Lista numerada ("N cosas que…") | 13 | "8 señales de que eres insoportable" |
| Cita atribuida ("X dijo…") | 8 | "maquiavelo dijo, nunca juegues limpio en un juego" |
| Instrucción condicional ("si X, hacé Y") | 7 | "si te llaman para robarte dinero responde asi :" |
| Corrección de lenguaje ("no se dice / en español decimos") | 5 | "en español decimos me haces feliz" |
| Escena / situación social a resolver | 4 | "cuando alguien te haga una pregunta trampa delante de otras personas, no titubees, responde asi" |
| Metáfora suelta | 4 | "cuando un payaso se muda a un palacio" |
