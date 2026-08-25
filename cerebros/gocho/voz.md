# Voz — Gocho

Base YouTube, ampliada 2026-08-24: **133 transcripciones de `@Gocholive`,
991.640 palabras** (2021-11-08 → 2026-07-24) — 31 de trading editado (73.720)
+ 34 lives de mindset de 2023 (533.916) + **27 streams de trading en vivo
(331.290)** + 12 de la era NFT (40.481) + 26 shorts (3.680) + 3 sin clasificar
(8.553). Fuente: subtítulos automáticos de YouTube
(`fuentes/transcripciones/yt-*.md`).

**Los 27 streams son material nuevo y son un tercio del corpus de YouTube.**
Estaban en `/streams`, que la cosecha anterior no listaba: por eso ninguna
versión previa de este archivo los tenía. Traen el registro que faltaba —él
operando en vivo y explicando mientras opera— y están medidos en §"El cuarto
registro: el stream de trading".

Base agregada 2026-08-13: **90 reels de `@elgocho`, 18.110 palabras**,
transcriptos con Deepgram nova-2 (17.627 medidas; ver el método de conteo abajo).
Es el registro de venta y está medido aparte, en §"El tercer registro: el reel de
IG". **Para ads, empezar por ahí.**

**Conteo, re-verificado 2026-08-24.** Todas las frecuencias se volvieron a
correr después de arreglar dos errores que falseaban los conteos de gocho más
que los de ningún otro cerebro: el cuerpo de la transcripción se cortaba en la
primera "Z" mayúscula del texto —se perdía el **16,6%** del corpus, y un
archivo perdía el 97% de lo dicho— y el tokenizador tiraba las palabras de una
letra, entre ellas la `a`. Además se borraron **32 transcripciones duplicadas**
(el mismo `yt-NNN` guardado con dos títulos distintos), que se estaban contando
dos veces. Por eso hay números que **bajaron** respecto de la versión anterior
de este archivo —"vaina" en los lives de 2023: 772 → 713—: el corpus de antes
contaba piezas de más y leía texto de menos.

Método declarado: coincidencia con **límite de palabra Unicode** (`(?<!\p{L})`,
no `\b`, que en JavaScript no dispara después de una vocal acentuada y hacía
dar cero a "tú") sobre el cuerpo `## Transcript` —sin el frontmatter ni las
secciones `## Notas` / `## Cifras dichas`—, con los saltos de línea normalizados
a un espacio. **Los dígitos sueltos quedan fuera del denominador**: el ASR los
destroza y "0 0 0" no es vocabulario. De ahí que las palabras medidas acá sean
~3% menos que la suma de los campos `palabras:` de los frontmatters (991.640
contra 1.028.207 en YouTube; 17.627 contra 18.110 en IG). Cuando este archivo
dice "cero apariciones en 18.110 palabras" el número es el del frontmatter y la
afirmación no cambia: cero es cero con cualquier denominador.

**Reconciliación con la herramienta (2026-08-25).** `node
cerebros/scripts/medir-voz.mjs gocho` devuelve **990.716** palabras de YouTube
(655.824 largos + 331.210 lives + 3.682 shorts) donde acá se lee 991.640. Las
~924 de diferencia son las **marcas del ASR** (`[Música]`, `[Aplausos]`), que la
herramienta descarta y el contador de estas tablas no. Los reels dan idéntico
(17.627). Es el 0,1 % del corpus y no mueve ninguna tasa a un decimal. **La
herramienta es la fuente de verdad**; las tablas quedan con el denominador con el
que se corrieron.

**Advertencia sobre la fuente.** Es ASR. Trae puntuación y es sorprendentemente
bueno, pero se come sílabas y destroza nombres propios: dice "Franklin o Valles"
por Franklin Ovalles, "el Gochito" a veces sale "cochito", los montos pierden
dígitos ("$,000" por "$5.000"), y "eltradingclub.com" aparece como
"trincloud.com", "choclub.com", "tradinc.com". **Las cifras y los nombres de este
archivo no se citan como literales sin verificar contra el video.** Los giros de
lengua sí son confiables: el ASR no inventa un "vaina" que no se dijo.

**Segunda advertencia, de método, y es la que más caro sale ignorar: en este
canal conviven dos generaciones de ASR.** Los videos recientes vuelven puntuados,
acentuados y con mayúsculas en cada oración; los viejos vuelven **sin un solo
signo de puntuación** —tildes sí, comas y puntos no— y cortados por línea de
subtítulo. Eso no es una diferencia de cómo habla él: es
una diferencia de cómo lo transcribe YouTube, y arruina cualquier marcador que
dependa de la transcripción más que de la lengua.

El caso testigo es **"eh"**: 26,5 cada 10.000 palabras en los streams nuevos,
15,3 en el editado nuevo… y **2,2 en los lives de 2023**, que son los más
espontáneos y menos guionados de todo el corpus. Leído sin control, el dato dice
"habla más entrecortado cuando está en vivo, salvo en 2023". Lo que pasa es que
el ASR viejo se comía las muletillas.

Regla: **antes de creer que un marcador es de registro, comprobar que los dos
grupos que se comparan estén transcriptos por la misma generación de ASR.** Las
tablas de este archivo que comparan editado contra stream lo hacen dentro de la
era nueva, y lo dicen. Las que comparan contra los lives de 2023 valen para
léxico (`vaina`, `pana`, `usted`) y **no** valen para muletillas ni para nada que
dependa de puntuación.

---

## Cuatro eras del canal — no las mezcles

| Era | Videos | Cuándo | Contenido | ¿Sirve para ads? |
|---|---|---|---|---|
| **NFT / cripto** | `yt-070` → `yt-081` | 2021-11 → 2022-05 | Axie Infinity, Ronin, NFTs, play-to-earn, MetaTrader 4 | **No.** Otro posicionamiento, otra promesa. Sólo sirve como historia personal. |
| **Lives "Lunes a las 8 con el Gocho"** | `yt-032` → `yt-065` | 2023-04 → 2023-09 | Mindset, propósito, emigrar, ser proveedor, Dios, ayahuasca, abundancia | Para **nutrición**, sí. Para ads de conversión, no. |
| **Streams de trading en vivo** | `yt-083` → `yt-110` | 2023-06 → 2026-07 | Opera en vivo y explica mientras opera: colchón, stop, fondeo, Topstep, Apex, la sala | Para **prueba y objeciones**, sí. Para guion de ad, no: la mitad tiene groserías. |
| **Trading editado** | `yt-001` → `yt-031` | 2024-07 → 2026-07 | Futuros, fondeo, estrategia, psicotrading, resultados | **Sí. Es la voz de referencia.** |

Cuando este archivo dice "su voz" sin aclarar, es la de **trading editado**.

Las dos últimas eras corren en paralelo desde 2025: sube editado y transmite en
vivo la misma semana. No es una evolución, son dos canales de la misma persona.

**Sobre la numeración.** Los números **069**, **082** y **107** no tienen archivo
en disco: son videos del canal que no tienen subtítulos automáticos. Los huecos son normales.
Lo que **no** es normal es que un `yt-NNN` cambie de video: el número está fijado
por id en `fuentes/catalogo-youtube.csv` y se hereda en cada cosecha, justamente
para que las refs de este archivo no se corran cuando el cliente sube algo nuevo.

## El dato que más importa: habla en dos registros

Mismo hombre, dos formas de hablar, y confundirlas es el error más grande que se
puede cometer.

Los números están medidos sobre las bases completas y con los **cuatro**
registros lado a lado en §"Las cuatro frecuencias, lado a lado", acá abajo. Toda
cifra que vaya a una pieza o a una discusión se cita de ahí. El vocativo
"papá" es un caso aparte y está en §"Los seis formatos del reel": casi siempre
lo dice la hija, no él.

**En el contenido editado se autocensura el venezolanismo.** Es una decisión suya,
sostenida a lo largo de 31 videos, y desde 2026-08-24 está confirmada **con la
era de ASR controlada**: comparando sólo transcripciones de la generación nueva,
"vaina" da 0,6 cada 10.000 en el editado contra 7,8 en los streams del mismo
período. No era un artefacto de transcripción. Un ad de Gocho lleno de "chamo" y "vaina"
suena a Gocho de live, no a Gocho vendiendo — y va a chocar con la audiencia
pan-hispana que el propio survey busca.

Regla: **ads y guiones de venta → registro editado o reel. Nutrición y contenido
de comunidad → registro de live. Prueba, objeciones y procedimiento → streams.**

## El tercer registro: el reel de IG

Base nueva: **90 reels de `@elgocho` transcriptos con Deepgram nova-2, 18.110
palabras**, publicados entre **2025-05-23 y 2026-08-04**
(`fuentes/transcripciones/ig-*.md`, inventario en
`fuentes/catalogo-instagram.csv`). Las 18.110 palabras son la suma exacta de los
campos `palabras:` de los 90 frontmatters — la extracción no perdió nada. Medidas
con el tokenizador de `medir-voz.mjs`, que descarta los dígitos sueltos, son
17.627; las tasas cada 10.000 de este archivo usan ese denominador.

Este es el registro que importa para ads, porque **los ads se filman como
reels**. Y no se parece a ninguno de los dos anteriores.

**Cómo leer los números de acá.** Las métricas del frontmatter (views, likes,
comments) vienen de la API y son duras. Las **palabras** son ASR y son
confiables. Las **cifras dichas dentro del reel no lo son** y en este archivo no
se citan como dato: cuando aparecen abajo, aparecen como "dijo algo así,
verificar contra el video".

**Caveat de método, importante.** Los corpus no son comparables en puntuación:
los reels de IG (Deepgram) traen 1.744 comas y 395 signos `¿` en 18.110
palabras; los lives de 2023 traen **81 comas y cero `¿` en 533.916 palabras**
porque son subtítulos automáticos sin puntuar (los streams de 2025-26 sí vienen
puntuados: son de la generación nueva de ASR). Por eso acá sólo se comparan
**palabras**, nunca patrones que dependan de puntuación, y las estadísticas de
oración se calculan sólo sobre IG y editado.

### Las cuatro frecuencias, lado a lado

Cada 10.000 palabras, con el conteo absoluto adelante. Bases medidas: reel IG
17.627 · editado 73.720 · **stream 331.290** · lives 2023 533.916. Re-contado
2026-08-24 sobre el corpus deduplicado y sin el corte en "Z" (ver la caja de
conteo arriba); por eso los absolutos de los lives bajaron respecto de la versión
anterior.

| | **Reel IG** | Trading editado | **Stream** | Lives 2023 |
|---|---|---|---|---|
| **vaina** | **0** (0,0) | 4 (0,5) | 243 (**7,3**) | 713 (**13,4**) |
| **pana** | **0** (0,0) | 0 (0,0) | 81 (2,4) | 191 (3,6) |
| **chamo** | **0** (0,0) | 4 (0,5) | 33 (1,0) | 122 (2,3) |
| **Dios** | 1 (0,6) | 0 (0,0) | 102 (3,1) | 247 (4,6) |
| venezolano/Venezuela | 2 (1,1) | 27 (3,7) | 97 (2,9) | 332 (6,2) |
| plata (por dinero) | 1 (0,6) | 2 (0,3) | 245 (**7,4**) | 256 (4,8) |

Contado con límite de palabra Unicode (`vainas?`, no substring: "vainita" y
"chamito" no cuentan).

**El venezolanismo cae por la mitad entre 2023 y 2026 y sigue siendo enorme
comparado con el editado.** "Vaina" pasa de 13,4 en los lives de mindset a 7,3 en
los streams de trading, y de ahí a 0,5 en el editado y a 0 en el reel. La escala
es la misma en los cuatro registros: **cuanto más vendedor es el formato, menos
venezolano habla**. El reel es el extremo.

**"Plata" es la excepción y tiene sentido.** Es el único marcador donde el
stream supera a los lives (7,4 contra 4,8): está operando, hablando de dinero
todo el tiempo. Es tema, no dialecto.

**Las eras que quedan fuera de los cuatro registros**: `yt-070`–`yt-081` (12
piezas, 40.481 palabras) es la era NFT, con "vaina" en 1,5 — no habla como en los
lives ni como en el editado, es otro personaje y no se usa. `yt-066`–`yt-068`
(3 piezas, 8.553 palabras, 2022-12 → 2023-02) sigue **SIN CLASIFICAR**.

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

| | Reel IG | Trading editado | Stream | Lives 2023 |
|---|---|---|---|---|
| **usted** | **3** (1,7) | 544 (73,8) | 2.558 (77,2) | 3.385 (63,4) |
| **tú** | 145 (**82,3**) | 476 (64,6) | 1.757 (53,0) | 3.317 (62,1) |

Y los 3 "usted" del corpus IG **no los dice él**: se los dicen a él.

> "Señor, perdone, ¿a qué edad **se hizo** millonario?" (ig-020)
> "Hey, ¿cuánto paga **usted** de alquiler en Miami?" (ig-060)

**Gocho usa "usted" cero veces en 18.110 palabras de reel.** La mezcla usted/tú
que la sección de abajo llama "su marca registrada" es real en YouTube y **no
existe en IG**. Si el guion es un reel, va todo en "tú". Si el guion es un video
largo o un VSL, vale la mezcla.

Y la mezcla es **estable en todo YouTube**: 73,8 / 64,6 en el editado, 77,2 /
53,0 en el stream, 63,4 / 62,1 en los lives de 2023. Cambian el tema, el
dialecto y las groserías; el trato no. Lo único que lo apaga es la cámara de
reel.

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
sola vez en las 991.640 palabras de YouTube —contando los 27 streams nuevos. Es material nuevo, no una variante.
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

## El cuarto registro: el stream de trading (`yt-083`–`yt-110`)

Base: **27 streams, 331.290 palabras medidas**, publicados entre **2023-06-07 y
2026-07-24** (`fuentes/transcripciones/yt-083*` … `yt-110*`; los 24 de
`yt-083`–`yt-106` son de 2025-09 en adelante). Es **un tercio de todo el corpus
de YouTube** y no estaba en ninguna versión anterior de este archivo: la cosecha
listaba `/videos` y `/shorts`, y estos viven en `/streams`.

**Qué es.** Él con el gráfico en pantalla, operando en vivo y explicando lo que
hace mientras lo hace, con la sala y el chat de YouTube al lado. **No es** el
live de mindset de 2023 ("Lunes a las 8 con el Gocho"): ahí no había gráfico,
había charla sobre propósito, pareja, Dios y emigrar. Los dos son "live" y
comparten el dialecto, pero el tema, las muletillas y el vocabulario cambian.

Para qué sirve: es **la única fuente donde se lo ve trabajar**. Todo lo que en el
editado es promesa ("mi sistema", "gestión de riesgo"), acá está el
procedimiento en voz alta. Es la mina de prueba y de objeción, no de guion de
ad.

### Las muletillas de comprobación — el tic que delata al stream

Cada 10.000 palabras, **con la era de ASR controlada**: los 29 editados y los 24
streams de acá vienen todos de la generación nueva de subtítulos (ver la
advertencia de arriba), así que la comparación es válida. Entre corchetes, en
cuántas piezas del grupo aparece — un marcador que está en 24 de 24 es un rasgo,
uno que está en 3 de 29 es una casualidad.

| Cada 10.000 palabras | Editado (29 · 70.375) | **Stream (24 · 311.150)** | Reel IG (90 · 17.627) |
|---|---:|---:|---:|
| **me entiendes** | 0,6 [3/29] | **8,5 [24/24]** | 0,0 [0/90] |
| **entiendes** | 2,0 [7/29] | **10,0 [24/24]** | 0,0 [0/90] |
| **ojo** | 5,4 [16/29] | **14,7 [24/24]** | 2,3 [3/90] |
| **ya va** | 1,6 [4/29] | **3,4 [24/24]** | 2,8 [3/90] |
| **mira** | 12,4 [20/29] | **20,5 [24/24]** | 15,9 [19/90] |
| **vaina** | 0,6 [3/29] | **7,8 [24/24]** | 0,0 [0/90] |
| **pana** | 0,0 [0/29] | 2,6 [21/24] | 0,0 [0/90] |
| usted | 75,3 [25/29] | 76,2 [24/24] | 1,7 [2/90] |
| tú | 63,9 [25/29] | 52,9 [24/24] | 82,3 [69/90] |
| eh | 15,3 [20/29] | 26,5 [24/24] | 0,0 [0/90] |
| **groserías `[ __ ]`** | 2,1 [2/29] | **47,6 [21/24]** | 0,0 [0/90] |

Lo que dice esta tabla:

- **"¿Me entiendes?" es el tic del stream.** 14× más frecuente que en el editado
  y presente en los 24. No es una muletilla vacía: es un **chequeo de
  comprensión** — está explicando un gráfico a gente que puede responderle por
  chat, y frena a preguntar si lo siguen. En un ad no va: no hay nadie del otro
  lado.
- **"Ojo" es su marca de advertencia.** 14,7 cada 10.000, en los 24. Cuando va a
  decir el riesgo, abre con "ojo". Ese sí es reutilizable en cualquier registro,
  y es la forma más suya de meter un disclaimer sin sonar a legal.
- **El "usted" no se mueve.** 75,3 en el editado y 76,2 en el stream: idéntico.
  El "usted/tú" mezclado no es una decisión de formato, es cómo habla. Lo único
  que lo apaga es el reel (1,7). Ver §"El 'usted' desaparece en el reel".
- **El venezolanismo sí se mueve, y mucho.** "Vaina" 13× el editado, "pana" de
  cero a 2,6. La autocensura del editado está confirmada con la era de ASR
  controlada: no era un artefacto de transcripción.

### 🚨 Groserías: 21 de los 24 streams. Regla dura.

`[ __ ]` es como YouTube marca una palabra censurada en los subtítulos
automáticos. En los streams aparece **47,6 cada 10.000 palabras** — y en los
lives de mindset de 2023, **76,6**, en los 34. En el editado 2,1, en el reel 0.

**Ningún verbatim de un stream o de un live sale a una pieza sin revisar el
alrededor por `[ __ ]`.** Un corte de 20 segundos que en el texto se lee limpio
puede tener una puteada dos palabras después del punto de corte. Esto no es
pudor: es que el registro público de Gocho (editado y reel) **no putea**, y una
pieza que lo haga no suena a él, suena a otro.

### Léxico operativo — lo que sólo existe acá

Del ranking por ratio contra el resto del corpus (`medir-voz.mjs`):

| Palabra | Veces | Por 10k acá | Ratio vs el resto |
|---|---:|---:|---:|
| colchón | 363 | 11,0 | 13,8× |
| entiendes | 315 | 9,51 | 8,48× |
| 50k | 141 | 4,26 | 8,18× |
| programa | 213 | 6,43 | 7,77× |
| trade | 375 | 11,3 | 7,76× |
| stop | 289 | 8,73 | 7,68× |
| apes *(Apex)* | 114 | 3,44 | 7,09× |
| alumno | 121 | 3,65 | 6,68× |
| ojo | 470 | 14,2 | 6,49× |
| tostep / toste *(Topstep)* | 264 | 7,97 | ~5,5× |
| sala | 220 | 6,64 | 5,94× |
| retiró / retiro / retirado | 448 | 13,5 | ~5× |
| pum | 231 | 6,97 | 5,40× |
| dropdown | 90 | 2,72 | 5,30× |

Y los giros de tres palabras propios del registro: «en vivo en» (114), «acción
del precio» (108), «en tiempo real» (98), «vamos a ver» (275), «clic clic clic»
(69), «nada que hacer» (82), «una para arriba» (47).

**"Colchón" es el hallazgo léxico.** 363 veces, 13,8× el resto del corpus: es su
palabra para el margen que se deja antes de arriesgar — el concepto entero de
gestión de riesgo dicho en una palabra de casa. No hay que traducirlo a
"drawdown" ni a "buffer"; el término suyo es ése.

**Topstep y Apex están en todos lados y el ASR los destroza** ("tostep", "toste",
"apes"). Son las mesas de fondeo con las que trabaja. Cualquier mención de marca
en una pieza se verifica contra el video, siempre.

### El molde de apertura del stream

Hay molde, y se repite en las 15 piezas más vistas. Cuatro movimientos, en este
orden:

1. **Saludo repetido, sin contenido, mientras espera que entre gente.**
   > «buenas buenas buenas buenas cómo cómo me les va buenos días» (`yt-106`)
   > «buenas buenos días muchachones buenos días sala cómo amanecen cómo están
   > todos» (`yt-084`)
   > «buenas buenas buenas buenas muy buenas noches una vez más estamos por aquí
   > en stream cómo están todos» (`yt-098`)
2. **Chequeo técnico en voz alta**, sin disimularlo. Es lo contrario de la
   producción: el problema técnico se dice.
   > «vamos a ver si hoy puedo tener web internet porque siempre últimamente no
   > me estaba saliendo» (`yt-092`)
   > «están escuchando, escriban en el chat ahí a ver si me escuchan por favor»
   > (`yt-087` — el ASR escribió "críban")
   > «será que ya está bien se puede meter en youtube si estoy en vivo yo creo
   > que sí» (`yt-109`)
3. **Nombra a los que van llegando.**
   > «bueno vamos a ver se van conectando ahí no a la sala cómo están muchachos»
   > (`yt-088`)
4. **Ancla el día**, porque el stream es una cita fija.
   > «comenzando comenzando comenzando como todos los jueves» (`yt-102`)

Cierra con despedida corta y bendición:
> «feliz día muchachos dios me los bendiga a todos chao muchachos» (`yt-089`)
> «ahí nos vemos ciao» (`yt-106`) · «nos vemos en un próximo video» (`yt-109`)

**Para qué sirve esto en un ad: para nada, y saberlo vale.** Los primeros 60-90
segundos de cada stream son saludo y prueba de sonido. Cualquiera que vaya a
cortar clips de acá tiene que arrancar después del minuto dos.

### Lo que el stream aporta a la oferta

Está desarrollado en `oferta.md`; acá va lo que es de voz.

- **Nombra el programa de tres formas distintas**: «el programa del Gocho»
  (`yt-084`, `yt-087`), «el de 6 meses» (`yt-087`) y una sola vez «el programa de
  CER Trader» (`yt-106`) — que el ASR probablemente esté escribiendo mal y
  **queda SIN CONFIRMAR** hasta verlo en el video.
- **Contesta la objeción de la estafa pasándole el micrófono a los alumnos.** No
  se defiende: convoca testigos en vivo.
  > «aquí están mis alumnos. Sí, mis alumnos están aquí en vivo. Les puedes
  > preguntar a ellos lo que tú quieras por chat. ¿Esto es una estafa, es un
  > estafador o qué, si funciona, no funciona, si hacen dinero, no hacen
  > dinero?» (`yt-089` — recortado: en el medio el ASR mete un nombre del chat)
- **Pone la objeción en la boca del cliente antes de contestarla**, con la
  puteada incluida: «el trading es una estafa» aparece así, en primera persona
  del que perdió, en `yt-084`, `yt-087`, `yt-089` y `yt-090`. Es el mejor
  material de voz-del-cliente del cerebro.
- **Avisa que lo suplantan.** Alguien roba los números de teléfono de los
  interesados y escribe haciéndose pasar por él (`yt-084`). Es un ángulo de
  contenido y un riesgo operativo a la vez.

## Mezcla "usted" y "tú" en la misma frase

No es un error del ASR: es su marca registrada. Cada 10.000 palabras del
contenido editado usa **73,8 veces "usted"** y **64,6 veces "tú"** (544 y 476 en
73.720 palabras, re-contado 2026-08-24), y salta de uno al otro sin transición.

> "Así que si **usted** quiere saber cómo funciona mi sistema de trade, cuál es
> mi pérdida consecutiva, aquí abajo sí hay un link. Dale click y ahí está toda
> la información." (yt-001)

> "Y si **usted** por casualidad quiere aprender a hacer futuro y quiere que el
> Gochito sea **su** mentor, aquí abajo **te** dejo un link." (yt-006)

**No lo normalices.** Si escribís todo en "tú" pierde la voz. El "usted" no es
formalidad: es la deferencia respetuosa de un venezolano de 40 largos hacia
alguien mayor o desconocido, mezclada con la confianza del "tú". Ese roce es él.

## Léxico propio, con frecuencias reales

Del contenido editado (31 videos, **73.720 palabras medidas**). Re-contado
2026-08-24 sobre el corpus deduplicado. Tres columnas de número: **veces**, la
tasa **cada 10.000** y **en cuántos de los 31 videos aparece** — esta última es la
que separa un rasgo de voz de un tema del mes. La forma contada va aparte porque
el criterio cambia el número (`fondeo` 124 contando "fondeo/fondeos", 102
contando sólo "fondeo").

| Expresión | Veces | /10k | En n de 31 | Forma contada | Para qué la usa |
|---|---:|---:|---:|---|---|
| bueno | 189 | 25,6 | **27** | palabra exacta | arranque de frase, respiro |
| okay / ok | 158 | 21,4 | **25** | palabra exacta | cierre de idea + apertura de la siguiente |
| **fondeo** | 124 | 16,8 | 22 | fondeo + fondeos | el mecanismo central |
| realmente | 104 | 14,1 | **25** | palabra exacta | énfasis de veracidad ("realmente no necesitas un indicador") |
| **mira** | 99 | 13,4 | 21 | mira + mirá/miras | te trae la atención antes de mostrar pantalla |
| riesgo | 57 | 7,7 | 18 | riesgo + riesgos | |
| evaluación | 56 | 7,6 | 14 | evaluación + evaluaciones | la prueba de la empresa de fondeo |
| **copiadora** | 55 | 7,5 | 13 | copiadora/-s | copiar operaciones a varias cuentas fondeadas |
| **vamos a ver** | 51 | 6,9 | 17 | expresión | promesa de demostración, casi siempre en los primeros 10 segundos |
| fácil / sencillo | 47 / 23 | 6,4 / 3,1 | 18 / 13 | palabra exacta | desactiva la objeción de dificultad |
| o sea | 43 | 5,8 | 16 | expresión | reformula lo que acaba de decir |
| **mis alumnos** | 40 | 5,4 | 17 | expresión | su prueba social principal |
| consistencia | 37 | 5,0 | **8** | palabra exacta | el deseo del avatar, con su palabra |
| la mayoría | 34 | 4,6 | 15 | expresión | siempre para contrastarse con ella |
| **fíjate** | 31 | 4,2 | 14 | palabra exacta | señala algo en pantalla |
| señores | 14 | 1,9 | 10 | palabra exacta | vocativo de apertura |

**Leer la columna de la derecha antes que la del medio.** "Consistencia" aparece
37 veces pero **sólo en 8 de los 31 videos**: es un tema que le da por hablar,
no una palabra que le sale sola. "Bueno", "okay" y "realmente" están en 25-27 de
31: ésas sí son la voz. Un guion que use "consistencia" está copiando un video;
uno que use "bueno / okay / realmente / mira" está copiando la voz.

Dos cifras bajaron respecto del conteo de 2026-08-14 —"o sea" 64 → 43 y "vamos a
ver" 61 → 51—: se recontaron sobre el corpus sin las 32 transcripciones
duplicadas. Las demás reprodujeron.

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
  negocio", "desbloquear tu potencial" en las 991.640 palabras de YouTube ni en
  las 18.110 de IG. **Corrección 2026-08-24**: "hackear" sí aparece, 5 veces, y
  **todas en los lives de mindset de 2023** — "tienes que hackear la mente"
  (`yt-032`, `yt-035`) es suyo y lo dice en serio, y en `yt-038` se lo devuelve
  irónicamente a los gurús. Cero en editado, en stream y en reel. O sea: la
  prohibición vale para venta, no para el registro de comunidad.
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
- **Prefiere "programa" a "curso", pero "curso" no está prohibido.** Corregido
  2026-08-24 contra el corpus ampliado: en el editado dice "programa" 30 veces
  (4,1 cada 10.000) contra "curso" 6 (0,8) — cinco a uno—, y en los streams 221
  contra 113. Donde sí dice "curso" sin problema es **defendiéndose**: «vendo y
  vendo en promedio unos 2.5 millones de dólares al año, amigo. Gracias. **Me va
  muy bien vendiendo curso**» (`yt-084`, contestándole a un hater). La regla real
  es: **cuando ofrece, dice "programa", "mi sistema", "que yo sea tu mentor";
  "curso" es la palabra del otro, y la usa cuando repite lo que le dicen.**
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
- ~~Los lives de trading en vivo~~ — **hecho** (2026-08-24): 27 streams,
  331.290 palabras, medidos en §"El cuarto registro". Con eso el corpus de
  YouTube pasó de 106 a 133 transcripciones.
- **El hook visual de los primeros 3 segundos.** De los reels sólo hay audio.
- **El VSL.** 40 minutos de él vendiendo seguido. La mejor fuente que falta.
- **Clasificar `yt-066`–`yt-068`** (3 piezas, 8.553 palabras): no son lives de
  mindset ni era NFT, y hoy no entran en ningún registro.
- Verificar contra video: los años de oficio (8 vs 9) y todas las cifras.
