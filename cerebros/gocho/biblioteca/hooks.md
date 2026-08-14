# Hooks — Gocho

Dos cosas distintas viven en este archivo y **no hay que confundirlas**:

- **Caption + métricas** (§1 y §2): 193 reels de `@elgocho` con views, likes y
  comments reales. Completo y confiable. Sirve para saber **qué tema y qué CTA**
  funcionan.
- **Hook hablado** (§3): las primeras palabras que Gocho dice en cámara. Es lo
  que de verdad decide si el reel se ve. **Todavía vacío** — sale de las
  transcripciones.

El caption no es el hook. Un reel puede tener un caption flojo y un hook
brillante. Para escribir los primeros 3 segundos de un guion hace falta §3.

Datos al 2026-07-29. Fuente: `fuentes/catalogo.csv`.

---

## §1 — Lo más importante que dice el catálogo

**La cuenta viene cayendo fuerte hace 8 meses.** Medianas de views por mes:

| Mes | Posts | Mediana de views | Pico |
|---|---|---|---|
| 2025-05 | 8 | **340.445** | 3.274.382 |
| 2025-06 | 10 | 46.383 | 538.182 |
| 2025-07 | 7 | 64.461 | 271.251 |
| 2025-08 | 14 | 45.558 | 315.379 |
| 2025-09 | 14 | 64.739 | 1.292.173 |
| 2025-10 | 14 | 27.539 | 710.048 |
| 2025-11 | 13 | 22.714 | 101.784 |
| 2025-12 | 12 | 13.840 | 70.006 |
| 2026-01 | 14 | 17.165 | 162.145 |
| 2026-02 | 14 | 44.613 | **8.664.883** |
| 2026-03 | 14 | 18.671 | 1.768.247 |
| 2026-04 | 17 | 12.880 | 55.048 |
| 2026-05 | 14 | 7.863 | 605.055 |
| 2026-06 | 14 | 11.126 | 23.799 |
| 2026-07 | 14 | **7.666** | 171.097 |

De 340k a 7,7k de mediana. Dos advertencias honestas antes de usar este dato:

1. **May-2025 es el lanzamiento**, con reels de colaboración que traían audiencia
   prestada. No es una línea base sostenible.
2. **Los posts de julio tienen menos tiempo de acumular views.** Pero los de
   mayo-junio ya llevan 2 meses y siguen en 8–11k, así que la caída es real, no
   un efecto de recencia.

La cadencia, en cambio, no bajó: **14 posts por mes, clavados, desde
agosto-2025.** Se está publicando igual y rindiendo 5 veces menos. Eso es un
problema de creativo, no de volumen.

## §2 — Qué CTA rinde, medido

Mediana de views y comentarios por cada 1.000 views, por keyword de caption:

| Familia de caption | n | Mediana views | Comentarios/1k |
|---|---|---|---|
| Sin CTA en el caption | 10 | **443.169** | 0,5 |
| "Comenta **YO** y te revelo…" | 12 | 40.708 | **30,7** |
| "**Sígueme** y te enseño…" | 17 | 46.261 | 1,4 |
| "Comenta **PUEDO**…" | 91 | 24.097 | 7,1 |
| "Comenta **ESTRATEGIA**…" | 34 | 16.125 | 17,8 |
| "Comenta **CLASE**…" | 43 | 15.419 | 8,9 |

Lo que se lee acá:

- **"Comenta YO" es el CTA más eficiente de todos para generar comentarios**:
  30,7 por cada 1.000 views, 4 veces más que PUEDO. Y PUEDO se usó 91 veces
  contra 12 de YO. Está subexplotado. (Se usó sep–dic 2025 y se abandonó.)
- **"ESTRATEGIA" convierte a comentario mejor que "CLASE" y "PUEDO"** (17,8/1k)
  con menos alcance. Es palabra de intención más alta.
- **"Sígueme" trae views pero no comentarios** (1,4/1k). Sirve para crecer la
  cuenta, no para llenar el ManyChat. Son dos objetivos distintos y hoy están
  mezclados en la misma parrilla.
- Los 10 reels **sin CTA en el caption** son los de mayor alcance por lejos.
  **Ojo: está confundido con la fecha** — 7 de esos 10 son de may–jun 2025, el
  período de mayor alcance de toda la cuenta. No se puede concluir "quitar el CTA
  sube el alcance". Sí se puede concluir que **vale probarlo**, porque nunca se
  probó fuera de ese período.

### La fórmula que se está usando ahora es la que peor rinde

Desde el **2026-05-25** el caption por defecto es
**"Comenta la palabra X y te mando toda la información"** — 30 posts, mediana
**9.574 views**.

Los 12 peores posts de todo el catálogo son todos de may–jul 2026 y casi todos
usan esa fórmula:

| # | Views | Fecha | Caption |
|---|---|---|---|
| 193 | 3.123 | 2026-07-29 | Comenta la palabra CLASE y te mando toda la información |
| 192 | 4.990 | 2026-07-11 | Comenta la palabra PUEDO y te mando toda la información |
| 191 | 5.053 | 2026-07-27 | Comenta la palabra CLASE y te mando toda la información |
| 190 | 5.592 | 2026-07-23 | Comenta la palabra PUEDO y te mando toda la información |
| 189 | 5.814 | 2026-07-02 | Comenta la palabra PUEDO y te mando toda la información |
| 187 | 6.582 | 2026-05-16 | Si eres mayor de edad y quieres empezar desde 0 comenta |

La fórmula anterior, **"Comenta X si quieres empezar en trading desde 0"** (55
posts, jul-2025 → may-2026), tiene mediana **15.784** — 65% más. Y es la que
produjo el pico de 8,6M.

**El cambio de fórmula de mayo-2026 coincide con el piso histórico de la cuenta.**
No es prueba de causalidad, pero es la hipótesis más barata de testear y la
primera que hay que llevarle a Emilio.

Detalle aparte: "Si eres mayor de edad…" calca la pregunta 4 del survey. Filtrar
menores tiene sentido comercial, pero ese filtro puesto **en el caption** está
gastando alcance para hacer un trabajo que el survey ya hace gratis más abajo en
el funnel.

## §3 — Hooks hablados

**106 transcripciones de `@Gocholive`** (80 largos + 26 shorts), vía subtítulos
automáticos. Ya hay hooks hablados reales.

**Dos advertencias que hay que leer antes de usar esta sección:**

1. **Estos hooks son de YouTube, no de Instagram.** Sirven como *material* —
   estructura, palabras, ángulos — pero no como *evidencia de rendimiento en IG*.
2. **Los views de YouTube no miden nada acá.** El short más visto tiene **1.800
   views**; el reel más visto de IG tiene 8,66M. Su audiencia está en Instagram.
   Un hook de esta sección no viene avalado por métricas: viene avalado por ser
   suyo. La métrica está en §1 y §2.

### 3a — Aperturas de los videos largos de trading (yt-001 → yt-031)

El patrón es fijo: **enuncia el tema, promete demostrarlo, y recién ahí (a veces)
se presenta.** Ver `voz.md`.

| Hook verbatim | Estructura |
|---|---|
| "¿Por qué la mayoría fracasan el trading y demostrado por la ciencia? Vamos a ver." | pregunta + autoridad externa |
| "Esta es la estrategia de trading que seguiría si solo tuviera $100." | condicional de restricción |
| "Los únicos dos indicadores que tú necesitas para vivir del trading. ¿Cuántas veces tú has escuchado este tipo de videos?" | número cerrado + guiño al escepticismo |
| "Me hice millonario a mis 40 años y te voy a contar mi historia y cómo lo hice." | resultado + edad + promesa de historia |
| "Llevo 9 años en esto y si tuviera que empezar desde cero hoy, no haría nada de lo que la mayoría hace." | **el mejor de los 31.** Autoridad + reinicio + contraste |
| "Este mes cumplí 8 años que hago trading. De esos 8 años tengo siete siendo rentable." | credencial con el fracaso incluido. **Ojo: el número vigente es 9** — ver `voz.md` |
| "Si tú crees que necesitas $5.000 para empezar a hacer trading, déjame decirte algo: eso es completamente falso." | creencia + demolición |
| "Si estás a punto de dejar el trading, si sientes que lo has intentado todo, si estás cansado de perder dinero…" | triple "si" — enumeración de dolor |
| "La mayoría empieza a hacer trading y no tiene ni la menor idea de lo que está haciendo." | acusación a la mayoría |
| "Esta estrategia de trading es aburrida, pero te va a ayudar a retirar dinero de las empresas de fondeo." | **anti-hype:** admite el defecto primero |
| "Y si te dijera que puedes pasar tu evaluación de trading en tan solo 5 o 10 minutos, ¿me creyeras?" | "¿y si te dijera…?" |
| "Gocho, tengo meses y años haciendo trading, pero no logro resultado." | **pregunta del alumno en su voz** |
| "El mejor video de psicotrading que verás en tu vida. Este título lo he visto cientos de veces." | se burla de su propio título |
| "Hoy saqué $6.000 del mercado en una sola operación y te voy a explicar la lógica exacta." | resultado + promesa de mecanismo |

Cifras: **verificar contra el video antes de usarlas** — el ASR se come dígitos.
Los años de oficio ya están resueltos: **son 9**, ver `voz.md`.

### 3b — Los shorts: el pilar que nadie está usando

Los 26 shorts **no son de trading**. Son de 2023 y hablan de otra cosa:
inmigrante en Miami, delivery, Uber, el "qué dirán", ser proveedor, la
universidad, el miedo. Este es **Gocho antes de ser el Gocho del trading**, y es
el material más humano que tiene.

El más fuerte del lote, y probablemente el mejor activo de contenido sin explotar
de todo el cerebro (`yt-s001`, título "Comenta Sistema te envío la clase
gratuita"):

> "Si estuviera empezando de cero, esto es lo que haría para salir adelante. Lo
> primero que haría es activar mi cuenta delivery y empezaría con una bicicleta o
> una motico, así fuera prestada, porque la ventaja es que diariamente puedo
> retirar mi dinero y si gano $10 puedo retirarlo ese mismo día."

Eso es **exactamente el mismo argumento que vende el fondeo** — retirar plata
rápido, empezar con capital que no es tuyo — contado desde la bicicleta en vez de
desde la plataforma. Es el puente perfecto entre su historia y su oferta.

Otros hooks hablados de los shorts, textuales:

| Hook verbatim | Ángulo |
|---|---|
| "Al final, ¿usted cree que todos vamos a ser jefes?" | techo del empleo |
| "Cosas como estas que vas a ver a continuación son las que te generan una falsa expectativa… dice que ganan 2.000 dólares la semana. No, amigo: ganas 25 dólares por hora." | **desmonta la promesa falsa de otro** |
| "¿Te gusta lo que estás haciendo actualmente? Si te gusta, 20 puntos. Si no te gusta, estás jodido." | binario incómodo |
| "No te puede avergonzar lo que haces… ¿te da vergüenza empezar de cero?" | vergüenza |
| "¿Cuál es tu plan? ¿Cuánto tiempo tienes haciendo delivery? Bueno, tengo un año. Y no tienes un plan." | diálogo con el espectador |
| "Realmente, cada uno de nosotros nos debemos preguntar qué estamos haciendo: ¿construyendo o sobreviviendo?" | dicotomía de una palabra |
| "Yo todavía no entiendo a las personas que tienen la red social bloqueada." | opinión impopular |
| "Estos chicos jóvenes de 20, 30 años, cuando lleguen a los cuarenta van a decir: perdí mi vida." | proyección temporal |
| "Creemos que existe una manera de montar un negocio y nunca tener pérdidas. Jamás." | normaliza la pérdida |

**Ojo de registro:** en los shorts dice groserías (el ASR las censura como
`[ __ ]`) y usa venezolanismo pleno. Es el registro de live, no el de venta. Ver
`voz.md`.

### 3c — Lo que sigue faltando

- **El hook hablado de los reels de IG.** Es el único con métricas de verdad y
  sigue en 0. Se transcribe a mano en orden de views (`INTAKE.md`).
- **El VSL.**

Un patrón sólo pasa a ser regla si aparece en **3+ piezas** con buen
rendimiento **medido en IG**. Todo lo de §3 es material, no regla.

## §4 — Ángulos que ya rindieron, por tema

Sí se puede clasificar por tema con lo que hay. Los que superan 50k views y no
son sólo CTA:

| Ángulo | Ejemplos | Views |
|---|---|---|
| **Anti-vendehumo / desconfianza** | #13 "No te fíes de todos los que dicen hacer trading"; #20 "cuidado con los traders de 18 años" | 538k · 271k |
| **Anti-ostentación** | #47 "Nada de nuevas Jordans"; #67 "No me verás con ropa de gucci, pero si quieres saber cómo…"; #49 "no te dejes llevar por los lujos" | 52k · 36k · 50k+ |
| **Resultado en pantalla** | #3 "Resultados que hablan por sí solos"; #25 "Gané 50.000$ en 30 minutos"; "Apliqué mi estrategia y saqué 6.000$ del mercado en una sola…" | 2,99M · — |
| **Estilo de vida / libertad** | #2 "En esta cuenta explicaré exactamente cómo lograr este estilo de vida"; #68 "Si quieres trabajar desde cualquier lado, solo con una…" | 3,27M · 35k |
| **Diferenciarse del promedio** | #17 "Si estás buscando hacer algo distinto al común denominador" | 317k |
| **Historia personal / antes** | #145 "a mis 33 años hacía Uber y tenía una…" | — |
| **Superar una caída** | #11 "Cómo se supera una situación así" | 605k |

Los dos ángulos de mayor alcance absoluto (**estilo de vida** y **resultado en
pantalla**) son también los de **mayor riesgo de compliance**. Ver las 6 reglas
duras de `oferta.md` antes de escribir cualquiera de los dos: el resultado se
puede mostrar, la promesa implícita de que el espectador lo va a repetir no.

Y ojo con la contradicción: el ángulo anti-ostentación (#47, #67, #49) es
posicionamiento explícito del cliente. **Un ad con autos y relojes lo
contradice** — ver `audiencia.md`.
