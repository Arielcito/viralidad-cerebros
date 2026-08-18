# Hooks — Víctor Heras

Archivo de trabajo diario. Los hooks se **calcan**: se conserva la estructura y se
cambia el contenido. Este archivo está ordenado por estructura, no por tema,
porque el tema es lo reemplazable.

**Base.** 80 reels transcriptos (`fuentes/transcripciones/`) de los 240 del
catálogo (`fuentes/catalogo-instagram.csv`, 2022-09-08 → 2026-08-12). El grueso
del archivo son los **47 reels de `@herasmedia`** (§1–§5), que es el registro de
captación. `@victorherasemprendedor` va aparte en §6 porque es otro producto,
otra época y otro rendimiento. Los cuatro corpus (HM / VHE-A / VHE-B / REELS)
están definidos en `voz.md` y acá se usan con los mismos nombres.

**Dos capas de evidencia, y no miden lo mismo.** Todo lo que dice *qué se dijo*
sale de las 80 transcripciones. Todo lo que dice *qué CTA se pidió y cuánto
rindió* puede medirse sobre **los 240 del catálogo**, porque el caption viene de
la API y trae la palabra clave escrita. Las secciones que usan la capa ancha
están marcadas: **§2c, §2d y §6e miden sobre el catálogo entero**; §2, §2b, §3 y
§6a miden sobre los transcriptos. Importa saber cuál se está leyendo, porque
**los transcriptos son los más vistos y eso sesga los números hacia arriba**:
los 47 de HM tienen 141.964 views y 16,4 com/1k medianos, y los 57 de HM que
nadie transcribió tienen **62.011 views y 12,7 com/1k** (§2c).

**Las métricas son confiables. Lo hablado, no.** Views, likes y comments vienen
del frontmatter (API de Instagram). Todo lo que va entrecomillado como hook sale
del ASR de Deepgram: los giros de lengua son fieles, **las cifras y los nombres
propios no**. Cuando en un hook aparece un número dicho en cámara ("26.000.000 de
visitas", "130.000 seguidores"), acá va con ⚠️ y no se copia a una pieza sin
verificar contra el video.

**El campo `## Hook (0-3s)` de las transcripciones es un recorte automático** (la
primera oración del ASR) y en 11 casos está mal cortado — Deepgram se come la
primera palabra. Los hooks de este archivo están **verificados y corregidos**
contra el transcript. Hay **dos marcas distintas** y no significan lo mismo:

- `[corr.]` + palabra entre corchetes — el recorte automático se comió el arranque
  y la palabra se recuperó leyendo el transcript. Ej. ig-057: `[Si]` mañana…
- `[ASR: "x"]` — el ASR oyó **otra palabra** y acá va corregida. Son tres casos y
  están todos listados en §0b. La palabra del ASR queda a la vista para que
  cualquiera pueda ir a comprobarla.

---

## §0b — El método, para que esto se pueda reproducir

Todo número de este archivo sale de dos fuentes y de ningún lado más: el
**frontmatter** de las 80 transcripciones (views/likes/comments/fecha/duración,
vienen de la API de Instagram) y el **catálogo** de 240 filas. Nada sale de
mirar los reels a ojo.

| Corpus | Reels transcriptos | Palabras | Qué es |
|---|---|---|---|
| **HM** — `@herasmedia` | 47 | **10.706** | captación, 2025-03 → 2026-07 |
| **VHE-A** — `@victorherasemprendedor` era PostMe | 22 | **5.271** | 2022-09 → 2023-10 |
| **VHE-B** — `@victorherasemprendedor` era lifestyle | 10 | **1.552** | 2024-01 → 2026-07 |
| **REELS** — `@victorherasreels` | 1 | 176 | ig-010, 2026-04 |
| **Total** | **80** | **17.705** | de 240 reels del catálogo (33 %) |

Los comandos exactos:

```bash
cd /Users/arielserato/Developer/viralidad-dashboard/cerebros/victor

# palabras por cuenta (el campo `palabras:` del frontmatter, no un re-conteo)
awk '/^cuenta:/{c=$2} /^palabras:/{s[c]+=$2; n[c]++} END{for(k in s) print k, n[k], s[k]}' \
  fuentes/transcripciones/ig-*.md

# reels del catálogo y views totales
awk -F, 'NR>1 {n++; s+=$7} END {print n" reels", s" views"}' fuentes/catalogo-instagram.csv

# com/1k de un reel suelto
grep -E '^(n|views|comments):' fuentes/transcripciones/ig-032*.md

# los 118 reels de @herasmedia del catálogo, con su caption completo
#   (el caption trae comas y comillas: hay que parsear RFC4180, no cortar por coma)
node -e 'const fs=require("fs");const t=fs.readFileSync("fuentes/catalogo-instagram.csv","utf8");
 const rows=[];let f="",row=[],q=false;for(let i=0;i<t.length;i++){const c=t[i];
 if(q){if(c===String.fromCharCode(34)){if(t[i+1]===String.fromCharCode(34)){f+=c;i++}else q=false}else f+=c}
 else{if(c===String.fromCharCode(34))q=true;else if(c===",")
 {row.push(f);f=""}else if(c==="\n"){row.push(f);rows.push(row);row=[];f=""}else if(c!=="\r")f+=c}}
 const h=rows[0];rows.slice(1).filter(r=>r[4]==="@herasmedia").forEach(r=>
 console.log(r[5],r[6],(r[8]/r[6]*1000).toFixed(1),r[3].replace(/#\S+/g,"").slice(0,90)))'
```

**Cómo se saca la palabra clave de un caption** (§2c, §2d): se busca primero la
palabra entre comillas —normalizando `“ ” ‘ ’ " '` a un solo carácter, porque él
mezcla las cuatro y una versión de este análisis perdió 22 reels por no
hacerlo— y si no hay comillas, la primera palabra en mayúscula después de
`comenta / coméntame / cometa / escribe / pon`. El pedido personalizado
(`comenta tu nicho`, `comenta cuál es tu nicho`, `comenta qué tipo de contenido
haces`) se detecta aparte y va a su propia familia. Los 118 quedaron
clasificados sin residuo: **0 captions sin clasificar**.

⚠️ **Un caption sin palabra clave no es un reel sin CTA.** Son 11 de los 118, y
en los 8 que están transcriptos el CTA existe y está **sólo hablado** — ig-015
pide LISTA en el audio y su caption no la nombra, ig-013 e ig-017 lo mismo. La
familia se llama por eso `sin kw en caption` y no "sin CTA": es lo que se puede
afirmar. Para los 3 no transcriptos de esa familia, si el reel pide algo o no es
`SIN DATO`.

**Cómo se agrupó.** Cada uno de los 47 reels de HM está asignado a **exactamente
una** de las 14 estructuras de §3, leyendo el transcript, no el caption. Los 22
de VHE-A a una de las 5 de §6a. Ningún reel cuenta dos veces, y las columnas `n`
de todas las tablas de §3 y §6a suman 47 y 22 respectivamente. Los agregados son
**medianas**, nunca promedios: con ig-002 (4,6 M de views) adentro, un promedio
de views no significa nada.

**Los tres verbatim con palabra corregida sobre el ASR** — se marcan porque son
el único lugar del archivo donde la comilla no es literal al 100 %:

La comilla de esta tabla es siempre **el ASR literal**; la palabra que hay que
locutar va afuera, en negrita. Se hace así a propósito: si se entrecomilla la
versión corregida, el test de trazabilidad la marca como inventada — y tiene
razón, porque esa frase no existe en ningún audio.

| Reel | ASR literal (lo que dice el transcript) | Se locuta | Por qué se corrige |
|---|---|---|---|
| ig-071 | "¿Qué tengo que hacer después de publicar un libro?" (ig-071) | **reel** | más abajo el mismo transcript retoma el tema como reel; un "libro" no encaja en una cuenta de Instagram |
| ig-045 | "imposible de ignorancia" (ig-045) | **ignorar** | no existe la construcción con "ignorancia" |
| ig-037 | "¿Es bueno recibir tus reels a tu historia cuando lo publicas?" (ig-037) | **subir** | el mismo reel lo dice bien dos frases después: "si lo pones en tu story, más gente lo va a ver" (ig-037) |

Cualquier otra comilla del archivo es el ASR tal cual, salvo puntuación. Cuando
en el cuerpo aparezca la versión locutable, va marcada `[ASR: "x"]` y la que
manda para verificar es esta tabla.

---

## §0c — El campo `Hook (0-3s)` está bien cortado y mal etiquetado

Auditado los 80, uno por uno, contra su bloque `## Transcript`:

```bash
cd /Users/arielserato/Developer/viralidad-dashboard/cerebros/victor
# ¿el campo Hook es prefijo literal del transcript? (80/80 = sí)
node -e '…'   # script en el scratchpad; compara Hook vs transcript.slice(0,len)
```

**Resultado 1: el recorte nunca cortó mal. 80 de 80** coinciden byte a byte con
la primera oración del ASR. No hay ni un caso de recorte a mitad de palabra ni de
oración salteada. Quien lo generó hizo bien el trabajo mecánico.

**Resultado 2: y aun así el campo no es el hook.** "Primera oración del ASR" y
"primeros 3 segundos" son dos cosas distintas, y acá se separan mucho. Estimando
los segundos que cubre cada recorte como `palabras del recorte ÷ (palabras del
reel ÷ duración)`:

| Lo que cubre el campo | Reels | % |
|---|---|---|
| ≤ 3 s (es de verdad el hook) | 36 | 45 % |
| 3–6 s | 26 | 33 % |
| 6–8 s | 6 | 8 % |
| **> 8 s (es el primer tercio del reel)** | **12** | **15 %** |

Mediana: **3,4 s** y **11,5 palabras**. Rango: de 1 palabra a **102**.

Los 12 donde el campo directamente no sirve como hook, con los segundos que
cubre — en estos hay que leer el transcript y quedarse con la primera frase:

| Reel | Palabras del recorte | Segundos que cubre |
|---|---|---|
| ig-099 (HM) | 102 | **29,0 s** |
| ig-040 (VHE-B) | 60 | 27,0 s |
| ig-002 (HM) | 31 | 21,0 s — *es el reel entero* |
| ig-035 (VHE-B) | 44 | 18,9 s |
| ig-023 (VHE-A) | 17 | 15,1 s |
| ig-009 (HM) | 46 | 13,2 s |
| ig-100 (VHE-A) | 33 | 11,8 s |
| ig-018 (VHE-B) | 13 | 8,9 s |
| ig-027 (VHE-B) | 15 | 8,3 s |
| ig-074 (VHE-A) | 25 | 8,2 s |
| ig-050 (HM) | 30 | 8,1 s |
| ig-021 (VHE-A) | 33 | 8,1 s |

**Resultado 3: dónde falla de verdad es en el arranque, y es medible.** De los 26
recortes que terminan en signo de pregunta, **9 no abren con `¿`** — Deepgram se
comió la palabra interrogativa entera: ig-003, ig-044, ig-061, ig-063, ig-077,
ig-087, ig-091, ig-093, ig-098. Es **el 35 % de las preguntas**, y reproduce
exactamente el conteo de `voz.md`.

**Consecuencia para quien usa este archivo:** los hooks de §3 y §6 ya están
verificados y corregidos uno por uno — no hace falta volver al campo. Si alguien
transcribe una tanda nueva, el campo `Hook (0-3s)` sirve para **clasificar la
estructura** y no para locutar, y en el 15 % de los casos ni siquiera es el hook.

---

## §0 — Cómo leer los números (leer antes de usar el archivo)

Tres columnas aparecen en todas las tablas:

- **views** — alcance bruto.
- **com/1k** — comentarios por cada 1.000 views. Es el **proxy directo del
  ManyChat**: en `@herasmedia` el 100 % de los reels pide comentario y el
  comentario es lo que dispara el DM. Un reel con menos views y más com/1k llena
  más el bot.
- **idxC / idxV** — el mismo número **normalizado por semestre**: com/1k dividido
  por la mediana de com/1k de ese semestre, y views dividido por la mediana de
  views de ese semestre. `idxC 2,00` = el doble de conversión a comentario que un
  reel promedio *de su propia época*.

Por qué hace falta normalizar: ver §1. La cuenta **no** está creciendo — está
perdiendo alcance — así que un reel viejo con muchas views tiene viento a favor y
un reel nuevo con las mismas views es mejor creativo.

**Dónde el índice es débil, dicho de frente:** los 47 reels transcriptos se
reparten 1 / 24 / 19 / 3 por semestre. El índice es sólido para 2025-S2 (n=24) y
2026-S1 (n=19), que cubren 43 de los 47. Para **ig-013** (único reel transcripto
de 2025-S1) el índice da 1,00 *por construcción* y no significa nada; y los tres
de 2026-S2 (ig-054, ig-067, ig-045) se comparan contra una mediana de n=3.

| Semestre | Reels transcriptos | Mediana views | Mediana com/1k |
|---|---|---|---|
| 2025-S1 | 1 | 413.470 | 45,5 |
| 2025-S2 | 24 | 155.215 | 14,9 |
| 2026-S1 | 19 | 130.085 | 16,4 |
| 2026-S2 | 3 | 150.383 | 23,1 |

Mediana global de los 47: **141.964 views · 16,4 com/1k · 34,4 likes/1k**.

---

## §1 — El alcance de `@herasmedia` viene cayendo. La conversión a comentario, no.

Medianas mensuales sobre **los 118 reels de `@herasmedia` del catálogo** (no sólo
los transcriptos):

| Mes | n | Mediana views | Pico | Mediana com/1k |
|---|---|---|---|---|
| 2025-03 | 1 | 413.470 | 413.470 | 45,5 |
| 2025-07 | 6 | **135.747** | 290.677 | 16,4 |
| 2025-08 | 7 | 136.559 | 396.238 | 20,7 |
| 2025-09 | 6 | 73.318 | 161.433 | 11,3 |
| 2025-10 | 8 | 102.286 | 731.473 | 13,5 |
| 2025-11 | 8 | 131.930 | **4.645.081** | 10,1 |
| 2025-12 | 6 | 160.399 | 240.728 | 13,0 |
| 2026-01 | 8 | 101.480 | 399.324 | 6,8 |
| 2026-02 | 9 | 94.035 | 140.288 | 7,4 |
| 2026-03 | 12 | 77.913 | 206.652 | 17,1 |
| 2026-04 | 11 | 56.759 | 621.100 | 10,4 |
| 2026-05 | 5 | 66.833 | 251.934 | 15,1 |
| 2026-06 | 11 | 56.567 | 117.092 | 13,6 |
| 2026-07 | 10 | **55.196** | 167.968 | 20,1 |
| 2026-08 | 10 | 6.075 | 72.213 | 9,5 |

**Lo que hay que leer acá, y es lo contrario de lo que se suele asumir:**

1. **La mediana de views se partió al medio en un año**: 135.747 en julio-2025 →
   55.196 en julio-2026. No es un mes malo, es una pendiente de 12 meses.
2. **2026-08 no cuenta.** Esos 10 reels tienen entre 1 y 12 días de acumulación
   al momento de la cosecha (2026-08-12). El dato de la caída se sostiene con
   junio y julio, que ya están maduros.
3. **La conversión a comentario NO cayó con el alcance.** 16,4 en julio-2025 →
   20,1 en julio-2026. Se está reteniendo peor gente pero se la está convirtiendo
   igual o mejor. El problema de 2026 es de **distribución**, no de CTA.
4. **Consecuencia operativa para este archivo:** dos reels con 140.000 views no
   valen lo mismo si uno es de agosto-2025 y el otro de julio-2026. El de 2026 es
   mejor creativo. Por eso todo lo que sigue lleva `idxC`/`idxV`.

**Los dos outliers de views que hay que descontar antes de sacar conclusiones:**

| Reel | Fecha | Views | idxV | com/1k | idxC |
|---|---|---|---|---|---|
| **ig-002** | 2025-11-12 | **4.645.081** | **29,93** | **0,9** | **0,06** |
| **ig-009** | 2026-04-28 | 621.100 | 4,77 | 4,0 | 0,24 |

Los dos reels más vistos de la cuenta son **los dos peores convirtiendo a
comentario de los 47**. ig-002 hizo 33 veces más views que ig-032 y **70 veces
menos comentarios por view**. Si alguien mira el catálogo ordenado por views y
saca de ahí el modelo de hook, va a copiar exactamente los dos peores para llenar
el bot. Ver §3i y §3n para qué son cada uno.

Un tercer reel de views altas que **sí** es bueno: **ig-008** (731.473 views,
idxV 4,71, 26,0 com/1k, idxC 1,75). Alcance y conversión a la vez. Es el mejor
reel del archivo en términos absolutos.

---

## §1b — La prueba dura de que las views no miden el creativo: publicó el mismo reel dos veces

Hasta acá "las views están infladas por la fecha" era una inferencia. El catálogo
trae el experimento hecho: **hay 6 grupos de posts de `@herasmedia` con el mismo
caption y la misma `duracion_seg` al segundo, en shortcodes distintos** — 13 posts
en total, casi todos publicados el mismo día. El creativo está fijo; lo único que
cambia es la tirada.

```bash
# los detecta agrupando por (caption normalizado, duracion_seg) sobre el catálogo
awk -F, 'NR>1 && $5=="@herasmedia"' cerebros/victor/fuentes/catalogo-instagram.csv
```

| Fecha | Shortcode | Views | Comentarios | com/1k |
|---|---|---|---|---|
| 2025-11-12 | `DQ97koEEQWs` | **4.645.081** | 4.149 | 0,9 |
| 2026-07-23 | `DbJAvoNRZUN` | **3.671** | 6 | 1,6 |
| | | | | |
| 2025-10-13 | `DPweeT3ER-e` | **145.189** | 1.611 | 11,1 |
| 2025-10-13 | `DPwfhD3Ea00` | 1.928 | 4 | 2,1 |
| 2025-10-13 | `DPwfxECEUQ0` | **853** | 2 | 2,3 |
| | | | | |
| 2026-03-29 | `DWefUktRRId` | **94.673** | 2.027 | 21,4 |
| 2026-03-29 | `DWeeVqBxK7e` | 2.723 | 23 | 8,4 |
| | | | | |
| 2026-04-12 | `DXCevDjRA2-` | 69.017 | 403 | 5,8 |
| 2026-04-12 | `DXCemKvRbqO` | 8.468 | 28 | 3,3 |
| | | | | |
| 2026-04-08 | `DW4OpcBRpzB` | 56.759 | 745 | **13,1** |
| 2026-04-08 | `DW4OfoQxdPX` | 6.825 | 89 | **13,0** |
| | | | | |
| 2026-04-22 | `DXcMXMKR8sM` | 34.357 | 253 | 7,4 |
| 2026-04-22 | `DXcL2oZxt5X` | 1.334 | 13 | 9,7 |

**Con el creativo, el caption y el día fijos, las views se mueven de 8× a
1.265×.** La mediana de los 6 grupos es **30×**. No hay ninguna decisión de guion
detrás de esa diferencia: es la tirada del algoritmo.

**El caso más caro es el primero, y toca justo al reel más importante del
archivo.** `DQ97koEEQWs` es **ig-002**, los 4,6 M de views. El 2026-07-23 salió
otra vez el mismo reel — 21 segundos, mismo caption "Si quieres conseguir videos
virales de tu nicho en concreto, comenta tu nicho" — y **hizo 3.671 views**. El
reel que todo el catálogo pone primero cuando se ordena por views, corrido de
nuevo, hizo el 0,08 % de la tirada original. Todo lo que §1 y §3l decían de
ig-002 por inferencia queda demostrado: **su número no es del creativo.**

Y hay un premio de consuelo importante: **con 4,6 M de views hizo 0,9 com/1k y
con 3.671 views hizo 1,6.** Las dos veces está un orden de magnitud debajo de la
mediana de su cuenta. El creativo es malo para el bot en las dos tiradas — eso sí
es del creativo, y ahora está medido dos veces.

**Qué tan estable es el com/1k comparado con las views.** Es la pregunta que
decide si este archivo se puede escribir. En los dos grupos donde el post chico
junta suficientes comentarios para que la tasa signifique algo (≥25):

| Grupo | Views | com/1k |
|---|---|---|
| 2026-04-08 | 56.759 → 6.825 (**8,3×**) | 13,1 → 13,0 (**1,01×**) |
| 2026-04-12 | 69.017 → 8.468 (**8,2×**) | 5,8 → 3,3 (1,77×) |

**Mismo creativo, 8× de diferencia en views y el com/1k se mueve un 1 %.** Esa es
la justificación empírica de por qué todo este archivo ordena por com/1k y no por
views, y de por qué las medianas de §2 y §3 son legibles aunque las views de sus
integrantes varíen un orden de magnitud.

⚠️ **Tres advertencias, porque este dato es fácil de sobreinterpretar:**

1. **No verifiqué que el video sea idéntico**, sólo que coinciden caption y
   duración al segundo y la cuenta. Que sean el mismo archivo, o un recorte
   distinto del mismo rodaje, es **`SIN DATO`** — hay que abrir los links.
2. **El com/1k de los posts muertos no es una medición.** `DPwfxECEUQ0` tiene
   **2 comentarios**; su "2,3 com/1k" es aritmética sobre ruido. Por eso arriba
   sólo se comparan los dos grupos con ≥25 comentarios en el post chico.
3. **Estos 13 posts están adentro de todas las tablas del catálogo de §2c.** Por
   eso §2c publica las dos versiones, con y sin ellos: si no se sacan, la familia
   "nombre propio" se hunde por los dos DIEGO muertos y parece un problema de
   creativo cuando es un repost.

**Regla operativa:** un reel de `@herasmedia` con menos de 10.000 views casi
siempre es un repost, no un fracaso creativo. Son **9 de los 108** reels maduros
de la cuenta, y **7 de esos 9 son el post chico de uno de estos grupos.** Antes
de sacar un formato de rotación por "hizo 1.334 views", chequeá si no es la
segunda tirada del que hizo 34.357.

---

## §2 — Qué CTA rinde, medido. Y el que más usa es de los que peor rinde.

Los 47 reels de HM piden comentario. La diferencia está en **qué palabra** piden.
Agrupados por **qué tipo de palabra es**, no por cuál:

| Familia de palabra clave | n | Mediana views | com/1k | idxC | idxV |
|---|---|---|---|---|---|
| **Nombra el entregable** (CLASE, GUIÓN, LISTA, SISTEMA, IDEA, 5, CUENTA, BIO, 130, 2026, SOLUCIÓN) | **21** | 140.288 | **22,5** | **1,50** | 0,96 |
| **Nombre propio** (SENSEI, DIEGO, SUSI, CCN) | 4 | 147.786 | 22,3 | 1,15 | 1,05 |
| **Abstracta / genérica** (VIRAL, YO, 100, GRUPO, RETO) | 13 | 130.085 | **11,4** | **0,76** | 1,00 |
| **Personalizada: "coméntame tu nicho"** | 9 | **169.801** | **11,8** | **0,79** | **1,24** |

**El hallazgo, con los dos números al lado:**

- **La palabra que nombra el entregable convierte al doble que la abstracta**:
  22,5 vs 11,4 comentarios por cada 1.000 views (idxC 1,50 vs 0,76), con
  prácticamente el mismo alcance. Pedir "comenta **GUIÓN**" y pedir "comenta
  **VIRAL**" cuestan lo mismo y uno rinde el doble.
- **Y 22 de los 47 reels (47 % del output) usan la familia que rinde la mitad**:
  13 abstractos + 9 "tu nicho". No es un caso aislado, es la mitad de la
  producción.
- El caso más limpio, mismo n y misma época: **CLASE (n=6) 21,9 com/1k · idxC
  1,40** contra **VIRAL (n=6) 11,0 com/1k · idxC 0,74**. Seis reels cada uno,
  ambos repartidos entre 2025 y 2026, y CLASE convierte el doble.
- **"Coméntame tu nicho" es la palabra clave más usada de todas (9 reels) y es la
  segunda peor convirtiendo.** Pero es la única familia que trae **más alcance
  que la mediana** (idxV 1,24). Tiene sentido: pedir que escriban una palabra que
  no está en pantalla, que tienen que pensar, es más fricción que copiar
  "GUIÓN". Sirve para **pauta y alcance**; no sirve para llenar el bot.

Detalle por palabra (n chico en casi todas — usar como pista, no como veredicto):

| Palabra | n | Mediana views | com/1k | idxC | Reels |
|---|---|---|---|---|---|
| LISTA | 1 | 396.238 | **43,1** | 2,89 | ig-015 |
| SENSEI | 1 | 399.324 | 34,0 | 2,07 | ig-014 |
| SISTEMA | 1 | 109.688 | 29,2 | 1,78 | ig-079 |
| CUENTA | 2 | 123.288 | 28,9 | 1,45 | ig-067, ig-071 |
| CINCO / 5 | 2 | 105.354 | 27,6 | 1,74 | ig-073, ig-096 |
| **GUIÓN** | 3 | 167.968 | **27,1** | **1,65** | ig-032, ig-045, ig-099 |
| IDEA | 2 | 237.156 | 24,7 | 1,59 | ig-017, ig-098 |
| CCN | 1 | 150.383 | 23,1 | 1,00 | ig-054 |
| 2026 | 1 | 179.603 | 22,5 | 1,51 | ig-042 |
| **CLASE** | **6** | 169.511 | **21,9** | **1,40** | ig-022, ig-036, ig-037, ig-057, ig-088, ig-093 |
| SUSI | 1 | 141.964 | 21,4 | 1,30 | ig-060 |
| BIO | 1 | 158.121 | 16,5 | 1,00 | ig-050 |
| RETO | 1 | 235.436 | 16,4 | 1,00 | ig-029 |
| 130 | 1 | 136.559 | 15,8 | 1,06 | ig-064 |
| SOLUCIÓN | 1 | 140.288 | 15,6 | 0,95 | ig-062 |
| GRUPO | 2 | 121.143 | 12,9 | 0,78 | ig-066, ig-078 |
| **tu nicho** | **9** | **169.801** | **11,8** | **0,79** | ig-002, 008, 030, 034, 044, 061, 068, 075, 085 |
| 100 | 1 | 97.877 | 11,4 | 0,76 | ig-089 |
| YO | 3 | 132.259 | 11,3 | 0,76 | ig-047, ig-065, ig-091 |
| DIEGO | 1 | 145.189 | 11,1 | 0,74 | ig-058 |
| **VIRAL** | **6** | 177.259 | **11,0** | **0,74** | ig-009, 013, 028, 077, 082, 094 |

### §2b — Tres refuerzos del CTA, medidos

Todo esto se mide sobre los mismos 47, comparando "lo tiene" vs "no lo tiene".

| Refuerzo | n | com/1k | idxC | vs resto (idxC) |
|---|---|---|---|---|
| **Escasez hablada** ("te lo mando **antes de que lo borre**") | 7 | **22,5** | **1,51** | 1,00 |
| **Caso de cliente nombrado en el cuerpo** ("como hice con este cliente…") | 9 | 22,3 | 1,38 | 0,97 |
| **Eco del segundo personaje** (el otro repite la keyword al final) | 13 | 16,6 | 1,11 | 0,97 |

- **La escasez es el refuerzo más rentable y sólo se usa en 7 de 47.** Los siete:
  ig-014, ig-042, ig-045, ig-057, ig-058, ig-066, ig-067. Fórmula textual:
  *"Comenta CLASE y te lo mando **antes de que lo borre**."* Variante fuerte
  (ig-014): *"recuerda que este vídeo seguramente me lo borren pronto, así que yo
  que tú me daría prisa."*
- **Nombrar al cliente sube la conversión un 42 %** sobre la mediana. Los casos
  disponibles están en `historias.md` §2.
- **El eco casi no mueve la aguja** (1,11 vs 0,97). Es un recurso de guion que
  vale por ritmo, no por conversión. No hay que forzarlo.
- **Duración:** los reels de ≤55 s tienen más alcance (mediana 199.461 views,
  n=12) que los de ≥75 s (141.195, n=17), y **la misma** conversión (16,1 vs 14,1
  com/1k). Para pauta, corto. Para el bot, da igual.

**Fórmula de cierre textual, la que mejor rinde combinando todo (ig-032, ig-045,
ig-057, ig-067):**

> "Si comentas **[palabra que nombra el entregable]** en este vídeo, te envío
> [el entregable] **para tu nicho en concreto** por mensaje directo. Comenta
> **[palabra]** y te lo mando **antes de que lo borre**."

---

## §3 — Hooks por estructura

14 estructuras. Cada uno de los 47 reels de HM está asignado a exactamente una.
Ordenadas por **idxC del grupo** (lo que mejor llena el bot arriba).

| # | Estructura | n | Mediana views | com/1k | Para qué sirve |
|---|---|---|---|---|---|
| a | Escena "Este es X" | 1 | 399.324 | **34,0** | ambas |
| b | Objeción en boca del otro (sketch) | 6 | 120.585 | **28,3** | **bot** |
| c | Cifra al frente | 2 | 253.752 | 24,9 | ambas |
| d | Sentencia-shock | 4 | 162.396 | 23,2 | **bot** |
| e | Enemigo declarado | 1 | 150.383 | 23,1 | bot |
| f | Pregunta directa | 7 | 167.968 | 21,2 | ambas |
| g | Escalera condicional | 1 | 158.121 | 16,5 | pauta |
| h | Hipótesis catastrófica | 3 | 148.997 | 15,8 | ambas |
| i | Consultorio rápido | 5 | 141.195 | 13,7 | pauta |
| j | Meta-interrupción | 3 | 113.790 | 12,4 | — |
| k | Veredicto nominal / ranking | 9 | 130.085 | 11,8 | **pauta** |
| l | CTA al frente | 3 | 97.877 | 11,4 | **pauta** |
| m | Antes/después + confesión | 1 | 132.259 | 6,3 | pauta |
| n | Arenga retórica | 1 | 621.100 | 4,0 | **pauta** |

**Resumen para quien tiene que decidir hoy:**

- **Para pauta / alcance:** veredicto nominal (§3k), consultorio rápido (§3i),
  arenga (§3n), CTA al frente (§3l) — y CTA "tu nicho". Son los formatos que
  reparten views y no piden esfuerzo.
- **Para llenar el ManyChat:** objeción en boca del otro (§3b) y sentencia-shock
  (§3d), cerrando con palabra clave que nombra el entregable + escasez. La
  combinación sketch + keyword-entregable es lo mejor medido del archivo.
- **El formato más usado (§3k, 9 reels, el "ranking cantado") está en el fondo de
  la tabla de conversión.** Trae views y no trae comentarios: es la versión-hook
  del mismo problema que "coméntame tu nicho".

### §3-bis — Lo que se mide y **no** mueve la aguja: el largo del hook

Es la primera cosa que alguien intenta optimizar ("hacé el hook más corto"). En
este corpus no sirve. Los 47 de HM, agrupados por cuántas palabras tiene la
primera oración del transcript:

| Palabras del hook | n | Mediana views | Mediana com/1k |
|---|---|---|---|
| 1–7 | 15 | 123.644 | 15,4 |
| 8–14 | 14 | 154.966 | 16,2 |
| 15–25 | 14 | 140.874 | 18,2 |
| 26+ | 4 | 389.611 | 10,2 |

Los tres primeros tramos —43 de los 47 reels— caen entre **15,4 y 18,2**, con la
mediana global en 16,4. Es ruido: **el largo del hook no predice nada**. El
cuarto tramo (26+ palabras) parece hundirse, pero son cuatro reels y dos son
ig-002 y ig-009, los dos outliers de §1 que ya sabemos que convierten mal por
otra razón; el tercero (ig-099) convierte **27,1**, arriba de todo. Sin ellos no
queda tramo.

**Consecuencia:** no gastes iteraciones acortando el hook. Lo que mueve la
conversión en este corpus es la **estructura** (§3, de 4,0 a 64,6 com/1k) y la
**palabra del CTA** (§2, 11,4 vs 22,5). El largo, no.

---

### §3a — Escena: "Este es X"

Se abre presentando a una tercera persona reconocible, en tercera persona, y
recién después aparece él. n=1 pero es el segundo mejor reel del archivo.

**ig-014** · 2026-01-15 · 399.324 v · 34,0 com/1k · **idxC 2,07 · idxV 3,07** ·
61 s · CTA SENSEI + escasez

> "Este es el sensei, el trader más famoso del mundo, odiado por muchos y amado
> por otros. Y este soy yo dándole un regalo. Pero ¿por qué?"

Por qué funciona: presta la audiencia de un tercero conocido, promete revelación
("hoy por fin vamos a revelar toda la verdad sobre él"), y el CTA es el nombre
propio de ese tercero — la palabra clave ya está en la cabeza del que mira.
⚠️ Las cifras del cuerpo ("2,2 billones de visitas", "de 130.000 a 1.000.000")
son ASR y el orden de magnitud de la primera es ilegible: verificar.

**Calco:** `"Este es [cliente reconocible del nicho], el [rol] más [adjetivo] de
[categoría], odiado por muchos y amado por otros. Y este soy yo [acción que
sorprende]. Pero ¿por qué?"`

---

### §3b — Objeción en boca del otro (sketch a dos voces) ← **el mejor para el bot**

Arranca **con la objeción del cliente dicha por el cliente**, no por él. Él
aparece contestando. 6 reels, la mediana de com/1k más alta de todos los grupos
con n significativo: **28,3** (1,7× la mediana global).

| Reel | Fecha | Views | com/1k | idxC | Hook verificado |
|---|---|---|---|---|---|
| **ig-032** | 2026-03-12 | 206.652 | **64,6** | **3,93** | "No sé qué coño publicar, ¿me ayudas?" |
| ig-067 | 2026-07-29 | 124.079 | 41,3 | 1,78 | "Ya acabé el vídeo de hoy, voy a publicarlo." / "Espera, no lo publiques: vas a tener 0 visitas." |
| ig-073 | 2026-06-04 | 117.092 | 35,2 | 2,14 | "Los trial reels no sirven para nada." / "Eso es lo que dice alguien que no sabe usarlos." |
| ig-093 | 2026-03-29 | 94.673 | 21,4 | 1,30 | [corr.] "**[¿Tú]** te crees que es tan fácil como robar ideas y ya, o qué?" |
| ig-060 | 2026-05-17 | 141.964 | 21,4 | 1,30 | "Si de verdad lo que dices funciona, consígueme 100.000 seguidores en un mes." |
| ig-082 | 2025-08-17 | 103.719 | 12,6 | 0,84 | "ChatGPT, genérame 20 ideas de contenido viral para mi cuenta." |

**ig-032 es el mejor reel del archivo para llenar el ManyChat: 64,6 comentarios
por cada 1.000 views, casi 4× la mediana de su semestre.** 54 segundos, todo el
reel es un diálogo de preguntas y respuestas secas, y cierra con la keyword que
nombra el entregable ("GUIÓN") repetida por el otro personaje.

Las tres sub-variantes, que son estructuras distintas y conviene testear separadas:

1. **Pedido de ayuda** (ig-032): el otro pide, él responde con un plan numerado.
2. **Interrupción antes del error** (ig-067): el otro está por hacer algo, él lo
   frena. *"Espera, no lo publiques, vas a tener 0 visitas."*
3. **Desafío / apuesta** (ig-060, ig-073): el otro lo reta y él acepta.
   *"Si de verdad lo que dices funciona, consígueme 100.000 seguidores en un mes."*

**Calco (variante 2, la más limpia)** — plantilla, no verbatim; el original es
ig-067, transcripto arriba en esta misma sección:

```
[Acción rutinaria en primera persona].
Espera, no lo hagas: [consecuencia negativa concreta].
¿Qué? ¿Por qué?
Son 3 cosas. La primera es que [error 1].
```

---

### §3c — Cifra al frente

Abre con un número de resultado, sin contexto.

| Reel | Fecha | Views | com/1k | idxC | Hook |
|---|---|---|---|---|---|
| ig-013 | 2025-03-31 | 413.470 | **45,5** | *n/a* | ⚠️ "Hace sólo 5 días tenía 10.000 seguidores. Y esta mañana se despertó con 150.000 seguidores, y en este vídeo te voy a explicar las 3 cosas que hicimos para crecer su cuenta." |
| ig-094 | 2026-02-01 | 94.035 | 4,3 | 0,26 | "11 cosas que bajan el alcance en Instagram, y seguramente tú estás cometiendo alguna de ellas — y la última es la peor." |

Los dos extremos del grupo, y la diferencia es **qué tipo de cifra**:

- **ig-013 pone la cifra de un resultado de cliente** y es el reel de mayor
  com/1k del archivo (45,5). Aviso: es el único reel transcripto de 2025-S1, así
  que no tiene índice comparable, y su fecha lo pone en el mes de mayor alcance
  de la cuenta. El 45,5 es real; el "es 2,9× su época" no se puede calcular.
  ⚠️ El caption dice **170.000** y el ASR dice **150.000**: verificar cuál va.
- **ig-094 pone la cifra de un listado** ("11 cosas") y es el segundo peor
  convirtiendo de los 47 (4,3 com/1k, idxC 0,26). Un listado numerado promete
  trabajo, no resultado.

**Regla que sale de acá: la cifra del hook tiene que ser un resultado, nunca la
cantidad de puntos del video.**

---

### §3d — Sentencia-shock (afirmación categórica, sin pregunta)

Afirma algo en contra de la creencia común y no pregunta nada. 4 reels, 23,2
com/1k.

| Reel | Fecha | Views | com/1k | idxC | Hook verificado |
|---|---|---|---|---|---|
| ig-079 | 2026-02-22 | 109.688 | 29,2 | 1,78 | "En 2026, la peor forma de crecer en redes sociales, lamentablemente, es la más cómoda." |
| ig-030 | 2025-12-03 | 210.960 | 23,9 | 1,60 | [corr.] "**[El]** algoritmo de Instagram nunca va a recomendar tu contenido si no haces esto antes de publicar." |
| ig-042 | 2025-12-31 | 179.603 | 22,5 | 1,51 | "El algoritmo de Instagram acaba de cambiar en este 2026." |
| ig-058 | 2025-10-13 | 145.189 | 11,1 | 0,74 | "Cuando publicas demasiado contenido no estás dejando que tu cuenta crezca." |

Los tres primeros nombran **al algoritmo o al año** como sujeto. El cuarto —el
único que rinde por debajo de la mediana— habla de **lo que hace el espectador**.
Sujeto externo y con autoridad rinde; sujeto "vos" rinde peor.

**Calco:** `"En [año], la peor forma de [objetivo del nicho], lamentablemente, es
la más cómoda."` — es la estructura de ig-079 y es reutilizable en cualquier
nicho tal cual.

---

### §3e — Enemigo declarado

**ig-054** · 2026-07-06 · 150.383 v · 23,1 com/1k · idxC 1,00 · 68 s · CTA CCN

> [corr.] "**[Los]** gurús de redes sociales van a odiarme por esto, pero así
> puedes crear 100 ideas de contenido viral en solamente 10 minutos."

Único reel del archivo que abre nombrando un enemigo. Formato "me van a odiar por
decir esto" + promesa cuantificada + tiempo. ⚠️ "Vas a abrir Claudia" es ASR de
**Claude**.

**Calco:** `"[Los profesionales del nicho] van a odiarme por esto, pero así
puedes [resultado] en solamente [tiempo corto]."`

---

### §3f — Pregunta directa (una sola pregunta, el reel la responde)

7 reels, 21,2 com/1k. El grupo más grande que rinde por encima de la mediana.

| Reel | Fecha | Views | com/1k | idxC | Hook verificado |
|---|---|---|---|---|---|
| ig-037 | 2025-10-01 | 190.026 | 23,7 | 1,59 | "¿Es bueno subir tus reels a tu historia cuando lo publicas? Sí — si quieres que no lo vea nadie." `[ASR: "recibir"]` |
| ig-098 | 2026-06-11 | 93.141 | 22,7 | 1,38 | [corr.] "**[¿Cuál]** es la diferencia entre un vídeo viral y otro que no llega ni a 1.000?" |
| ig-036 | 2025-08-13 | 190.819 | 22,3 | 1,50 | "¿Cómo coño hace la gente para hacer vídeos virales?" |
| ig-045 | 2026-07-12 | 167.968 | 21,2 | 0,92 | "¿Cómo crear un guion científicamente imposible de ignorar?" `[ASR: "de ignorancia"]` |
| ig-071 | 2025-07-20 | 122.497 | 16,6 | 1,11 | "¿Qué tengo que hacer después de publicar un reel?" `[ASR: "un libro"]` |
| ig-029 | 2026-04-19 | 235.436 | 16,4 | 1,00 | "¿Por qué hay vídeos con 1.000.000 de visitas y otros no llegan ni a las 1.000?" |
| ig-062 | 2026-02-18 | 140.288 | 15,6 | 0,95 | "¿Cómo coño hace la gente para hacer guiones virales?" |

**La variante mejor medida no es la pregunta a secas, es pregunta + respuesta
sarcástica inmediata** (ig-037): *"¿Es bueno X? Sí, si querés que no lo vea
nadie."* Da veredicto y humor en los primeros 4 segundos.

**"¿Cómo coño hace la gente para…?"** es una plantilla suya que ya usó dos veces
(ig-036 vídeos, ig-062 guiones) con resultados casi idénticos (22,3 y 15,6). Es
reutilizable palabra por palabra cambiando el sustantivo.

---

### §3g — Escalera condicional

**ig-050** · 2026-03-01 · 158.121 v · 16,5 com/1k · idxC 1,00 · 48 s · CTA BIO

> "Si en tu biografía en la 1º línea explicas qué haces y de qué forma ayudas a
> tus clientes, enhorabuena, estás por encima del 50 por 100 de los creadores."
> (ig-050)

(Se locuta *"en la **primera** línea"* y *"el 50 **por ciento**"*: `1º` y
`por 100` son la forma en que Deepgram escribe los ordinales y los porcentajes
hablados — `voz.md` lo tiene contado, "primera" hablada aparece 0 veces en HM.)

Estructura de auto-diagnóstico escalonado — el espectador se va midiendo contra
percentiles. Rinde en la mediana. 🚨 El caption promete "cómo hacer 20.000 €/mes":
ver §5.

---

### §3h — Hipótesis catastrófica ("Si mañana…")

El hook más reciclado de la cuenta: **tres reels con el mismo primer segundo**.

| Reel | Fecha | Views | com/1k | idxC | Variante | Keyword |
|---|---|---|---|---|---|---|
| **ig-057** | 2025-07-30 | 148.997 | **35,4** | **2,37** | "…me despertara con 0 seguidores" | CLASE + escasez |
| ig-064 | 2025-08-20 | 136.559 | 15,8 | 1,06 | "…me despertara con 0 seguidores" | 130 |
| ig-044 | 2026-01-11 | 169.801 | 7,4 | **0,45** | "…**me robaran todos mis seguidores**" | tu nicho |

Texto base (ig-057, [corr.] falta el "Si" inicial):

> [corr.] "**[Si]** mañana me despertara con 0 seguidores, esto es exactamente lo
> que haría para ganar 100.000 seguidores antes de final de año. Y no, no voy a
> hablarte de ganchos ni de…"

**Corrección a `voz.md`:** el hallazgo 13 de `voz.md` dice que ig-057 e ig-064
son "el mismo hook a 10 meses de distancia" y fecha ig-064 en 2026-05. El
frontmatter dice **2025-08-20**: son **tres semanas**, no diez meses. Y la
familia tiene un tercer miembro que `voz.md` no registra, ig-044 (2026-01-11).

**Lo que se aprende del trío, que es una comparación casi controlada** (mismo
hook, tres cierres distintos):

- El mismo hook rindió **35,4 / 15,8 / 7,4** com/1k. La diferencia no está en el
  hook: está en el cierre. ig-057 cierra con **CLASE + "antes de que lo borre"**
  (la mejor combinación de §2); ig-044 cierra con **"coméntame tu nicho"** (la
  peor) y se lleva **más views** que los otros dos (idxV 1,31) con la mitad de
  conversión. Es el §2 entero demostrado sobre un solo hook.
- La variante "me robaran mis seguidores" (ig-044) trae más alcance y menos
  comentario que "me despertara con 0". Si se vuelve a usar: **"me despertara con
  0" para el bot, "me robaran" para pauta.**

---

### §3i — Consultorio rápido (pregunta → respuesta en seco, en ráfaga)

5 reels, 13,7 com/1k — por debajo de la mediana. Formato de alto alcance y baja
conversación: contesta todo, no deja pregunta abierta.

| Reel | Fecha | Views | com/1k | idxC | Hook verificado |
|---|---|---|---|---|---|
| ig-034 | 2025-11-30 | 192.270 | 15,8 | 1,06 | "¿Cuántos vídeos hay que publicar por semana en Instagram? De 2 a 4 por semana, pero nunca más de un vídeo al día. Nunca." |
| ig-088 | 2025-07-27 | 97.950 | 14,1 | 0,94 | "¿Grabar con cámara o postear a buena hora?" |
| ig-061 | 2025-12-12 | 141.195 | 13,7 | 0,92 | [corr.] "**[¿Cuál]** es la mejor hora para publicar en Instagram?" |
| ig-091 | 2025-11-19 | 96.014 | 11,7 | 0,78 | [corr.] "**[¿A qué]** hora se publica en Instagram? Da igual." |
| ig-022 | 2025-07-13 | 290.677 | 11,0 | 0,74 | [corr.] "**[El]** principio del vídeo es lo más importante. No: lo que importa es el tiempo de retención." |

**ig-088 es la sub-variante interesante: no es consultorio, es "esto o esto".**
Un duelo encadenado donde cada respuesta genera la siguiente pregunta
("¿Editarlo bien o buen guion?" → "¿Buen guion o buen gancho?"). Es el mismo
motor de retención que el ranking pero con dos opciones por vez.

---

### §3j — Meta-interrupción (el gancho se desmonta en cámara)

3 reels, 12,4 com/1k. Él empieza a grabar un reel y algo/alguien lo interrumpe;
el reel es sobre cómo se hace el reel.

| Reel | Fecha | Views | com/1k | idxC | Hook verificado |
|---|---|---|---|---|---|
| ig-096 | 2025-08-27 | 93.616 | 20,0 | 1,34 | [corr.] el ASR arranca a mitad de frase: "…**[para captar la atención en redes]** sociales tienes que conseguir que la— Ah, esta mierda, no se suponía que esto nunca se llenaba. Qué gilipollas, anda." |
| ig-028 | 2025-12-07 | 240.728 | 12,4 | 0,83 | "Un vídeo no se puede hacer viral en Instagram si no— No, no, no, no. Así no. Qué gancho tan malo, vamos a cambiarlo." |
| ig-077 | 2025-11-23 | 113.790 | 9,6 | 0,65 | "El mundo me pregunta: Pablo, ¿cómo haces para que tu novia nunca discuta contigo? Pues la verdad, no tengo ni puta idea, porque ni me llamo Pablo ni ya es mi novia." |

Es su formato más ingenioso y el que **peor** convierte del archivo con n>2.
Sirve para retención y para posicionamiento (se ríe del género), no para
captación. Si se usa, hay que compensar con keyword-entregable y escasez.

---

### §3k — Veredicto nominal / ranking cantado ← **el más usado, el que menos convierte**

9 reels — el grupo más grande de todos — y **11,8 com/1k**, el tercero peor.
Estructura: sustantivo suelto, veredicto seco, siguiente. Sin verbo, sin pregunta.

| Reel | Fecha | Views | com/1k | idxC | Hook verificado |
|---|---|---|---|---|---|
| ig-015 | 2025-08-24 | 396.238 | **43,1** | **2,89** | "Repostear tus reels en historias. **Baja las visitas.** Hacer contenido de valor. **Baja las visitas.** Generar comentarios en el vídeo. **Sube las visitas.**" |
| ig-017 | 2025-08-07 | 381.172 | 26,7 | 1,79 | "La hora de publicación. **No importa.** Repostear en historias después de publicar: si quieres joder tu cuenta, hazlo." |
| **ig-008** | 2025-10-29 | **731.473** | 26,0 | 1,75 | "Para editar vídeos: **CapCut**. Para grabar contenido: **con teléfono móvil**, a poder ser un iPhone." |
| ig-066 | 2026-04-17 | 130.085 | 15,4 | 0,94 | "Mejores vídeos para ganar seguidores. Vídeos con texto y descripción: **10** — son los peores." |
| ig-075 | 2025-12-25 | 115.297 | 11,8 | 0,79 | "Hashtags: **7**, no es casi nada importante." |
| ig-068 | 2026-01-06 | 123.644 | 11,4 | 0,69 | "Este es un vídeo interrupción de patrón. Este es un vídeo pregunta controversial." |
| ig-047 | 2025-09-24 | 161.433 | 11,3 | 0,76 | "Mejores nichos para hacerse viral. Fitness: **5 de 10**. Real estate: bastante más complicado, **9 de 10**." |
| ig-078 | 2026-04-14 | 112.201 | 10,4 | 0,63 | "Para editar vídeos: CapCut. Para grabar contenido: con el teléfono móvil." |
| ig-085 | 2026-01-18 | 101.459 | 5,7 | 0,35 | "Repostear tus reels en historias. Baja las visitas." |

**Es el formato de mayor alcance de la casa y el peor para el bot.** Tres de los
nueve están en el top-5 de views de la cuenta. Los cuatro de arriba son de 2025;
los cinco de abajo, de 2026 — y **el ranking envejeció peor que el promedio de la
cuenta** (ver §4).

**Dos sub-variantes con rendimiento muy distinto:**

- **Veredicto binario** ("Baja las visitas / Sube las visitas") — ig-015, ig-017,
  ig-008: **26,0 a 43,1 com/1k**. La respuesta es una sentencia con dirección.
- **Puntaje del 1 al 10** — ig-047, ig-066, ig-075: **11,3 a 15,4 com/1k**. El
  número obliga a calibrar y baja la temperatura.

**Si hay que elegir uno: el binario.** Y el mismo reel binario funcionó a 43,1 en
2025-08 (ig-015) y a 5,7 en 2026-01 (ig-085) — ver §4.

---

### §3l — CTA al frente (el reel es el CTA)

3 reels, 11,4 com/1k. Empieza vendiendo, sin contenido previo.

| Reel | Fecha | Views | com/1k | idxC | idxV | Hook |
|---|---|---|---|---|---|---|
| ig-099 | 2026-03-10 | 92.000 | 27,1 | 1,65 | 0,71 | "Esta fue la plantilla de guiones exacta que utilicé para hacer este contenido viral para este cliente." |
| ig-089 | 2025-09-03 | 97.877 | 11,4 | 0,76 | 0,63 | "Hey, tú. Sí, tú. ¿Sabes que puedes ganar 100.000 seguidores hablando con un vídeo?" |
| **ig-002** | 2025-11-12 | **4.645.081** | **0,9** | **0,06** | **29,93** | "Si quieres conseguir vídeos virales como este que estás viendo ahora mismo, de tu nicho en concreto, coméntame tu nicho en comentarios." |

**ig-002 es el reel más importante de entender de todo el archivo.** 4,6 millones
de views — 30× la mediana de su semestre — y **0,9 comentarios por cada 1.000
views**, el peor de los 47. 21 segundos, una sola frase, es literalmente el CTA
sin contenido. Convirtió 70 veces peor que ig-032.

- Con 4,6 M de views hizo ~4.180 comentarios. **ig-032, con 206.652 views, hizo
  ~13.350.** El reel de 22× menos alcance trajo 3 veces más gente al bot.
- **Es el ejemplo canónico de métrica inflada por distribución y no por
  creativo**, y como está primero en el catálogo ordenado por views, es el que
  más riesgo tiene de ser copiado.

**ig-099 es la versión buena de la misma idea**: mismo "el reel es el pitch", pero
mostrando plantillas en pantalla y pidiendo **GUIÓN** en vez de "tu nicho". 29
segundos, idxC 1,65.

---

### §3m — Antes/después + confesión

**ig-065** · 2026-02-25 · 132.259 v · 6,3 com/1k · idxC 0,38 · 89 s · CTA YO

> "Mis piscinas pasaron de esto a esto cuando dejé de hacer una cosa: dar valor
> en mi contenido."

⚠️ "Mis piscinas" es casi seguro ASR de otra cosa — más abajo en el mismo reel el
transcript dice "Mis **vecinos** pasaron de esto a esto". Verificar contra el
video antes de citar. Rinde mal (idxC 0,38) y su caption tiene la promesa
económica más explícita del archivo (🚨 §5).

---

### §3n — Arenga / pregunta retórica emocional

**ig-009** · 2026-04-28 · 621.100 v · **4,0 com/1k** · idxC 0,24 · idxV 4,77 ·
80 s · CTA VIRAL

> "¿Tú te crees que un gordo de mierda de Internet, que aún vive con su madre,
> que nunca ha hecho nada en su vida y que nunca lo va a hacer…"

Segundo reel más visto de HM y **segundo peor convirtiendo**. Y tiene el mayor
likes/1k del archivo (94,1 contra 34,4 de mediana): la gente lo aplaude y no
comenta. **Es el perfil exacto de un creativo de pauta**: barato en views,
inútil para el bot.

---

## §4 — El mismo hook, dos veces: cuatro comparaciones casi controladas

Recicla hooks. Eso permite medir el efecto de la fecha con el creativo fijo — que
es exactamente el aviso de "no confundas la fecha con el creativo".

| Par | Primera vez | Segunda vez | Qué muestra |
|---|---|---|---|
| **"Repostear tus reels en historias. Baja las visitas."** | ig-015 · 2025-08 · 396.238 v · **43,1** | ig-085 · 2026-01 · 101.459 v · **5,7** | Mismo guion, 5 meses después: −74 % views y **−87 % conversión**. La caída de conversión es mucho peor que la de alcance → **este formato se quemó**, no es sólo la cuenta. |
| **"Para editar vídeos: CapCut."** | ig-008 · 2025-10 · 731.473 v · 26,0 | ig-078 · 2026-04 · 112.201 v · 10,4 | Idem: −85 % views, −60 % conversión. Segundo formato quemado. |
| **"¿Cómo coño hace la gente para hacer X virales?"** | ig-036 · 2025-08 · 190.819 v · 22,3 (vídeos) | ig-062 · 2026-02 · 140.288 v · 15,6 (guiones) | −27 % views, −30 % conversión: cae **igual que la cuenta**. La plantilla de pregunta **no se quemó**; sigue viva. |
| **"Si mañana me despertara con 0 seguidores"** | ig-057 · 2025-07 · 35,4 | ig-064 · 2025-08 · 15,8 · / ig-044 · 2026-01 · 7,4 | A 3 semanas de distancia el mismo hook rindió menos de la mitad — la diferencia está en el **CTA**, no en la fecha (§3h). |

**La regla que sale de acá:** el listado/ranking (§3k) se agota al repetirlo; la
pregunta y el sketch no. Si hay que rotar formatos, rotá primero los rankings.

---

## §5 — Compliance: dos promesas que hoy están en el caption

No es un tema de estilo. Estas dos aparecen en el texto que acompaña al reel y
son promesa de resultado económico; ver `historias.md` para los cierres marcados
🚨 y para la reescritura.

- **"100.000 seguidores en 30 días"** — 12 captions de HM (ig-009, 036, 037, 064,
  066, 078, 082, 089, 099 entre otros). Es una promesa de resultado con plazo.
- 🚨 **"20.000 €/mes"** — captions de **ig-050, ig-062, ig-065**. Promesa de
  ingreso con cifra. En ig-065 además está hablada: *"para ayudarte a llegar a
  100.000 seguidores y mínimo 20.000 euros al mes por contrato."*
- 🚨 **"ganar 3.000 € en 7 días"** — caption de ig-001 (VHE-B), el reel de 7,26 M
  de views. Es el eje de toda la campaña RETO (§6b).

Ninguno de estos tres reels está entre los que mejor convierten: ig-050 idxC 1,00,
ig-062 0,95, ig-065 **0,38**. **La promesa económica no es lo que está trayendo
los comentarios**, así que quitarla no cuesta conversión medible.

---

## §6 — El otro archivo: `@victorherasemprendedor`

Otra cuenta, otro producto, otra época. **No mezclar sus hooks con los de HM sin
avisar** — el registro está separado en `voz.md`. Dentro de esta cuenta hay
**tres familias con rendimientos totalmente distintos**, y la diferencia entre
ellas es el hallazgo más grande de la sección:

| Familia | n | Mediana views | com/1k | likes/1k |
|---|---|---|---|---|
| **VHE-A — storytelling de marca (2022-2023)** | 22 | 131.707 | **0,9** | 34,2 |
| **VHE-B/RETO — sketch de dinero (2024)** | 5 | **441.441** | **9,7** | 22,5 |
| **VHE-B/lifestyle — sin CTA (2024-2026)** | 5 | 243.650 | 0,8 | 46,1 |

(Dentro de VHE-A hay además **dos reels de una campaña con sorteo** que rompen
la escala del grupo — 10,6 y 6,0 com/1k contra 0,9 de mediana. Están medidos
aparte en **§6d** porque son un solo evento de dos días y porque ahí el
comentario se puntuaba, así que no es la misma métrica.)

**VHE-A tiene la misma tasa de likes que `@herasmedia` (34,2 vs 34,4) y 18 veces
menos comentarios (0,9 vs 16,4).** No es que gustara menos: es que **nunca pedía
comentario**. `voz.md` lo tiene contado — "comenta/coméntame" aparece 0 veces en
los 22 reels de VHE-A. La conclusión es directa y vale para cualquier pieza
nueva: **el hook no llena el bot, lo llena el CTA.** Un hook de VHE-A con un
cierre de HM sería lo mejor de los dos.

### §6a — VHE-A: hooks de curiosidad narrativa (para pauta y brand, no para el bot)

Los mejores del archivo como estructura, aunque su conversión sea nula. Casi
todos abren con un caso concreto y una tensión, y cierran con moraleja de
negocio. **Los 22 reels de VHE-A, completos y ordenados por views** — así se
puede auditar que el n=22 de la tabla de §6 no esconde nada:

| Reel | Fecha | Views | com/1k | Hook verificado |
|---|---|---|---|---|
| ig-021 | 2023-01-17 | 305.876 | 1,8 | "No sé si Piqué cambió un Rolex por un Casio, pero lo que sí sé es que este y este tienen un precio completamente distinto haciendo exactamente lo mismo: dar la puta hora." |
| ig-023 | 2023-10-13 | 254.637 | 1,1 | "¿Alguna vez te ha pasado que eso que tanto te motivaba antes te ha dejado de encantar?" |
| ig-031 | 2022-10-01 | 207.275 | 0,8 | "¿Cuál es la cagada más grande que puedes cometer al vender cualquier cosa? Escucha, porque es esta." |
| ig-039 | 2023-05-04 | 188.114 | 0,7 | "Bad Bunny ha arruinado su carrera en menos de un mes." |
| ig-043 | 2022-10-22 | 172.396 | 1,0 | [corr.] "**[Un]** hombre que cultivaba rábanos descubrió el secreto para ganar mucho más dinero trabajando mucho menos." |
| ig-046 | 2023-04-27 | 166.660 | 1,3 | ⚠️ "Estos macarrones valen 1.000.000 y medio de visitas." |
| ig-048 | 2023-05-09 | 161.252 | 0,3 | "La vuelve a liar. Madre mía, esta mujer no aprende, tío." |
| ig-049 | 2022-10-23 | 158.450 | 1,0 | ⚠️ "Este niño pasó de ser repartidor a tener una fortuna de 67.000.000.000 de euros haciendo una cosa muy simple." |
| ig-053 | 2022-09-16 | 154.075 | **2,3** | "A los jóvenes nos llevan engañando toda nuestra vida, y todo esto empieza con 6 años." |
| ig-059 | 2022-10-13 | 145.036 | 1,9 | "¿No te parece absurdo pagar por ir a conciertos a escuchar canciones que ya has escuchado antes?" |
| ig-063 | 2023-01-09 | 139.932 | 0,4 | [corr.] "**[¿Qué]** harías si vas en un avión y de repente escuchas: 'prepárense para el impacto'?" |
| ig-069 | 2022-09-11 | 123.483 | 0,7 | "Se puede ganar mucho dinero haciendo cosas muy tontas." |
| **ig-072** | 2022-10-17 | 117.963 | **10,6** | [corr.] "**[En]** este vídeo voy a regalar un iPhone 14 y una mentoría conmigo valorada en 1000 euros." ⚠️ → **§6d** |
| ig-074 | 2022-10-21 | 115.342 | 1,8 | ⚠️ "Esta chica hizo 1000000 de euros en solo 10 meses con 24 años, y lo mejor solo utilizando un" — el ASR corta acá y empalma con la presentación de ella |
| ig-080 | 2022-10-06 | 105.988 | 1,9 | "El otro día pagué 18 euros por un sándwich. Y no te rías tanto, porque tú habrías hecho exactamente lo mismo que yo." |
| ig-081 | 2023-03-08 | 103.767 | 0,4 | "Esta caja de condones. Cómodos, finísimos y extragrandes." |
| ig-083 | 2022-11-25 | 103.585 | 0,4 | "Atento, que esto tiene sabor a vagina." |
| ig-087 | 2022-10-27 | 99.827 | 0,5 | [corr.] "**[Si]** vieras a Bad Bunny, a Rosalía o a Quevedo cantando en el metro, ¿te pararías a escucharles?" |
| **ig-090** | 2022-10-18 | 97.433 | **6,0** | ⚠️ ASR ilegible: "2 meses me tienen paracaídas con un cartel para hacer esto." → **§6d** |
| ig-095 | 2023-02-07 | 94.025 | 0,3 | [corr.] "**[Este]** vídeo me obligó a depilarme el pecho." |
| ig-097 | 2023-01-05 | 93.452 | 0,4 | "¿Sabes qué es esto? Es un trozo de papel que hace, bueno, no entra en lo que hace o no hace una compresa." |
| ig-100 | 2023-01-03 | 91.660 | 0,3 | "Mira: este eres tú ahora mismo, un emprendedor triste porque no gana todo el dinero que cree que debería." |

**Medido por estructura del hook** — los 22, cada uno en un solo grupo:

| Estructura del hook | n | Mediana views | com/1k | likes/1k | Reels |
|---|---|---|---|---|---|
| **Personaje o marca + resultado extremo** | 7 | **161.252** | 1,0 | 29 | ig-039, ig-043, ig-046, ig-048, ig-049, ig-069, ig-074 |
| **Pregunta retórica al espectador** | 6 | 142.484 | 0,7 | 38 | ig-023, ig-031, ig-059, ig-063, ig-087, ig-097 |
| **Objeto o precio en la mano** | 4 | 104.878 | 1,1 | 32 | ig-021, ig-080, ig-081, ig-083 |
| **Espejo / confesión en 1ª persona** | 3 | 94.025 | 0,3 | **41** | ig-053, ig-095, ig-100 |
| **CTA-sorteo (campaña iPhone 14)** | 2 | 107.698 | **8,3** | 21 | ig-072, ig-090 → §6d |

**Lo que dice esta tabla, y hay que leerlo al revés de como se lee la de §3:**

1. **Dentro de VHE-A la estructura del hook no mueve la conversión.** Los cuatro
   grupos narrativos caen entre **0,3 y 1,1 com/1k**, con la mediana del corpus
   en 0,9. Eso no es un ranking, es ruido alrededor de cero. Ninguna estructura
   de VHE-A llena un bot, por buena que sea el hook.
2. **Lo único que la mueve es pedir el comentario** (2,1 con pedido vs 0,6 sin
   pedido, medido en `voz.md`) **y, dentro de eso, el premio** (8,3 en los dos de
   §6d). Es la misma conclusión del §2 vista desde la otra punta del archivo:
   **el hook trae la vista, el CTA trae el comentario.**
3. **Para alcance sí hay señal, y es la que se puede reciclar en HM:** "personaje
   o marca + resultado extremo" hace **161.252 views medianas contra 104.878** del
   grupo del objeto en la mano — 1,5×, con n=7 y n=4, así que es una pista fuerte
   y no un veredicto. Es exactamente lo que HM hace en §3a (ig-014, "Este es el
   sensei") y en §3c (ig-013, la cifra del cliente): los dos mejores reels de HM
   por conversión son esta estructura de VHE-A **con un CTA de HM encima**.
4. **El espejo/confesión es el que más likes junta (41/1k) y el que menos
   comenta (0,3).** Perfil de brand puro. Si se usa, hay que ponerle CTA de HM.

Las cuatro estructuras reutilizables de acá, en orden de cuánto se puede calcar:

1. **Precio absurdo / anomalía de valor** (ig-021, ig-080, ig-083): dos objetos
   iguales a precios distintos, o un precio que no cierra. *"El otro día pagué 18
   euros por un sándwich."*
2. **Personaje anónimo → cifra enorme** (ig-043, ig-049, ig-074): *"Hombre que
   cultivaba rábanos descubrió el secreto para ganar mucho más dinero trabajando
   mucho menos"* (ig-043 — se locuta *"**Un** hombre"*, el ASR se comió el
   artículo), *"Este niño pasó de ser repartidor a…"* (ig-049).
3. **Famoso + veredicto** (ig-039, ig-048, ig-087): *"Bad Bunny ha arruinado su
   carrera en menos de un mes."*
4. **Confesión incómoda** (ig-095, ig-080): *"Este vídeo me obligó a depilarme el
   pecho."* (ig-095) Es el único de VHE-A que sigue vivo en HM (§3m).
5. **Objeto en la mano + "¿cómo venderías esto?"** (ig-081, ig-097): abre con una
   cosa física ridícula o incómoda y la usa para enseñar a vender. *"Esta caja de
   condones. Cómodos, finísimos y extragrandes."* (ig-081) / *"¿Sabes qué es
   esto?"* (ig-097). Los dos rinden **0,4 com/1k** y ~103.000 views, es decir:
   estructura simpática, resultado del montón. Está acá porque es fácil de
   producir y porque es la única de VHE-A que **no** se está usando en HM — si se
   testea, que sea con CTA de palabra-entregable, no como brand.
6. **Pregunta-espejo confesional** (ig-023, 254.637 views, el 2º más visto de
   VHE-A): *"¿Alguna vez te ha pasado que eso que tanto te motivaba antes te ha
   dejado de encantar?"* 71 palabras en 63 segundos — el reel más corto de texto
   de todo el corpus. Es puro posicionamiento, sin oferta y sin CTA.

### §6b — VHE-B/RETO: el sketch de dinero. La familia de mayor alcance del cerebro.

5 reels de 2024 (+ ig-010 de `@victorherasreels`, 2026) construidos igual: un
interlocutor le pregunta a qué se dedica o cuánto gana, y él contesta con una
cifra en pantalla. CTA único: **comenta RETO**.

| Reel | Fecha | Views | com/1k | Hook verificado |
|---|---|---|---|---|
| **ig-001** | 2024-09-29 | **7.262.389** | 12,7 | ⚠️ "Aquí 200.000 euros y me quiero comprar un coche." / "¿Traes 200.000 ahí?" / "Sí." |
| ig-003 | 2024-10-07 | 1.953.317 | 9,7 | "Perdona, perdona: ¿a qué te dedicas?" / "Yo hago vídeos en Instagram." / "Pero Instagram no paga por subir vídeos." |
| ig-012 | 2024-10-06 | 441.441 | 8,4 | "¿Cuánto dinero has gastado este mes?" / "No, por favor. Este mes no." |
| ig-020 | 2024-11-10 | 348.634 | 13,5 | ⚠️ "¿A qué te dedicas? Hago vídeos en redes sociales. ¿Y cuánto has ganado, por ejemplo, el último mes? 146000 euros, he hecho mucho." (ig-020) |
| ig-033 | 2024-11-15 | 204.021 | 5,9 | ⚠️ "¿Cuánto dinero tienes en coches?" / "Tengo casi medio 1000000 de euros en coches." (dijo *medio millón*; el ASR lo escribe en dígitos) |
| ig-010 | 2026-04-15 | 590.140 | **24,2** | "Vas a ser rico, y lo sé porque estás viendo este vídeo ahora mismo." |

- **ig-001 es el reel más visto del cerebro entero: 7,26 M.** Y convierte 12,7/1k
  — mejor que la mediana de HM en 2026-01/02. Es el único formato del archivo que
  logra alcance masivo **y** conversión decente.
- **La estructura es siempre la misma pregunta** (ig-003, ig-020): `¿A qué te dedicas?` /
  `¿Cuánto [ganás/gastaste/tenés]…?`, respondida con una cifra, y el pivote
  final `¿Y cómo puedo aprender yo eso?` → `Simplemente poniendo RETO en los
  comentarios.` (ig-001) El CTA está **puesto en boca del otro como pregunta**, no dicho
  por él. Es el mismo mecanismo del §3b y acá está en su forma más pura.
- ⚠️ **Todas las cifras de esta familia son ASR y ninguna es citable**: 200.000 €,
  146.000 €, 150.612,59 $, 10.500 $, medio millón en coches, 40.874,82 $. Ver
  `historias.md` §3 antes de usar cualquiera.
- 🚨 Toda la familia es promesa de resultado económico explícita. Cuerpo usable,
  cierre a reescribir.

**ig-010** (`@victorherasreels`, 55 s, 24,2 com/1k y **160 likes/1k** — 4,6× la
mediana de HM) es otro registro entero: motivacional-místico, sin sketch. *"El
algoritmo no le muestra mis consejos a cualquiera; los muestra a personas que
están destinadas a algo mucho más grande en la vida."* Un solo reel, no alcanza
para concluir, pero es el mayor likes/1k del cerebro y merece un test.

### §6c — VHE-B/lifestyle: alcance sin CTA, 0,8 com/1k

ig-016 (Rolex para la madre, 392.156 v), ig-018 (entradas del Mundial, 367.883),
ig-027 (Ferrari vs amor, 243.650, **11 segundos**), ig-035 (Ferrari "alquilado",
192.181), ig-040 (Nochevieja, 185.867). Buen alcance, likes altos (46,1/1k),
**cero conversión** — ninguno pide nada. Sirven para marca personal, no para
captación. Los contenidos están en `historias.md` §4.

### §6d — Los dos reels de VHE-A que sí convirtieron: la campaña del sorteo

Son **ig-072 y ig-090, publicados con un día de diferencia** (2022-10-17 y
2022-10-18) y son **los únicos dos de los 22 que pasan de 2,5 com/1k**: 10,6 y
6,0, contra una mediana de corpus de 0,9. El tercero mejor es ig-053 con 2,3.

| Reel | Fecha | Views | com/1k | Qué hace distinto |
|---|---|---|---|---|
| **ig-072** | 2022-10-17 | 117.963 | **10,6** | el comentario **es** la moneda: cada uno vale puntos para un sorteo |
| **ig-090** | 2022-10-18 | 97.433 | **6,0** | escasez de lanzamiento + palabra clave + puntos para el mismo sorteo |

**ig-072 — comentario como moneda.** El hook es la promesa del premio y el cuerpo
explica la mecánica de puntos:

> "Este vídeo voy a regalar un iPhone 14 y una mentoría conmigo valorada en 1000 euros." (ig-072) ⚠️ cifras ASR; se locuta "**En** este vídeo"
> "He creado un juego dentro de Instagram." (ig-072)
> "por cada comentario que dejes en mis vídeos de esta semana vas a ganar 10 puntos, y si lo dejas en la 1º hora son 20 puntos" (ig-072) ⚠️ cifras ASR

**ig-090 — escasez de lanzamiento.** Es la escasez de §2b cuatro años antes de
que apareciera en HM, y acá está aplicada al cupo, no al entregable:

> "Esto fue lo que pasó cuando abrimos las plazas del máster en agosto, más de 850 personas queriendo entrar al mismo tiempo." (ig-090) ⚠️ cifras ASR
> "A lo mejor esta vez, en vez de durar las plazas 45 horas, duran 45 minutos." (ig-090) ⚠️ cifras ASR
> "Si quieres que te avisamos el 1º y además tener el mejor precio, déjame un comentario con la palabra máster y te mandamos la prescripción para que entres." (ig-090)

**Las tres advertencias, y son grandes:**

1. **Es una sola campaña, no dos datos.** Los dos reels son del mismo sorteo del
   iPhone 14 — ig-090 termina ofreciendo "100 puntos para el sorteo" de ig-072. El
   "8,3 com/1k" de la tabla de §6a **sale de un solo evento de dos días**, y
   tratarlo como una estructura repetible es el error que ya apareció en Gocho.
2. **Ese com/1k no es comparable con el de HM.** En HM un comentario ≈ una
   persona que entra al ManyChat. En ig-072 el comentario **se puntúa**, así que
   una misma persona podía comentar muchas veces para subir en el ranking: parte
   del 10,6 es la misma gente repitiendo. Es una tasa de participación en un
   sorteo, no una tasa de captación.
3. **El contraejemplo está adentro del propio corpus.** ig-046 (2023-04-27)
   también pide una palabra clave con entregable —*"déjame en comentarios la
   palabra, MasterC, te mandamos todo para que te preinscribas"* (ig-046)— y hace
   **1,3 com/1k**, ocho veces menos. La diferencia entre ig-046 y ig-090 no es
   pedir una palabra: es el premio y la escasez que van alrededor.

**Qué sí se lleva de acá a HM hoy:** la escasez de ig-090 está aplicada al
**cupo** ("45 horas", "200 personas apuntadas"), y la de HM está aplicada al
**archivo** ("antes de que lo borre", §2b). Nunca se probaron juntas. Es el test
más barato que sale de este archivo: un reel de HM con keyword-entregable +
escasez de cupo real.

---

## §7 — Lo que falta y hay que pedir

- **Comentarios reales, no la tasa.** Todo este archivo mide `comments/views`.
  No hay dato de **cuántos de esos comentarios entraron efectivamente al
  ManyChat** ni de **cuántos de esos DMs agendaron**. Un CTA con más comentarios
  no es necesariamente un CTA con más leads calificados: "coméntame tu nicho" da
  menos comentarios pero cada uno viene con la segmentación adentro. **Sin el
  dato de ManyChat por reel, el veredicto de §2 es sobre volumen, no sobre
  calidad de lead.**
- **Retención por reel.** No hay ni un dato de retención en el corpus, y él mismo
  dice que "lo único que importa es el tiempo de retención" (ig-022, ig-091). Los
  hooks se están evaluando por comentarios porque es lo único que hay.
- **Cuál es el entregable detrás de cada palabra clave.** CLASE, GUIÓN, LISTA,
  SISTEMA, CCN, 130, 5 — ¿son siete entregables distintos o el mismo con siete
  nombres? Si son el mismo, §2 dice que conviene nombrarlo por lo que es en cada
  reel. Si son distintos, hace falta el inventario.
- **La sigla del método.** ig-032 dice "PCN — los 10 problemas más comunes de tu
  nicho" y ig-054 dice "CCN — creencias comunes de tu nicho". El ASR no permite
  saber si son dos siglas del método o una mal transcripta. `voz.md` lo marca
  igual. **Preguntar antes de escribir cualquier pieza que use la sigla.**
- **La segunda sigla, la de guiones: falta una letra.** ig-045 —el reel que
  explica el método de guion, 167.968 views— dice *"Con el método de guiones
  CIRY"* (ig-045) y después desarrolla sólo tres letras: *"C, contexto"*,
  *"inclinación"*, *"R, retroceso"* (ig-045). El ASR escribe la I como "Y" y la
  cuarta letra no aparece nunca. **Sin la cuarta letra el método no se puede
  usar en una pieza**, y es el entregable detrás de la keyword GUIÓN, que es la
  segunda familia de CTA mejor medida (§2). Es el pedido más urgente de esta
  lista.
- **La campaña del sorteo (§6d): ¿se puede repetir y con qué presupuesto?** Los
  únicos dos reels de VHE-A que convirtieron son de un sorteo de un iPhone 14 con
  100 premios (ig-072, octubre 2022). No hay registro de qué costó, si se repitió,
  ni de si el ranking se llenó de gente comentando en loop. Antes de proponerlo
  como formato hace falta saber eso, porque el número que lo hace atractivo (10,6
  com/1k) puede ser en buena parte la misma persona comentando doce veces.
- **La escasez de cupo: ¿existe hoy?** ig-090 vende "las plazas se acabaron en 45
  horas". HM hoy usa escasez del **archivo** ("antes de que lo borre"), que es una
  escasez inventada por el guion. Si el producto actual tiene cupo real, la
  escasez de cupo es más fuerte y no está en uso. Si no lo tiene, no se escribe.
- **Views por fecha de corte.** El catálogo tiene una sola foto de views (cosecha
  2026-08-12). No se puede separar "este reel envejeció bien" de "este reel
  arrancó fuerte".
- **La campaña RETO: qué pasó.** 7,26 M de views en septiembre-2024 y el formato
  se abandonó. No hay registro de por qué. Si funcionó comercialmente es el
  activo más grande sin explotar del cerebro; si no funcionó, hay que saberlo
  antes de proponerlo.
- **`transcripto` del catálogo está desactualizado**: dice `no` en las 240 filas
  aunque 80 están transcriptas. No afecta a las métricas, pero engaña al elegir
  la próxima tanda a transcribir.
