# Hooks — Gocho

Dos cosas distintas viven en este archivo y **no hay que confundirlas**:

- **Caption + métricas** (§1 y §2): **199 posts de `@elgocho`** con views, likes
  y comments reales. Completo y confiable. Sirve para saber **qué tema y qué
  CTA** funcionan.
- **Hook hablado** (§3): las primeras palabras que Gocho dice en cámara. Es lo
  que de verdad decide si el reel se ve. **Ya no está vacío**: §3a/§3b salen de
  YouTube (sin métrica útil) y **§3c sale de 90 reels de IG transcriptos, con
  views y comentarios reales**.

El caption no es el hook. Un reel puede tener un caption flojo y un hook
brillante. Para escribir los primeros 3 segundos de un guion hace falta §3.

**Datos al 2026-08-14. Fuente: `fuentes/catalogo-instagram.csv`** — 200 filas,
199 de `@elgocho` y 1 de `@nayoescobar`, del 2025-05-23 al 2026-08-12.

> **Ojo con las referencias `#N` viejas.** Este archivo (y `audiencia.md`) citaba
> reels por el número de fila de `fuentes/catalogo.csv`, que es una foto anterior
> del mismo catálogo de IG con **otra numeración**. Hoy `#20` no es el reel de
> los traders de 18 años sino otro. **Toda referencia de acá en adelante va por
> `ig-NNN` cuando el reel está transcripto y por shortcode/fecha cuando no.**

---

## §1 — Lo más importante que dice el catálogo

**La cuenta viene cayendo fuerte hace 8 meses.** Medianas de views por mes
(199 posts de `@elgocho`, re-contadas 2026-08-14):

| Mes | Posts | Mediana de views | Pico |
|---|---|---|---|
| 2025-05 | 7 | **317.175** | 3.275.151 |
| 2025-06 | 10 | 46.385 | 538.208 |
| 2025-07 | 7 | 64.465 | 271.262 |
| 2025-08 | 15 | 45.714 | 315.383 |
| 2025-09 | 14 | 64.742 | 1.292.271 |
| 2025-10 | 14 | 27.540 | 710.088 |
| 2025-11 | 13 | 22.715 | 101.800 |
| 2025-12 | 12 | 13.843 | 70.013 |
| 2026-01 | 14 | 17.168 | 162.154 |
| 2026-02 | 14 | 44.626 | **9.085.136** |
| 2026-03 | 14 | 18.679 | 1.785.689 |
| 2026-04 | 17 | 12.895 | 55.075 |
| 2026-05 | 13 | 7.884 | 25.998 |
| 2026-06 | 14 | 11.168 | 23.867 |
| 2026-07 | 15 | **7.175** | 242.415 |
| 2026-08 | 6 | 7.818 | 33.646 |

De 317k a 7,2k de mediana. Dos advertencias honestas antes de usar este dato:

1. **May-2025 es el lanzamiento**, con reels de colaboración que traían audiencia
   prestada. No es una línea base sostenible.
2. **Los posts de agosto tienen menos tiempo de acumular views.** Pero los de
   mayo-junio ya llevan meses y siguen en 8–11k, así que la caída es real, no un
   efecto de recencia.

La cadencia, en cambio, no bajó: **13–17 posts por mes desde agosto-2025.** Se
está publicando igual y rindiendo 5 veces menos. Eso es un problema de creativo,
no de volumen.

## §2 — Qué CTA rinde, medido

**Método, porque cambia la conclusión.** Cada post se asigna a **una sola**
familia, por la primera keyword que aparece en el caption. Se dan las dos
métricas de comentarios: la **mediana** de com/1k (cómo rinde el post típico) y
el **agregado** (total de comentarios ÷ total de views de la familia). Cuando
divergen, manda la mediana — el agregado lo puede mover un solo reel viral.

| Familia de caption | n | Mediana views | Com/1k mediana | Com/1k agregado |
|---|---|---|---|---|
| Sin CTA en el caption | 4 | **450.975** | 0,6 | 0,3 |
| "Comenta **YO**…" | 11 | 43.488 | **18,4** | **30,8** |
| "**Sígueme**…" | 24 | 46.190 | 0,5 | 0,9 |
| "Comenta **PUEDO**…" | 92 | 24.353 | 7,7 | 7,1 |
| "Comenta **CLASE**…" | 31 | 11.716 | 4,0 | 5,7 |
| "Comenta **ESTRATEGIA**…" | 23 | 13.414 | 2,9 | 1,7 |
| "Comenta **NASDAQ**…" | 13 | 11.183 | 3,4 | 4,3 |

Lo que se lee acá:

- **"Comenta YO" es el CTA más eficiente de todos para generar comentarios**:
  18,4 com/1k de mediana, 2,4× PUEDO, y con **más** alcance que PUEDO (43,5k vs
  24,4k). Se usó 11 veces contra 92 de PUEDO y se abandonó. Está subexplotado y
  es la prueba más barata que hay para correr.
- **"ESTRATEGIA" NO es la palabra que mejor convierte** — la versión anterior de
  esta tabla decía que sí (17,8/1k) y era un artefacto de método: ese número es
  el agregado de la familia, y **el 74 % de sus comentarios vienen de un solo
  reel**, `ig-005` (1,29M views, 36.787 comentarios). Sacando ese reel,
  ESTRATEGIA es la familia que **peor** convierte de todas las de "comenta":
  2,9 com/1k de mediana, contra 7,7 de PUEDO. **No cambiar la parrilla a
  ESTRATEGIA por este dato.**
- **"Sígueme" trae views pero no comentarios** (0,5/1k). Sirve para crecer la
  cuenta, no para llenar el ManyChat. Son dos objetivos distintos y hoy están
  mezclados en la misma parrilla.
- Los 4 posts **sin CTA en el caption** son los de mayor alcance por lejos.
  **Ojo: está confundido con la fecha** — 3 de esos 4 son de may–jun 2025, el
  período de mayor alcance de toda la cuenta. No se puede concluir "quitar el CTA
  sube el alcance". Sí se puede concluir que **vale probarlo**, porque casi nunca
  se probó fuera de ese período.

### La fórmula que se está usando ahora es la que peor rinde

Desde el **2026-04-26** el caption por defecto es
**"Comenta la palabra X y te mando toda la información"** — 48 posts, mediana
**9.466 views**.

Los peores posts de todo el catálogo son de may-2026 en adelante y casi todos
usan esa fórmula:

| Fecha | Views | Caption |
|---|---|---|
| 2026-08-08 | 3.636 | Sigueme aqui 👇 |
| 2026-08-12 | 4.810 | Comenta la palabra CLASE y te mando toda la información |
| 2026-07-11 | 5.123 | Comenta la palabra PUEDO y te mando toda la información |
| 2026-07-29 | 5.497 | Comenta la palabra CLASE y te mando toda la información |
| 2026-07-02 | 5.916 | Comenta la palabra PUEDO y te mando toda la información |
| 2026-07-09 | 5.942 | Comenta la palabra PUEDO y te mando toda la información |
| 2026-05-16 | 6.597 | Si eres mayor de edad y quieres empezar desde 0 comenta la palabra NASDAQ |

La fórmula anterior, **"…si quieres empezar en trading desde 0"** (54 posts,
2025-07-31 → 2026-05-23), tiene mediana **15.540** — 64 % más. Y es la que
produjo el pico de 9,1M.

**El cambio de fórmula de abril-2026 coincide con el piso histórico de la cuenta.**
No es prueba de causalidad, pero es la hipótesis más barata de testear y la
primera que hay que llevarle a Emilio.

Detalle aparte: "Si eres mayor de edad…" (`ig-001` lo dice hablado; en caption
aparece en 13 reels de abr/may-2026) calca la pregunta 4 del survey. Filtrar
menores tiene sentido comercial, pero ese filtro puesto **en el caption** está
gastando alcance para hacer un trabajo que el survey ya hace gratis más abajo en
el funnel.

## §3 — Hooks hablados

**106 transcripciones de `@Gocholive`** (80 largos + 26 shorts), vía subtítulos
automáticos. Ya hay hooks hablados reales.

**Dos advertencias que hay que leer antes de usar §3a y §3b:**

1. **Esos hooks son de YouTube, no de Instagram.** Sirven como *material* —
   estructura, palabras, ángulos — pero no como *evidencia de rendimiento en IG*.
2. **Los views de YouTube no miden nada acá.** El short más visto tiene **1.800
   views**; el reel más visto de IG tiene 9,09M. Su audiencia está en Instagram.
   Un hook de §3a/§3b no viene avalado por métricas: viene avalado por ser suyo.

**§3c es la excepción y por eso es la sección que hay que usar primero:** son
hooks hablados **de Instagram**, con views y comentarios de la API.

### 3a — Aperturas de los videos largos de trading (yt-001 → yt-031)

El patrón es fijo: **enuncia el tema, promete demostrarlo, y recién ahí (a veces)
se presenta.** Ver `voz.md`.

| Hook verbatim | Estructura |
|---|---|
| "¿Por qué la mayoría fracasan el trading y demostrado por la ciencia? Vamos a ver." (`yt-001`) | pregunta + autoridad externa |
| "Esta es la estrategia de trading que seguiría si solo tuviera $100." (`yt-002`) | condicional de restricción |
| "Los únicos dos indicadores que tú necesitas para vivir del trading. ¿Cuántas veces tú has escuchado este tipo de videos?" (`yt-003`) | número cerrado + guiño al escepticismo |
| "Me hice millonario a mis 40 años y te voy a contar mi historia y cómo lo hice." (`yt-004`) | resultado + edad + promesa de historia |
| "Llevo 9 años en esto y si tuviera que empezar desde cero hoy, no haría nada de lo que la mayoría hace." (`yt-020`) | **el mejor de los 31.** Autoridad + reinicio + contraste |
| "Este mes cumplí 8 años que hago trading. De esos 8 años tengo siete siendo rentable." (`yt-014`) | credencial con el fracaso incluido. **Ojo: el número vigente es 9** — ver `voz.md` |
| "Si tú crees que necesitas $5.000 para empezar a hacer trading, déjame decirte algo: eso es completamente falso." (`yt-015`) | creencia + demolición |
| "Si estás a punto de dejar el trading, si sientes que lo has intentado todo, si estás cansado de perder dinero…" (`yt-016`) | triple "si" — enumeración de dolor |
| "La mayoría empieza a hacer trading y no tiene ni la menor idea de lo que está haciendo." (`yt-017`) | acusación a la mayoría |
| "Esta estrategia de trading es aburrida, pero te va a ayudar a retirar dinero de las empresas de fondeo." (`yt-018` — el ASR escribió "de tren" por "de trading") | **anti-hype:** admite el defecto primero |
| "Y si te dijera que puedes pasar tu evaluación de trading en tan solo 5 o 10 minutos, ¿me creyeras?" (`yt-021` — el ASR escribió "de train") | "¿y si te dijera…?" |
| "Gocho, tengo meses y años haciendo trading, pero no logro resultado." (`yt-027`) | **pregunta del alumno en su voz** |
| "El mejor video de psicotrading que verás en tu vida. Este título lo he visto cientos de veces." (`yt-013`) | se burla de su propio título |
| "Hoy saqué $6.000 del mercado en una sola operación y te voy a explicar la lógica exacta." (`yt-024`) | resultado + promesa de mecanismo |

Cifras: **verificar contra el video antes de usarlas** — el ASR se come dígitos.
Los años de oficio están decididos en **9** (decisión de Ariel), pero en los 90
reels de IG dice "8 años" 13 veces contra 2 de "9", y sigue diciendo "más de 8"
en 2026 — ver `voz.md` §"El tercer registro" antes de fijarlo en campaña.

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
| "Al final, ¿usted cree que todos vamos a ser jefes?" (`yt-s004`) | techo del empleo |
| "Cosas como estas que vas a ver a continuación son las que te generan una falsa expectativa… dice que ganan 2.000 dólares la semana. No, amigo: ganas 25 dólares por hora." (`yt-s006` — **las dos cifras son ASR y son de un tercero, no suyas: SIN VERIFICAR, no usar en pieza**) | **desmonta la promesa falsa de otro** |
| "¿Te gusta lo que estás haciendo actualmente? Si te gusta, 20 puntos. Si no te gusta, estás jodido." (`yt-s005`) | binario incómodo |
| "No te puede avergonzar lo que haces… ¿te da vergüenza empezar de cero?" (`yt-s013`) | vergüenza |
| "¿Cuál es tu plan? ¿Cuánto tiempo tienes haciendo delivery? Bueno, tengo un año. Y no tienes un plan." (`yt-051`, un live — no es un short) | diálogo con el espectador |
| "Realmente, cada uno de nosotros nos debemos preguntar qué estamos haciendo: ¿construyendo o sobreviviendo?" (`yt-s018`) | dicotomía de una palabra |
| "Yo todavía no entiendo a las personas que tienen la red social bloqueada." (`yt-047`, un live) | opinión impopular |
| "Estos chicos jóvenes de 20, 30 años, cuando llegan los cuarenta años van a decir: coñísimo de la madre, qué perdí mi vida." (`yt-s025` — así lo dice, con la grosería; la versión limpia de antes no era textual) | proyección temporal |
| "Creemos que existe una manera de montar un negocio y nunca tener pérdidas. Jamás." (`yt-051`, un live) | normaliza la pérdida |

**Ojo de registro:** en los shorts dice groserías (el ASR las censura como
`[ __ ]`) y usa venezolanismo pleno. Es el registro de live, no el de venta. Ver
`voz.md`.

### 3c — Los hooks hablados de IG, con métrica dura

**90 reels de `@elgocho` transcriptos con Deepgram (2025-05-23 → 2026-08-04),
18.110 palabras.** Este es el único bloque de hooks hablados **avalado por
métricas reales**: views y comentarios salen de la API, no del ASR. El registro
completo está medido en `voz.md` §"El tercer registro".

Cómo leer la tabla: **`com/1k` = comentarios cada 1.000 views**. Es el proxy de
llenado de ManyChat. Views manda alcance; com/1k manda conversación. Los dos
reels más vistos del corpus están entre los peores en com/1k — ver §2.

**Los que más convierten a comentario** (mediana de los 90 transcriptos,
re-calculada 2026-08-14: **7,0 com/1k**):

| # | Hook hablado, verbatim | Views | com/1k | Formato |
|---|---|---|---|---|
| ig-028 | "**45 segundos para enseñarme a ganar 3000 dólares al mes.** — ¿A partir de cuándo? — Ya." (cifra ASR) | 111.299 | **41,5** | reto contrarreloj |
| ig-007 | "**Perdona, perdona, ¿cuánto cuesta tu outfit?** — ¿Lo que llevo puesto? — Sí, todo." | 710.088 | **41,0** | entrevista de calle |
| ig-034 | "Perdona, perdona. **¿A qué te dedicas?** — Hago trading. — **Ah, bueno, otro trader más estafador.**" | 70.581 | **38,5** | objeción frontal |
| ig-030 | "**La gente no me cree que aunque manejo un Mercedes viejito**, en mis meses bueno gano 100000 dólares al mes, y en mis meses malos, 11000 dólares." (cifras ASR) | 98.935 | 35,2 | anti-ostentación |
| ig-064 | "**Papá, ¿cómo vas a pagar la renta este mes si llevas todo el mes jugando a eso?**" | 37.907 | 30,5 | diálogo padre–hija |
| ig-056 | "**El trading es una estafa, y te lo digo por experiencia propia.** Llevo 8 años en esto, y al igual que tú, pensé cuando inicié que con un par de clics al día iba a ganar más que en un mes de trabajo." | 45.714 | 30,3 | confesión |
| ig-005 | "**Papá, ya estoy lista.** — ¿Lista para qué? — **Para comenzar a hacer trading.**" | 1.292.271 | 28,5 | diálogo padre–hija |
| ig-023 | "**[¿A] qué te dedicas?** — Hago trading. — ¿Y cuánto van a ser el último mes?" (el ASR se comió el arranque) | 195.173 | 25,9 | entrevista de calle |
| ig-038 | "**[¿Cuánto] necesito para empezar en trading? ¿Como 3000 dólares?** — No vale, mucho menos. — ¿1000? — Mucho [menos]." (arranque y cifras ASR) | 64.465 | 24,6 | objeción de precio |
| ig-022 | "**¿Me compras el nuevo iPhone 17, que todos mis amigos lo tienen?** — No." | 213.117 | 24,3 | diálogo padre–hija |
| ig-019 | "**Papá, mira esta foto. Este chico dice que hace trading y se compró en Lamborghini.**" | 271.262 | 23,4 | anti-vendehumo |
| ig-077 | "**¿Qué tipo de trading es mejor? Según tu personalidad.**" | 28.325 | 23,5 | clasificación |

**Los de más alcance** (y por qué no alcanza con mirar views):

| # | Hook hablado, verbatim | Views | com/1k |
|---|---|---|---|
| ig-001 | "**Papá, hoy no quiero ir al colegio.** — Está bien, Camin, no vayas." | 9.085.136 | 1,0 |
| ig-002 | "**Papá, ¿me da dinero para nuevo iPhone?**" | 3.275.151 | 0,7 |
| ig-003 | "**Babona, ¿puedes el carro para salir con mis amigas?** — Sí, sí, tranquilo, agárralo." (ASR roto; la versión limpia del mismo guion está en ig-017: "¿Papá, me puedes dar el carro para salir con mis amigas?") | 2.989.466 | **0,1** |
| ig-004 | "**Pam, me dieron los grados, saqué un 5 en historia, pero en [física] saqué un 10.** — ¿Y tú pensaste que te iba a regañar por eso?" | 1.785.689 | 0,8 |
| ig-006 | "**Papá, ¿puedo tener dinero para el nuevo iPhone?** — Claro que sí, hija, ya va." | 1.175.711 | 19,7 |

`ig-003` tiene **8× más views que `ig-034` y 385× menos comentarios por mil**.
Si el objetivo es llenar el ManyChat, el ranking de arriba manda sobre este.

**Lo que la métrica dice del hook hablado, contado sobre los 90:**

1. **Pedir el comentario en voz alta multiplica ×20.** 68 reels dicen "comenta
   la palabra X" y dan **10,2 com/1k**; **21** reels dicen sólo "sígueme /
   siguiéndome en esta cuenta" y dan **0,5** — con views medianas casi idénticas
   (48,1k vs 51,1k). **Un solo reel de los 90 no tiene CTA hablado: `ig-067`.**
   No es alcance: es la pregunta. *(Caveat: el CTA hablado y el del caption casi
   siempre coinciden — 67 de 90 los tienen los dos, 21 ninguno y sólo 2 están
   cruzados — así que este corpus no puede separar un efecto del otro.)*
2. **El diálogo padre–hija alcanza más pero convierte peor.** Sosteniendo el CTA
   constante y definiendo diálogo como "la primera oración es la línea de la
   hija" (42 de 90): diálogo **8,0** com/1k (n=28, views mediana 56,2k) vs
   no-diálogo **13,1** (n=40, views mediana 46,9k). Es el formato más usado
   (51 de 90 con la clasificación completa de `voz.md`) y no es el que más
   comentarios trae.
3. **41 de los 90 abren con una pregunta**, y la primera oración tiene 9,5
   palabras de mediana. El gancho casi nunca lo dice él: lo dice la hija o el
   desconocido que lo aborda.
4. **La palabra que pide es "puedo"** — 46 de los 68 CTA hablados, más un
   "podo" que es el mismo "puedo" roto por el ASR. Después "yo" (10), "clase"
   (4), "estrategia" (3), y una vez "nasda" y otra "juego".
5. **Ningún reel menciona una llamada, una cita ni un formulario.** El embudo, en
   cámara, termina en el comentario.
6. **Los reels de 2026 rinden 3,0 com/1k contra 12,7 en el 2º semestre de
   2025.** El 1er semestre de 2025 da **0,5**, pero eso no es un techo perdido:
   en ese semestre **14 de los 15 reels pedían "sígueme" y ninguno pedía un
   comentario**, así que no había nada que convertir. La conversión nace con el
   cambio de CTA en 2025-S2 (45 de 48 piden comentario) y se rompe entre ese
   semestre y 2026. Cae la conversión a comentario, no sólo el alcance de §1.

Cifras dentro de los hooks: **marcadas como `[X]` cuando el ASR se comió los
dígitos.** Verificar contra el video antes de reusarlas.

### 3d — Lo que sigue faltando

- **El hook visual de los primeros 3 segundos.** De IG sólo hay audio. Qué se ve
  mientras la hija dice "Papá," es `SIN DATO`.
- **Qué reels fueron ads pagos.** Sin eso, las views de §3c no son comparables
  entre sí.
- **El VSL.**

Un patrón sólo pasa a ser regla si aparece en **3+ piezas** con buen
rendimiento **medido en IG**. Todo lo de §3 es material, no regla.

## §4 — Ángulos que ya rindieron, por tema

Sí se puede clasificar por tema con lo que hay. Los que superan 50k views y no
son sólo CTA:

Todas las referencias re-ancladas al catálogo vigente el 2026-08-14. Los `#N`
que estaban acá antes apuntaban a la numeración vieja y hoy resuelven a otros
reels — ver la advertencia del encabezado.

| Ángulo | Ejemplos | Views |
|---|---|---|
| **Anti-vendehumo / desconfianza** | `ig-013` "No te fíes de todos los que dicen hacer 'trading'"; `ig-019` "cuidado con los traders de 18 años con Lamborghini's" | 538.208 · 271.262 |
| **Anti-ostentación** | `ig-046` "Nada de nuevas Jordans"; `ig-066` "No me verás con ropa de gucci, pero si quieres saber cómo…"; 2025-06-21 "Sígueme, no te dejes llevar por los lujos" (sin transcribir) | 52.631 · 36.266 · 50.842 |
| **Resultado en pantalla** | `ig-003` "Resultados que hablan por sí solos" | 2.989.466 |
| **Estilo de vida / libertad** | `ig-002` "En esta cuenta explicaré exactamente como lograr este estilo de vida"; `ig-067` "Si quieres trabajar desde cualquier lado, solo con una computadora o celular" | 3.275.151 · 35.605 |
| **Diferenciarse del promedio** | 2025-05-31 "Si estás buscando hacer algo distinto al común denominador" (sin transcribir) | 317.175 |
| **Historia personal / antes** | 2026-01-28 "Sígueme aquí, a mis 33 años hacía Uber y tenía una hija de la que cuidar" (sin transcribir) | 13.228 |
| **Depender de un solo ingreso** | `ig-081` "Sígueme en esta cuenta si quieres dejar de depender de una sola fuente de ingresos" | 26.499 |

**Dos que estaban acá y no son de él:**

- **"Gané 50.000$ en 30 minutos"** no es un caption de IG: es el **título del
  video de YouTube `yt-025`**. No hay ningún post de `@elgocho` con esa cifra en
  el caption. Como cifra, además, es ASR de título y **no se usa en pieza**.
- **"¿Cómo se supera una situación así?"** (614.986 views) es un post de
  **`@nayoescobar`**, no de `@elgocho` — es la única fila del catálogo de otra
  cuenta. No cuenta como ángulo probado de Gocho.

Los dos ángulos de mayor alcance absoluto (**estilo de vida** y **resultado en
pantalla**) son también los de **mayor riesgo de compliance**. Ver las 6 reglas
duras de `oferta.md` antes de escribir cualquiera de los dos: el resultado se
puede mostrar, la promesa implícita de que el espectador lo va a repetir no.

Y ojo con la contradicción: el ángulo anti-ostentación (`ig-046`, `ig-066`, el del 2025-06-21) es
posicionamiento explícito del cliente. **Un ad con autos y relojes lo
contradice** — ver `audiencia.md`.
