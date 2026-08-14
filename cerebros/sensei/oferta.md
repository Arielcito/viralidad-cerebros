# Oferta — El Sensei / Instituto del Trading

> A diferencia de otros cerebros, acá el embudo **sí** está verificado: se leyeron
> las landings, el formulario y el sitio de la oferta paga. Lo que falta es el
> **precio** y el **VSL real**. Todo lo que no tiene fuente dice `SIN DATO` y está
> pedido en `fase-0-pedido.md`.

## Productos

| Producto | Qué es | Precio | Promesa (verbatim) | Para quién | Fuente |
|---|---|---|---|---|---|
| Clase en vivo gratis | Lead magnet. Clase en vivo de introducción al trading. Es el destino del link en bio de **algunos** handles: `/librosdelsensei`, `/clipsdelsensei` y `/habitosdelsensei` sirven **la misma página** (los tres responden 200 con el mismo md5 `aa42f93d…`) y los tres van al **mismo** survey `/survey-3389-9146`. **No hay una landing por handle** — ver "Destino de cada satélite" más abajo. | Gratis | "Aprende qué es el trading y cómo invertir en la bolsa con educación, estrategia y control" | Principiantes: la página aclara que es para quien nunca invirtió antes | https://institutodeltrading.com/librosdelsensei y https://institutodeltrading.com/clipsdelsensei |
| Instituto del Trading | Oferta paga. Programa/mentoría con **admisión por aplicación** ("aplicar a ser estudiante"). | **SIN DATO** | "Gana $2938/mes haciendo trading en 90 días" + "Sin tener experiencia", "Sin tener un gran capital", "Dedicando solo 2h al día" — **claim de altísimo riesgo, ver más abajo** | Mayores de 18 (lo pregunta el formulario), con presupuesto declarado | https://institutodeltrading.com/ y https://institutodeltrading.com/survey |
| Comunidad Wealthy Trades (Telegram) | Escuela en Teachable con grupo de Telegram gratis. Parece infra **legacy**: el catálogo de cursos está vacío. | SIN DATO — `/courses` responde literalmente "Sorry, this school has no available products" | "BIENVENIDOS A NUESTRA COMUNIDAD" + "Descubre mi historia y cómo hice para seguir adelante luego de haber perdido mas de US$18,000" | SIN DATO | https://wealthy-trades.teachable.com/ y https://wealthy-trades.teachable.com/courses |
| Oferta ligada a `@senseiprofe` | La cuenta a la que `@elsensei` deriva desde su bio. Nombres de highlights, verbatim: "Reto 1M$", "Reto 1000💰", "Indicador 📊", "Alumnos 💰", "Descuento", "Mindset 🧠", "Preguntas¿?", "Hawaii 🏝️", "Australia 🇦🇺". Qué se vende en cada uno: SIN DATO (no se abrió ninguno). | SIN DATO (el link de bio devuelve 403) | Bio verbatim: "Vivo en Miami 📍 Trabajo en el JP Morgan 🇺🇸 Aprende a invertir conmigo 👇🏼" | SIN DATO | https://www.instagram.com/senseiprofe/ |

### Ofertas históricas SIN VERIFICAR

"Academia del Sensei", "Proyecto 2.0", "Amigos del Sensei", "Manual de BIAS",
Rocket21 (cuentas fondeadas). Aparecen sólo en sitios de cursos pirateados y en
blogs críticos — **no se tomaron como oferta y no se mencionan en ninguna pieza**
hasta que el cliente confirme qué de eso sigue vendiéndose.

## Escalera de valor

Qué se vende primero, qué después, y con qué se hace upsell.

```
1. Clip de un handle satélite (~30 cuentas, IG/TT/YT)
2. Link en bio → institutodeltrading.com/<handle>
     · verificado que existe landing propia SÓLO en /librosdelsensei,
       /clipsdelsensei y /habitosdelsensei (misma página, mismo md5)
     · los otros handles probados caen en la home por catch-all
3a. Vía lead magnet: "RESERVAR MI LUGAR GRATIS" → /survey-3389-9146
     · formulario CORTO: nombre, teléfono, email + "¿con qué nivel de recursos
       te sentirías cómodo iniciando tu proceso de aprendizaje?"
       ("Más de $5,000" / "Entre $1,000 y $5,000" / "Hasta $1,000" / "No tengo capital")
     · NO tiene país, ni 18+, ni palabra clave
3b. Vía home: "APLICAR A SER ESTUDIANTE — HAZ CLICK AQUI" → /survey
     · formulario LARGO de 9 preguntas visibles (el de abajo)
4. Cierre humano por WhatsApp: "mi equipo" contacta si sos admitido
5. Instituto del Trading (paga) — ticket SIN DATO
```

Que el lead magnet y la venta directa manden a **dos formularios distintos** está
verificado (md5 distinto, campos distintos). Si son dos embudos separados o el
corto redirige al largo: **SIN DATO** (no se completó ninguno de los dos).

Upsell / backend después del paso 6: **SIN DATO**.

Fuentes: bio de https://www.instagram.com/librosdelsensei/ ("Cuenta secundaria de
@elsensei", link a `institutodeltrading.com/librosdelsensei`), las dos landings,
https://institutodeltrading.com/survey.

### El formulario de calificación (9 preguntas)

Importa porque define a quién se le habla y qué objeción hay que romper antes.

1. País (USA / España / México / Colombia / Otro)
2. Nombre
3. WhatsApp
4. Email
5. Motivación a 12 meses
6. Presupuesto: "Más de USD 3.000" / "USD 1.000-3.000" / "USD 300-1.000" / "USD 0-300"
7. Confirmación de 18+
8. Compromiso de tiempo y dinero a 6 meses
9. "Palabra secreta" que sólo conocen el aplicante y el director de admisiones

Copy verbatim del formulario: "Antes de ayudarte necesito saber un poco de ti" /
"Llena este formulario para aplicar al Instituto del Trading".

**Los tramos de presupuesto NO son el precio.** Son un filtro de calificación.
Usarlos como precio en una pieza sería inventar la oferta.

## VSLs

| VSL | Link | Producto que vende | Estado | Transcripto |
|---|---|---|---|---|
| Funnel de `@senseiprofe` | https://go.institutodeltrading.com/4ca4eec2 | SIN DATO | ❌ HTTP 403 a WebFetch. **Es probablemente el VSL real.** Hay que abrirlo a mano. | no |
| Home de la oferta | https://institutodeltrading.com/ | Instituto del Trading | ✅ accesible. **No detecté video embebido.** | n/a |
| Landing de clase gratis | https://institutodeltrading.com/librosdelsensei | Clase en vivo gratis | ✅ accesible. El fetch reporta "No video content is present on this page; only images and text" | n/a |
| Landing de clase gratis (variante) | https://institutodeltrading.com/clipsdelsensei | Clase en vivo gratis | ✅ accesible. Mismo copy, CTA a `/survey-3389-9146` | n/a |

**Conclusión incómoda:** no hay ni un VSL leído. El argumento de venta completo
(promesa, objeciones, precio, garantía) está en un link que devuelve 403. Eso es
lo primero a conseguir — un VSL vale más que 20 reels para escribir ads.

## CTAs oficiales

El texto **exacto** de cada CTA según la etapa. Se usan verbatim, nunca
reescritos.

| Etapa | CTA textual | Fuente |
|---|---|---|
| Orgánico / crecimiento | SIN DATO (no hay caption ni cierre de reel transcripto) | — |
| Lead magnet (landing) | **"RESERVAR MI LUGAR GRATIS"** | https://institutodeltrading.com/librosdelsensei, /clipsdelsensei |
| Venta / aplicación | **"APLICAR A SER ESTUDIANTE — HAZ CLICK AQUI"** → `/survey` | https://institutodeltrading.com/ |
| Bio de `@senseiprofe` | "Aprende a invertir conmigo 👇🏼" | https://www.instagram.com/senseiprofe/ |
| Comunidad legacy (Teachable) | "GRUPO GRATIS" / "ENTRA A NUESTRO TELEGRAM" / "ENTRA A NUESTRO TELEGRAM GRATIS" | https://wealthy-trades.teachable.com/ |

**Falta el CTA de los reels**, que es el que más se usa. En el cerebro de Gocho
ese CTA es un comentario-gatillo ("Comenta PUEDO"); acá no hay evidencia de nada
equivalente, así que no se asume. Pedido en `fase-0-pedido.md`.

Destino de cada satélite: `institutodeltrading.com/<handle>`. Verificado para
`librosdelsensei` y `clipsdelsensei`; el resto de los ~30 handles queda por
probar (vale hacerlo, mapea el embudo completo).

## Bullets de la landing (verbatim, para reusar como ángulos)

De https://institutodeltrading.com/librosdelsensei y /clipsdelsensei:

- "Qué es el trading"
- "Generar dinero"
- "Control emocional"
- "Educación es poder"
- "Las decisiones se vuelven más claras"
- "El proceso se siente más simple"
- "El riesgo deja de sentirse como una apuesta"

Estos siete son el material más seguro que hay hoy: son de la landing de la clase
gratis, que **sí** lleva disclaimer de riesgo, y ninguno promete un monto.

## Objeciones y respuestas

Las objeciones reales de sus leads y cómo las responde él (no cómo las
responderías vos).

**SIN DATO.** Lo único inferible del copy son las objeciones que la oferta *dice*
neutralizar — no cómo las responde él:

| Objeción implícita | Dónde aparece |
|---|---|
| "No tengo experiencia" | "Sin tener experiencia" (https://institutodeltrading.com/) |
| "No tengo capital" | "Sin tener un gran capital" (idem) |
| "No tengo tiempo" | "Dedicando solo 2h al día" (idem) |
| "Es una apuesta / es un casino" | "El riesgo deja de sentirse como una apuesta" (landing de clase gratis) |
| "Nunca invertí antes" | la landing aclara que la clase es "incluso si nunca invertiste antes" |

Las respuestas en su voz salen de las transcripciones. Hoy no existen.

## Prueba social que está publicada (NO usarla sin aprobación)

Está listada acá para que quede claro **qué NO reciclar**, no como material.

De https://institutodeltrading.com/: testimonios con nombre y edad (Alan 19,
Dylan 17, Angie 31, David 24, Julio, Gaby 20 de Colombia) y montos de retiro
declarados (Brian $13.500, Kevin Romeo $24.000, Hassan $38.000, Agustin $40.000,
Eduardo $50.000, más casos de $280.000 y $585.000). Contadores en vivo:
"Depósitos Hoy: 98", "Estudiantes Activos: 100", y "Los estudiantes del Sensei han
retirado" — que **mostraba $0 al momento del fetch**, contradiciendo los
testimonios de la misma página.

## Cosas que NO se pueden prometer

> **Este cliente es el de mayor riesgo de compliance de la cartera.** Trading es
> nicho regulado y hay antecedentes públicos de acusaciones. Esta sección es una
> **decisión pendiente de un humano** (Víctor / Ivan / el cliente) y hasta que
> esté firmada **no se publica ningún ad de El Sensei**.

### Lo que está publicado y es riesgoso

1. **Promesa de ingreso cuantificada, sin disclaimer.** "Gana $2938/mes haciendo
   trading en 90 días" en https://institutodeltrading.com/ — con "sin
   experiencia", "sin gran capital", "2h al día". Esa home **no** lleva
   disclaimer de riesgo.
2. **Testimonios de retiros de hasta $585.000**, con menores/casi-menores
   identificados por edad (Dylan 17, Alan 19, Gaby 20).
3. **Contradicción interna verificable:** el contador de retiros marcaba $0
   mientras los testimonios afirman seis cifras. Cualquiera que audite un ad lo
   ve en 30 segundos.
4. **Historial público de acusaciones** (terceros, no probado judicialmente en lo
   que se leyó, pero indexado y trivial de encontrar):
   - https://www.elheraldo.hn/fotogalerias/mundo/sebastian-rodriguez-sensei-trading-tildan-estafador-fbi-guru-financiero-OG27308701
     — lo tilda de "estafador", reporta testimonios que "tras una investigación,
     se comprobó que eran falsos o exagerados", promoción de brokers no
     regulados, la plataforma "Rocket21" supuestamente diseñada para que los
     traders fallaran, y rumores de investigación del FBI a los que él respondió
     en IG: "Vamo a ver si me encuentra el FBI aquí".
   - https://experienciatopstep.com/vida-de-trader/el-sensei-del-trading-estafador/
     — broker no regulado "Athens Market", expulsión de traders rentables de
     Rocket21, lujo como marketing, vínculo con el grupo "Miami Boys", publinotas
     en Forbes Colombia. El sitio marca todo eso como opinión/análisis.
5. **SIN CONFIRMAR:** un resultado de búsqueda (no fetcheado) menciona que
   Instagram bloqueó una cuenta "Sensei" en EE.UU. por un pedido legal de
   restricción de contenido. Chequear antes de pautar.

### Reglas operativas (mínimo, hasta que haya política escrita)

Ningún guion ni ad de este cliente puede:

- **(a)** prometer un monto concreto ni un plazo concreto — nada de "$2938/mes",
  nada de "en 90 días";
- **(b)** reciclar los testimonios de retiro del sitio, ni cifras de retiros de
  alumnos, ni edades de alumnos menores de edad;
- **(c)** omitir el disclaimer de riesgo;
- **(d)** afirmar o insinuar rentabilidad garantizada, "ingreso pasivo asegurado"
  o similar;
- **(e)** nombrar brokers o plataformas (Rocket21, Athens Market) ni presentarlas
  como reguladas.

### Disclaimer que ya usa la casa (verbatim, en inglés)

Existe **sólo en las landings por handle**
(https://institutodeltrading.com/librosdelsensei y /clipsdelsensei), como sección
"Risk & Earnings Disclaimer":

> "Wealthy Trades LLC provides educational content only… assumes no liability for
> any losses or damages resulting from the use of the information provided"
>
> "Trading and investing involve significant risk and are not suitable for
> everyone. You may lose some or all of your capital"

Más la aclaración de que no es asesoría financiera ni legal y que el rendimiento
pasado no garantiza resultados. Footer: "© 2026 Wealthy Trades LLC. All rights
reserved."

**Falta:** la versión en español, corta, para meter en pantalla en un reel o en
el copy de un ad. Hoy **no existe** → SIN DATO, pedido en `fase-0-pedido.md`.

### Estado de la decisión

| Ítem | Decidido |
|---|---|
| Lista de claims aprobados por escrito | ☐ |
| Texto exacto del disclaimer en español, por pieza | ☐ |
| ¿Se pueden usar testimonios? ¿cuáles, con qué texto? | ☐ |
| ¿Se corrige o se retira el claim "$2938/mes" de la home? | ☐ |
| Revisión legal (o al menos aprobación explícita del cliente) | ☐ |
