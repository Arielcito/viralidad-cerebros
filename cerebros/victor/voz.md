# Voz — Víctor Heras

Base: **80 reels de Instagram transcriptos, 17.705 palabras.** Fuente: audio de IG
pasado por Deepgram nova-2 (`fuentes/transcripciones/`). El catálogo tiene 240
reels cosechados (`fuentes/catalogo-instagram.csv`, 2022-09-08 → 2026-08-12); los
80 transcriptos son los de más views.

**Advertencia sobre la fuente.** Es ASR. Los giros de lengua son confiables — el
ASR no inventa un "vete por la sombra" que no se dijo. **Las cifras y los nombres
propios no lo son.** En este corpus el reconocedor escribió "el logo de Wall
Street" por *el Lobo de Wall Street* (ig-009), "por construye" por *Lord
Construye* (ig-079), "abrir Claudia" por *abrir Claude* (ig-054), "la agencia
PostMi / Posmi / PostMean / Teo de la agencia" por *PostMe* (7 reels), "2.2
billones de visitas" (ig-014) y "67.000.000.000 de euros" (ig-049) donde el orden
de magnitud es directamente ilegible. **Ninguna cifra de este archivo se cita en
una pieza sin verificar contra el video.**

Cuánto de problema es, medido: hay **639 tokens numéricos en 76 de los 80 reels**,
y **91 de ellos son números de 6 dígitos o más**, casi todos redondos
(`100000`, `1000000`, `200000`). Cuando el ASR sí intentó un número no redondo
salió esto: `17002.43` y `150612.59` (ig-012), `40874.82` (ig-018), `143143`
(ig-018), `67000000000` (ig-049). **No hay una sola cifra recuperable de este
corpus.**

**Las métricas del frontmatter sí son confiables** (vienen de la API, no del ASR):
views, likes y comments se usan como dato duro.

---

## Cómo se contó esto (leer antes de discutir un número)

Tres decisiones de método, porque cambian los resultados y ya hicieron equivocarse
a una versión anterior de este archivo:

1. **Todos los conteos son sobre el bloque `## Transcript` solamente.** Grepear el
   `.md` entero **duplica el hook**, porque `## Hook (0-3s)` es una copia literal
   de la primera oración del transcript. Ejemplo real: `grep -c "interrupción de
   patrón" ig-068` da **2**; en el habla es **1**. Cualquier término que caiga en
   la primera oración de un reel sale inflado ×2 si se grepea el archivo.
2. **Las frecuencias van normalizadas cada 10.000 palabras**, porque las bases son
   muy distintas (HM 10.715 · VHE-A 5.273 · VHE-B 1.555). Comparar totales crudos
   entre cuentas es comparar tamaños de muestra.
3. **Se cuentan tokens, no reels, salvo que se diga.** El formato de las tablas es
   `total / en cuántos reels aparece (por 10.000)`.

El script está en el scratchpad de la sesión; se reproduce con
`node cerebros/scripts/…` o con greps sobre el bloque de transcript. Las bases
verificadas: mi tokenizador da 17.719 palabras y la suma de los campos
`palabras:` de los 80 frontmatters da 17.705 — 0,08 % de diferencia, así que la
extracción no perdió nada.

---

## Cuatro corpus — no los mezcles

No son "dos cuentas, dos registros". Dentro de `@victorherasemprendedor` hay un
corte duro en 2024 que separa dos personajes distintos, y el archivo lo trata como
tal.

| Corpus | Reels | Palabras | Rango | Qué es |
|---|---|---|---|---|
| **HM** — `@herasmedia` | 47 | 10.706 | 2025-03-31 → 2026-07-29 | Registro de **captación**. Educador de algoritmo + CTA a ManyChat. **Es la voz de referencia.** |
| **VHE-A** — `@victorherasemprendedor`, era PostMe | 22 | 5.271 | 2022-09-11 → 2023-10-13 | Registro **educador/divulgador**. Historias de marcas, moraleja, firma de canal. |
| **VHE-B** — `@victorherasemprendedor`, era lifestyle | 10 | 1.552 | 2024-01-04 → 2026-07-18 | Registro **flex**. Cámara oculta comprando coches/relojes, dinero en pantalla. |
| **REELS** — `@victorherasreels` | 1 | 176 | 2026-04-15 | Un solo reel (ig-010). Registro **motivacional-místico**, no se parece a nada más. |

Cuando este archivo dice "su voz" sin aclarar, es **HM**. (Las palabras de esta
tabla son la suma del campo `palabras:` de los frontmatters. Las bases de las
tablas de frecuencia son las de mi tokenizador sobre el bloque de transcript —
HM 10.715 · VHE-A 5.273 · VHE-B 1.555 · REELS 176 — que difieren en menos del
0,1 %.)

## El dato que más importa: tres vocabularios que no se tocan

Mismo hombre, tres léxicos casi disjuntos. Formato: `total / en cuántos reels
(por 10.000 palabras)`.

| | HM (10.715 pal.) | VHE-A (5.273 pal.) | VHE-B (1.555 pal.) |
|---|---|---|---|
| **"nicho"** | 74/30 **(69)** | **0** | **0** |
| "tu nicho" | 42/21 (39) | 0 | 0 |
| "vídeo/vídeos" | 231/47 **(216)** | 10/7 (19) | 10/4 (64) |
| "comenta*" | 108/47 **(101)** | 6/6 (11) | 6/5 (39) |
| "viral*" | 99/34 (92) | 2/2 (4) | 8/5 (51) |
| "contenido" | 94/33 (88) | 4/4 (8) | 7/4 (45) |
| "publicar/publica*" | 74/25 (69) | 1/1 (2) | 1/1 (6) |
| "seguidores" | 56/28 (52) | 2/2 (4) | 0 |
| "visitas" | 48/20 (45) | 4/2 (8) | 0 |
| "gente" | 45/27 (42) | 11/9 (21) | 4/4 (26) |
| "cuenta" | 44/22 (41) | 7/4 (13) | **0** |
| "idea*" | 43/16 (40) | 4/3 (8) | **0** |
| "guion/guión" | 28/13 (26) | **0** | **0** |
| "cliente*" | 27/16 (25) | 10/8 (19) | 3/2 (19) |
| "hora" | 24/14 (22) | 7/6 (13) | 1/1 (6) |
| "clase" | 23/13 (21) | 2/1 (4) | 1/1 (6) |
| "reel/reels" | 22/10 (21) | **0** | **0** |
| "gancho*" | 21/14 (20) | 3/2 (6) | **0** |
| "formato" | 20/10 (19) | **0** | **0** |
| "algoritmo" | 19/8 (18) | **0** | **0** |
| "historias" | 16/10 (15) | 2/1 (4) | **0** |
| "mensaje directo / DM" | 12/12 (11) | **0** | **0** |
| "crecer" | 11/8 (10) | 8/8 (15) | **0** |
| "grupo" | 11/7 (10) | **0** | 1/1 (6) |
| "estructura" | 9/4 (8) | **0** | **0** |
| "sistema" | 8/4 (7) | **0** | **0** |
| **"sombra"** | 1/1 (1) | 19/19 **(36)** | **0** |
| "marca personal" | 3/3 (3) | 25/12 **(47)** | 1/1 (6) |
| "marca" (sola) | 7/5 (7) | 27/12 **(51)** | 5/3 (32) |
| "negocio" | **0** | 10/8 (19) | **0** |
| "sígueme" | **0** | 14/14 (27) | **0** |
| "chao / chau" | **0** | 33/17 **(63)** | **0** |
| "como siempre" | **0** | 17/17 **(32)** | **0** |
| "vender / venta / vend*" | 9/8 (8) | 19/13 **(36)** | 2/1 (13) |
| "dinero" | 4/2 (4) | 19/11 (36) | 15/6 **(96)** |
| **"dólares"** | 3/2 (3) | 1/1 (2) | 16/5 **(103)** |
| "euros" | 4/4 (4) | 14/8 (27) | 13/7 **(84)** |
| "coche/carro/Ferrari/Lambo" | 1/1 (1) | 2/2 (4) | 12/4 **(77)** |

Cuatro cosas que se leen de acá y hay que respetar al escribir:

1. **"Nicho" es la palabra insignia de HM y no existe en las otras dos cuentas.**
   74 apariciones en 30 de 47 reels contra cero en 6.828 palabras de
   `@victorherasemprendedor`. Un guion de captación de Víctor sin la palabra
   "nicho" está mal escrito; un reel de lifestyle con la palabra "nicho" también.
2. **"Vídeo" es su unidad de pensamiento, no "contenido".** 216 cada 10.000 contra
   88. Habla de vídeos concretos, en singular y con demostrativo ("este vídeo",
   "este vídeo interrupción de patrón"), no de "contenido" en abstracto.
3. **"Vete por la sombra" es de VHE-A y está muerto.** 19 de 22 reels de la era
   PostMe cierran con esa firma; en 10.715 palabras de `@herasmedia` aparece
   **una sola vez** la raíz "sombra", y no como cierre sino dentro de la línea de
   autoridad ("llevo trabajando en las sombras 2 años", ig-014). No lo revivas en
   una pieza de 2026 salvo que el cliente lo pida. Igual de muerto: **"sígueme"
   (0 en HM contra 27/10k en VHE-A)** y **"chau chau" (0 contra 63/10k)**.
4. **El vocabulario de dinero está confinado a VHE-B.** "Dólares" corre 103 cada
   10.000 en el registro flex y 3 cada 10.000 en HM. Meterle cifras de dinero a
   un reel de captación es cambiarle el registro, además del problema de
   compliance.

---

## Muletillas y conectores, contados

Son el dato, no el ruido: es lo que más se nota cuando falta en una imitación.

| Muletilla | HM (por 10.000) | VHE-A | VHE-B |
|---|---|---|---|
| "pero" | 78/35 **(73)** | — | — |
| "porque" | 65/25 **(61)** | 22/15 (42) | 5/3 (32) |
| "exactamente" | 37/22 **(35)** | 8/7 (15) | 1/1 (6) |
| "aquí" | 25/18 (23) | 13/13 (25) | 6/3 (39) |
| "ok / okay" | 24/16 **(22)** | **0** | 3/2 (19) |
| "simplemente" | 21/18 (20) | 2/1 (4) | 3/3 (19) |
| "la gente" | 20/16 (19) | 8/6 (15) | 2/2 (13) |
| "pues" | 18/13 (17) | 11/10 (21) | 4/3 (26) |
| "todos" | 18/14 (17) | — | — |
| "todo el mundo" | 15/11 (14) | — | — |
| "nunca" | 15/12 (14) | — | — |
| "por ejemplo" | 13/9 (12) | 4/3 (8) | 7/5 **(45)** |
| "entonces" | 13/10 (12) | 1/1 (2) | **0** |
| "nadie" | 12/9 (11) | — | — |
| "facil" | 10/6 (9) | 5/4 (9) | 1/1 (6) |
| "claro" | 9/5 (8) | 2/2 (4) | 1/1 (6) |
| "sabes" | 9/7 (8) | 11/7 (21) | **0** |
| "vale" | 8/7 (7) | **0** | 3/2 (19) |
| "en concreto" | 8/6 (7) | **0** | **0** |
| "bueno" | 7/5 (7) | 7/6 (13) | 2/1 (13) |
| "o sea" | 6/6 (6) | **0** | 3/3 (19) |
| "mira" | 6/5 (6) | 4/3 (8) | 2/2 (13) |
| "espera" | 5/5 (5) | 1/1 (2) | **0** |
| "fíjate" | 4/4 (4) | 5/4 (9) | 3/2 (19) |
| "realmente" | 3/3 (3) | 1/1 (2) | **0** |

**"Exactamente" es su tic más útil y el más fácil de olvidar.** 35 cada 10.000 en
HM, en 22 de 47 reels, y casi siempre pegado a la promesa: "te envío la estructura
**exacta** para tu nicho en concreto" (ig-032), "esto es **exactamente** lo que
haría" (ig-057, ig-064), "y yo personalmente voy a decirte cómo hacerte viral"
(ig-068). El par **"exactamente" + "en concreto"** es la firma de precisión de HM:
promete que lo que te va a mandar está hecho para vos, no genérico. Sumando la
familia entera (`exacta*`) son 40 en 24 reels.

**"Ok" es marcador de turno, no de aprobación.** 22 cada 10.000 en HM contra
**0 en VHE-A**, porque HM está lleno de sketches dialogados y "Ok" es como abre su
personaje cada respuesta: "Ok, ¿cuánto tiempo tienes para hacer contenido?"
(ig-032), "Ok, ven, mira" (ig-013). Que sea **cero** en la cuenta vieja, no bajo,
es lo que lo vuelve un marcador de formato: aparece cuando hay dos voces.

**"Pero" es el conector que sostiene toda su retórica** — 73 cada 10.000, en 35 de
47 reels. No es relleno: es la bisagra del giro anti-consenso (ver §doctrina).
Un guion suyo sin un "pero, realmente…" a mitad de camino no tiene su forma.

**Puteadas: pocas, y casi siempre en boca del personaje frustrado.** "coño" 11
veces en 9 reels de HM (10 cada 10.000), "puto/puta" 3, "mierda" 2, "joder" 4.
Casi todas son la pregunta del interlocutor, no la afirmación de Víctor: "No sé
qué coño publicar" (ig-032), "¿Cómo coño hace la gente para hacer vídeos
virales?" (ig-036), "¿Cómo coño hace la gente para hacer guiones virales?"
(ig-062). En ig-079 él putea y el guion **se corrige a sí mismo en cámara**: "esa
es la razón por la que no pegas ni un puto vídeo. Oye, esa boca, Perdón, es que me
frustro." Se puede usar, con esa dosis y en esa posición.

**Español de España, sin vosotros.** "Vosotros/habéis/tenéis/sois/queréis/podéis":
**0 en 17.719 palabras**. "Usted/ustedes": **0**. "Vos": **0**. Habla siempre de
**tú**, en singular, a una persona (`tú|tu|tuyo|ti|contigo` = 184 en 44 de 47
reels de HM, 172/10k). Las dos únicas formas de vosotros del corpus son fósiles de
VHE-A: "iros por la sombra" (ig-072, ig-074). Los españolismos existen pero son
ralos: "vale" 8, "tío" 2, "joder" 4, "hostia" 1 en todo el corpus. **No es un
español de España cargado** — es neutro con acento, y así se escribe.

**Una sola "vaina" en todo el corpus**, en ig-060 ("esa vaina hay que ser una
cuenta nueva"). No es un venezolanismo suyo instalado; es un hápax. No lo uses.

### "1º" no es él, es el ASR

Deepgram escribe los ordinales como cifra. En los transcriptos hay **19 "1º" en 13
reels de HM** (18/10k) y **7 "2º/3º" en 5 reels**, mientras que **"primero" y
"primera" hablados aparecen 0 veces en HM**. O sea: cuando lee "La 1º es que estás
subiendo tus reels a las historias" (ig-067), él dijo *"la primera"*.

Consecuencia práctica: **un guion para Víctor escribe "lo primero", "la primera",
"y segundo" — nunca "1º".** Una versión anterior de este archivo listaba
`primero / 1º` como muletilla de 18/10k; el número está bien, la etiqueta estaba
mal, y si alguien la copia literal le escribe ordinales en cifra a un guion
hablado.

(Trampa relacionada: `primer[oa]` grepeado sobre los `.md` completos da **80 hits
exactos** — uno por archivo — porque es el boilerplate "_Recorte automático: la
primera oración del ASR_". Cero de esos son Víctor.)

---

## Ritmo y estructura, medido

| | HM | VHE-A | VHE-B |
|---|---|---|---|
| Duración mediana | **66 s** (21–97) | 71 s (48–88) | 37 s (11–110) |
| Palabras por reel (mediana) | 248 | 237 | 151 |
| Ritmo mediano | **204 palabras/min** | 212 p/m | 155 p/m |
| Oración mediana | **8 palabras** (media 12,7) | **14 palabras** (media 16,4) | 6 palabras (media 9,9) |
| Oraciones totales | 847 | 321 | 157 |
| Oraciones que son pregunta | 21 % (179/847) | 21 % (68/321) | **30 %** (47/157) |
| Preguntas por reel (mediana) | 3 | 2,5 | 4 |
| Reels con ≥4 preguntas | 19/47 | 6/22 | 5/10 |

**El dato estructural más fuerte: la oración de HM mide 8 palabras y la de VHE-A
mide 14.** No cambió de tema entre 2023 y 2025, cambió de sintaxis. VHE-A narra
(oración larga, subordinada, historia de tercero); HM dialoga (oración corta,
turno de habla, dos voces). Un guion "de Víctor" con oraciones de 14 palabras
suena a su cuenta vieja.

**El reel de captación no es corto.** Mediana 66 s y sólo 1 de los 47 baja de 30
segundos (ig-099, 29 s). El más corto, ig-002 (21 s), es justamente el que peor
convierte de toda la cuenta — ver §views.

**Formato dominante de HM: el sketch a dos voces.** **21 de 47 reels terminan con
una línea de ≤5 palabras**, y en 15 de ellos esa línea es la réplica del segundo
personaje repitiendo la palabra clave del CTA: "Clase." (ig-022, ig-037),
"Guion." (ig-032), "Viral." (ig-077, ig-082), "Ok, clase." (ig-036), "Ok, lo
comento." (ig-017), "Vale, ya comento." (ig-028), "Comenta sistema." (ig-079),
"Comenta 5 en comentarios." (ig-073), "Comenta CCN en comentarios." (ig-054),
"Comenta viral." (ig-094), "Comentar aquí." (ig-060), "Perfecto." (ig-013),
"Gracias." (ig-093). Es un recurso deliberado de repetición del keyword de
ManyChat: **la última cosa que se oye es la palabra que hay que comentar.**

### Cómo abre — los 80, clasificados

Clasificación de la primera oración de cada reel:

| Apertura | n/80 | Reparto |
|---|---|---|
| **Pregunta directa** | **26** | HM 15 · VHE-A 6 · VHE-B 5 |
| Sentencia / afirmación | 39 | HM 21 · VHE-A 12 · VHE-B 5 · REELS 1 |
| Frase nominal sin verbo | 7 | HM 6 · VHE-A 1 |
| Imperativo u objeción en boca del otro | 6 | HM 3 · VHE-A 3 |
| "Si quieres… / Si de verdad…" | 2 | HM 2 |

Es decir: **no abre con imperativo casi nunca (3 de 47 en HM)** y **casi nunca abre
con el "Si quieres" que sí domina sus captions (2 de 47)**. El "Si quieres…" es un
patrón de *texto escrito*, no de habla. Escribirle un hook hablado que arranque con
"Si quieres…" es calcarle el caption, no la voz.

Los cinco moldes de apertura de HM, textuales:

- **Pregunta (15/47).** "¿Por qué hay vídeos con 1.000.000 de visitas y otras no
  llegan ni a las 1.000 visitas?" (ig-029) · "¿Cuántos vídeos hay que publicar por
  semana en Instagram?" (ig-034) · "¿Cómo coño hace la gente para hacer vídeos
  virales?" (ig-036) · "¿Grabar con cámara o postear a buena hora?" (ig-088).
- **Sentencia-shock sobre el algoritmo.** "Algoritmo de Instagram nunca va a
  recomendar tu contenido si no haces esto antes de publicar." (ig-030) · "El
  algoritmo de Instagram acaba de cambiar en este 2026." (ig-042) · "Los trial
  reels no sirven para nada." (ig-073) · "En 2026, la peor forma de crecer en redes
  sociales, lamentablemente, es la más cómoda." (ig-079).
- **Hipótesis catastrófica en futuro.** "Mañana me despertara con 0 seguidores,
  esto es exactamente lo que haría para ganar 100.000 seguidores…" (ig-057 **y
  ig-064, el mismo hook reciclado a 10 meses de distancia**) · "Mañana me robaran
  todos mis seguidores de mi cuenta de Instagram. ¿Qué?" (ig-044).
- **Objeción del cliente, en boca del cliente.** "No sé qué coño publicar, me
  ayudas." (ig-032) · "Si de verdad lo que dices funciona, consígueme 100.000
  seguidores en un mes." (ig-060) · "Ya acabé el vídeo de hoy, voy a publicarlo.
  Espera, no lo publiques, vas a tener 0 visitas." (ig-067).
- **Sustantivo suelto** (formato ranking/veredicto): "Para editar vídeos." (ig-008,
  ig-078) · "La hora de publicación." (ig-017) · "Hashtags." (ig-075) · "Repostear
  tu reels en historias." (ig-015, ig-085) · "Mejores vídeos para ganar
  seguidores." (ig-066). Frase nominal sin verbo, y el resto del reel es el
  veredicto.

### ⚠️ El primer segundo del audio es la parte MENOS confiable del ASR

Esto contradice la intuición y es crítico porque el hook es justo ahí. Deepgram se
come el arranque de la locución: **de los 26 reels cuya primera oración es una
pregunta, 9 perdieron el signo `¿` o la palabra interrogativa entera.**

| Lo que dice el transcript | Lo que evidentemente dijo |
|---|---|
| "Es la mejor hora para publicar en Instagram?" (ig-061) | ¿**Cuál** es la mejor hora…? |
| "Hora se publica en Instagram?" (ig-091) | ¿**A qué** hora se publica…? |
| "Te crees?" (ig-093) | ¿**Tú** te crees…? |
| "Es la diferencia entre un vídeo viral y otro…?" (ig-098) | ¿**Cuál** es la diferencia…? |
| "Harías si vas en un avión…?" (ig-063) | ¿**Qué** harías si…? |
| "Vieras a Bad Bunny…, ¿te pararías?" (ig-087) | **Si** vieras a Bad Bunny… |

Y en las aperturas por sentencia pasa lo mismo con el artículo: "Algoritmo de
Instagram nunca va a recomendar…" (ig-030, falta "**El**"), "Principio del vídeo es
lo más importante" (ig-022, falta "**El**"), "Hombre que cultivaba rábanos…"
(ig-043, falta "**Un**"), "Hay nada más triste que…" (ig-040, falta "**No**"),
"Vídeo me obligó a depilarme el pecho" (ig-095, falta "**Este**").

**Consecuencia dura: ningún hook de `biblioteca/hooks.md` se cita palabra por
palabra sin abrir el video.** El campo `## Hook (0-3s)` sirve para saber *de qué*
va el gancho y para clasificar la estructura; no sirve como texto a locutar. La
estructura del hook es reutilizable, las primeras dos palabras no.

---

## Cómo cierra: el CTA

**Los 47 de 47 reels de HM piden comentario, y 46 de 47 lo piden en el cierre.** No
hay un solo reel de `@herasmedia` sin CTA a comentario.

Palabras clave pedidas, contadas por reel: **clase** (ig-022, ig-036, ig-037,
ig-057, ig-088, ig-093) · **viral** (ig-009, ig-028, ig-077, ig-082, ig-094) · **tu
nicho** (ig-008, ig-030, ig-034, ig-044, ig-061, ig-068, ig-075, ig-085) ·
**guion/guión** (ig-032, ig-045, ig-099) · **cuenta** (ig-067, ig-071) · **grupo**
(ig-066, ig-078) · **yo** (ig-047, ig-065, ig-091) · **reto** (ig-029) · y uno cada
uno: **sensei** (ig-014), **CCN** (ig-054), **lista** (ig-015), **idea** (ig-017,
ig-098), **sistema** (ig-079), **Diego** (ig-058), **bio** (ig-050), **susi**
(ig-060), **solución** (ig-062), **cinco/5** (ig-073), **100** (ig-089), **2026**
(ig-042).

Estructura del cierre, en tres piezas fijas: *condicional* + *entrega por DM* +
*escasez*.

> "Tranquilo, si comentas guión en este vídeo, te envío la estructura exacta para
> tu nicho en concreto por mensaje directo. Comenta guión y te lo mando. Guion."
> (ig-032)

> "Simplemente comenta sistema en este vídeo y te lo mando y te digo cómo aplicarlo
> para tu caso y para tu nicho. Comenta sistema." (ig-079)

> "Comenta clase y te la envío antes de que la borre." (ig-022)

> "Comenta la palabra Diego en comentarios y te envío la formación privada antes de
> que la elimine." (ig-058)

La escasez es explícita y contada: **"antes de que…" aparece 6 veces en 6 reels de
HM (ig-042, ig-045, ig-057, ig-058, ig-066, ig-067) y 0 veces en las otras dos
cuentas.** Es un invento del registro de captación.

**El verbo del CTA cambió, y es medible.** `comenta*` aparece **108 veces en los 47
reels de HM (101 cada 10.000) contra 6 en VHE-A (11)**. La era PostMe usaba la
forma pedida, no la imperativa: "déjame en comentarios" (ig-021, ig-046, ig-053,
ig-090). O sea que **el mecanismo palabra-clave-por-DM ya existía en 2022**, con
otra fórmula: "déjame en comentarios la palabra MasterC, te mandamos todo para que
te preinscribas" (ig-046) · "déjame un comentario con la palabra máster y te
mandamos la prescripción" (ig-090). Lo que cambió en HM es que la orden se acortó,
se volvió imperativa y **se repite dos veces por reel**.

**Cierre canónico de VHE-A, textual, 19 de 22 reels:**

> "Y si quieres crecer y, sobre todo, ganar dinero con redes sociales, sígueme por
> aquí y, como siempre, vete por la sombra. Chau chau." (ig-039)

Variantes del ASR: "vete por las sombras" (ig-083), "mete por la sombra" (ig-069),
"iros por la sombra" (ig-072, ig-074). "Como siempre" 17 veces en 17 reels, casi
todas en este cierre. "Chau/chao" 33 veces en 17 reels — va repetido ("chau chau"),
por eso hay más tokens que reels.

**Cierre de VHE-B: o el CTA lo dice el entrevistador, o no hay CTA.** 5 de 10
cierran con "Simplemente poniendo reto en los comentarios de este vídeo" (ig-001,
ig-003, ig-012, ig-020, ig-033) y los otros 5 no piden nada (ig-016, ig-018,
ig-027, ig-035, ig-040). Nótese que **el CTA no lo dice Víctor: lo pregunta el
interlocutor** ("¿Y cómo puedo aprender yo lo mismo?") y él sólo contesta.

---

## La doctrina: es un creador anti-consenso

Es el rasgo de contenido más consistente de HM y el que más fácil se escribe mal.
**Todas las veces que nombra las buenas prácticas del marketing, es para atacarlas.**
Verificado leyendo los 21 contextos, sin una sola excepción:

- **"contenido de valor"** — 8 veces en 6 reels, **siempre en contra**:
  > "Para hacer vídeos virales nunca tienes que hacer contenido de valor, eso es lo
  > peor que puedes hacer." (ig-028)
  > "2, no hagas contenido de valor. En vez de hacer contenido sobre cómo resolver
  > un problema, haz un contenido sobre por qué te está ocurriendo ese problema."
  > (ig-098)
- **"cliente ideal"** — 8 veces en 5 reels, **siempre en contra**:
  > "Todos los grupos del marketing te dirán que hagas contenido enfocado en tu
  > cliente ideal, y esa es exactamente la razón por la que no crepes en redes
  > sociales." (ig-064 — "crepes" es ASR por *creces*; "los grupos" probablemente
  > por *los gurús*)
  > "incluso, hacer contenido para tu cliente ideal. Pero, realmente, eso es lo
  > peor que puedes hacer." (ig-079)
- **"aportar valor"** — 5 veces en 4 reels, en contra:
  > "Todo el mundo cree que para hacerse viral tienes que aportar valor, tienes que
  > hacer un contenido de grandísima calidad y ninguno de estos vídeos aporta valor
  > y todos están grabados con el teléfono móvil." (ig-068)

El andamiaje verbal del giro, contado en HM: **"pero" 78** · **"todos" 18** ·
**"todo el mundo" 15** · **"nunca" 15** · **"nadie" 12** · **"lo peor" 5** ·
**"no sirve / no funciona" 6** · **"en vez de" 4**. La forma es siempre la misma en
tres golpes: *lo que todos hacen* → **pero** → *lo que hay que hacer*.

> "Los trial reels no sirven para nada. Eso es lo que dice alguien que no sabe
> usarlos." (ig-073)

> "Gurús de redes sociales van a odiarme por esto, pero…" (ig-054)

> "Eso es lo que diría alguien que no sabe vender por construye, que hace más de
> 200000 dólares al mes" (ig-079 — *Lord Construye*, ASR)

**Cómo se escribe mal:** dándole un guion que promete "contenido de valor para tu
cliente ideal". Es literalmente el enemigo de su tesis. **Cómo se escribe bien:**
nombrar la buena práctica consensuada y romperla con un "pero".

## Su vocabulario de marca — los nombres que él inventó

Funcionan como prueba de método: si el guion usa uno, suena a que tiene sistema.
Contados sobre el transcript, no sobre el archivo.

| Término | Veces | Reels |
|---|---|---|
| **"idea ganadora"** | **16** | 8 (ig-015, ig-036, ig-061, ig-075, ig-077, ig-085, ig-088, ig-098) |
| **"gancho"** (+ tipos) | 21 | 14 de HM |
| **"trial reels"** | 7 | 4 (ig-015, ig-017, ig-073, ig-085) |
| "cuenta intoxicada / desintoxicar" | 4 | 2 (ig-060, ig-067) |
| "CCN" | 4 | 1 (ig-054) |
| "formato PUB" | 2 | 2 (ig-013, ig-032) |
| "plan de contenidos" | 2 | 2 (ig-013, ig-062) |
| "sistema 5:1" ("sistema 1 5" en ASR) | 4 | 1 (ig-073) |
| "interrupción de patrón" | 1 | 1 (ig-068) |
| "falso engagement" | 1 | 1 (ig-067) |
| "TCA / teoría circular de alcance" | 1 | 1 (ig-079) |
| "contraintuitivo" | 1 | 1 (ig-098) |
| "formato blog" | 1 | 1 (ig-032) |

**"Idea ganadora" es su término más usado y hasta ahora estaba sin registrar** —
16 apariciones en 8 reels, cuatro veces más que "CCN". Es el concepto al que
reduce todo lo demás:

> "Y 3º y más importante, la idea ganadora del vídeo. Fíjate, esto no es una idea
> ganadora y esto sí es una idea" (ig-098)

**ig-068 es el reel-taxonomía: nombra sus propios tipos de gancho en voz alta.** Es
la mejor fuente del corpus para escribirle piezas nuevas, porque da las categorías
con las que él piensa:

> "Este es un vídeo **interrupción de patrón**. Es mejor comprar una casa o
> alquilarla. Este es un vídeo **pregunta controversial**. Millonario y, por
> supuesto, no tengo un Ferrari para impresionar a otro. Esto un **gancho de
> paradigma de validación subversiva**. Amor, voy a salir de fiesta hoy. Perfecto,
> mi vida, pásalo bien. Este es un **gancho situación cotidiano**. Este abdomen de
> aquí yo diría que se la toman perfecto. Esto es un **gancho explicativo
> técnico**." (ig-068)

⚠️ **La sigla real es `SIN DATO`.** En ig-054 dice "las 10 CCN, creencias comunes
de tu nicho" y el caption escribe `"CCN"`; en ig-032 el ASR da "las 10 PCN" y
"¿P-PN?" y lo glosa distinto: "los 10 problemas más comunes de tu nicho". Puede
que sean dos conceptos distintos o uno mal transcripto. **Hay que preguntárselo
antes de usar la sigla en una pieza.**

---

## Devices de autoridad — verbatim

Nunca dice "soy experto". Prueba con nombre de cliente y con número (el número,
ojo, es ASR).

> "Mi nombre es Víctor Heras y llevo trabajando en las sombras 2 años años con el
> sensei. Llevando su marca personal, contenido corto y lanzamientos, y después de
> haber generado más de 2.2 billones de visitas con su marca, he decidido revelar
> toda la verdad sobre su marketing." — ig-014 (399.324 views, 34,0 comentarios/1k;
> el "2 años años" duplicado es del ASR)

> "¿Qué tal? Soy Víctor Heras, CEO de la agencia PostMi [PostMe], la agencia de
> marca personal más grande de España." (ig-043) — la misma fórmula en 6 reels de
> VHE-A (ig-043, ig-049, ig-059, ig-069, ig-080, ig-100). **El ASR escribe "PostMi", "Posmi", "PostMean", y una vez "Teo de la
> agencia" por *CEO de la agencia*.**

> "No, la desintoxicas como hicimos con Bernardo, que pasó de 20.000 seguidores a
> una cuenta intoxicada con menos de 2.000 views por vídeo a una cuenta con más de
> 1.6 1.000.000 de seguidores en 3 meses únicamente publicando reels." — ig-067

> "Y si quieres saber cómo hacerte viral… como lo he hecho, por ejemplo, con el
> sensei o con el logo de Wall Street" — ig-009 ("el logo de Wall Street" = *el Lobo
> de Wall Street*, ASR)

> "En el último mes he conseguido más de 26000000 de visitas con trial reels y no le
> he dedicado ni una hora al mes." — ig-073

> "Simplemente con una buena estructura como esta que ha generado vídeos con
> 1000000 de visitas que seguramente hayas visto antes." — ig-032

> "Fue el 1º vídeo que publicamos con esta cliente y consiguió más de 3000000 de
> visitas." — ig-098

El patrón es constante: **la autoridad siempre está delegada en un cliente con
nombre** (el sensei, Ramón, Alfredo, Christian Villar, Lord Construye, Bernardo,
Diego), nunca en un título propio. "Cliente*" corre 25 cada 10.000 en HM.

---

## Qué NUNCA dice

Evidencia de ausencia por conteo sobre los transcripts de los 80 reels (17.719
palabras). **Cero es cero medido, no impresión.**

| No dice | Hits en todo el corpus |
|---|---|
| mindset | 0 |
| sinergia | 0 |
| curso / cursos | 0 |
| coach / coaching | 0 |
| garantía / garantizado | 0 |
| libertad financiera | 0 |
| ingreso(s) pasivo(s) | 0 |
| webinar / masterclass | 0 |
| apúntate / regístrate / inscríbete | 0 |
| link en la bio / enlace en la bio | 0 |
| suscríbete | 0 |
| comparte / compártelo | 0 |
| guarda este vídeo / guárdate | 0 |
| disciplina | 0 |
| excusas | 0 |
| sacrificio | 0 |
| jefe | 0 |
| oficina | 0 |
| lujo | 0 |
| bendiciones | 0 |
| beca | 0 |
| básicamente | 0 |
| rápido y fácil / fácil y rápido | 0 |
| usted / ustedes / vosotros / vos | 0 |
| deja de… (imperativo) | 0 en HM |
| la mayoría | 2 en HM (dice "todo el mundo") |

**Tres correcciones a esta lista** (una versión anterior las daba en 0 y no lo
están; ninguna cae en HM, así que la regla práctica se sostiene, pero el número
no era cierto):

- **"facturar/facturación": 1**, en ig-012 (VHE-B).
- **"motivación/motivado": 2**, en ig-023 (VHE-A) y ig-033 (VHE-B).
- **"hermano" (vocativo): 1**, en ig-033 (VHE-B) — no 0 en todo el corpus.

En **HM** las tres siguen en 0, que es lo que importa para escribir captación.

Lo que se lee de esta lista: **su CTA es siempre comentario, nunca link, nunca
guardado, nunca compartido.** Un guion que diga "link en la bio" o "guarda este
vídeo" no es suyo. Y **no es un creador de superación personal**: cero mindset,
cero disciplina, cero sacrificio. Su promesa es siempre operativa (algoritmo,
guion, formato, nicho, gancho), no anímica.

### ⚠️ Corrección importante: el embudo NO termina en el comentario

Una versión anterior de este archivo decía que todo pasa por comentario+DM y nada
más. **Falso, y es relevante para `oferta.md`:** hay un paso de llamada/consultoría
1-a-1 nombrado en 4 reels, en la voz y en el caption.

| Reel | Dónde | Textual |
|---|---|---|
| ig-060 | transcript + caption | "voy a decirles cómo tener una **consultoría** para que lo hagamos con su market también" · caption: "te mando la clase donde explico todo y tenemos una **llamada 1 a 1**" |
| ig-094 | transcript + caption | caption: "Y tenemos un **consultoría 1 a 1**" |
| ig-036 | transcript | "llamada" |
| ig-050 | transcript | "llamada" ×2 |

O sea: comentario → DM → **clase** → (en algunos) **llamada/consultoría 1 a 1**.
Lo que sigue `SIN DATO` es el precio y qué se vende en esa llamada.

### La excepción de registro: ig-010

La única pieza místico-motivacional del corpus (`@victorherasreels`, 590.140 views,
24,2 com/1k, y **160 likes/1k contra una mediana de 34** — el pico de engagement
por like de todo el corpus):

> "Vas a ser rico, y lo sé porque estás viendo este vídeo ahora mismo. Y el
> algoritmo no le muestra mis consejos a cualquiera, los muestra a personas que
> están destinadas a algo mucho más grande en la vida… porque dios puso eso ahí por
> una razón."

Un reel no es un registro. **Tratalo como una prueba aislada, no como una voz
disponible**, hasta tener más material de esa cuenta.

---

## Los captions son texto tipeado — la única fuente confiable del corpus

Los captions vienen de la API, no del ASR. **Son lo único de este cerebro que se
puede citar literal sin verificar contra el video**, y encima traen los nombres
propios y las palabras clave bien escritos.

Dos pruebas de por qué importa, las dos del mismo mecanismo:

- ig-013: el ASR dice "se despertó con **150.000** seguidores"; el caption dice
  "Así llegamos a **170.000** seguidores en 5 días con @christian_villar".
- ig-060: el ASR hace que Víctor pida "que comenten la palabra **sushi**"; el
  caption dice `Comenta "SUSI"`. **El ASR le rompe la palabra clave del ManyChat**,
  que es justo el dato operativo del reel.

**El caption de HM es una plantilla de tres piezas**, sobre 47 reels:

- **33 de 47** contienen "Si quieres…"; **27 arrancan** con esas dos palabras.
- **43 de 47** dicen "comenta / coméntame / escribe".
- **31 de 47** llevan la palabra clave en MAYÚSCULA; **23 de 47** además entre
  comillas.
- **38 de 47** llevan **👇** justo después de la palabra clave.
- **43 de 47** cierran con la entrega en primera persona ("y te lo mando" / "te la
  envío" / "y te explico" / "y hablamos por mensaje directo"). Las 4 excepciones:
  ig-008, ig-073, ig-078, ig-094.
- **7 de 47** agregan la escasez: "antes de que la borre".
- **20 de 47** dicen "nicho"; **5**, "en concreto".
- Hashtags: **mediana 5** (0–6), siempre el mismo bloque — `#herasmedia
  #crecereninstagram #redessociales #instagram (#victorheras)`. En VHE-A la mediana
  era **10** (0–17) con un bloque totalmente distinto (`#emprender #negociodigital
  #emprenderonline #victorheras #emprenderdesdecasa #marketingdigital #marketing
  #españa #emprenderespaña #postme`). En VHE-B la mediana es **3**. El bloque de
  hashtags también cambió de era.

Plantilla, textual, para calcar:

> "Si quieres saber cual es la estructura exacta para tu nicho en concreto, comenta
> "GUIÓN"👇 y te lo mando" — ig-032

> "Si quieres aprender a vender por Instagram como Lordconstruye sin gastar en
> anuncios, comenta "SISTEMA"👇 y te lo mando" — ig-079

> "Comenta "CINCO"👇 si quieres saber cómo puedes aplicar este sistema 5:1 con tu
> cuenta, tu nicho y tu marca" — ig-073

**Palabras clave reales, tal como él las escribe.** Entre comillas y en mayúscula:
VIRAL (4), GUIÓN (3), YO (3), GRUPO (3), RETO (2), CUENTA (2), y una vez cada una
2026, SENSEI, CLASE, BIO, SUSI, SOLUCIÓN, CINCO, SISTEMA, IDEA. En mayúscula sin
comillas se suman LISTA (ig-015), CCN (ig-054), DIEGO (ig-058) y CLASE (que llega a
6 reels: ig-022, ig-036, ig-037, ig-057, ig-088, ig-093). **Ojo con el
`sistema 5:1`**: sólo el caption de ig-073 lo escribe con dos puntos; el ASR da
"sistema 1 5" y "sistema 5 1". El caption manda.

**Nombres propios confirmados en texto tipeado** (no ASR): **Ramón** (3 captions),
**Alfredo** (2), **Christian Villar / @christian_villar**, **Lordconstruye**,
**Diego**, **Susi**, **sensei**. Estos sí se pueden usar.

⚠️ Los captions también traen las **dos únicas cifras de oferta del corpus**, y son
promesa de resultado: "cómo hacer **20.000€/Mes**" (ig-050, ig-062, ig-065) y
"**100.000 seguidores en 30 días**" (12 captions). Son suyas y están escritas por
él, pero son exactamente el tipo de claim que rebota en Meta. No las metas en un ad
sin pasar por `oferta.md`.

---

## Views altas ≠ creativo bueno

Lo que importa para llenar un ManyChat es **comentarios por 1.000 views**, no
views. Medianas por corpus:

| Corpus | n | Views mediana | **com./1k mediana** | likes/1k mediana |
|---|---|---|---|---|
| **HM** | 47 | 141.964 | **16,4** | 34 |
| VHE-B | 10 | 358.259 | 3,7 | 29 |
| VHE-A | 22 | 131.708 | **0,9** | 34 |
| REELS (ig-010) | 1 | 590.140 | 24,2 | **160** |

**La cuenta vieja tenía el mismo alcance y no convertía**: VHE-A hace 131.708 views
medianas — prácticamente lo mismo que HM (141.964) — con **18 veces menos
comentarios por view**. No es distribución, es la pieza.

### Pedir el comentario: medido con grupo de control

En HM no se puede medir, porque **47 de 47 piden**. Pero las cuentas viejas dan el
experimento natural:

| Corpus | Pide comentario | n | Views mediana | **com./1k** |
|---|---|---|---|---|
| VHE-A | **sí** | 6 | 136.019 | **2,1** |
| VHE-A | no | 16 | 131.708 | **0,6** |
| VHE-B | **sí** | 5 | 441.441 | **9,7** |
| VHE-B | no | 5 | 243.650 | **0,8** |

**Mismo alcance, 3,5× (VHE-A) y 12× (VHE-B) más comentarios sólo por pedirlos.** En
VHE-A las views medianas de los dos grupos son casi idénticas (136k vs 132k), así
que el efecto no es distribución: es la pregunta. Es la justificación medida, con
material propio de Víctor, de por qué HM pide en el 100 % de los reels.

Caveat honesto: en casi todos los reels el CTA está a la vez en la voz y en el
caption, así que **este corpus no puede separar el efecto del caption del de la
voz**. Lo que dice es que la pieza entera pide o no pide.

### Y la conversión de HM no se está cayendo — está subiendo

Vale la pena marcarlo porque en el cerebro de Gocho pasa lo contrario:

| Semestre | n | Views mediana | **com./1k mediana** |
|---|---|---|---|
| 2025-S1 | 1 | 413.470 | 45,5 |
| 2025-S2 | 24 | 155.215 | 14,9 |
| 2026-S1 | 19 | 130.085 | **16,4** |
| 2026-S2 | 3 | 150.383 | **23,1** |

Cae el alcance mediano (155k → 130k) y **sube la tasa de comentario (14,9 → 16,4 →
23,1)**. El formato está mejorando aunque la distribución no acompañe. (Base chica
en las puntas: 1 reel en 2025-S1 y 3 en 2026-S2.)

### El top y el fondo

| Reel | Fecha | Views | Comentarios | com./1k |
|---|---|---|---|---|
| **ig-032 (HM)** | 2026-03-12 | 206.652 | 13.360 | **64,6** |
| **ig-013 (HM)** | 2025-03-31 | 413.470 | 18.794 | **45,5** |
| **ig-015 (HM)** | 2025-08-24 | 396.238 | 17.088 | **43,1** |
| **ig-067 (HM)** | 2026-07-29 | 124.079 | 5.121 | **41,3** |
| ig-057 (HM) | 2025-07-30 | 148.997 | 5.274 | 35,4 |
| ig-073 (HM) | 2026-06-04 | 117.092 | 4.124 | 35,2 |
| ig-014 (HM) | 2026-01-15 | 399.324 | 13.564 | 34,0 |
| ig-079 (HM) | 2026-02-22 | 109.688 | 3.205 | 29,2 |
| ig-008 (HM) | 2025-10-29 | 731.473 | 19.053 | 26,0 |
| ig-001 (VHE-B) | 2024-09-29 | **7.262.389** | 92.207 | 12,7 |
| ig-009 (HM) | 2026-04-28 | 621.100 | 2.455 | **4,0** |
| ig-002 (HM) | 2025-11-12 | **4.645.081** | 4.149 | **0,9** |

**ig-002 es el reel más visto de `@herasmedia` y el peor convirtiendo de la cuenta:
0,9 com./1k, 70 veces menos que ig-032, que tiene 22 veces menos views.** Vale la
pena leer por qué, porque es la lección más clara del corpus. Son 21 segundos y 31
palabras, y es **el CTA entero, sin sketch y sin contenido** — pide el comentario
antes de haber dado nada:

> "Si quieres conseguir vídeos virales como este que estás viendo ahora mismo de tu
> nicho en concreto, coméntame tu nicho en comentarios para enviarte exactamente
> cómo hacerte viral en tu nicho." (ig-002, transcript completo)

La mediana de HM es 16,4 com./1k: ig-002 está un orden de magnitud por debajo de su
propia cuenta. **Un reel que es sólo CTA compra alcance y no compra conversación.**

El segundo peor, ig-009 (4,0 com./1k con 621k views), es el otro extremo: el reel
más emocional de HM, hermoso y sin mecanismo. Alcanza y no pide bien.

**Dos formatos distintos ocupan el podio, y conviene no confundirlos:**

- **El sketch a dos voces con objeción real** — ig-032 (64,6), ig-013 (45,5),
  ig-067 (41,3), ig-057 (35,4), ig-073 (35,2). El interlocutor duda, Víctor
  resuelve paso a paso, y la palabra clave se repite como última línea.
- **El veredicto/ranking en frases nominales** — ig-015 (43,1), ig-017 (26,7),
  ig-008 (26,0). Una práctica nombrada, un veredicto, siguiente. Sin narración y
  sin personaje. ig-015 es todo el formato en 47 segundos y 12 pares
  práctica-veredicto:

  > "Repostear tu reels en historias. **Baja las visitas.** Hacer contenido de
  > valor. **Baja las visitas.** Generar comentarios en el video. **Sube las
  > visitas.** Usar audios en tendencia. **Baja las visitas.** Usar hashtags. Baja
  > las visitas. Hacer contenido para tu cliente ideal. Baja mucho las visitas.
  > Subir a la misma hora. Da igual. […] Idea ganadora. Suben mucho las visitas.
  > Usar ganchos. Es lo que más sube las visitas, pero hay una lista más de 21
  > cosas que te bajan las visitas y, si comentas aquí lista, te la mando." (ig-015)

Los dos calcan bien. Lo que **no** calca es ig-002.

---

## Ejemplos de anclaje — verbatim, largos

Para pegar en el contexto cuando haya que escribir en su voz. **Citados tal como
están en el transcript, con los errores del ASR incluidos** — si se "arreglan", se
pierde de vista qué parte hay que verificar.

**1. Sketch de objeción completo, el de mejor conversión del corpus** — ig-032
(206.652 views, 64,6 com./1k, 54 s):

> "No sé qué coño publicar me ayudas. Ok, ¿cuánto tiempo tienes para hacer
> contenido? No sé, no mucho. Ok, entonces, vas a publicar 3 veces por semana. Ok,
> ¿qué formato tienes pensado grabar? Supongo que hablando a cámara y eso, no, vas a
> grabar formato PUB y formato blog. Vale, pero ¿de qué hablo en los vídeos? Fácil,
> vas a escoger las 10 PCN, ¿cómo, cómo? ¿P-PN? Sí, los 10 problemas más comunes de
> tu nicho. Si haces eso con 2 formatos, ya tienes 20 vídeos. Vale, pero, ¿qué digo?
> Solamente hablas esas ideas y ya. No, tienes que hacer un guion para cada 1. Y no
> puede improvisar, no, exactamente esa es la razón por la que tu contenido nunca
> funciona. […] Tranquilo, si comentas guión en este vídeo, te envío la estructura
> exacta para tu nicho en concreto por mensaje directo. Comenta guión y te lo mando.
> Guion."

**2. El caso de cliente contado en 3 pasos numerados** — ig-013 (413.470 views,
45,5 com./1k):

> "Hace solo 5 días tenía 10000 seguidores. Y esta mañana se despertó con 150000
> seguidores, y en este vídeo te iba a explicar las 3 cosas que hicimos para crecer
> su cuenta. […] Así que 1º definimos el nicho de Christian, que en su caso, como se
> dedica a la inversión en bolsa, es el sector finanzas. […] Pero Víctor, tú sabes
> que no solo hemos hecho eso, que hay un truquito último para que los vídeos
> peguen, díselo a la gente. Ok, ven, mira."

(El caption corrige: son **170.000**, no 150.000.)

**3. El diagnóstico en 3 errores, con el cliente nombrado** — ig-067 (124.079
views, 41,3 com./1k):

> "Ya acabé el vídeo de hoy, voy a publicarlo. Espera, no lo publiques, vas a tener
> 0 visitas. ¿Qué? ¿Por qué? Son 3 cosas. La 1º es que estás subiendo tus reels a
> las historias. Claro, para que lo vea más gente. Cuando lo publicas a tus
> historias, se lo muestra 1º a gente que te sigue, que es justamente lo que no
> quieres, y el reel muere. Ah, por eso mis gráficas siempre se mueren, ok, ya lo
> quito."

**4. El giro anti-consenso completo, con la teoría propia** — ig-079 (109.688
views, 29,2 com./1k):

> "En 2026, la peor forma de crecer en redes sociales, lamentablemente, es la más
> cómoda. Normalmente, vas a hacer lo que todo el mundo hace, hacer contenido de
> valor, subir 2 contenidos al día, que es lo que todo el mundo recomienda, incluso,
> hacer contenido para tu cliente ideal. Pero, realmente, eso es lo peor que puedes
> hacer y esa es la razón por la que no pegas ni un puto vídeo. Pero, entonces,
> ¿cómo se hace un vídeo viral? Oye, esa boca, Perdón, es que me frustro. ¿Cómo se
> hace un vídeo viral? […] el TCA, o teoría circular de alcance. Esta teoría explica
> por qué por mucho valor que aportas no te haces viral. Vamos a colocar tu nicho en
> el centro y vamos a crear capas externas que son versiones más generales y menos
> concretas de tu conocimiento, y por cada paso que demos, alejándonos de ese nicho
> y de tu cliente ideal, más viral se hace un contenido."

**5. El reel-taxonomía: sus propios nombres de gancho** — ig-068:

> "Este es un vídeo interrupción de patrón. Es mejor comprar una casa o alquilarla.
> Este es un vídeo pregunta controversial. Millonario y, por supuesto, no tengo un
> Ferrari para impresionar a otro. Esto un gancho de paradigma de validación
> subversiva. Amor, voy a salir de fiesta hoy. Perfecto, mi vida, pásalo bien. Este
> es un gancho situación cotidiano. […] Todo el mundo cree que para hacerse viral
> tienes que aportar valor, tienes que hacer un contenido de grandísima calidad y
> ninguno de estos vídeos aporta valor y todos están grabados con el teléfono
> móvil."

**6. El único reel motivacional-emocional de HM** — ig-009 (621.100 views, 4,0
com./1k — alta view, baja conversión):

> "¿Tú te crees que un gordo de mierda de Internet que aún vive con su madre, que
> nunca ha hecho nada en su vida y que nunca lo va a hacer, va a pararme a mí de
> crear una marca personal de éxito en redes sociales? […] Pues la respuesta es que
> depende. ¿Tú tienes más miedo al fracaso o tienes más deseo de conseguir eso que
> está en tu corazón? […] Y tienes 2 opciones: la opción de quedarte siendo alguien
> con un sueño y con un gran conocimiento en tu campo, pero sin que nadie lo sepa, o
> tienes la opción de echarle huevos y enfrentarte a esto para hacer que tu mensaje,
> que tanto sabes que vale, llegue al mundo. Es tu decisión."

**7. Método explicado con sigla propia** — ig-054:

> "Gurús de redes sociales van a odiarme por esto, pero Así puedes crear 100 ideas
> de contenido viral en solamente 10 minutos. Vas a abrir Claudia y le vas a decir:
> dame las 10 creencias falsas más comunes de mi nicho, eso que todo el mundo
> piensa, pero que en realidad es falso. Las 10 CCN, creencias comunes de tu nicho…
> Pero ahí no hay 100, hay 10. Claro, porque aún voy por la mitad del vídeo, fíjate
> que termino, ¿no? Ah, es verdad, perdón."

("Claudia" es *Claude*, ASR.)

**8. Sketch largo con arco de 30 días** — ig-060 (**citado sin arreglar**: la
versión anterior de este archivo escribía "esta cuenta está intoxicada" y "Susana,
he fallado", y el ASR no dice ni una ni otra):

> (ig-060) "Si de verdad lo que dices funciona, consígueme 100000 seguidores en un mes. ¿Ok?
> ¿Cuántas visitas tienen tus vídeos, a ver? Entre 500 a 700. ¿Y cuántos audios
> tienes? 17000. Ok, esta aguanta está intoxicada, esa vaina hay que ser una cuenta
> nueva. Ya tenemos aquí tu cuenta nueva, ¿qué contenido vas a publicar? […] 30 días
> más tarde. Víctor, ¿qué te pasa? ¿Por qué estás así? Susana he fallado. ¿Por qué?
> No hemos llegado a 100000 seguidores, solamente a 80000 seguidores. ¿Qué? Pero eso
> está buenísimo, yo nunca he llegado a 80000 seguidores. […] Simplemente diles que
> comenten la palabra sushi en comentarios de este vídeo y voy a enviarles una clase
> filtrada explicando todo para que ellos puedan aplicarlo."

("esta aguanta" = *esta cuenta*; "sushi" = *SUSI*, confirmado por el caption;
"clase filtrada" es probablemente *clase privada*, que sí aparece bien en ig-013,
ig-058 y ig-082. Tres errores de ASR en un solo reel, y uno de ellos es la palabra
clave del ManyChat.)

**9. VHE-A: historia de marca con moraleja numerada y firma** — ig-049:

> "Este niño pasó de ser repartidor a tener una fortuna de […] haciendo una cosa muy
> simple. […] 2 moralejas: 1, céntrate siempre en crear negocios que vayan con tu
> pasión y con lo que a ti se te da bien y te gusta, y 2, cuando crees ese negocio,
> créalo de forma distinta. Soy Víctor Heras, CEO de la agencia PostMe, la agencia de
> marca personal más grande de España, y si quieres aprender más sobre marca
> personal y redes sociales, sígueme por aquí, y como siempre, vete por la sombra."

**10. VHE-A: la tesis de posicionamiento que sigue vigente** — ig-039:

> "Nuestro querido Benito ha hecho lo peor que se puede hacer con una marca
> personal: perder tus valores. […] Imagínate que yo llegara mañana y dijera: el
> email marketing es la mejor forma de ganar dinero. O esto: chicos, el trading me
> ha cambiado la vida y este lambo no es alquilado. Tenlo muy claro: da igual el
> dinero, tu audiencia, lo bueno que seas o el número de seguidores. Para conseguir
> subirte al trono de tu marca personal y no caerte nunca, debes ser siempre fiel a
> tus valores."

**11. VHE-B: el registro flex, entrevista de calle** — ig-020 (348.634 views):

> "¿A qué te dedicas? Hago vídeos en redes sociales. ¿Y cuánto has ganado, por
> ejemplo, el último mes? 146000 euros. […] ¿Y cómo ganas dinero exactamente? Yo
> hago contenido viral para otras marcas en redes sociales y me pagan dinero por
> hacerles el contenido viral a ellos. Si yo hago un cliente muy viral y le hago
> ganar mucho dinero, pues yo recibo una parte de eso. Esto lo llamo ser experto en
> marca personal. ¿Y cómo puede aprender la gente de este vídeo a hacerlo?
> Simplemente poniendo reto en los comentarios de este vídeo."

⚠️ Nota de compliance sobre el anclaje 11: es el registro con cifra de ingresos en
la boca. Sirve como muestra de voz, **no como plantilla de ad**.

---

## Lo que falta

Todo esto es `SIN DATO` y hay que pedírselo a la agencia o al cliente.

**Del cliente / la agencia:**

1. **La oferta.** Qué se vende, a qué precio, con qué garantía y qué entrega. En
   17.719 palabras habladas no hay un solo precio ni un nombre de producto: los 47
   reels de HM entregan "una clase privada", "la estructura", "el plan de cuenta",
   "el sistema" por DM, y ahí se corta la transcripción. Lo único que asoma es la
   promesa de los captions ("100.000 seguidores en 30 días", "20.000€/mes"), que es
   resultado, no producto. **Ninguna pieza puede mencionar precio ni producto hasta
   que exista `oferta.md`.**
2. **Qué pasa en la llamada 1-a-1.** Ahora sabemos que existe (ig-060, ig-094,
   ig-036, ig-050). No sabemos qué se ofrece, cuánto cuesta ni quién la toma.
3. **El CTA textual vigente.** ¿Sigue siendo comentario+DM en 2026? ¿Con qué palabra
   clave por campaña? ¿Qué manda el ManyChat exactamente?
4. **La sigla real: CCN o PCN.** El ASR da las dos y las glosa distinto ("creencias
   comunes del nicho" vs "problemas más comunes de tu nicho"). Es vocabulario de
   marca, no se adivina.
5. **Los nombres propios que los captions no confirman.** Los captions ya dan
   Ramón, Alfredo, Christian Villar, Lordconstruye, Diego, Susi y sensei bien
   escritos. Siguen `SIN DATO`: *PostMe* (¿sigue existiendo?, ¿qué relación tiene
   con Heras Media?), *Bernardo* (¿es `@juradonegocios`, el cliente que ya tiene
   cerebro propio?), *Susana / Susi* (¿son la misma persona? El ASR dice "Susana"
   3 veces y el caption "SUSI") y qué es cada uno — cliente, socio o ejemplo.
6. **Todas las cifras.** 639 tokens numéricos, 91 de ≥6 dígitos, ninguno confiable.
   "2.2 billones de visitas", "170.000 seguidores en 5 días", "1.6 millones en 3
   meses", "200.000 dólares al mes", "26.000.000 de visitas con trial reels",
   "146.000 euros el último mes". Ninguna entra a una pieza sin verificación contra
   el video, y varias además son problema de compliance.
7. **Qué relación tienen las tres cuentas hoy.** `@victorherasemprendedor` publicó
   por última vez en el corpus el 2026-07-18 (ig-018) — sigue viva. ¿Es lifestyle
   permanente, o se está reposicionando? ¿`@victorherasreels` es cuenta propia o
   satélite? De eso depende si el registro flex se puede usar o no.

**Del material (limitaciones de este corpus):**

8. **No hay registro de venta larga.** Todo son reels de ≤110 s. No hay VSL, ni
   webinar, ni live, ni email. **No sabemos cómo habla cuando tiene 20 minutos** —
   y el registro largo es justo el que se necesita para nutrición y para VSL. Con
   esto sólo se pueden escribir hooks, reels y captions.
9. **Los primeros 1-3 segundos del audio son la parte menos confiable del ASR**
   (9 de 26 preguntas de apertura perdieron la palabra interrogativa; varios
   arranques perdieron el artículo). Ningún hook se locuta palabra por palabra sin
   abrir el video. Es la limitación más caramente ubicada del corpus: cae justo
   sobre el activo más valioso.
10. **El ASR no ve la pantalla.** Los rótulos, los planos, el texto sobreimpreso y
    quién dice cada línea del sketch no están en la transcripción. Los diálogos de
    este archivo están reconstruidos por sentido, no por marca de hablante. Caso
    extremo: **ig-089 tiene 37 palabras en 64 segundos** — casi todo el reel es
    texto en pantalla o silencio, y el transcript no lo sabe.
11. **`## Notas`, `## Cifras dichas`, `tema` y `vende` están en `SIN DATO` en las 80
    transcripciones.** Nadie las curó todavía.
12. **160 reels del catálogo sin transcribir** (240 cosechados, 80 transcriptos), y
    la columna `transcripto` del CSV dice `no` en las 240 filas — está
    desactualizada. Faltan sobre todo reels de menos views, que son los que
    permitirían distinguir "esto es su voz" de "esto es lo que le funcionó".
13. **Nada distingue reel orgánico de ad pago**, y sin eso las views no son
    estrictamente comparables entre sí.
