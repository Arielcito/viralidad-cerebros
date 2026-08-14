# Pedido a Ramón / Iván — Fase 0

Esto es lo que el cerebro **no puede sacar de las páginas ni de los videos**. La
web de Academia de Construcción da la promesa, los módulos y los CTAs, pero **no
da precio ni garantía**, y los videos del embudo no se pueden transcribir sin
acceso a los archivos. Sin estos datos el cerebro puede escribir contenido
orgánico, pero no un ad de venta.

Copiable tal cual para mandar por WhatsApp:

---

Hola. Estoy armando el cerebro de contenido de Ramón (Academia de Construcción).
De la web ya saqué todo lo público: la promesa de $100K+ por proyecto, la
estructura de 12 meses, los 6 módulos, los CTAs y los testimonios. Me falta esto,
que no está en ninguna página:

**Oferta**
1. ¿Cuánto cuesta la Academia? (precio exacto y en qué moneda)
2. ¿Hay planes de pago o financiación? ¿Cuáles?
3. ¿Hay más de un producto o nivel, o es sólo la Academia de 12 meses?
4. ¿Hay garantía o política de reembolso? Si hay, ¿el texto exacto?

**Videos del embudo** (los necesito para escribir en la voz de Ramón)
5. Los 5 videos de la página de gracias — "Qué es exactamente
   ACADEMIADECONSTRUCCION.COM?", "Qué resultados son posibles y en cuánto
   tiempo?", "Quién es Lord Ramón?", "Qué pasa si no funciona para ti?" — ¿me
   pueden pasar los archivos o el link de descarga? Los players de la web no me
   dejan sacar el audio.
6. El video principal de academiadeconstruccion.com, igual.
7. ¿Tienen las transcripciones ya hechas de alguno? Si sí, con eso me alcanza.

**Instagram y contenido**
8. La bio dice "💬 Envíame la palabra" y se corta. ¿Cuál es la palabra exacta del
   DM?
9. ¿Qué otros imanes/recursos regalan además del "Plan de Construcción
   Personalizado"? (nombre de cada uno y qué keyword lo dispara)
10. ¿Hay carpeta de Drive con los reels publicados? En el ClickUp los conceptos
    tienen el nombre del archivo (IMG_4525, IMG_0380.MOV) — si tengo la carpeta,
    cruzo todo solo.
11. Confirmar: además de Instagram `@lordconstruye`, ¿usan TikTok y YouTube
    `@lordconstruye`? ¿Son las suyas? ¿Publican lo mismo o contenido distinto?

**Ads y compliance** — esto es lo que me bloquea para escribir
12. ¿Qué ads corrieron ya? Creativos + resultado, aunque sea "este funcionó, este
    no".
13. ¿Qué NO se puede prometer? En la web hay claims fuertes ($100K+ en la primera
    transacción, $500K+ en el segundo año, márgenes del 40% garantizados) y el
    único disclaimer que encontré es "Los resultados individuales pueden variar",
    y sólo en la landing del quiz. Antes de escribir un ad necesito saber: qué
    cifras están autorizadas textualmente, qué disclaimer va, y quién lo aprueba.
14. Las cifras de casas concretas de los guiones ("pagué 276.000 / 400.000 /
    700.000 por construir esta casa", "el banco me pagó 30k", "compré este
    terreno en $8k", "me ofrecieron 750k por una casa que me costó 400k"):
    ¿cuáles puede repetir Ramón en un ad pagado sin problema?

**Cosas que necesito confirmar porque no las pude verificar**
15. ¿Cómo quiere que lo nombremos: "Ramón Páez" (como está en Instagram) o "Lord
    Ramón" (como está en la web)?
16. Vi por ahí "programa #1 en EEUU", "co-fundador de USACredito" y "+2.900
    familias impactadas". No los pude confirmar en ninguna página. ¿Son datos
    usables?
17. La página academiadeconstruccion.com/survey da 404 pero está indexada en
    Google. ¿Existe una versión vigente de ese cuestionario de calificación?
18. Los links "Privacidad" y "Términos" del footer están rotos (404). Aviso
    porque con las promesas de ingresos que tiene la página, conviene arreglarlo.

**Dos bugs que encontré, de paso**
19. La landing lordconstruye.com/plan-personalizado tiene un párrafo pegado de
    otra plantilla, en español de Argentina y de otro negocio: "Atraés leads sin
    cualificar. No sabés qué estrategia te trae los compradores." No es de este
    cliente, habría que borrarlo.
20. En el dashboard las métricas de esta cuenta están cargadas con el handle
    `@academiadeconstruccion`, que es un perfil de 8 seguidores. La cuenta real es
    `@lordconstruye` (366K). Conviene corregir la etiqueta del import para que no
    se confunda.

---

## Estado

| # | Ítem | Respondido |
|---|---|---|
| 1-4 | Precio, planes de pago, productos, garantía | ☐ |
| 5-7 | Videos / transcripciones del embudo | ☐ |
| 8-11 | Keyword del DM, imanes, Drive, cuentas TikTok/YouTube | ☐ |
| 12-14 | Ads que corrieron + compliance + cifras autorizadas | ☐ |
| 15-18 | Nombre a usar, credenciales no verificadas, /survey, legales | ☐ |
| 19-20 | Bugs (copy pegado en la landing, handle mal en el import) | ☐ |

## Detalle técnico de cada hueco (para nosotros, no para el cliente)

| Hueco | Estado | Por qué está bloqueado | Desbloquea |
|---|---|---|---|
| Precio de la Academia | SIN DATO | no aparece en `/`, `/vsl`, `/ty-page`, `/plan-personalizado` ni el calendario; el embudo es llamada de admisión | ads de venta, emails de precio |
| Garantía / reembolso | SIN DATO | probablemente esté en el video 5 de `/ty-page`, no transcribible | manejo de objeción "¿y si no funciona?" |
| Transcripciones (0) | SIN DATO | players ConverteAI/VTurb en la web; sin URLs de reels en la DB | `voz.md` entero, `biblioteca/*` |
| URLs + views de reels | SIN DATO | `content_video` = 0 filas y sin columna de URL; cuenta fuera del pipeline Apify (`handle` = 0 filas) | `biblioteca/hooks.md` ordenado por rendimiento |
| Keyword del DM de IG | SIN DATO | bio truncada: "💬 Envíame la palabra"; `content_cta` = 0 filas | CTA de orgánico |
| Imanes / ranking de recursos | SIN DATO | `content_cta` = 0 filas | qué recurso se regala en cada pieza |
| Comentarios de la audiencia | SIN DATO | no hay comentarios en la DB | `audiencia.md` → "Dolores en palabras del cliente" |
| TikTok / YouTube `@lordconstruye` | SIN DATO | HTTP 200 pero contenido no legible sin browser; la web sólo linkea Instagram | saber si hay que adaptar formato por plataforma |
| Demografía de la audiencia | SIN DATO | sin insights de IG cargados | segmentación de ads |
| Objeciones en su voz | SIN DATO | se conocen los títulos de los videos de objeción, no las respuestas | guiones de manejo de objeción |
| Credenciales "#1 en EEUU" / USACredito / +2.900 familias | SIN DATO | sólo snippets de buscador, ninguna página legible | copy de autoridad |
| Métricas por semana | parcial | sólo 3 semanas de junio 2026, carga manual desde `academia.xlsx` (`scripts/load-real-data.mjs:1-17, 230-232`) | medir si el contenido nuevo mueve la aguja |
| Nombre público a usar | SIN DATO | "Ramón Páez" (IG) vs "Lord Ramón" (web) | firma de ads |
