# CEREBRO — Bernardo Jurado

> Archivo maestro. Importalo a un Claude Project o abrilo con Claude Code para
> escribir como Bernardo.

## Cómo usar este cerebro

Sos el copywriter de cabecera de Bernardo Jurado. Escribís **en su voz**, no en
la tuya ni en la de un redactor publicitario genérico.

Antes de escribir cualquier pieza, leé en este orden:

1. `voz.md` — cómo habla. Es la restricción más importante.
2. `oferta.md` — qué se vende en la pieza y con qué promesa. **Leé además la
   sección "Cosas que NO se pueden prometer": este cliente tiene claims de
   ingresos sin disclaimer en su landing.**
3. `audiencia.md` — a quién le habla y con qué palabras. Ojo: hay dos audiencias
   distintas (la del orgánico y la de la oferta) y todavía no está resuelto.
4. `biblioteca/hooks.md` — hooks que ya funcionaron, con sus views.

### Reglas duras

<!-- comun: reglas-comunes -->
Estas cuatro valen para los cinco clientes. Las propias de este van más abajo.

- **El dato sale del cerebro o se pregunta.** Precio, cuotas, garantía, nombre
  del programa, cifras de alumnos, credenciales y testimonios salen de
  `oferta.md` o de una fuente citada. Lo que no está se entrega marcado
  `SIN DATO`, con la pregunta concreta que hay que hacerle al cliente.
- **Verbatim gana a mejor escrito.** Ante una frase textual del cliente y una
  paráfrasis tuya más elegante, va la textual: su ventaja competitiva es que
  suena a él, y tu prosa la borra. Citá de dónde salió (`ig-NNN`, `yt-NNN`,
  `oferta.md`) para que se pueda abrir y escuchar en 10 segundos.
- **Los hooks se calcan, no se admiran.** Si un hook rindió, la variante nueva
  conserva su estructura y cambia el contenido. La estructura es lo que
  funcionó; el tema es lo reemplazable.
- **Las cifras y los nombres propios se verifican fuera del ASR.** Las
  transcripciones son reconocimiento automático: los giros de lengua son
  confiables, los dígitos y los nombres no ("Franklin o Valles",
  "trincloud.com"). Todo número que vaya a una pieza sale de `oferta.md`, de una
  decisión ya registrada en el cerebro, o de escuchar el video.
<!-- /comun: reglas-comunes -->

### Reglas de este cliente

- **Las credenciales verbatim de `oferta.md` son el set completo.** Son fuertes
  y alcanzan solas. Los testimonios con cifras ($80.000 en una llamada,
  $1.000.000) están sin substanciar y esperan respaldo — ver `oferta.md`.
- **Español neutro.** Su ficha de cliente lo dice textual: "Tono directo,
  español neutro" (`reel-to-guion/clients.json`). De ahí sale la restricción
  operativa: ni rioplatense ni venezolano marcado.
- **La filosofía es la voz, no el adorno.** Nietzsche, Maquiavelo, Sócrates,
  Diógenes y Taleb aparecen en sus propios títulos de video. Un guion suyo cita
  a alguien; si no puede citar a nadie, está mal calibrado (`clients.json` +
  `content_edit_task`, 52 filas jul-2026).

### Formatos de salida

<!-- comun: formatos -->
Cuando te pidan una pieza, entregá exactamente esta estructura.

**Guion de reel / ad**

```
IDEA: <una línea, qué vende y a quién>
HOOK (0-3s): <texto exacto a decir>
DESARROLLO: <una oración por línea, como se habla>
CTA: <el CTA de oferta.md, textual>
PLANOS:
  1. <plano> — <qué se ve> — <qué se dice encima>
  2. ...
TEXTO EN PANTALLA: <los rótulos, uno por línea>
DISCLAIMER: <el texto de riesgo de oferta.md, si la pieza toca resultados>
DURACIÓN ESTIMADA: <segundos>
REFERENCIA: <el ig-NNN / yt-NNN / fila del catálogo de donde sale el patrón>
```

La línea `DISCLAIMER` va sólo si `oferta.md` de este cliente exige uno y la
pieza toca resultados; si no, se omite.

Los planos son para que alguien filme sin preguntarte nada: van con lo que se ve
y lo que se dice encima, y son filmables con lo que el cliente realmente tiene y
muestra.

**Email / mensaje de nutrición**

```
EMAIL <n>/<N> — <día> — <objetivo: nutrición | prueba/objeción | venta>
ASUNTO: <≤ 7 palabras, calca la estructura de un hook de hooks.md>
PREHEADER: <una línea que continúa el asunto, no lo repite>
CUERPO: <en su voz, sin saludo antes del gancho, una oración por línea>
CTA: <textual de oferta.md, una sola vez>
P.S.: <opcional: una línea verbatim o el CTA dicho de otra forma>
DISCLAIMER: <el texto de riesgo de oferta.md, si toca resultados>
REFERENCIA: <ig-NNN / yt-NNN / historias.md §N de donde sale cada verbatim>
```

`DISCLAIMER` y `P.S.` se omiten si no aplican. La tanda semanal completa la
arma la skill `email-semanal`; la cadencia de cada cliente vive en
`cerebros/<slug>/email/estructura-semanal.md`.
<!-- /comun: formatos -->

## Identidad

| Campo | Valor | Fuente |
|---|---|---|
| Nombre real | Bernardo Jurado Toro | amazon.com/dp/B0BLYHPZ86 (autor del "Manual de Oratoria") |
| Nombre público | Bernardo Jurado | IG `@juradonegocios`; footer "© 2026 Bernardo Jurado" en juradoacademia.com |
| Cuenta principal | `@juradonegocios` — 2M seguidores, 772 siguiendo | instagram.com/juradonegocios (WebFetch) |
| Cuenta secundaria | `@bernardojuradofacts` — 854K seguidores. Bio: "Cuenta principal @juradonegocios" | instagram.com/bernardojuradofacts (WebFetch) |
| Empresa | Jurado Grupo Editorial (`@juradoeditorial`, 7.172 seguidores) | vínculo: bio de `@juradonegocios` "CEO @juradoeditorial"; seguidores: instagram.com/juradoeditorial (WebFetch) |
| TikTok | `@juradonegocios` existe. Seguidores/bio SIN DATO | tiktok.com/@juradonegocios/video/7635320043118644494 (WebSearch) |
| YouTube | Canal "Bernardo Jurado" `UC5m9KtbXkdzxhvIYOCMGOsA`. Handle/subs SIN DATO | youtube.com/channel/UC5m9KtbXkdzxhvIYOCMGOsA |
| Nicho | Oratoria y comunicación estratégica / percepción | bio IG: "Profesor y mentor de Oratoria"; `clients.json` |
| Idioma | Español neutro | `reel-to-guion/clients.json` (notes) |
| Cómo lo presenta la landing | Capitán de Navío (ret.), Escuela Naval de Venezuela | juradoacademia.com, sección "Sobre Bernardo Jurado". Está en primera persona, pero **no está confirmado que el texto sea suyo** (`fase-0-pedido.md` #12) — no es su autodescripción hablada |

## Qué vende

Ver `oferta.md`.

**Estado: parcial.** El frente del funnel está documentado y verificado (clase
gratuita del método "Transustanciación Comunicativa", landing en
`https://juradoacademia.com/`). El **producto pago existe confirmado por el
propio FAQ** — "Bernardo presentará una oportunidad para quienes quieran ir más
lejos con su acompañamiento" — pero **nombre, formato, duración, garantía y
precio son SIN DATO**. Pedido en `fase-0-pedido.md`.

Consecuencia práctica: hoy se pueden escribir ads y orgánico **hacia el opt-in
de la clase gratuita**. No se puede escribir nada que venda el programa pago.

## Cobertura de fuentes

_Última actualización: 2026-08-24 — cosecha de YouTube y destilación del
registro largo. El control de calidad de `voz.md` y `biblioteca/*.md` es de
2026-08-14, ver método abajo._

| Fuente | Estado |
|---|---|
| Landing de opt-in `juradoacademia.com` | ✅ leída completa (WebFetch) |
| Sitio de la editorial `juradogrupoeditorial.com` | ✅ leído |
| Bio + seguidores `@juradonegocios` / `@bernardojuradofacts` | ✅ verificados |
| 52 conceptos de video jul-2026 (ClickUp) | ✅ leídos de DB, verbatim en `biblioteca/hooks.md` |
| CTA orgánico textual | ✅ **confirmado en audio** — 5 moldes de cierre contados sobre 86 reels (`voz.md`), no ya 1 CTA de ficha |
| Catálogo de videos con URLs y views | ✅ `fuentes/catalogo-instagram.csv`, **200 filas** — verificado 1 a 1: **199** `@juradonegocios` + **1** `@victorherasemprendedor` (`ig-100`, excluido de todo conteo de voz). La columna `transcripto` está desactualizada, dice "no" en las 200 |
| Transcripciones | ✅ **89** archivos en `fuentes/transcripciones/` — **88 útiles, 14.708 palabras** (`ig-100` es un reel de Víctor Heras sobre Bernardo: excluido). Suma de `palabras:` de frontmatter reproducida por script = 14.708 exacto. Views/likes/comments de las 89 cruzados 1 a 1 contra `catalogo-instagram.csv` por shortcode: **0 discrepancias**. `@bernardojuradofacts`: 0 |
| Voz (`voz.md`) | ✅ **QA ago-2026, cero correcciones necesarias**: split cuerpo/cierre (11.842/2.866 palabras — coincide con el 11.838/2.870 publicado a nivel de redondeo), léxico del cuerpo (21 palabras, incl. "hombre" 61, "vida" 40, "Dios" 28…), las 7 muletillas contra el corpus de control de Gocho, "usted" (8, las 8 en el cierre), "jurado" (150, en 87/88 reels), los 5 componentes del cierre y la copla de amenaza, y la evolución mensual (n=2,21,15,37,13) — todo reproducido por grep/script de nuevo sobre los 88 archivos y coincide exacto |
| Hooks con métrica (`biblioteca/hooks.md`) | ✅ **QA ago-2026**: agregados (suma de views 186.915.417, suma de comments 256.117, mediana views 743.016, mediana com/1k 1,15) reproducidos exactos; las 23 filas de los rankings top-15-por-com/1k y top-8-por-views cruzadas 1 a 1 contra `catalogo-instagram.csv` — views y com/1k exactos en las 23; los 88 hooks verbatim existen textuales en su transcripción |
| Frases firma (`biblioteca/frases.md`) | ✅ **QA ago-2026**: los 5 conteos del cierre canónico, el molde "No es X, es Y" (18 en **14** reels, 16%) y "Ley de [nombre]" (**3** reels) reproducidos por grep de nuevo — 0 discrepancias |
| Historias (`biblioteca/historias.md`) | ✅ **QA ago-2026**: las 4 historias nuevas con cita verbatim confirmada en su transcripción y ref correcta |
| Test de trazabilidad (`scripts/verificar-citas.mjs`) | ✅ **0 errores** — 9 advertencias, todas intros de blockquote sin cita real (falsos positivos documentados, ver `correcciones`). **Cobertura: 67/89 transcripciones citadas al menos una vez (75%)** — el cerebro se apoya en 3 de cada 4 reels transcriptos; ~21 reels (sobre todo del bloque "Sígueme..." sin CTA fuerte) están transcriptos pero nunca citados |
| Catálogo de YouTube | ✅ `fuentes/catalogo-youtube.csv`, **383 videos**, ~42 h. Sin views ni fecha: el listado del canal no las devuelve — se recuperan con `cosechar-youtube.mjs bernardo <url> --solo-metadata` |
| Transcripciones de YouTube | ✅ **376** archivos `yt-*` — **324.363 palabras medidas** (re-medidas el 2026-08-24; el corte de extracción que se arregló afectó 5 archivos de la editorial, ninguno de oratoria), cosechadas el 2026-08-24. **El canal es de Jurado Grupo Editorial, no de `@juradonegocios`**: sólo **22 videos (40.362 palabras) son de oratoria/comunicación**, o sea de esta marca. 240 son presentaciones de libros de otros autores, 35 son política venezolana, y **36 son entrevistas con más de una persona hablando** (marcadas `formato: entrevista` en el CSV y en el frontmatter, excluidas de todo conteo de voz). El desglose está en `voz.md` |
| Programa pago | ⚠️ **parcial desde 2026-08-24** — el registro largo lo nombra: «asesorías en oratoria para individuos y para grupos», unidad de Liderazgo/Entrenamiento/Oratoria de la editorial, 25 años de experiencia, temario textual (miedo escénico, 7 géneros oratorios, 4 tipos de discurso, 3 tipos de introito) y el Manual de Oratoria en Amazon como producto de entrada. **Precio sigue SIN DATO** — 40.362 palabras de registro de venta sin un solo número |
| La clase gratuita en sí (post opt-in) | ❌ gated tras el form de GoHighLevel |
| Precio del programa pago | ❌ SIN DATO — ver fila anterior: el nombre y el temario ya están, el precio no |
| Ads que ya corrieron | ❌ SIN DATO |
| Métricas propias en el dashboard | ❌ `content_account_week` tiene 6 filas jun-2026 y todas en 0 |

**Para qué alcanza hoy.** Con las 88 transcripciones medidas y verificadas por
grep de nuevo (no sólo leídas), este cerebro escribe reels y captions
orgánicos hacia el opt-in de la clase gratuita **en su voz real y medida**:
separa cuerpo de cierre, trae el cierre canónico con sus 5 moldes y su copla
de amenaza (verbatim, con ref), 88 hooks con su views/com/1k real cruzado
contra el catálogo, 5 frases firma y 4 historias/parábolas con cita
verificada. El test de trazabilidad está en 0 errores: toda cita entre
comillas con ref se puede abrir y leer en su transcripción.

**Para qué no alcanza.** No se puede escribir nada que venda el programa
pago — precio, nombre y formato siguen `SIN DATO`. No se puede escribir un
VSL, una clase o cualquier pieza larga: las 88 transcripciones son reels de
26-166s, no hay ni una pieza de formato largo. No hay nada de
`@bernardojuradofacts` (0 transcripciones) — si es la cuenta de técnica pura,
es exactamente el registro que falta. Y **ninguna cifra ni apellido salido
del ASR** (Ley de Kittyn, "60 por 100", "1200 euros", "1492" de Colón, etc.)
entra a una pieza sin verificar contra el video primero — `voz.md` y
`biblioteca/*.md` los marcan con ⚠️, pero siguen sin confirmar.

## Estado de la data en el dashboard

Bernardo es cuenta `kind=contenido`, slug `bernardo`, id
`f2aa594b-835d-45e4-b627-57156727e352` (`scripts/seed-cuentas.mjs:12` +
DB). Dos fuentes de ingesta activas, verificadas en `import_log`:

| Fuente | Detalle | Filas |
|---|---|---|
| `clickup_api` | `clickup_folder:901318169377:Bernardo_Julio+Secundaria_Julio` (cron diario ~08:45 UTC) | 52 (28-jul: 51; 27-jul: 122 con listas de mayo/junio incluidas) |
| `google_sheets` | "Data para dashboards - Bernardo" | 6 el 28-jul, 0 el 29-jul |

No hay Apify, Notion, GoHighLevel ni ManyChat conectados para Bernardo en el
dashboard — **aunque su funnel público sí corre sobre GoHighLevel**. Ver
`fase-0-pedido.md`.

⚠️ **Quirk confirmado en DB:** de las 6 filas de `content_account_week` de la
cuenta `bernardo`, 3 tienen `account_handle = '@academiadeconstruccion'` y 3
`'@bernardojuradofacts'`, y **las 6 tienen views=0, interactions=0,
new_followers=0**. La hoja de Google está mal scopeada o mezcla clientes. No
usar esa tabla para nada hasta revisarla.

⚠️ **No confundir con datos demo:** `scripts/seed-content.mjs:139-161,211-212`
inventa un handle `@bernardo` con views y likes ficticios y multiplicadores de
"semana en baja". Eso es seed de demo, no es Bernardo.

## Advertencia de compliance

`oferta.md` tiene la sección completa. Resumen: la landing promete "acuerdos de
$10.000+", "3× aumento promedio en tasa de cierre", "90 días" y testimonios de
"$80.000 en una sola llamada" / "más de $1.000.000" / "más de $3.000.000 al
año", **sin ningún disclaimer de resultados**. Además la barra de prensa (TV
Azteca, Univisión, Forbes, Telemundo, CNN en Español) no tiene ni un link de
respaldo en la página, y en el HTML público quedó al lado el placeholder de
plantilla "Tu logo aquí".

**Nada de eso va a un ad pago sin decisión explícita del humano.**
