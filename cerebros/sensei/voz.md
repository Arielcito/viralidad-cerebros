# Voz — El Sensei

> Se llena desde `fuentes/transcripciones/`. Cada regla lleva entre paréntesis
> el video del que salió. Regla sin fuente = regla borrada.

**Estado: MEDIDA sobre Instagram, parcial.** Ya no es SIN DATO total: hay 85
reels transcriptos (Deepgram nova-2) de dos handles, y todo lo que sigue está
contado con `grep`/Python sobre ese corpus, no descrito de oído. Sigue SIN DATO
todo lo que un reel de 43 segundos no muestra: cómo habla largo (no hay lives ni
YouTube ni VSL), cómo habla vendiendo por WhatsApp, y cómo suenan los otros ~28
satélites.

**Revisión 2026-08-14.** El corpus se volvió a contar de cero con los scripts en
`fuentes/` como única fuente. Se confirmó casi todo, se agregaron tres ejes que
no estaban medidos (**sketch vs monólogo**, **léxico de-duplicado por handle**,
**temario real del satélite**) y **se corrigieron cuatro números** de la versión
anterior. Las correcciones están marcadas ✅ CORREGIDO donde aparecen, para que
nadie cite la cifra vieja.

---

## Base de medición

| Corpus | Reels | Palabras | Tokens alfabéticos (base de las frecuencias) |
|---|---|---|---|
| **Total** | 85 | 14.043 | 13.520 |
| `@elsensei` (madre, verificada, 957K) | 31 | 5.104 | 4.929 |
| `@librosdelsensei` (satélite temático) | 54 | 8.939 | 8.591 |

Las 14.043 palabras son la suma exacta de los campos `palabras:` de los 85
frontmatters — la extracción no perdió nada. **63,1 minutos de audio en total**
(3.788 s), o sea que todo lo que sabemos de cómo habla este cliente cabe en una
hora de reels.

Ventana temporal: **2026-03-30 → 2026-08-13**
(✅ CORREGIDO: la versión anterior decía 2026-08-07). Inventario con métricas en
`fuentes/catalogo-instagram.csv`. Las frecuencias se dan **por 10.000 palabras**
para poder comparar los dos handles, que tienen tamaños distintos.

**Huecos declarados de cobertura:**

- **No se cosecharon `@habitosdelsensei`, `@senseialma` ni `@frasesdelcalvito`:**
  el scraper devolvió 0 reels para esos handles en IG. Lo que digan esas cuentas
  no está medido acá.
- `@senseiprofe` no está en este corpus (ver "Una voz o varias").
- **10 reels del catálogo quedaron sin transcribir** (95 catalogados, 85 con
  audio). Son `n=26, 30, 31, 33` de `@elsensei` y `n=38, 47, 49, 53, 59, 89` de
  `@librosdelsensei`. Duele uno en particular: **`n=53` tiene caption "Comenta 👇🏻
  Clase"** — es un reel de captación que no está en la medición del CTA.
  (El campo `transcripto` del CSV está en `no` para las 95 filas: la bandera
  nunca se actualizó, así que **el CSV no sirve para saber qué está transcripto**;
  la verdad es qué archivos hay en `fuentes/transcripciones/`.)
- No hay una sola fuente de habla larga: 0 lives, 0 YouTube, 0 VSL, 0 podcast.
  El reel de 43 segundos es **todo** lo que sabemos de cómo habla.

**Es ASR.** Los giros de lengua son confiables; **las cifras y los nombres
propios no**. En este corpus se ve a simple vista y ahora está contado sobre el
cuerpo de `## Transcript` (no sobre el archivo entero — el campo `## Hook (0-3s)`
repite la primera oración y duplica el conteo si se lo incluye): `1º`
aparece **39 veces**, `2º` 20, `3º` 12, `1000000º` **8 veces** (ahí dijo "primer
millón"), y `por 100` **17 veces** donde dijo "por ciento" — de hecho `por
ciento` sale **0 veces** en 13.520 palabras, prueba de que el ASR convirtió el
100 % de esas apariciones. Los nombres salen destrozados: "Principios de Rey
Dalia" (= Ray Dalio, ig-007) que en otro reel sale bien como "principios de Ray
Dalio" (ig-058), "el carro del baño" (= el carro del año, ig-014), "join
cometouch" (ig-009), "restaurantes Los Osos" (ig-070), "Dígame en esa cuenta"
(= Sígueme). **Ninguna cifra dicha en un reel entra al cerebro como dato.** Entra
como "dijo algo así, verificar contra el video".

Las **métricas del frontmatter sí son confiables** (vienen de la API): views,
likes y comments son el dato duro con el que se ordenan los hooks.

---

## La trampa de este cliente: un guion, dos handles

La regla del CEREBRO.md es "una pieza = un personaje". En este corpus **la regla
la rompe el cliente, no nosotros**: de 85 reels hay sólo **68 guiones únicos**
— 13 clusters de casi-duplicados, **30 reels involucrados** — y **7 de esos
clusters cruzan los dos handles**: el mismo guion, grabado o re-subido en la
madre y en el satélite.

(Método: Jaccard ≥ 0,55 sobre el bag de palabras de ≥4 letras, componentes
conexas. ✅ CORREGIDO: la versión anterior decía 70 guiones únicos / 12 clusters
/ 6 cruces; con el umbral explícito son 68 / 13 / 7.)

| Mismo guion en los dos handles | Jaccard | Tema |
|---|---|---|
| ig-034 (`@elsensei`) / ig-085 (`@librosdelsensei`) | 1,00 | jóvenes y distracciones |
| ig-036 / ig-088 | 1,00 | las 3 cosas que hay que dejar de hacer |
| ig-021 / ig-083 | 0,97 | hábitos que cambian tu vida |
| ig-039 / ig-090 | 0,97 | actividades de bajo coeficiente |
| ig-023 / ig-062 | 0,91 | "¿Crees en dios?" |
| ig-014 / ig-044 | 0,86 | de ricos / de pobres |
| **ig-009 / ig-072** | 0,63 | autopresentación + las 3 cosas — **nuevo, no estaba listado** |

También hay repetición dentro del mismo handle (ig-043/ig-056, ig-046/ig-060,
ig-057/ig-061, ig-067/ig-075, ig-082/ig-087, ig-009/ig-016), y **ig-091 a ig-095
son cinco subidas del mismo reel** en `@librosdelsensei`.

Consecuencia práctica para escribir: **el reciclaje cruzado es parte de su
sistema de producción**, no un accidente. Un guion escrito para el satélite se
puede subir a la madre sin cambiar la voz. **7 de los 31 reels de la madre (23 %)
tienen gemelo en el satélite.** Lo que sí cambia entre cuentas es el temario y el
CTA, no el idiolecto — y eso ahora está probado de-duplicando (ver abajo).

⚠️ **Consecuencia para medir, y es la trampa de la que salió una de las
correcciones:** las cinco subidas de ig-091..095 metían el mismo texto cinco
veces en la bolsa de palabras. Cualquier frecuencia calculada sin de-duplicar
está inflada en los temas de esos reels.

---

## Los dos registros por handle, medidos

No son dos personas hablando distinto: es **la misma voz con dos funciones**. La
diferencia está en qué temas toca, cuánto habla de sí mismo y si pide algo.

| | `@elsensei` (madre) | `@librosdelsensei` (satélite) |
|---|---|---|
| Reels | 31 | 54 |
| Reels sin ningún CTA hablado | **30 de 31 (97 %)** | 36 de 54 (67 %) |
| CTA "comenta X" hablado | **0** | 12 |
| "Comenta" en el caption | 2 | 12 |
| Demo de trading en pantalla (gráfico / TradingView) | **0 de 31** | 6 |
| `clase` (/10k) | **0,0** | 23,3 |
| `comenta` (/10k) | **0,0** | 17,5 |
| `gráfico` (/10k) | **0,0** | 8,1 |
| `gratis` / `gratuita` (/10k) | **0,0** | 5,8 |
| `orar` / `oración` (/10k) | **0,0** | 16,3 |
| `fe` (/10k) | **16,2** | **0,0** |
| `dios` (/10k) | **44,6** | 23,3 |
| `libro(s)` (/10k) | 34,5 | **80,3** |
| `dinero` (/10k) | 95,4 | **128,0** |
| `dólares` (/10k) | 22,3 | **69,8** |
| `trading`/`trade`/`trader` (/10k) | 6,1 | **15,1** |
| 1ª persona (`yo` /10k) | 24,3 | **53,5** |
| `tú` tónico (/10k) | **89,3** | 51,2 |
| Views mediana | **92.103** | 7.566 |
| Comentarios / 1.000 views (mediana) | 0,89 | **1,35** |
| Likes % (mediana) | 2,96 % | **4,46 %** |

### La misma tabla, de-duplicada — y sí, aguanta

Acá está la prueba de que la diferencia entre cuentas es real y no un artefacto
del reciclaje. Se sacaron del satélite los **7 guiones que son de la madre**
(ig-072, 044, 083, 062, 085, 088, 090) y las **9 re-subidas internas**
(ig-092–095, 087, 060, 056, 061, 075); de la madre se sacó ig-016 (gemelo de
ig-009). Quedan **30 reels / 4.810 tokens de madre única** y **38 reels / 5.948
tokens de satélite único**.

| | MADRE única (/10k) | SATÉLITE único (/10k) | Lectura |
|---|---:|---:|---|
| `clase` | **0,0** | 26,9 | la oferta sólo existe en el satélite |
| `comenta` | **0,0** | 20,2 | ídem el CTA |
| `orar` / `oración` / `rezar` | **0,0** | 20,2 | rezar es del satélite |
| `gráfico` | **0,0** | 10,1 | la pantalla es del satélite |
| `gratis` / `gratuita` | **0,0** | 6,7 | |
| `gimnasio` / `gym` | **0,0** | 6,7 | |
| `deuda(s)` | **0,0** | 5,0 | |
| `fe` | 16,6 | **0,0** | la fe es de la madre |
| `enfoque` / `enfocar` | 14,6 | **0,0** | |
| `es imposible` | 10,4 | **0,0** | el absoluto es de la madre |
| `disciplina` | 6,2 | **0,0** | |
| `la mayoría` | 12,5 | 1,7 | ×7 en la madre |
| `yo` | 22,9 | **60,5** | **×2,6 más autobiografía en el satélite** |
| `mi` / `mis` | 33,3 | **90,8** | ×2,7 |
| `me` | 47,8 | 72,3 | ×1,5 |
| `tú` tónico | **95,6** | 62,2 | la madre habla *hacia* el espectador |
| `tu` / `tus` | **174,6** | 121,0 | ×1,4 |
| `tienes que` | 20,8 | **47,1** | el satélite manda ×2,3 |
| `rico` / `ricos` | **49,9** | 26,9 | el eje moral es más de la madre |
| `pobre(s)` | **16,6** | 5,0 | ×3,3 |
| `vida` | **76,9** | 38,7 | ×2 |
| `habilidad` | **22,9** | 6,7 | ×3,4 |
| `libro(s)` | 35,3 | **85,7** | ×2,4 |
| `dólares` | 20,8 | **67,2** | ×3,2 |
| `trading`/`trade` | 6,2 | **18,5** | ×3 |
| `mujer(es)` | 14,6 | **37,0** | ✅ CORREGIDO: sin de-duplicar daba **57,0** — el cluster de cinco subidas ig-091..095 inflaba el tema pareja un 54 % |

**Cómo se usa esto:**

- **La madre `@elsensei` es marca, no embudo.** Habla en segunda persona
  (`tú`/`tu` un 40 % más denso), no pide nada (0 CTA hablado en 31 reels), no
  muestra pantalla de trading nunca (0/31), habla de dios en términos de **fe** y
  usa absolutos (`es imposible`, `la mayoría`). Es el registro para
  posicionamiento y para lo que tenga que sonar a autoridad sin venta.
- **`@librosdelsensei` es el registro de captación.** Habla **2,6× más de sí
  mismo**, pone monto en dólares, muestra gráfico, manda más (`tienes que` ×2,3),
  y ahí viven **los 12 CTA hablados de ManyChat**. Es el registro para nutrición
  y captura de leads.
- El personaje "libros" **no es un personaje aparte**: es el mismo idiolecto con
  un temario propio y con el pedido de comentario. Lo transversal — dios, dinero,
  hábitos, juventud, ricos vs pobres, la estructura "1º / 2º / 3º", el tuteo
  enfático, el `así que` de cierre, la ausencia total de muletilla de relleno —
  está en los dos, y en 7 casos es **literalmente el mismo texto**.

### Qué es del personaje "libros" y qué es transversal

Contestado con las tres cosas que se pueden separar:

**Es del personaje "libros" (0 apariciones en la madre):** la palabra **clase**,
el verbo **comenta**, **gráfico** / TradingView, **gratis/gratuita**, **orar /
oración / rezar**, **gimnasio**, **deudas**. Todo el aparato de embudo y toda la
mecánica de oración rezada.

**Es de la madre (0 apariciones en el satélite único):** **fe**, **enfoque /
enfocarse**, **es imposible**, **disciplina**.

**Es transversal (aparece en los dos con tasa comparable):** dinero (93,6 vs
104,2), invertir (29,1 vs 35,3), hábitos (16,6 vs 20,2), `así que` (14,6 vs
20,2), `pero`, `porque`, el tuteo sin `usted`, la lista numerada, el cierre en
sentencia moral, y la ausencia de muletillas de relleno.

### ⚠️ El satélite NO es una cuenta "de libros"

El nombre engaña y esto es lo que más se malinterpretó del cerebro anterior. Con
el tema dominante de cada reel contado por keywords:

| Tema dominante | `@elsensei` | `@librosdelsensei` |
|---|---:|---:|
| **dios / biblia / oración** | **12** | **16** |
| libros / lectura | 4 | **12** |
| dinero / mentalidad / millonario | 6 | 6 |
| mujeres / pareja | 4 | 7 |
| hábitos / rutina | 1 | 4 |
| juventud / los 20 | 3 | 1 |
| demo de trading | 0 | 3 |
| ricos vs pobres | 1 | 1 |
| otro | 0 | 4 |

**El tema más frecuente de los dos handles es dios, no libros.** En el satélite
los libros son 12 de 54 reels (22 %); dios/biblia son 16 (30 %). Si te piden
"contenido para la cuenta de libros" y escribís sólo rankings de libros, estás
escribiendo el 22 % de lo que esa cuenta publica. El libro es un **device**
transversal, no el tema del canal.

---

## Variante de español

**Español neutro de creador latino, sin marca regional detectable.** Esto ya no
es suposición: sobre 13.520 tokens, **0 apariciones** de `vaina`, `chamo`,
`pana`, `manito`, `chévere`, `tíguere`, `dique`, `jevi`, `chin`, `coño`,
`carajo`, `ahorita`, `acá`, `che`, `vos`, `boludo`, `güey`, `men`, `wepa`,
`jajaj`. La prensa lo ubica como dominicano radicado en Florida
(https://www.elheraldo.hn/fotogalerias/mundo/sebastian-rodriguez-sensei-trading-tildan-estafador-fbi-guru-financiero-OG27308701),
pero **en cámara no usa dominicanismos**. Si escribís para él y te sale un
dominicanismo, lo estás inventando.

**Tuteo cerrado.** `tú` tónico (con tilde) **88 veces**, `tu`/`tus` 182, `te`
220, `ti` 13, `usted` **0**, `ustedes` 1, `vosotros` 0, `vos` 0, `uno`
impersonal 0. Y el `tú` es enfático, redundante a propósito: *"Tú puedes ganar
mucho dinero sin dios"* (ig-023), *"Tú puedes luchar lo que tú quieras en la vida
para conseguir lo que tú quieras"* (ig-023, dos `tú` en una oración). Escribir
"puedes ganar" en vez de "tú puedes ganar" ya lo hace sonar a otro.

Una excepción medida: en el sketch del chef **conjuga en usted** al interlocutor
— *"Lo 1º, quite esa mierda y pon el Trading View"* (ig-040) — pero la palabra
`usted` no aparece nunca, es sólo la forma verbal, convive con el tuteo en la
misma frase y es la única zona del corpus donde pasa. No es un patrón, es ruido
de sketch.

**Y es la única "mierda" del corpus** (1 aparición en 13.520 palabras): no dice
malas palabras. Ver "Qué NUNCA dice".

---

## Una voz o varias

Sigue abierto, y sigue cambiando el cerebro:

- `@elsensei` — display name "Sebastian Rodriguez", verificada, 957K, bio
  "Sígueme en mi cuenta @senseiprofe" (https://www.instagram.com/elsensei/).
  **Medida acá: 31 reels.**
- `@senseiprofe` — display name "**Sebastian Ganimedes**", 316K, bio "Vivo en
  Miami 📍 Trabajo en el JP Morgan 🇺🇸 Aprende a invertir conmigo 👇🏼"
  (https://www.instagram.com/senseiprofe/). **SIN DATO: no hay una sola
  transcripción de esta cuenta.**

No sabemos si es la misma persona, un socio o un rebrand. **Hasta que se aclare,
las dos voces se transcriben por separado y no se mezclan.** Está en
`fase-0-pedido.md`.

Dato que aporta el corpus: **`@elsensei` y `@librosdelsensei` derivan a
`@senseiprofe` sin decirlo en voz alta.** El pedido va en el caption o al final
del guion — *"Si quieres aprender a invertir, sígueme"* (ig-014, cuyo caption es
"Sígueme —> @senseiprofe") — y el hashtag `#senseiprofe` está en la mayoría de
los captions de los dos handles. Es decir: los reels que tenemos son **tráfico
hacia la cuenta que no medimos**.

Los ~30 handles satélite tienen temática propia (libros, hábitos, carros,
relojes, mentalidad, fit, frases, "calvito"), así que puede haber más de un
registro y más de una persona en cámara. Cada transcripción tiene que anotar
`cuenta` y, si se distingue, quién habla.

---

## El tercer eje, nuevo: sketch vs monólogo

**Este es el corte que más cambia cómo se escribe una pieza, y no estaba
medido.** No es el mismo hombre hablando en los dos: en el sketch **contesta
preguntas**, en el monólogo **sentencia**.

Criterio reproducible: reels con **3 o más signos `?` en el transcript** =
sketch/entrevista. Dan **15 reels / 2.475 tokens** (ig-001, 002, 003, 005, 010,
013, 022, 046, 048, 060, 064, 066, 068, 070, 076). Los otros **70 reels / 11.045
tokens** son monólogo a cámara o voz en off.

| | SKETCH (15 reels, 2.475 tok) | MONÓLOGO (70 reels, 11.045 tok) |
|---|---:|---:|
| Duración mediana | 46 s | 42 s |
| Palabras medianas por reel | **181** | 159 |
| Oración mediana | **8 palabras** | **14 palabras** |
| % de oraciones que son pregunta | **30 %** | 7 % |
| `yo` (/10k) | **80,8** | 34,4 |
| `me` (/10k) | **133,3** | 56,1 |
| `tu` / `tus` (/10k) | 60,6 | **158,4** |
| `dólares` (/10k) | **105,1** | 40,7 |
| `gráfico` (/10k) | **20,2** | 1,8 |
| `sensei` (/10k) | **20,2** | 2,7 |
| `negocio(s)` (/10k) | **20,2** | 3,6 |
| `millonario*` (/10k) | **48,5** | 32,6 |
| `mujer(es)` (/10k) | **0,0** | 50,7 |
| `vida` (/10k) | 12,1 | **73,3** |
| `dios` (/10k) | 8,1 | **36,2** |
| `así que` (/10k) | 8,1 | **22,6** |
| `porque` (/10k) | 28,3 | **55,2** |
| `tienes que` (/10k) | 16,2 | **43,5** |
| `si quieres` (/10k) | **0,0** | 9,1 |
| `ok` / `okay` (/10k) | **20,2** | **0,0** |
| `wow` (/10k) | **12,1** | **0,0** |
| `por ejemplo` (/10k) | **28,3** | 3,6 |
| `entonces` (/10k) | **24,2** | 7,2 |
| `o sea` (/10k) | 4,0 | **0,0** |
| `al final` (/10k) | **0,0** | 8,1 |

**Lo que dice esta tabla, en instrucciones:**

1. **`ok`, `okay`, `wow` y `o sea` existen sólo dentro del sketch.** Cero en las
   11.045 palabras de monólogo. Si le escribís un "ok" o un "o sea" a un
   monólogo a cámara, es la muletilla equivocada de la pieza equivocada.
2. **En el sketch la oración baja a 8 palabras y el 30 % son preguntas.** Se
   escribe en réplicas cortas, no en párrafos.
3. **En el sketch aparece el dinero concreto** (`dólares` ×2,6, `gráfico` ×11) y
   **desaparecen la vida, dios y las mujeres.** El sketch es el formato de la
   prueba material; el monólogo es el de la moral.
4. **El sketch es autobiográfico** (`yo` ×2,3, `me` ×2,4) y el monólogo es
   preceptivo (`tu/tus` ×2,6, `tienes que` ×2,7, `así que` ×2,8).
5. **El sketch no cierra con oferta**: `si quieres` = 0 en los 15 sketches.
6. Ojo: **el interlocutor del sketch le dice "Sensei"** (20,2/10k vs 2,7). Ese
   vocativo es de otra boca, no de la suya.

⚠️ **Riesgo de atribución.** El ASR no separa hablantes. En los 15 sketches,
parte de lo contado arriba lo dice el entrevistador, no él. Los datos del bloque
MONÓLOGO (70 reels, 11.045 palabras, 82 % del corpus) son los limpios; el bloque
SKETCH describe **la pieza**, no sólo la voz de él.

---

## Léxico propio

Frecuencia por 10.000 palabras, contada sobre los tres corpus. **T** = total
(13.520 tokens), **M** = `@elsensei` (4.929), **S** = `@librosdelsensei` (8.591).
Las regex son de raíz amplia (p. ej. `millonari\w*` incluye plurales y
"multimillonario"), así que un número acá puede ser mayor que un `grep` de la
palabra exacta — donde importa, se aclara.

| Palabra | T | M | S | Lectura |
|---|---:|---:|---:|---|
| **dinero** | **116,1** | 95,4 | 128,0 | **La palabra madre del corpus** (157 apariciones). Dice "dinero", no "capital" ni "ingresos" |
| **ganar / gané / ganado** | **75,4** | 67,0 | 80,3 | El verbo madre. Ver compliance: dice *ganar*, no *retirar* |
| libro(s) | 63,6 | 34,5 | 80,3 | Device transversal, no tema exclusivo del satélite |
| **vida** | **62,1** | **77,1** | 53,5 | Segunda palabra de contenido, y es de la madre |
| dólares | 52,5 | 22,3 | 69,8 | Siempre dólares, nunca "pesos" ni "euros" |
| rico / rica / ricos / riqueza | 43,6 | **54,8** | 37,2 | El eje moral es **rico vs pobre**, no "exitoso vs fracasado" |
| mujer(es) | 41,4 | 14,2 | 57,0 | ⚠️ inflado por ig-091..095; de-duplicado es 14,6 vs **37,0** |
| **aprender** | **37,7** | 18,3 | **48,9** | El verbo de la promesa, y es del satélite |
| millonario* | 35,5 | 42,6 | 31,4 | `millonario` exacto: 21 · `millonarios`: 10 · `multimillonarios`: 2 |
| invertir / inversión | 32,5 | 28,4 | 34,9 | El verbo de la oferta es **invertir**, no "operar" |
| dios | 31,1 | 44,6 | 23,3 | Más denso en la madre |
| **mente** | **30,3** | 38,5 | 25,6 | "cambiar tu mentalidad", "tatúa eso en tu mente" |
| **solamente** | **30,3** | 28,4 | 31,4 | **Dice "solamente"; `sólo` con tilde = 0, `solo` = 19** |
| hombre(s) | 23,7 | 18,3 | 26,8 | |
| leer / lectura / leído | 22,2 | 16,2 | 25,6 | |
| hábito(s) | 21,4 | 16,2 | 24,4 | |
| tiempo | 20,0 | 20,3 | 19,8 | |
| trabajo / trabajar | 16,3 | 14,2 | 17,5 | |
| mentalidad | 15,5 | 10,1 | 18,6 | Dice "mentalidad", **nunca "mindset"** |
| clase | 14,8 | **0,0** | 23,3 | La oferta se llama **"clase"**, nunca "curso" ni "webinar" |
| habilidad(es) | 14,8 | 24,3 | 9,3 | Fórmula fija: "habilidad de alto valor" (4 veces) |
| pobre(s) / pobreza | 13,3 | 16,2 | 11,6 | |
| trading / trade / trader | 11,8 | 6,1 | 15,1 | **Bajísimo para un cliente de trading** |
| joven / jóvenes | 11,1 | 20,3 | 5,8 | |
| comenta | 11,1 | **0,0** | 17,5 | |
| orar / oración / rezar | 10,4 | **0,0** | 16,3 | |
| éxito | 8,1 | 12,2 | 5,8 | |
| estrategia | 8,1 | 6,1 | 9,3 | Siempre "**mi** estrategia", nunca "el método" |
| enfoque / enfocar | 7,4 | 16,2 | 2,3 | |
| gimnasio / gym | 4,4 | **0,0** | 7,0 | |
| fe | 5,9 | 16,2 | **0,0** | |
| página(s) | 5,9 | 2,0 | 8,1 | Mide los libros en páginas ("solamente 100 páginas") |
| gráfico | 5,2 | **0,0** | 8,1 | |
| sígueme | 5,2 | 2,0 | 7,0 | |
| familia | 5,2 | 8,1 | 3,5 | |
| amén | 3,7 | 4,1 | 3,5 | |
| gratis / gratuita | 3,7 | **0,0** | 5,8 | |
| deuda(s) | 3,0 | **0,0** | 4,7 | |
| ahorrar / ahorro | 3,0 | 2,0 | 3,5 | |
| disciplina | 2,2 | 6,1 | **0,0** | |
| **alumnos** | **0,7** | 2,0 | **0,0** | **Una sola aparición en todo el corpus** (ig-009) |
| **empresa(s)** | **0,0** | 0,0 | 0,0 | |

**Fórmulas fijas** (conteo bruto sobre el total):

| Fórmula | Veces | Dónde se ve |
|---|---:|---|
| `tienes que` / `tiene que` | 52 | 38,5/10k. **Su modalidad dominante es la obligación** |
| `te va a` / `te vas a` | 35 | "te va a ayudar a", "te va a dar", "cambiarán tu vida" |
| `vas a` | 29 | "vas a aprender", "vas a entrar a la página" — instrucción paso a paso |
| `así que` | 27 | Su conector de conclusión (ver muletillas) |
| `1º ... 2º ... 3º` (lista numerada) | 18 reels con `2º`, 11 con `3º` | Su estructura de guion. Él dice "la primera / la segunda" |
| `todo el mundo` | 12 | "enseñaré a todo el mundo desde 0" |
| `si quieres` | 10 | Condicional de venta, y de sentencia |
| `100 por 100` (= "cien por cien") | 10 | |
| `es imposible` | 9 | Absoluto, más denso en la madre (14,2 vs 2,3/10k) |
| `la mayoría` | 8 | Casi todo en la madre (12,2 vs 2,3/10k) |
| `la única forma` / `la única manera` | 7 | |
| `millonario de tu familia` | 3 | "Ser el 1º millonario de tu familia…" (ig-009) |
| `en mi caso` | 5 | Bisagra a la autobiografía |
| `desde 0` | 2 reels | **Nunca escribe "desde cero"** (0 apariciones) |
| `habilidad de alto valor` | 4 | |
| `una cosa a la vez` | 3 | |
| `más de 500 libros` | 3 | Device de autoridad, ASR — verificar |
| `4 y 47` | 8 en 4 reels | La hora a la que se levanta. Ver "devices" |

---

## Muletillas y conectores

Es lo que más delata una imitación mal hecha. Por 10.000 palabras. **SK** =
sketch, **MO** = monólogo (ver "el tercer eje").

| Conector | T | M | S | SK | MO | Nota |
|---|---:|---:|---:|---:|---:|---|
| pero | 58,4 | 50,7 | 62,9 | 52,5 | 59,8 | El giro adversativo es su motor de guion |
| porque | 50,3 | 40,6 | 55,9 | 28,3 | 55,2 | Explica siempre, no deja la afirmación sola |
| **así que** | 20,0 | 14,2 | 23,3 | 8,1 | 22,6 | **Su cierre lógico característico** |
| también | 11,8 | 6,1 | 15,1 | 12,1 | 11,8 | |
| siempre | 11,1 | 12,2 | 10,5 | 12,1 | 10,9 | |
| entonces | 10,4 | 14,2 | 8,1 | **24,2** | 7,2 | Casi todo dentro del sketch |
| nunca | 9,6 | 10,1 | 9,3 | 16,2 | 8,1 | |
| bueno | 9,6 | 12,2 | 8,1 | 8,1 | 10,0 | |
| por ejemplo | 8,1 | 4,1 | 10,5 | **28,3** | 3,6 | ×8 en sketch |
| **literalmente** | 7,4 | 10,1 | 5,8 | 4,0 | 8,1 | Intensificador propio: "literalmente sudan dinero" (ig-023), "literalmente me gano horas en el día" (ig-043), "literalmente es tonta" (ig-018) |
| al final | 6,7 | 6,1 | 7,0 | **0,0** | 8,1 | "al final terminan consiguiendo nada" (ig-034) |
| por eso | 5,9 | 6,1 | 5,8 | 12,1 | 4,5 | |
| realmente | 4,4 | 6,1 | 3,5 | 8,1 | 3,6 | |
| **ok / okay** | 3,7 | 4,1 | 3,5 | **20,2** | **0,0** | **Sólo sketch** |
| incluso | 3,0 | 6,1 | 1,2 | 0,0 | 3,6 | |
| **wow** | 2,2 | **0,0** | 3,5 | **12,1** | **0,0** | **Sólo sketch, y probablemente del interlocutor** |
| de hecho | 2,2 | 2,0 | 2,3 | 0,0 | 2,7 | |
| **fíjate** | 2,2 | **0,0** | 3,5 | 8,1 | 0,9 | Sólo mostrando pantalla |
| es decir | 1,5 | 0,0 | 2,3 | 0,0 | 1,8 | |
| **mira** | 1,5 | **0,0** | 2,3 | 0,0 | 1,8 | |
| claro que sí | 1,5 | 2,0 | 1,2 | 0,0 | 1,8 | |
| la verdad | 1,5 | 0,0 | 2,3 | 4,0 | 0,9 | |
| digamos | 1,5 | 0,0 | 2,3 | 0,0 | 1,8 | **Las 2 son de ig-051** — ver aviso de traducción |
| **o sea** | **0,7** | 0,0 | 1,2 | 4,0 | **0,0** | **Una sola vez en 13.520 palabras, y es en sketch** |
| obviamente | 0,7 | 2,0 | 0,0 | 0,0 | 0,9 | |
| **eh** | **0,0** | 0,0 | 0,0 | 0,0 | 0,0 | |
| **imagínate** | **0,0** | 0,0 | 0,0 | 0,0 | 0,0 | |
| **presta atención** | **0,0** | 0,0 | 0,0 | 0,0 | 0,0 | |
| **recuerda** | **0,0** | 0,0 | 0,0 | 0,0 | 0,0 | |
| **sinceramente** | **0,0** | 0,0 | 0,0 | 0,0 | 0,0 | |
| **jamás** | **0,0** | 0,0 | 0,0 | 0,0 | 0,0 | |

**Lo importante de esta tabla es lo que casi no está.** No tiene muletillas de
relleno: **`eh` 0, `digamos` sólo en un reel, `o sea` 1 sola vez, `recuerda` 0,
`imagínate` 0, `presta atención` 0**, y no arranca frases con "mira" cuando habla
a cámara solo. Habla **redactado**, como quien lee un guion — coherente con las
**224 palabras por minuto** que sostiene. Si le escribís muletillas de
conversación espontánea, suena a otro creador.

**Modalidad y persona**, por 10.000:

| | T | M | S | SK | MO |
|---|---:|---:|---:|---:|---:|
| `tienes que` (obligación) | 38,5 | 24,3 | 46,6 | 16,2 | **43,5** |
| `te va a` / `te vas a` | 25,9 | 22,3 | 27,9 | 12,1 | 29,0 |
| `vas a` | 21,4 | 14,2 | 25,6 | 8,1 | 24,4 |
| `deja de` (prohibición) | 5,9 | 6,1 | 5,8 | 0,0 | 7,2 |
| `si quieres` (condicional de venta) | 7,4 | 6,1 | 8,1 | **0,0** | 9,1 |
| `empieza` | 4,4 | 2,0 | 5,8 | 0,0 | 5,4 |
| `deber` / `debería` | 7,4 | 12,2 | 4,7 | — | — |

---

## Ritmo y estructura

Medido sobre **880 oraciones** y 85 reels.

- **Oración mediana: 12 palabras** (madre 11,5 · satélite 13 · **sketch 8 ·
  monólogo 14**). Oraciones cortas, pero encadenadas con `y` / `pero` / `porque`
  en tiradas largas — no es estilo telegráfico, es subordinación corrida.
- **Duración mediana del reel: 43 segundos** (mín. 18, máx. 90). Distribución:
  11 reels <30 s · 34 entre 30 y 44 s · 28 entre 45 y 59 s · 12 de 60 s o más.
  Por handle: madre 46 s (rango cerradísimo, 30–58) · satélite 42 s (18–90).
  **La madre no publica reels de menos de 30 segundos.**
- **Velocidad: 224 palabras por minuto** (mediana por reel; 222 si se divide
  palabras totales por duración total — las dos cuentas coinciden. Rango
  98–265). Es rápido: el español conversacional ronda 150–180.
  **Un guion para él tiene que tener ~160 palabras para 43 segundos**, no las
  ~110 que pondrías por defecto. Palabras medianas por reel: **159**.
- **13 % de las oraciones son preguntas** (116 de 880), pero está concentradísimo:
  **30 % en el sketch, 7 % en el monólogo**.
- **Estructura dominante: lista numerada.** "La 1º es… La 2º es… Y lo 3º es…"
  (ig-009, ig-041, ig-050, ig-055, ig-057, ig-072). 18 reels usan `2º`, 11 llegan
  a `3º`, y ig-055 llega a "Número 9". El ASR lo escribe "1º/2º/3º"; él dice
  "la primera / la segunda / la tercera".
- **Segunda estructura: el sketch entrevista.** 15 de 85 (ver "el tercer eje").
- **Tercera: la lista de contraste** — "De ricos / De pobres" (ig-014, ig-044),
  "Personas que debes evitar a toda costa" (ig-080), "Actividades que hacen
  personas de bajo coeficiente intelectual" (ig-039, ig-090). Sin conectores,
  ítem tras ítem, sin verbo conjugado.

### Cómo abre

**34 de 85 reels abren con una pregunta** — el 40 %. Y hay dos datos operativos
encima de eso:

1. **24 de esas 34 preguntas se las hacen a él** (contienen `te`/`tu`/"sensei"):
   es el molde entrevista/clip. **10 son al espectador** (ig-001, 003, 023, 029,
   034, 062, 064, 068, 076, 085).
2. **22 de las 34 aperturas llegan mutiladas**, porque Deepgram se comió la
   primera palabra. Por eso el `## Hook (0-3s)` de esas fichas dice cosas como
   *"Es lo máximo que le has prestado a un amigo?"* (ig-001, falta "¿Cuál"),
   *"En dios?"* (ig-023, falta "¿Crees"), *"Hora te despiertas?"* (ig-043, falta
   "¿A qué"), *"Dinero tienes en tu cuenta de banco?"* (ig-048, falta "¿Cuánto"),
   *"Libros te han hecho ganar más dinero?"* (ig-082, falta "¿Cuáles"),
   *"Todas las mañanas se despiertas cansado"* (ig-008, falta "Si"), *"Salgas con
   estas 5 mujeres"* (ig-045, falta "No").

> **Los hooks auto-recortados de las fichas NO se pueden calcar tal cual.** 22 de
> 34 están cortados en la primera palabra. Antes de subir cualquiera a
> `biblioteca/hooks.md` hay que mirar el video.

**Primera oración: 11 palabras de mediana.** Y las primeras palabras más usadas
son `si` (7 reels), `te` (6), `es`/`sensei`/`el`/`ser`/`libros`/`por` (3 cada
una) — o sea que **abre con condicional o con la segunda persona**, no con su
nombre.

Los cinco moldes de apertura confirmados:

1. **Pregunta al espectador**, textual: *"¿Por qué crees que la mayoría de los
   jóvenes no consiguen el éxito?"* (ig-034, 55.292 views · también ig-085).
2. **Pregunta del entrevistador a él**: *"Sensei, ¿a qué hora te despiertas?"*
   (ig-005, 169.847 views) · *"Sensei, este es tu nuevo carro, ¿verdad?"*
   (ig-046).
3. **Condicional de futuro imposible**: *"[¿Te] harías millonario de nuevo si
   tuvieras 20 años?"* (ig-050) · *"Si perdieras tus carros, tu dinero, tus
   relojes, tu casa, todo, ¿de qué forma te harías millonario de nuevo?"*
   (ig-012).
4. **Promesa de contenido con número** — abre literalmente con el dígito en 4
   reels (ig-057, 061, 067, 075): *"5 libros cortos que cambiarán tu vida, y los
   puedes leer todos en un solo día"* (ig-057). La promesa va con el beneficio
   **y** la objeción de tiempo resuelta en la misma oración.
5. **Sentencia sin verbo, título de lista**: *"Hábitos que cambiarán tu vida de
   la noche a la mañana"* (ig-021, ig-083) · *"Actividades que hacen personas de
   bajo coeficiente intelectual"* (ig-039, ig-090) · *"Personas que debes evitar
   a toda costa"* (ig-080).

Y un molde de estadística prestada, en 2 reels: *"El 90 por [ciento] de las
personas que han leído este libro se han convertido en millonarios"* (ig-007,
ig-058) · *"Solamente un 6 por [ciento] de la población ha leído este libro"*
(ig-074). **Esas cifras son ASR y además no tienen fuente. No se reusan.**

### Cómo cierra

**Ninguno de los 85 reels cierra con una pregunta** (0 últimas oraciones
terminadas en `?`). Siempre cierra afirmando.

**66 de 85 reels no piden nada hablado** (78 %; regla: ninguna aparición de
`comenta*`, `sígueme`, `guarda`, `comparte` en el transcript). Cuando cierra sin
pedido, cierra con una **sentencia moral** que resume:

> *"Así que yo prefiero no prestarle dinero y conservar su amistad."* (ig-001)
> *"…y es por eso que digo que las mujeres no son interesadas, son
> inteligentes."* (ig-018)
> *"Elige la paz sobre el caos porque el verdadero amor no te agota, te hace
> crecer."* (ig-045)
> *"Tu felicidad tiene que depender de ti, de tus logros y de tus acciones."*
> (ig-036, ig-088)
> *"Confía en dios y tu fuerza será ilimitada."* (ig-032)
> *"…sacrifícate hoy para que vivas mañana como un rey."* (ig-086)

La última oración arranca con `si` en 10 reels, con `así que` en 4, con `comenta`
en 4, con `sígueme` en 2.

**CTA hablados contados:** `comenta X` en **12 reels** (los 12 del satélite, 0 de
la madre) · `sígueme` en 7 · `guarda`/`comparte` como cierre único, 0. **Palabras
clave de ManyChat dichas: clase 7 · chef 2 · invertir 1 · amén 1** (más 2 casos
donde el ASR se comió la palabra).

En caption: **14 reels piden "comenta"** (2 en la madre, 12 en el satélite).
Cruzado con el audio: **11 lo piden en los dos lados, 1 sólo en audio, 3 sólo en
caption, 70 en ninguno.** Igual que en Gocho, **este corpus no puede separar el
efecto del caption del efecto de la voz**: la pieza entera pide o no pide.

**Cierre canónico de captación**, textual y completo (ig-050,
`@librosdelsensei`, 12.674 views, 87 comentarios; idéntico en ig-080):

> "Si quieres aprender cuál es esta estrategia, este martes a las 7 de la noche
> estaré dando una clase de cómo tú puedes aprender a invertir y generar entre
> 3000 y 8000 dólares extra todos los meses. Si te quieres inscribir, comenta
> clase en este video."

Variante suave, sin monto (ig-057, ig-074):

> "Toda persona que quiera aprender a invertir va a dejar la palabra invertir en
> comentarios y les voy a enviar el link para mi clase gratuita de este martes
> donde enseñaré a todo el mundo desde 0 cómo puede empezar a invertir."

Variante "clase en vivo gratuita" (ig-082, ig-087):

> "…comenta la palabra clase en este video para que vayas a mi clase en vivo
> gratuita este martes a las 7 de la noche y aprendas a invertir. Comenta clase."

Variante con el ángulo migrante (ig-075, ig-079) — **nueva, y trae su propio
problema de compliance**:

> "Este martes voy a hacer una clase en vivo enseñando cómo latinos están
> generando dinero invirtiendo en los Estados Unidos **sin usar su propio
> capital**. Comenta clase y te mando toda la información." (ig-079)

Variante mínima, la más usada en la madre (ig-014, ig-044):

> "Si quieres aprender a invertir, sígueme."

Y el cierre religioso (ig-076): *"Si esto ha sido de bendición, comenta amén y
comparte este video con un amén."*

**Los invariantes de la oferta hablada**, contados: `este martes` 8 reels ·
`7 de la noche` 5 · `clase en vivo` 4 · `gratis/gratuita` 5 · `link` 2 ·
`desde 0` 2. **Nunca dice un precio de su oferta**: las 10 apariciones de
`precio` son todas el precio del mercado (*"analizo si el precio va a subir o va
a bajar"*).

⚠️ **El cierre canónico dice un monto y un plazo.** Ver "Compliance".

---

## Devices de autoridad

Los suyos, textuales. Son siete y se repiten con variaciones:

1. **La autopresentación con edad y monto.** *"Soy Sebastián Rodríguez, alias el
   sensei, y a mis 23 años he ganado más de 7000000 de dólares"* (ig-009) /
   *"Soy Sebastián Rodríguez, también conocido como el sensei, y a mis 25 años he
   ganado más de 10000000 de dólares"* (ig-072). **Es el mismo guion y las cifras
   no coinciden.** También aparece "mi 1000000º de dólares con 21 años" (ig-080).
   Todo esto es ASR y además se contradice entre reels: **ninguna de estas cifras
   se usa** hasta que el cliente confirme una. Dato de contexto: dice su nombre
   sólo **3 veces en 85 reels** (`Sebastián`), y `sensei` 8 — no se pasa el reel
   nombrándose.
2. **Los años de oficio.** "Tengo 7 años dedicándome al trading de divisas"
   (ig-009) / "tengo 7 años operando divisas" (ig-072) / "Esa habilidad me tomó 7
   años en desarrollarla, y en los últimos 4 años he desarrollado una estrategia"
   (ig-002). **"7 años de oficio + 4 años de estrategia" es lo único que se
   repite estable en tres reels**, pero sigue siendo ASR — verificar.
3. **El resultado de los alumnos, no el propio.** *"mis alumnos han ganado más de
   10000000 de dólares entre el 2023 y el 2024"* (ig-009, ig-072, ig-050). Ojo:
   dice **"han ganado"**, no "han retirado". En Gocho el verbo verificable es
   *retirar*; acá el cliente usa el verbo débil. Y **la palabra `alumnos` aparece
   1 sola vez en 13.520 palabras**: la prueba social no es su activo, a
   diferencia de Gocho (40 apariciones de "mis alumnos" en su editado).
4. **La rutina como prueba de disciplina — su device más reconocible.** *"Yo me
   despierto todos los días a las 4 y 47 de la mañana"*, 8 apariciones en 4 reels
   (ig-005, ig-043, ig-056, ig-071). Y siempre viene con la justificación del
   minuto exacto: *"¿Cómo que a 47? ¿Por qué no en punto? Porque abro los ojos, 3
   minutos cepillarme y 10 minutos para ir al gimnasio"* (ig-005). El remate
   moral: *"yo sigo mis mismos hábitos desde que era pobre hasta que fui rico"*
   (ig-071).
5. **Los libros como credencial.** "he leído más de 500 libros" (3 veces). El
   catálogo real que cita, con cuántas veces aparece cada título:

   | Título como lo dice | Menciones | Reels |
   |---|---:|---|
   | *Los secretos de la mente millonaria* | **17** (✅ CORREGIDO: decía 18 — contaba también el eco de `## Hook (0-3s)`, que repite la primera oración del transcript) | 003 (×5), 004, 011, 012, 015, 022, 050, 066, 067, 070, 075, 082, 087 — 13 reels |
   | *El hombre más rico de Babilonia* | 11 | 003 (×2), 004, 011, 022, 050, 057, 061 (×2), 066, 077 — **ig-074 no lo nombra** (menciona "este libro" sin decir el título; ✅ CORREGIDO, estaba en la lista sin sustento) |
   | *Piense y hágase rico* | 6 | 003 (×3), 004, 011, 022 |
   | *El código del dinero* | 4 | 003 (×3), 004 |
   | *Padre rico, padre pobre* | **2** (✅ CORREGIDO: decía 3, con el mismo eco del Hook) | 004, 066 — **no 003 ni 011**: esos dos dicen "Rico, padre pobre" (les falta el primer "Padre", es hook mutilado, ver §7 de `hooks.md`) |
   | *Principios* de Ray Dalio | 2 | ig-007 ("Rey Dalia"), ig-058 ("Ray Dalio") |
   | *Habla menos y actúa más* (Brian Tracy) | 2 | 057, 061 |
   | *Piensa como un monje budista* | **1** (✅ CORREGIDO: decía 2 "y variante" — la "variante" era un libro distinto, ver abajo) | 050 |
   | *El monje que vendió su Ferrari* | **1 — título nuevo, no estaba en la tabla** | 003. Es un libro real y distinto de "Piensa como un monje budista"; la versión anterior los fusionó en una sola fila |
   | *Los 4 acuerdos* | 2 | 057, 061 |
   | "Biblia" (la palabra) | **5** (✅ CORREGIDO: decía 7) | 006, 011, 032, 051 (×2) |
   | Cita de Isaías 40 | **2** (✅ CORREGIDO: decía "Isaías 40:31 × 3") | 032 ("Isaías 40 31"), 076 ("Isaías 40 del 28 al 31") — **no en 006 ni 051**, esos citan Hebreos 11:1 y el padrenuestro, no Isaías |

   Método: grep sobre el cuerpo de `## Transcript` únicamente (el `## Hook (0-3s)`
   de cada ficha repite la primera oración del transcript y duplicaba estos
   conteos si se lo incluía). Los títulos **también son ASR**: ig-057 dice
   "Proverbios estoicos" y ig-061 dice "Proverbios históricos" para el mismo
   libro; "Rey Dalia" vs "Ray Dalio".
6. **El reto del Toyota Corolla, con la prueba auditada** — device nuevo, el más
   verificable del corpus (ig-046, ig-060):
   > "A principio de año comencé un reto, convertir 1000 dólares en 1000000 de
   > dólares, vendí todos mis carros y me compré este Toyota Corolla para hacer
   > el ret[o]. […] Por el momento he ganado 250000 dólares **auditados en un
   > banco** con colaboración en Chase."

   Es el único lugar del corpus donde apoya una cifra en un tercero verificable
   (`auditad*` 2 apariciones, `Chase` 2, `Toyota`/`Corolla` 4 cada uno). **La
   cifra es ASR y el nombre del banco también** — pero el *device* ("auditado en
   un banco") es reutilizable sin la cifra, y es el equivalente al "retiran" de
   Gocho: convierte una promesa en un hecho comprobable. **Es lo que hay que
   pedirle al cliente para poder escribir con números.**
7. **La anti-ostentación por sustitución**, del mismo reto: vendió los súper
   carros y se compró un Corolla. Es el device de valores del corpus, y convive
   con el opuesto — ig-070 defiende viajar en primera clase (*"viajar 8 horas a
   Europa en económica es un dolor de espalda"*) mientras ig-014 lista "Viajar en
   económico para ahorrar dinero. De pobres". **No es un posicionamiento
   anti-lujo**: es lujo justificado por rendimiento. No le escribas humildad
   material.

Y uno más débil: **el nombre propio de tercero** — "Agustín, que era camarero y
dejó de serlo" (ig-014), "fui a ver a Cristiano Ronaldo en su último partido"
(ig-005). Nombres = ASR = verificar siempre.

### El mecanismo, dicho en sus palabras (importa para escribir)

Nunca explica trading con tecnicismos. Lo explica con **una sola frase, repetida
en 6 reels**:

> "…analizo un gráfico y veo si el precio va a subir. Si yo digo que va a subir y
> sube, gano dinero." (ig-005)
> "Todos los días yo me conecto en el gráfico de 8 de la mañana a 10, analizo si
> el precio va a subir y si sube gano dinero. Analizo si va a bajar y si baja
> gano dinero también." (ig-046)
> "Yo tengo una estrategia que me dice cuándo el precio va a subir o cuándo el
> precio va a bajar." (ig-068)

Esa es su versión de la "estrategia que me dice exactamente dónde comprar y dónde
vender" de Gocho. **Se calca tal cual.** Y noten el marco temporal: *"de 8 de la
mañana a 10"* — dos horas, en su casa, desde su computadora
(*"desde mi casa y desde mi computadora"*, ig-075).

---

## Qué NUNCA dice

La lista de prohibiciones es la mitad del trabajo de una voz. Cada línea es un
`grep` que da **0 sobre 13.520 palabras de transcript y 0 en los 85 captions**,
salvo donde se aclara.

**Regionalismos** (0 cada uno): `vaina` · `chamo` · `pana` · `coño` · `carajo` ·
`manito` · `chévere` · `tíguere` · `dique` · `jevi` · `chin` · `ahorita` · `acá`
· `che` · `vos` · `boludo` · `güey` · `men` · `wepa` · `jajaj` · `usted` ·
`vosotros`. → **Neutro estricto.**

**Vocabulario de infoproducto** (0 cada uno): `curso` · `academia` · `comunidad`
· `mentor` · `coach` · `masterclass` · `webinar` · `membresía` · `taller` ·
`formación` · `mentoría` · `ebook` · `pdf`. (`programa` aparece 1 vez.) → Su
palabra es **"clase"** y su rol es **"sensei"**. Escribir "mi curso" o "mi
comunidad" lo saca de personaje.

**Jerga de LinkedIn / gurú** (0 cada uno): `mindset` · `sinergia` · `escalar` ·
`hackear` · `networking` · `emprendedor` · `emprender` · `manifestar` ·
`manifestación` · `ley de atracción` · `zona de confort` · `potencial` ·
`metaverso` · `IA`. → Dice **"mentalidad"**, no "mindset". **No se llama
emprendedor.** Y ojo con `potencial`: cero apariciones, así que "desbloquear tu
potencial" es lenguaje ajeno.

**Jerga técnica de trading** (0 cada uno): `broker` · `forex` · `bolsa` ·
`cripto` · `bitcoin` · `apalancamiento` · `prop firm` · `fondeo` · `fondeada` ·
`stop` · `drawdown` · `spread` · `velas` · `pips` · `ETF` · `S&P` · `Nasdaq` ·
`dividendos` · `interés compuesto` · `bienes raíces`. (`acciones` 4 veces.) →
Habla de **invertir** y de **"si el precio va a subir o va a bajar"** (ig-040,
ig-046, ig-068). El tecnicismo lo evita a propósito; su público es principiante
total ("desde 0"). **Este es el contraste más fuerte con Gocho**, cuyo editado
tiene 124 apariciones de "fondeo" y 55 de "copiadora".

**Urgencia y hype de venta** (0 cada uno): `garantizado` · **`método`** ·
**`sistema`** · **`fórmula`** · `truco` · `atajo` · `sin esfuerzo` · `urgente` ·
`última oportunidad` · `cupos` · `descuento` · `inscríbete` · `regístrate` ·
`whatsapp` · `telegram` · `escríbeme` · `DM` · `enlace` · `link en bio` · `bio` ·
`promoción`. → El único mecanismo de captura es **comentar una palabra**. Ojo con
`método`/`sistema`/`fórmula`: **cero apariciones**, dice siempre **"mi
estrategia"** (11 veces). Y `secreto` en singular = **0**; las 18 apariciones de
`secretos` son todas el título del libro *Los secretos de la mente millonaria*.

**Palabras de riesgo y descargo** (0 cada uno): `riesgo` · `puedes perder` ·
`pérdida` · `perder dinero` · `no es asesoría` · `resultados pasados` ·
`no garantiza` · `advertencia` · `apostar` · `apuesta`. → **Nunca menciona el
riesgo, ni una vez en 63 minutos de audio.** No hay una sola frase suya de
descargo que se pueda reciclar. Ver "Compliance".

**Vocativos de comunidad** (0 cada uno): `hermano` · `chicos` · `muchachos` ·
`gente mía` · `familia`(como vocativo) · `equipo` · `grupo` · `discord`. → **No
tiene vocativo de comunidad.** Le habla a un "tú" singular, nunca a una tribu.
(`nosotros` 3 veces, y ninguna es "nosotros la comunidad".)

**Malas palabras**: una sola en todo el corpus, "quite esa mierda" (ig-040),
dentro de un sketch. **Fuera de sketch no dice groserías.**

**Tampoco dice**: `ingresos pasivos` (0) · `libertad financiera` (1 vez en
13.520) · `jamás` (0) · `desde cero` (0 — dice **"desde 0"**) · `sólo` con tilde
(0 — dice **"solamente"**, 41 veces).

**Y las que sí dice, pero negadas** — importante no invertirles el signo:
`fácil` 5 apariciones, y en 3 de las 5 va negado o relativizado (*"conseguir esas
cosas no fue fácil"* ig-018, *"el dinero no se consigue fácil"* ig-079);
`rápido` 2; `esfuerzo` 2; `sacrific*` 3 (*"Sacrifico un par de años de vida para
luego vivir como nadie vive"*, ig-086). **Su marco es el sacrificio, no el
atajo.** Un ad que le prometa facilidad lo contradice con su propio corpus.

---

## Lo que las métricas dicen sobre los hooks

**Views altas no prueban que el creativo sea bueno** — pero ✅ CORREGIDO: en este
cliente **la explicación no es la fecha, es el handle.**

La versión anterior decía que los cinco reels de más views eran todos de
`@librosdelsensei` y todos de la ventana de crecimiento de julio-agosto. **Los
dos datos son falsos.** Los cinco de más views son:

| Reel | Cuenta | Fecha | Views | Coment/1.000 |
|---|---|---|---:|---:|
| ig-001 | `@librosdelsensei` | 2026-07-20 | 820.523 | **0,25** |
| ig-002 | **`@elsensei`** | 2026-04-02 | 322.027 | 0,25 |
| ig-003 | **`@elsensei`** | 2026-04-11 | 211.130 | 0,53 |
| ig-004 | **`@elsensei`** | 2026-04-19 | 170.865 | 1,47 |
| ig-005 | `@librosdelsensei` | 2026-07-21 | 169.847 | 0,47 |

Tres de los cinco son de la cuenta madre y son de **abril**. Y las views por mes
muestran que no hay curva de crecimiento en ninguno de los dos handles:

| Mes | `@elsensei` views med. | `@librosdelsensei` views med. |
|---|---:|---:|
| 2026-03 | 106.320 (n=3) | — |
| 2026-04 | 107.733 (n=13) | — |
| 2026-05 | — | 6.398 (n=6) |
| 2026-06 | — | 10.782 (n=17) |
| 2026-07 | 92.103 (n=7) | 7.472 (n=18) |
| 2026-08 | 81.198 (n=8) | 5.148 (n=13) |

**La madre reparte 80–110k por reel todos los meses; el satélite reparte 5–11k
todos los meses. La diferencia es de audiencia (957K vs una cuenta chica), no de
fecha.** Consecuencia práctica: **no se comparan views entre handles nunca.** Un
reel del satélite con 12k views puede ser mejor creativo que uno de la madre con
100k.

Y hay una tendencia real, en la otra métrica: **la tasa de comentarios del
satélite se derrumbó** — 2,54 por mil en junio → 0,68 en julio → **0,27 en
agosto**. Junio es justo el mes en que corrió los CTA de "comenta clase". Dejó de
pedir y dejó de recibir.

Los mejores por tasa de comentarios, que es lo que importa para el embudo
(coment/1.000 views, mínimo 3.000 views):

| Reel | Cuenta | Views | Coment | /1.000 | Qué hace |
|---|---|---:|---:|---:|---|
| **ig-009** | `@elsensei` | 119.369 | 3.649 | **30,6** | Autopresentación + lista de 3 + "Comenta Yo" **en el caption** |
| ig-062 | `@librosdelsensei` | 9.478 | 282 | 29,8 | "El que cree en dios, que comente amén" |
| ig-040 | `@librosdelsensei` | 24.675 | 648 | 26,3 | Sketch del chef + "comenta chef" |
| ig-057 | `@librosdelsensei` | 11.553 | 243 | 21,0 | 5 libros cortos + "comenta invertir" |
| ig-076 | `@librosdelsensei` | 6.245 | 125 | 20,0 | Versículos + "comenta amén" |
| ig-075 | `@librosdelsensei` | 6.739 | 57 | 8,5 | 3 libros + clase en vivo (ángulo latinos) |
| ig-058 | `@librosdelsensei` | 10.782 | 88 | 8,2 | Ray Dalio + "escriba clase" |
| ig-050 | `@librosdelsensei` | 12.674 | 87 | 6,9 | Condicional "si tuvieras 20 años" + clase |
| ig-023 | `@elsensei` | 83.612 | 379 | 4,5 | "¿Crees en dios?" — el mejor de la madre sin CTA hablado |

**El efecto del pedido, cuantificado.** Regla: "pide" = la palabra `comenta`
aparece en el audio **o** en el caption (15 reels); "no pide" = ninguno de los
dos (70 reels).

| | n | Views mediana | **Coment/1.000 (mediana)** |
|---|---:|---:|---:|
| **Pide comentario** | 15 | 7.592 | **5,33** |
| No pide | 70 | 18.688 | 0,80 |

**Pedir multiplica los comentarios por 6,7 y divide las views por 2,5.** Es una
decisión de objetivo, y está medida: para llenar el ManyChat conviene pedir; para
alcance de marca, no.

**El mejor molde del corpus es el de ig-009**, y merece su propio párrafo:
30,6 comentarios por mil sobre 119.369 views es **el único reel que consigue las
dos cosas a la vez** — alcance de cuenta madre y tasa de satélite. Y lo consigue
poniendo la palabra clave **en el caption ("Comenta 👇🏼 Yo") y no en el audio**.
El audio sólo dice *"deja la palabra join cometouch"* (ASR roto). Ese es el molde
para pedir desde `@elsensei` sin romper el registro de marca: **el pedido va
escrito, no dicho.**

---

## Compliance

Lo que ya estaba fijado y **no se toca**: ningún guion nuevo promete un monto ni
un plazo, ni recicla los testimonios de retiro del sitio (ver `oferta.md`).
**Compliance bloquea ads para este cliente.**

Lo que agrega la medición, y es la razón por la que sigue bloqueado:

🚨 **Su cierre orgánico más usado viola la regla.** *"…generar entre 3000 y 8000
dólares extra todos los meses"* aparece textual en **ig-050, ig-063 y ig-080**.
Monto + plazo, exactamente lo prohibido. **El cuerpo de esos reels se puede usar;
el cierre se reescribe siempre.**

🚨 **Nuevo: "sin usar su propio capital"** (ig-075, ig-079). Es una promesa de
mecanismo sin riesgo propio, y aparece en la variante del cierre que además usa
el ángulo migrante ("cómo latinos están generando dinero invirtiendo en los
Estados Unidos"). Doble problema: promesa financiera + segmentación por
nacionalidad. **No se recicla ninguna de las dos mitades.**

🚨 **Nunca menciona el riesgo.** 0 apariciones de `riesgo`, `pérdida`, `puedes
perder`, `no es asesoría`, `resultados pasados`, `no garantiza` sobre 13.520
palabras y 63 minutos de audio. No existe una sola frase suya de descargo que se
pueda reciclar. Si un guion necesita descargo, hay que **pedírselo al cliente**:
no existe en su voz. (Contraste útil: Gocho tiene el beat *"claro que sí, también
pierdo, pero gano más de lo que pierdo"* en 10 reels. El Sensei no tiene
equivalente.)

🚨 **Las cifras de resultado propio se contradicen entre reels del mismo guion**
(7 millones a los 23 vs 10 millones a los 25, ig-009 vs ig-072 — y son el mismo
guion, Jaccard 0,63). Aunque el ASR tenga la culpa de los dígitos, **la
contradicción de edad no la explica el ASR**. Ninguna cifra de estas entra a una
pieza.

⚠️ **Estadísticas prestadas sin fuente:** *"El 90 por [ciento] de las personas
que han leído este libro se han convertido en millonarios"* (ig-007, ig-058) y
*"Solamente un 6 por [ciento] de la población ha leído este libro"* (ig-074). No
son suyas, no tienen fuente y suenan a dato. **No se reusan.**

⚠️ **ig-051 huele a guion traducido del inglés**, y por eso su sintaxis no sirve
como muestra de voz: *"Ve y usa tu imaginación que dios te dio"*, *"Ve y di el
padre nuestro"* (`Ve y` = 3 apariciones, **todas en ig-051**), *"digamos que"*
(2, **las dos en ig-051**), y bloques repetidos textualmente dentro del mismo
reel. Es el reel más largo del corpus (90 s). **Su contenido es citable; su
sintaxis no se calca.**

Lo que **sí** se puede reciclar sin problema: la rutina de las 4:47, los libros
por título, el marco "rico vs pobre", el eje dios/fe, el frame del mecanismo
("analizo si el precio va a subir o va a bajar"), el device "auditado en un
banco" **sin la cifra**, y todo el registro de la cuenta madre — que no promete
nada porque no pide nada.

---

## Ejemplos de anclaje

Fragmentos verbatim largos. Se pegan enteros porque el tono se contagia mejor
con ejemplo largo que con reglas. **Todos los números que aparecen son ASR.**

**1 · La autopresentación con lista numerada** — ig-009, `@elsensei`, 50 s,
119.369 views, 3.649 comentarios (**30,6/1.000, el mejor del corpus**):

> "Ser el [primer] millonario de tu familia [primero] tienes que saber esto. Soy
> Sebastián Rodríguez, alias el sensei, y a mis 23 años he ganado más de 7000000
> de dólares, y te puedo decir que lo más importante para ganar el dinero son 3
> cosas. La [primera] es una visión clara de lo que quieres en la vida, y es
> imposible que tú puedas llegar al éxito si ni siquiera sabes qué paso tienes
> que dar. La [segunda] es enfoque en eso que tú quieres conseguir. Es imposible
> lograr un gran resultado si estás desenfocado queriendo 1000 cosas al mismo
> tiempo, una cosa a la vez."

**2 · La sentencia moral con "así que"** — ig-001, `@librosdelsensei`, 33 s,
820.523 views (el más visto, y sólo 0,25 comentarios por mil):

> "Una vez le presté a un amigo 40000 dólares, pero yo ya no le presté dinero a
> nadie. ¿Y por qué? […] Porque el 99 por [ciento] de las personas que le preste
> dinero no te van a pagar, y mucho menos si eres familiar o amigo. Así que
> acostúmbrate que a cualquier persona que le prestaste dinero, si le cobras, se
> va a ofender, no te va a pagar y te va a dejar de hablar. […] Así que yo
> prefiero no prestarle dinero y conservar su amistad."

**3 · El eje dios, en la cuenta madre** — ig-023, `@elsensei`, 32 s, 83.612 views,
4,5/1.000 (el mejor de la madre sin CTA hablado):

> "[¿Crees] en dios? Claro que sí, yo creo que es imposible conseguir el éxito
> sin dios. El que cree en dios, que comente amén. Tú puedes ganar mucho dinero
> sin dios, pero yo conozco multimillonarios que literalmente sudan dinero y son
> infelices, porque existe dentro del ser humano un espacio de felicidad que
> solamente se llena con cosas que te da Dios. La paz te la da Dios, la salud de
> tu familia te la da Dios."

**4 · La rutina de las 4:47, formato sketch** — ig-005, `@librosdelsensei`, 49 s,
169.847 views:

> "Sensei, ¿a qué hora te despiertas? — Yo me despierto todos los días a las 4 y
> 47 de la mañana. — ¿Cómo que a 47? ¿Por qué no en punto? — Porque abro los
> ojos, 3 minutos cepillarme y 10 minutos para ir al gimnasio. Empiezo mi rutina
> a las 5, termino a las 6 de la mañana, regreso a mi casa y hago mis 2 hábitos
> principales, mi journal y mi libro. Para las 7 y 30 de la mañana, me pongo
> listo para hacer trading."

**5 · La misma rutina con el remate moral** — ig-071, `@librosdelsensei`:

> "Muchas personas cuando les empieza a ir bien dejan de esforzarse como lo
> hacían al inicio, y es por eso que yo sigo mis mismos hábitos desde que era
> pobre hasta que fui rico."

**6 · La lista de contraste ricos/pobres** — ig-014, `@elsensei`, 33 s, 113.681
views (y su gemelo ig-044 en el satélite):

> "Comprarse el carro del [año] para aparentar. Muy de pobres. Contratar a
> alguien que te limpie la casa. De ricos. Comprar una casa para vivir en ella.
> De pobre. Contratar un entrenador personal. De ricos. Viajar en económico para
> ahorrar dinero. De pobres. […] Aprender a invertir. De ricos."

**7 · La demo de trading, registro satélite** — ig-040, `@librosdelsensei`, 36 s,
24.675 views, 648 comentarios (26,3/1.000):

> "Es mi chef y estos son 100 dólares, y voy a enseñarle a cómo convertirlos en
> 1000 dólares. ¿Te quieres ganar 1000 dólares? — Sí. — [Primero], quite esa
> mierda y pon el Trading View. Vas a entrar a la página Trading View punto com,
> y aquí tú vas a analizar si el precio va a subir o va a bajar. […] Fíjate que
> si compras en ese punto, el precio va a subir mucho y toda esa subida es
> ganancia para ti. ¿Has entendido algo? — No. — Bueno, mira, aquí, por ejemplo,
> te hubieses ganado 500 dólares, pero si quieres hacerlo sin mi, comenta la
> palabra chef en este video y te lo mando todo. Comenta chef."

**8 · La lista de libros con beneficio por ítem** — ig-057, `@librosdelsensei`,
61 s, 11.553 views, 243 comentarios (21,0/1.000):

> "5 libros cortos que cambiarán tu vida, y los puedes leer todos en un solo
> día. El [primero] te va a dar en solamente 100 páginas los 7 pasos para
> conquistar todas tus metas. Habla menos y actúa más de Brian Tracy. […] El
> [cuarto] te va a ayudar a guardar dinero, ganar más dinero, invertir tu dinero
> y todo lo que tienes que saber con respecto al dinero. Este libro es el hombre
> más rico de Babilonia."

**9 · El argumento de la juventud** — ig-034, `@elsensei`, 46 s, 55.292 views
(gemelo exacto ig-085 en el satélite, Jaccard 1,00):

> "¿Por qué crees que la mayoría de los jóvenes no consiguen el éxito? — Por las
> distracciones. — ¿Cuáles? — Cuando [uno] es joven, siempre quiere salir de
> fiestas, quiere conocer nuevas mujeres, piensa que le queda mucho tiempo de
> vida, y no se concentran en ese momento que están jóvenes que tienen la mayor
> cantidad de energía posible en aprovechar y crear el imperio que los va a
> sostener cuando sean más viejos. […] Así que si tú estás en tus 20, no es tu
> momento de descansar o de distraerte."

**10 · El tema pareja** — ig-018, `@elsensei`:

> "Una mujer le gusta un hombre que progresa, no que se atras[a], y esto no
> significa que sea interesada, y eso es porque a todas las personas les gusta
> la seguridad. […] Y al contrario, si una mujer no admirara ese tipo de cosas,
> si no quisiera estar con un hombre que ha progresado en la vida, literalmente
> es tonta, y es por eso que digo que las mujeres no son interesadas, son
> inteligentes."

**11 · El reto del Corolla, y el único device auditable** — ig-046,
`@librosdelsensei`, sketch (idéntico ig-060):

> "Sensei, este es tu nuevo carro, ¿verdad? — No, ese no es mío. Fue de un amigo
> que vino a verme. — Pero, ¿y qué pasó con todos estos súper carros? A ti te
> encantan. — A principio de año comencé un reto, convertir 1000 dólares en
> 1000000 de dólares, vendí todos mis carros y me compré este Toyota Corolla
> para hacer el ret[o]. — ¿Y cómo vas con el reto? — Por el momento he ganado
> 250000 dólares auditados en un banco con colaboración en Chase. — ¿250000
> dólares en cuánto tiempo? — Me ha tomado 5 meses ganar eso. — ¿Y comenzaste
> solo con 1000 dólares? — Solamente con 1000 dólares. — ¿Cómo funciona eso? —
> Todos los días yo me conecto en el gráfico de 8 de la mañana a 10, analizo si
> el precio va a subir y si sube gano dinero. Analizo si va a bajar y si baja
> gano dinero también. — Wow, espera, ¿y tú me puedes enseñar eso a mí? —
> Sígueme en esa cuenta para que lo puedas aprender."

**12 · El puente libro → habilidad → clase** (la estructura completa del embudo
orgánico, en 53 segundos) — ig-058, `@librosdelsensei`, 10.782 views, 8,2/1.000:

> "El 90 por [ciento] de las personas que han leído este libro se han convertido
> en millonarios, y no solo que se lo han leído sino que han interiorizado el
> conocimiento. […] Y este libro es, escuchen bien, principios de Ray Dalio.
> Leer te va a servir para construir una buena mentalidad, pero solamente leer no
> te va a ayudar a ganar dinero. Leer es una parte, pero la otra parte va a ser
> aprender **una habilidad de alto valor** con la que puedas ganar dinero en tu
> tiempo extra. Por ejemplo, yo lo hago con trading, y este martes para personas
> que tienen 0 conocimiento o para personas que nunca han ganado dinero con el
> trading, voy a dar una clase a las 7 de la noche. Va a ser gratis para toda la
> persona que escriba clase en este video."

**13 · El sketch de la prueba material** — ig-048, `@librosdelsensei`. Sirve para
calibrar el ritmo del sketch: **oraciones de 8 palabras, casi todo pregunta**:

> "[¿Cuánto] dinero tienes en tu cuenta de banco? — ¿Cuánto tú crees? — Más de
> 500000 dólares. — Más. — ¿1000000? — Más. — 2000000. — Te lo voy a mostrar.
> Pero no lo diga, 7 cifras. — Y estoy viendo la tarjeta de crédito abajo
> también. ¿Eso es lo que has gastado en este mes? […] — Sí, apenas está
> iniciando el mes. Estamos a 4."

**14 · La frase más corta y más suya del corpus** — ig-081,
`@librosdelsensei`, el reel entero son dos oraciones:

> "Como hombre no existe nada, pero absolutamente nada. No te vaya a ser más
> feliz que un día llegar a casa de tu madre montado en el auto de tus sueños,
> tocarle la puerta y decirle mamá, finalmente lo logré, ya no tienes que
> trabajar más."

---

## Lo que falta

Lo que quisimos escribir acá y no pudimos por falta de fuente. Es la lista para
pedirle al cliente:

1. **`@senseiprofe` sin una sola transcripción.** Es la cuenta a la que los dos
   handles medidos mandan tráfico, tiene otro display name ("Sebastian
   Ganimedes") y otra bio ("Trabajo en el JP Morgan"). **Es el hueco más caro del
   cerebro:** no sabemos si el que vende habla como el que atrae.
2. **Tres satélites vacíos**: `@habitosdelsensei`, `@senseialma`,
   `@frasesdelcalvito` devolvieron 0 reels en el scraper. Y quedan ~25 handles
   más de la red sin tocar. Sin eso, la afirmación "el idiolecto es transversal a
   la red" está probada sobre **2 de ~30 cuentas**, no sobre la red.
3. **10 reels del catálogo sin audio**, entre ellos `n=53` ("Comenta Clase") que
   es de captación. Se pueden recuperar re-cosechando: la URL firmada de IG
   caduca, hay que transcribir enseguida (ver `INTAKE-INSTAGRAM.md`).
4. **Cero habla larga.** No hay lives, YouTube, podcast ni VSL. Todo lo de arriba
   son **63 minutos** de habla guionada a 224 palabras por minuto. **Cómo habla
   improvisando es SIN DATO**, y es justo el registro que haría falta para
   nutrición y comunidad. Nota: en Gocho la diferencia entre registros fue
   brutal (595 "vaina" en lives vs 3 en editado). Acá no la podemos ni estimar.
5. **Ninguna cifra biográfica verificada.** Edad, monto ganado, años operando,
   millones de los alumnos, libros leídos, los "250000 dólares auditados": todo
   ASR y además contradictorio entre reels. Hace falta **una versión oficial
   escrita por el cliente**. Lo más pedible y más valioso: **la auditoría del
   reto del Corolla**, porque es el único device verificable que tiene.
6. **Los hooks reales de 22 reels.** El ASR se comió la primera palabra en 22 de
   las 34 aperturas con pregunta. Para poblar `biblioteca/hooks.md` hay que ver
   esos videos o pedir los guiones.
7. **Ningún descargo de riesgo en su voz.** No existe en 13.520 palabras. Si
   compliance va a exigir uno, hay que **grabarlo o redactarlo con él**, no
   inventarlo.
8. **Precio de la oferta y contenido de "la clase"**: sigue SIN DATO en
   `CEREBRO.md`. Los reels dicen "clase gratuita este martes a las 7 de la
   noche", "desde 0", "sin usar su propio capital" — **no dicen qué se vende
   después de la clase**, ni cuánto cuesta, ni si la clase sigue existiendo (los
   9 reels que la mencionan son de mayo–agosto 2026).
9. **Quién está en cámara en los sketches.** 15 reels son diálogo y el ASR no
   distingue hablantes. Parte de lo que la tabla SKETCH atribuye a su voz podría
   ser del interlocutor — en particular el vocativo "Sensei", el "wow" y el "ok".
   Con quién graba, y si es un empleado o un entrevistador real, es SIN DATO.
10. **El hook visual de los primeros 3 segundos.** De los reels sólo hay audio. Qué
    se ve mientras dice "Ser el primer millonario de tu familia" es SIN DATO — y
    en un cliente cuyo device central es mostrar carros, relojes y pantallas, eso
    es la mitad del creativo.
11. **Si ig-051 es un guion traducido.** Si el cliente compra o traduce guiones de
    creadores en inglés, eso cambia cómo se le escribe (y cuánto de "su voz" es
    realmente suya). Pregunta directa para él.
