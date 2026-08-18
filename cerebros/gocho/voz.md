# Voz — Gocho

Base YouTube: **106 transcripciones de `@Gocholive`, 682.528 palabras** —
31 de trading editado (76.015) + 34 lives (552.293) + 15 de la era NFT (50.441)
+ 26 shorts (3.779). Fuente: subtítulos automáticos de YouTube
(`fuentes/transcripciones/yt-*.md`).

Base agregada 2026-08-13: **90 reels de `@elgocho`, 18.110 palabras**,
transcriptos con Deepgram nova-2. Es el tercer registro y está medido aparte, en
§"El tercer registro: el reel de IG". **Para ads, empezar por ahí.**

> **Conteo, re-verificado 2026-08-14.** Todas las frecuencias de este archivo se
> volvieron a correr sobre las transcripciones. Método declarado: coincidencia
> con **límite de palabra** sobre el cuerpo `## Transcript` (sin el frontmatter
> ni las secciones `## Notas` / `## Cifras dichas`), con los saltos de línea
> normalizados a un espacio para las expresiones de más de una palabra. Donde el
> número que estaba escrito no reprodujo, está corregido al valor real.

**Advertencia sobre la fuente.** Es ASR. Trae puntuación y es sorprendentemente
bueno, pero se come sílabas y destroza nombres propios: dice "Franklin o Valles"
por Franklin Ovalles, "el Gochito" a veces sale "cochito", los montos pierden
dígitos ("$,000" por "$5.000"), y "eltradingclub.com" aparece como
"trincloud.com", "choclub.com", "tradinc.com". **Las cifras y los nombres de este
archivo no se citan como literales sin verificar contra el video.** Los giros de
lengua sí son confiables: el ASR no inventa un "vaina" que no se dijo.

---

## Tres eras del canal — no las mezcles

| Era | Videos | Contenido | ¿Sirve para ads? |
|---|---|---|---|
| **NFT / cripto** | yt-070 → yt-081 | Axie Infinity, Ronin, NFTs, play-to-earn, MetaTrader 4 | **No.** Otro posicionamiento, otra promesa. Sólo sirve como historia personal. |
| **Lives "Lunes a las 8 con el Gocho"** | yt-032 → yt-065 | Mindset, propósito, emigrar, ser proveedor, Dios, ayahuasca, abundancia | Para **nutrición**, sí. Para ads de conversión, no. |
| **Trading editado** | yt-001 → yt-031 | Futuros, fondeo, estrategia, psicotrading, resultados | **Sí. Es la voz de referencia.** |

Cuando este archivo dice "su voz" sin aclarar, es la de **trading editado**.

## El dato que más importa: habla en dos registros

Mismo hombre, dos formas de hablar, y confundirlas es el error más grande que se
puede cometer.

| | Trading editado (76.015 palabras) | Lives (412.420 palabras) |
|---|---|---|
| "vaina" | 3 veces en total | **595** |
| "pana" | ~0 | 236 |
| "chamo" | ~0 | 153 |
| "papá" (vocativo) | 5 | 329 |
| "Dios" | ~0 | 195 |

*(Esta tabla se midió sobre un recorte de los lives de 412.420 palabras. La
versión re-medida sobre los 34 lives completos —552.293 palabras— está abajo, en
§"Las tres frecuencias, lado a lado", y **da la misma conclusión con otros
absolutos**. Si hay que citar un número, citar el de abajo.)*

**En el contenido editado se autocensura el venezolanismo.** Es una decisión suya,
sostenida a lo largo de 31 videos. Un ad de Gocho lleno de "chamo" y "vaina"
suena a Gocho de live, no a Gocho vendiendo — y va a chocar con la audiencia
pan-hispana que el propio survey busca.

Regla: **ads y guiones de venta → registro editado. Nutrición y contenido de
comunidad → registro de live.**

## El tercer registro: el reel de IG

Base nueva: **90 reels de `@elgocho` transcriptos con Deepgram nova-2, 18.110
palabras**, publicados entre **2025-05-23 y 2026-08-04**
(`fuentes/transcripciones/ig-*.md`, inventario en
`fuentes/catalogo-instagram.csv`). Las 18.110 palabras son la suma exacta de los
campos `palabras:` de los 90 frontmatters — la extracción no perdió nada.

Este es el registro que importa para ads, porque **los ads se filman como
reels**. Y no se parece a ninguno de los dos anteriores.

**Cómo leer los números de acá.** Las métricas del frontmatter (views, likes,
comments) vienen de la API y son duras. Las **palabras** son ASR y son
confiables. Las **cifras dichas dentro del reel no lo son** y en este archivo no
se citan como dato: cuando aparecen abajo, aparecen como "dijo algo así,
verificar contra el video".

**Caveat de método, importante.** Los corpus no son comparables en puntuación:
los reels de IG (Deepgram) traen 1.744 comas y 395 signos `¿` en 18.110
palabras; los lives de YouTube traen **81 comas y cero `¿` en 552.293 palabras**
porque son subtítulos automáticos sin puntuar. Por eso acá sólo se comparan
**palabras**, nunca patrones que dependan de puntuación, y las estadísticas de
oración se calculan sólo sobre IG y editado.

### Las tres frecuencias, lado a lado

Cada 10.000 palabras. Bases: IG 18.110 · editado 76.015 · lives 552.293
(re-medidos sobre `yt-032`–`yt-065` completos; el corpus de lives de §"dos
registros" era de 412.420 palabras y daba **la misma tasa** — "vaina" 14,4 vs
14,0 cada 10.000 — así que la conclusión vieja sigue valiendo, sólo cambian la
base y los absolutos).

| | **Reel IG** | Trading editado | Lives |
|---|---|---|---|
| **vaina** | **0** (0,0) | 4 (0,5) | 772 (**14,0**) |
| **pana** | **0** (0,0) | 0 (0,0) | 256 (4,6) |
| **chamo** | **0** (0,0) | 5 (0,7) | 165 (3,0) |
| **Dios** | 1 (0,6) | 0 (0,0) | 247 (4,5) |
| venezolano/Venezuela | 2 (1,1) | 27 (3,6) | 333 (6,0) |
| plata (por dinero) | 1 (0,6) | 2 (0,3) | 256 (4,6) |

Contado con límite de palabra (`\bvainas?\b`, no substring: "vainita" y
"chamito" no cuentan). **Los 15 lives `yt-066`–`yt-081` (50.441 palabras) quedan
fuera de los dos registros** y nadie los clasificó todavía — ahí "vaina" cae a
1,2 cada 10.000, o sea que no son el mismo material que `yt-032`–`yt-065`. SIN
DATO qué son.

Las dos apariciones sueltas de "Dios" y "plata" en IG no son uso suyo: el "Dios"
es *"para ser nivel a Dios"* (ig-078), ASR roto, y la "plata" se la dice **la
hija** (*"me das plata para comprar algo que yo quiero"*, ig-086). Las dos de
venezolano/Venezuela sí son suyas y son las únicas del corpus: *"Tomo honestidad,
soy venezolano"* (ig-087) y *"nos fuimos a Venezuela"* (ig-092). O sea:
**el origen aparece dos veces en 18.110 palabras, y el dialecto ninguna.**

**Respuesta a la pregunta que se hizo:** "vaina" en los reels **no se comporta
como en los lives — se comporta como en el editado, y más extremo todavía.**
Cero en 18.110 palabras. El reel es el registro **más** despojado de
venezolanismo de los tres. Es el polo de venta, no el de comunidad.

Consecuencia práctica: un ad de Gocho no lleva "vaina", "chamo", "pana" ni
"plata". No es una regla prestada del editado, ahora está medida en el formato
que se va a filmar.

### El "usted" desaparece en el reel

| | Reel IG | Trading editado | Lives |
|---|---|---|---|
| **usted** | **3** (1,7) | 544 (71,6) | 3.385 (61,3) |
| **tú** | 145 (**80,1**) | 476 (62,6) | 3.317 (60,1) |

Y los 3 "usted" del corpus IG **no los dice él**: se los dicen a él.

> "Señor, perdone, ¿a qué edad **se hizo** millonario?" (ig-020)
> "Hey, ¿cuánto paga **usted** de alquiler en Miami?" (ig-060)

**Gocho usa "usted" cero veces en 18.110 palabras de reel.** La mezcla usted/tú
que la sección de abajo llama "su marca registrada" es real en YouTube y **no
existe en IG**. Si el guion es un reel, va todo en "tú". Si el guion es un video
largo o un VSL, vale la mezcla.

### Léxico del reel, con frecuencias reales

Cada 10.000 palabras, IG vs editado. Las que suben son las que hay que usar; las
que bajan son las que suenan a YouTube dentro de un reel.

| Palabra | IG (n) | IG /10k | Editado (n) | Ed. /10k | Lectura |
|---|---|---|---|---|---|
| **dinero** | 164 | **90,6** | 168 | 22,1 | la palabra del formato |
| **papá** (vocativo) | 134 | **74,0** | 5 | 0,7 | por el formato diálogo, ver abajo |
| **estrategia** | 106 | **58,5** | 175 | 23,0 | el mecanismo se nombra el doble |
| **comenta** | 67 | **37,0** | 21 | 2,8 | el CTA hablado |
| clase | 43 | 23,7 | 3 | 0,4 | lo que promete a cambio del comentario |
| **millonario** | 41 | **22,6** | 5 | 0,7 | ×32 |
| carro / coche | 36 | 19,9 | 0 | **0,0** | no existe en el editado |
| amigas | 31 | 17,1 | 1 | 0,1 | el mundo de la hija |
| habilidad | 20 | 11,0 | 16 | 2,1 | reencuadre de "trading" como habilidad |
| **mis alumnos** | 17 | 9,4 | 40 | 5,3 | ×1,8 |
| **hago trading** | 16 | 8,8 | 7 | 0,9 | la presentación de oficio |
| **Uber** | 16 | 8,8 | 5 | 0,7 | el origen, ver devices |
| gratis / gratuita | 16 | 8,8 | 34 | 4,5 | |
| pobre | 14 | 7,7 | 0 | **0,0** | sólo existe en IG |
| **me dedico (a)** | 7 | 3,9 | 2 | 0,3 | la otra mitad de la presentación |
| retirar / retiro | 10 | 5,5 | 161 | 21,2 | ↓ el device más defendible se usa **menos** |
| evaluación | 9 | 5,0 | 56 | 7,4 | ↓ |
| **fondeo** | 6 | **3,3** | 102 | 13,4 | ↓ el mecanismo central del editado casi no se nombra |
| vamos a ver | 1 | 0,6 | 61 | 8,0 | ↓ |
| riesgo | 1 | 0,6 | 58 | 7,6 | ↓ |
| **copiadora** | **0** | 0,0 | 56 | 7,4 | ↓ desaparece |
| **consistencia** | **0** | 0,0 | 37 | 4,9 | ↓ desaparece |
| **fíjate** | **0** | 0,0 | 31 | 4,1 | ↓ desaparece (no hay pantalla que señalar) |
| **señores** | **0** | 0,0 | 14 | 1,8 | ↓ desaparece |

Muletillas que **sí** sobreviven al cambio de formato, casi con la misma tasa:
`bueno` 29,8 vs 24,9 · `ok/okay` 18,2 vs 20,5 · `mira` 15,5 vs 12,6 · `o sea`
7,2 vs 8,4 · `sencillo/fácil` 5,5+5,5 vs 5,4+6,6. Son suyas, no del formato.

Muletilla propia del reel: **"claro que sí"** — 20 veces (11,0/10k) contra 2 en
el editado (0,3). Es cómo el padre le contesta a la hija.

### Los seis formatos del reel (los 90, clasificados)

| Formato | n | Cómo se reconoce |
|---|---|---|
| **Diálogo padre–hija (Cami)** | **51** | arranca con la línea de ella; 40 empiezan literalmente con "Papá," y otros 2 con el nombre roto por el ASR ("Pam", "Babona") |
| Entrevista en la calle | 10 | un desconocido lo aborda: "Perdona, perdona, ¿a qué te dedicas?" (otros 3 mezclan calle e hija) |
| Monólogo a cámara | 17 | ig-014, ig-056, ig-075, ig-100 |
| Letanía "Soy millonario y, por supuesto, no…" | 3 | ig-024, ig-087, ig-094 |
| Ranking "X de 10" | 5 | ig-027, ig-029, ig-031, ig-057, ig-084 |
| Reto contrarreloj / tutorial de pasos | 4 | ig-021, ig-028, ig-051, ig-091 |

**El formato dominante es un diálogo actuado con su hija**, y no aparece ni una
sola vez en las 682.528 palabras de YouTube. Es material nuevo, no una variante.
La hija se llama **Cami / Camila** (70 menciones, 38,7/10k, contra 0 en el
editado). También aparecen **Kiara** (2) y una tercera voz infantil.

### Ritmo y estructura del reel

- **Duración mediana 57,5 s** (mín 23, máx 112; 37 de los 90 caen en 61–90 s).
  El reel de Gocho **no es corto**: sólo 2 de 90 bajan de 30 segundos.
- **203 palabras de mediana por reel** (mín 24, máx 429) → **218 palabras por
  minuto**. Habla rápido y no deja aire.
- **Oración de 10 palabras de mediana** sobre 1.481 oraciones (el editado da
  10 con el mismo separador). El ritmo por oración no cambia; lo que cambia es
  que hay dos voces.
- **27 % de las oraciones son preguntas** (400 de 1.481) contra 20 % en el
  editado. **41 de los 90 reels abren con una pregunta.**
- **Primera oración de 9,5 palabras de mediana.** El gancho es una línea corta
  dicha por otro, no por él.

**La apertura canónica** (40 de 90 reels arrancan literalmente con "Papá,"):

> "**Papá, ¿puedo tener dinero para el nuevo iPhone?** Claro que sí, hija, ya
> va. Tómalo." (ig-006, 1.175.711 views)

> "**Papá, hoy no quiero ir al colegio.** Está bien, Camin, no vayas." (ig-001,
> 9.085.136 views — el reel más visto del corpus)

> "**Papá, no quiero ir a la universidad.** ¿Qué? ¿Tú te has vuelto loca,
> Cami?" (ig-018)

La segunda apertura canónica, la de calle (13 reels):

> "**Perdona, perdona. ¿A qué te dedicas?** — Hago trading. — Ah, bueno, otro
> trader más estafador." (ig-034)

**El cierre canónico.** 68 de 90 reels terminan con la fórmula "comenta … la
palabra X"; **21** terminan sólo con "sígueme / que me sigan / siguiéndome en
esta cuenta"; **uno solo no tiene CTA hablado: `ig-067`.** La palabra pedida:
**puedo 46** (más un "podo", que es "puedo" roto por el ASR), yo 10, clase 4,
estrategia 3, y una vez cada una "nasda" y "juego" (esas dos, ASR dudoso).

> "Comenta en este video la palabra **puedo**, y si eres mayor de edad, te enseño
> a hacerte bien con una estrategia rentable como la mía." (ig-001 — "hacerte
> bien" es ASR roto por "hacerlo"; el resto es limpio)

> "Que comenten en este video la palabra puedo y les envío **una clase** donde van
> a aprender desde 0 con esta estrategia que yo mismo hago." (ig-006)

**28** de los 90 prometen literalmente **"una clase"** a cambio del comentario, y
16 la llaman **"gratuita"** (15 de ellos dicen la fórmula entera, "clase
gratuita"). **Ninguno de los 90 menciona una llamada, una cita ni un formulario**
(`agenda|llamada|cita` = 0 en 18.110 palabras). En el reel el embudo termina en
el comentario; el resto pasa fuera de cámara.

### Lo que el CTA hablado hace con los comentarios

El dato que ordena la producción, y es medible porque views y comments son de
API:

| | n | Views mediana | **Comentarios / 1.000 views** (mediana) |
|---|---|---|---|
| Pide "comenta la palabra X" | 68 | 48.053 | **10,2** |
| Sólo "sígueme en esta cuenta" | 21 | 51.145 | **0,5** |
| Sin CTA hablado (`ig-067`) | 1 | 35.605 | 1,0 |

**Mismo alcance, veinte veces más comentarios.** Los dos grupos tienen views
medianas prácticamente iguales (48,1k vs 51,1k), así que la diferencia no es
distribución: es la pregunta. Para llenar el ManyChat, el CTA hablado vale más
que el alcance.

Caveat honesto: el CTA hablado y el del caption casi nunca se contradicen (67 de
90 lo piden en los dos lados, 21 en ninguno, sólo 2 mezclados), así que **este
corpus no puede separar el efecto del caption del efecto de la voz**. Lo que sí
dice es que la pieza entera pide o no pide, y que pedir rinde ×20.

Cruce con formato, sosteniendo el CTA constante. Criterio de "diálogo"
reproducible: **la primera oración del reel es la línea de la hija** (arranca con
"Papá,", "Pam," o "Babona," — 42 de 90):

| | n | Views mediana | Coment / 1.000 |
|---|---|---|---|
| Diálogo padre–hija + "comenta la palabra" | 28 | 56.247 | 8,0 |
| No-diálogo + "comenta la palabra" | 40 | 46.853 | **13,1** |
| Diálogo padre–hija + sólo "sígueme" | 13 | 46.655 | 0,5 |

El diálogo con la hija **alcanza más** que el resto (56,2k vs 46,9k de mediana) y
sin embargo **convierte a comentario un 39 % peor**. Los tres reels con mejor
tasa del corpus no son diálogos familiares: ig-028 (41,5/1.000), ig-007 (41,0),
ig-034 (38,5).

Y el freno, por semestre (mediana de com/1k, sobre los 90 transcriptos):

| Semestre | n | Views mediana | Com/1k |
|---|---|---|---|
| 2025-S1 | 15 | 51.145 | **0,5** |
| 2025-S2 | 48 | 47.189 | **12,7** |
| 2026-S1 | 23 | 55.075 | 3,2 |
| 2026-S2 | 4 | 30.856 | 2,3 |

**Cuidado con leer esto como una caída pareja.** El 0,5 de 2025-S1 no es un techo
perdido: en ese semestre **14 de los 15 reels pedían "sígueme" y ninguno pedía un
comentario** — no había nada que convertir. La conversión a comentario nace en
2025-S2 con el cambio de CTA (45 de 48 piden comentario) y **ahí sí cae**: 12,7 →
3,0 en 2026. Lo que se rompió está entre 2025-S2 y 2026, no antes.

### Devices de autoridad propios del reel

1. **"Hace 8 años estaba haciendo Uber."** 16 menciones de Uber (8,8/10k contra
   0,7 en el editado). Es el origen y sólo vive acá.
   > "Este reloj vale 300000 dólares, y hace 8 años estaba haciendo Uber, y así fue
   > exactamente como lo hice. Lo 1º fue hacer Uber, ¿por qué? Porque necesitaba
   > un ingreso para poder alimentar a mi hija." (ig-080 — los "300000 dólares" son
   > ASR: SIN VERIFICAR, no usar la cifra en pieza; el device es el Uber, no el reloj)
2. **La estrategia que "me dice exactamente".** 13 reels usan la misma frase, es
   la oración canónica del corpus:
   > "Tengo una estrategia sencilla que **me dice exactamente dónde comprar y
   > dónde vender**, que inclusive hasta un niño de 12, 14 años podría hacerlo."
   > (ig-007)
   Variantes contadas: "cuándo comprar y cuándo vender" 8 · "dónde comprar y
   dónde vender" 4 · "cuándo entrar y cuándo salir" 4.
3. **El beat de la pérdida, siempre pegado al anterior.** 10 reels lo scriptean:
   > "¿Y nunca pierdes, papá? — **Claro que sí, hija. También pierdo, pero gano
   > más de lo que pierdo.**" (ig-006)
   > "Con mi estrategia pierdo y gano, pero gano más de lo que pierdo y confío
   > 100 por 100 en la estadística." (ig-075)
   Es el mismo device de compliance del editado ("aquí no hay nada seguro") pero
   escrito como pregunta del interlocutor. **Reutilizable tal cual.**
4. **Anti-ostentación en primera persona, en anáfora.** "Soy millonario" 14
   veces, pero **concentradas en 4 reels** — es una figura de un formato, no una
   muletilla; "millonario/a" 41 en total (22,6/10k contra 0,7 en editado).
   > "Soy millonario y, por supuesto, no tengo un yate. Me gusta estar aquí en la
   > piscina y, de vez en cuando, con mis amigos, hacer una parrilla. Soy
   > millonario y, por supuesto, no tomo whisky ni vinos caros." (ig-087)
5. **La libertad medida en horas de colegio, no en dinero.** Es el device más
   fuerte del corpus y el de menor riesgo de compliance:
   > "La meta no es tener un Ferrari ni tampoco un Richard 1000, la meta es
   > poder recoger al colegio todos los días a mi hijo sin tener que pedirle
   > permiso a un jefe." (ig-014 — "Richard 1000" es como el ASR escribió una
   > marca de relojes; no reusar el nombre sin verlo en el video)
6. **"Comparto mi pantalla y tú ves si gano o si pierdo."** Mismo device que en
   YouTube, dicho en el formato calle:
   > "— ¿Haces trading compartiendo tu pantalla? — Sí, compartiendo mi pantalla y
   > tú puedes ver si gano o si quiero [pierdo]. — ¿Cómo que perder? Que los
   > traders pierden dinero. — **Claro que perdemos.**" (ig-034)

**Los años de oficio, con evidencia nueva.** En los reels dice "8 años" **13
veces** y "9 años" **2 veces** (contadas excluyendo los 3 "18 años" del filtro de
mayoría de edad), y lo sigue diciendo así en 2026: *"yo llevo más de 8 años
haciendo trading"* (ig-090, 2026-01-27) · *"hace 8 años hacía Uber"* (ig-014,
2026-02-09). Una vez ancla el año: *"Hace 8 años. Empecé en el año 2017"*
(ig-023). Una vez lo dice de las dos formas en la misma respuesta:
*"Aproximadamente 8 años, casi 9 años"* (ig-013). Los dígitos son justo lo que el
ASR arruina, así que **esto no cierra la pregunta 8-vs-9 — la mueve**: la forma
que él usa en cámara, sostenida en 13 reels a lo largo de 14 meses, es **"más de
8 años"**. Verificar contra un video antes de fijarla en campaña.

### Qué NUNCA dice en un reel

Cero apariciones en 18.110 palabras, verificado por conteo:

- **Cero venezolanismo:** `vaina` 0 · `pana` 0 · `chamo` 0 · `coño` 0 ·
  `bendición` 0 · `gringo` 0.
- **Cero promesa de certeza:** `te lo garantizo` 0 · `garantía/garantizado` 0 ·
  `sin riesgo` 0 · `dinero fácil` 0 · `rápido y fácil` 0 · `ingreso pasivo` 0.
  Las 5 apariciones de "nunca pierdes / no vas a perder" son **la pregunta del
  interlocutor**, y las 5 veces él contesta que sí pierde.
- **Cero oferta:** `curso` 0 · `precio` de su programa 0 (las 5 de "precio" son
  otra cosa: 2 el precio del mercado en ig-002, 2 "pagar el precio" en sentido
  figurado en ig-041, 1 el precio de un alquiler en ig-060) · `descuento` 0 ·
  `beca` 0 · `cuotas` 1 (la hija preguntando por un iPhone, ig-098) ·
  `webinar/masterclass` 0 · `agenda/llamada/cita` 0.
- **Cero herramienta prestada:** `bot/robot` 0 · `señales` 1 · `apalancamiento` 0
  · `copiadora` 0 (contra 55 en el editado) · `psicotrading` 0.
- **Cero muletilla de pantalla:** `fíjate` 0 · `presta atención` 0 · `imagínate`
  0 · `señores` 0. Sin pantalla compartida, esas palabras no le salen.
- **Cero LinkedIn**, igual que en YouTube.

### Ejemplos de anclaje del registro reel

Pegar **enteros** cuando haya que escribir un ad. Los siete cubren los seis
formatos:

| Para | Reel | Métrica dura | Por qué |
|---|---|---|---|
| Diálogo padre–hija canónico | `ig-006` | 1.175.711 views · 19,7 com/1k | la explicación completa del mecanismo en boca de padre a hija, con el beat de la pérdida |
| Diálogo que además convierte | `ig-005` | 1.292.271 views · **28,5 com/1k** | el mejor de los diálogos: back testing, "no te confíes de todo lo que ves en Instagram" |
| Entrevista de calle | `ig-007` | 710.088 views · **41,0 com/1k** | el segundo mejor del corpus; outfit → reloj → "hago trading" |
| Objeción frontal | `ig-034` | 70.581 views · 38,5 com/1k | "otro trader más estafador" y la respuesta con pantalla compartida |
| Monólogo de valores | `ig-014` | 399.014 views | la meta no es el Ferrari; el device de compliance más limpio |
| Confesión / anti-estafa | `ig-056` | 45.714 views · 30,3 com/1k | "El trading es una estafa, y te lo digo por experiencia propia" |
| Letanía anti-lujo | `ig-087` | 25.093 views | la anáfora "Soy millonario y, por supuesto, no…" |

Ojo con `ig-003` (2.989.466 views, **0,1 com/1k**) y `ig-001` (9.085.136 views,
1,0 com/1k): son los dos más vistos del corpus y están **entre los peores en
comentarios**. Alcance y comentario no son la misma métrica; ver
`biblioteca/hooks.md` §2.

### Lo que este corpus no puede medir

- **El hook visual de los primeros 3 segundos.** Sólo hay audio. El campo
  `## Hook (0-3s)` de cada transcripción es un recorte automático de la primera
  oración, no una lectura del video. Qué se ve mientras la hija dice "Papá," es
  `SIN DATO`.
- **Qué reels fueron ads pagos y cuáles orgánicos.** Nada en el catálogo lo
  distingue, y sin eso las views no son comparables entre sí.
- **Retención y watch-time.** La API sólo dio views, likes, comentarios y
  duración. Sin retención no se puede decir si el reel de 90 segundos se ve
  entero.
- **Cuántos de esos comentarios terminaron en ManyChat.** El puente
  comentario → conversación no está en este corpus (está en el pilar Nutrición
  del panel, no acá).
- **Todas las cifras dichas en cámara**: montos de retiro, precios de relojes,
  "1.000.000 en 30 días" (8 reels), "25.000.000 de la comunidad" (5 reels),
  "gané 400.000 en lo que va del año". El ASR se come dígitos. **Ninguna de
  estas cifras se usa en un ad sin verla en el video.**
- **Nombres propios**: "Andreina", "Alfredo", "Carlitos" aparecen como alumnos
  con resultados, pero el ASR también escribió "Toste punto com" (Topstep),
  "Tradingville" (TradingView), "chwain / stading / Twain" (trading) y "PAEle"
  (pádel). Verificar cualquier nombre antes de publicarlo.

## Mezcla "usted" y "tú" en la misma frase

No es un error del ASR: es su marca registrada. Cada 10.000 palabras del
contenido editado usa **78 veces "usted"** y **59 veces "tú"**, y salta de uno al
otro sin transición.

> "Así que si **usted** quiere saber cómo funciona mi sistema de trade, cuál es
> mi pérdida consecutiva, aquí abajo sí hay un link. Dale click y ahí está toda
> la información." (yt-001)

> "Y si **usted** por casualidad quiere aprender a hacer futuro y quiere que el
> Gochito sea **su** mentor, aquí abajo **te** dejo un link." (yt-006)

**No lo normalices.** Si escribís todo en "tú" pierde la voz. El "usted" no es
formalidad: es la deferencia respetuosa de un venezolano de 40 largos hacia
alguien mayor o desconocido, mezclada con la confianza del "tú". Ese roce es él.

## Léxico propio, con frecuencias reales

Del contenido editado (31 videos, 76.015 palabras). Re-contado 2026-08-14; la
columna dice con qué forma se contó, porque el criterio cambia el número (p. ej.
`fondeo` 124 contando "fondeo/fondeos", 102 contando sólo "fondeo"):

| Expresión | Veces | Forma contada | Para qué la usa |
|---|---|---|---|
| bueno | 189 | palabra exacta | arranque de frase, respiro |
| okay / ok | 156 | palabra exacta | cierre de idea + apertura de la siguiente |
| **fondeo** | 124 | fondeo + fondeos | el mecanismo central |
| realmente | 104 | palabra exacta | énfasis de veracidad ("realmente no necesitas un indicador") |
| **mira** | 99 | mira + mirá/miras | te trae la atención antes de mostrar pantalla |
| o sea | 64 | expresión | reformula lo que acaba de decir |
| **vamos a ver** | 61 | expresión | promesa de demostración, casi siempre en los primeros 10 segundos |
| riesgo | 58 | riesgo + riesgos | |
| **copiadora** | 56 | copiadora/-s | copiar operaciones a varias cuentas fondeadas |
| evaluación | 56 | evaluación + evaluaciones (28 en singular) | la prueba de la empresa de fondeo |
| fácil / sencillo | 47 / 23 | palabra exacta | desactiva la objeción de dificultad |
| **mis alumnos** | 40 | expresión | su prueba social principal |
| consistencia | 37 | palabra exacta | el deseo del avatar, con su palabra |
| la mayoría | 34 | expresión | siempre para contrastarse con ella |
| **fíjate** | 31 | palabra exacta | señala algo en pantalla |
| señores | 14 | palabra exacta | vocativo de apertura |

Vocabulario técnico que sí usa y la audiencia entiende: **fondeo, cuenta
fondeada, evaluación, copiadora, drawdown, contratos, volatilidad, intradía,
target, stop**.

## Muletillas y conectores

Lo que más delata una imitación mal hecha.

- **"Bueno,"** abre. **"Okay,"** cierra una idea y abre la próxima. **"O sea,"**
  reformula. **"Realmente,"** enfatiza.
- **"Fíjate", "Mira", "Presta atención"** — siempre antes de mostrar algo en
  pantalla. Son deícticos: sin pantalla no tienen sentido.
- **"pum" / "pam"** onomatopeya del momento en que entra la operación:
  > "Esta que estaba aquí se perdía, pero ya esta que estaba aquí, fíjate, pum,
  > se ganaba." (yt-003)
- Se autocorrige en voz alta y **no lo edita**: "y bueno, en mi caso", "digo yo,
  mis alumnos", "no sé, handing, algo así".

## Ritmo y estructura

- **Oración de 10 palabras de mediana** (5.158 oraciones, cortadas en `.!?`).
  Corto. Habla en golpes, no en párrafos. *(La versión anterior de esta línea
  decía 12 palabras sobre 3.830 oraciones; con el separador declarado no
  reproduce. El ritmo es el mismo que en el reel: 10 y 10.)*
- **Cómo abre — el patrón es casi invariable en los 31 videos editados:**
  1. Dice el título del video como pregunta o afirmación, casi textual.
  2. Promete la demostración: "vamos a ver", "te voy a explicar", "te lo voy a mostrar".
  3. *Recién ahí* se presenta, y no siempre.

  > "¿Por qué la mayoría fracasan el trading y demostrado por la ciencia? Vamos a
  > ver. Okay, nuevamente por aquí soy Franklin O**valles**. Me conocen en las
  > redes como Gocho o el Gocho o Gocho Live." (yt-001)

  > "Esta es la estrategia de trading que seguiría si solo tuviera $100. Así que
  > vamos a ver cuál es la estrategia de trading." (yt-002)

  > "Los únicos dos indicadores que tú necesitas para vivir del trading. ¿Cuántas
  > veces tú has escuchado este tipo de videos en cualquier video YouTube? Pero te
  > voy a…" (yt-003)

  **Nunca hay saludo antes del gancho en el contenido editado.** Los lives sí
  abren con "buenas buenas, cómo están todos ustedes" — otro registro.

- **Cómo cierra:** oferta condicional + dónde está el link. Textual:
  > "Si tú quieres que yo sea tu mentor y te guíe paso a paso para que no cometas
  > los errores que yo cometí en el pasado, rellena el formulario aquí abajo." (yt-020)

  > "Ese link vas a poder agendar con el equipo de admisiones de mi academia y
  > ellos se van a encargar de ver si tú **calificas o si no calificas**." (yt-014)

  El "si calificas o no calificas" es el mecanismo de escasez que él ya usa. Es
  reutilizable tal cual y coincide con el survey de calificación del funnel.

## Devices de autoridad (los suyos, textuales)

1. **Años de oficio, dichos en primera persona.** El número a usar es **9 años**
   (decisión de Ariel, 2026-07-29: de los dos que aparecen, va el más alto).
   Coincide con el "+ de 8 años" de la ficha de Hotmart, que es la única fuente no
   ASR y dice "más de 8".
   > "Llevo 9 años en esto y si tuviera que empezar desde cero hoy, no haría nada
   > de lo que la mayoría hace." (yt-020)

   Los videos viejos dicen 8 ("Hago trading desde hace más de 8 años", yt-012;
   "Este mes cumplí 8 años que hago trading. De esos 8 años tengo siete siendo
   rentable", yt-014). **No mezclar los dos números en la misma campaña.** Si se
   quiere la credencial con la falla adentro, la versión de 9 años es
   "9 años, 8 rentable" — pero eso hay que confirmarlo con él, porque nadie lo dijo
   así en cámara.
2. **La edad como diferencial.** "Me hice millonario a mis 40 años" (yt-004).
   Contra "los traders de 18 años" del catálogo de IG. Su ventaja es que **no** es
   un pibe.
3. **Operar en vivo compartiendo pantalla.** "estos son ejecutados en vivo en
   tiempo real con mis alumnos" (yt-003) · "Primera semana de trading en vivo con
   mi comunidad, compartiendo mi pantalla" (yt-028).
4. **Los alumnos retiran, no ganan.** "mis alumnos que están fondeados, que están
   logrando **retiros** de dinero a través de empresas de fondeo". El retiro es la
   prueba, no el P&L en pantalla. Es un device más fuerte y más defendible.

## Qué NUNCA dice

La mitad del trabajo de una voz es la lista de prohibiciones.

- **Nunca habla como LinkedIn.** Cero "sinergia", "mindset ganador", "escalar tu
  negocio", "desbloquear tu potencial", "hackear". Nada de eso aparece en las
  682.528 palabras de YouTube ni en las 18.110 de IG.
- **Nunca se pone en vendedor de códigos de afiliado.** Es explícito:
  > "Así que no es que te la estoy diciendo, que aquí abajo está mi código, no,
  > nada de eso." (yt-022)
- **Nunca finge saber inglés.** Se ríe de sí mismo: "estoy haciendo cobertura o
  handing, como le dicen en inglés, no sé, handing, algo así, **no hablo
  inglés**." (yt-024) Es un rasgo de humildad reutilizable, no un defecto a tapar.
- **Nunca promete certeza.** "Aquí no hay nada seguro" (yt-017) · "aquí no siempre
  todo pasa de la misma manera". Esto además es lo que lo mantiene del lado
  correcto del compliance — ver `oferta.md`.
- **No usa "vaina", "chamo", "pana" en contenido de venta.** Ver registros arriba.
- **No dice "curso".** Dice "programa", "mi academia", "mi sistema", "que yo sea
  tu mentor".
- **No dice "invertir" cuando habla de trading.** Lo separa: "te estoy hablando de
  porcentajes reales que se pueden hacer **especulando**, pues no estamos
  invirtiendo en bolsa" (yt-003). Distinción legal y de voz a la vez.

## Ejemplos de anclaje

Cuando haya que contagiar el tono, pegar **enteros** estos tres del contenido
editado — el tono se transmite mejor con ejemplo largo que con reglas:

| Para | Video | Por qué |
|---|---|---|
| Voz de venta / explicación | `yt-001-por-que-la-mayoria-fracasa-en-el-trading-*.md` | apertura canónica, 2.012 palabras, argumento cerrado |
| Voz de demostración en pantalla | `yt-024-aplique-mi-estrategia-y-saque-6-000-del-mercado-*.md` | fíjate/mira/pum en su hábitat |
| Voz de historia personal | `yt-004-me-hice-millonario-a-mis-40-*.md` | el ángulo de la edad, en primera persona |

Para nutrición en registro de comunidad, cualquiera de los lives de
`yt-032`–`yt-065`. Advertencia: **esos VTT no traen puntuación** y arrancan con
5–10 minutos de saludos nominales antes del tema.

## Lo que falta

- ~~El hook hablado de los reels de IG~~ — **hecho** (2026-08-13): 90 reels
  transcriptos, registro medido arriba y hooks con métrica en
  `biblioteca/hooks.md` §3c. El catálogo de IG tiene hoy **199 posts de
  `@elgocho`** (2025-05-23 → 2026-08-12), así que **quedan 109 sin transcribir**;
  los 90 hechos son los de más views y cubren 2025-05-23 → 2026-08-04.
- **El hook visual de los primeros 3 segundos.** De los reels sólo hay audio.
- **El VSL.** 40 minutos de él vendiendo seguido. La mejor fuente que falta.
- Verificar contra video: los años de oficio (8 vs 9) y todas las cifras.
