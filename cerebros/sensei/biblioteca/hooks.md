# Hooks — El Sensei

Los primeros segundos de los 85 reels transcriptos, ordenados por views, con la
métrica dura al lado y agrupados por **estructura** (no por tema). La estructura
es lo que se calca; el tema es lo reemplazable.

> **Dos cuentas, dos personajes.** Lo transcripto viene de `@elsensei` (cuenta
> madre) y `@librosdelsensei` (satélite temático). Las tablas y las medianas van
> **separadas por handle y nunca mezcladas**: la madre reparte entre 6 y 27 veces
> más views por el mismo guion (§5), así que un promedio conjunto no mide el
> creativo, mide la cuenta. `@senseiprofe` no tiene ninguna transcripción.

---

## 0. Método declarado

| Qué | Cuánto |
|---|---|
| Catálogo IG | **95 posts**, 5.116.947 views, 2026-03-30 → 2026-08-13 (`fuentes/catalogo-instagram.csv`) |
| Transcriptos | **85** (31 de `@elsensei`, 54 de `@librosdelsensei`) |
| Palabras de transcripción | **14.043** |
| Sin transcribir | **10** posts del catálogo (§9) |
| Reels únicos después de dedup | **81** — `ig-091` se subió 5 veces el mismo día; `ig-092`…`ig-095` quedan fuera de todo agregado |

Cómo se contó, todo con `python3` sobre el frontmatter de
`fuentes/transcripciones/*.md` + `fuentes/catalogo-instagram.csv`:

- **Hook literal**: primera oración del `## Transcript`; si tenía menos de 8
  palabras se le suma la siguiente, con tope de 32. El campo `## Hook (0-3s)` de
  la ficha es un corte automático y **no se usó tal cual** — en 23 casos está
  mutilado (§7).
- **com/1k** = `comments / views * 1000`. Es el proxy de "cuánto llena el bot".
- **Mediana, no promedio**, en todo agregado. Donde el promedio dice otra cosa
  está escrito al lado, porque casi siempre es un solo reel el que lo mueve.
- **Índice ajustado por fecha** = views del reel ÷ mediana de views de *su*
  handle en *su* mes. `1,00` = el reel típico de ese mes en esa cuenta. Sirve
  para separar "funcionó el creativo" de "esa semana la cuenta repartía más".
- **Gemelos** = pares con Jaccard ≥ 0,55 sobre el set de palabras del transcript.

Medianas mensuales de referencia (la base del índice):

| Mes | `@elsensei` | `@librosdelsensei` |
|---|--:|--:|
| 2026-03 | 106.320 (n=3) | — |
| 2026-04 | 107.733 (n=13) | — |
| 2026-05 | — | 6.398 (n=6) |
| 2026-06 | — | 10.782 (n=17) |
| 2026-07 | 92.103 (n=7) | 7.472 (n=18) |
| 2026-08 | 81.198 (n=8) | 5.148 (n=13) |

**Es ASR.** Los giros de lengua son confiables. **Las cifras y los nombres
propios dichos en cámara, no.** Deepgram escribe *por 100* donde él dice *por
ciento*, *1º* donde dice *primer* y *1000000º* donde dice *primer millón*. Las
citas de abajo están **sin corregir a propósito**, para que se puedan abrir y
escuchar. Ninguna cifra de una cita entra al cerebro como dato: entra marcada
*dicha en ig-NNN, SIN VERIFICAR — no usar en pieza*.

**Las métricas de las tablas sí son confiables**: views, likes y comments salen
de la API de Instagram, no del audio.

---

## 1. `@elsensei` — 31 hooks ordenados por views

✂︎ = el ASR se comió la primera palabra. Ver §7 antes de calcar.

| Ref | Views | Likes | Com. | com/1k | Fecha | Molde | Hook literal (ASR) |
|---|--:|--:|--:|--:|---|---|---|
| `ig-002` | 322.027 | 7.039 | 79 | 0.25 | 2026-04-02 | escena | "Una vez tuve un novia que se levantaba tarde, no quería hacer nada, no tenía ninguna ambición." |
| `ig-003` | 211.130 | 5.328 | 112 | 0.53 | 2026-04-11 | veredicto | "Rico, padre pobre o los secretos de la mente millonaria?" ✂︎ |
| `ig-004` | 170.865 | 5.210 | 252 | 1.47 | 2026-04-19 | veredicto | "Padre rico, padre pobre. Un 5 de 10." |
| `ig-006` | 148.972 | 8.589 | 352 | 2.36 | 2026-04-07 | pregunta del entrevistador | "Es tu versículo favorito de la Biblia? Mi versículo favorito es hebreos 11 1." ✂︎ |
| `ig-007` | 123.331 | 6.781 | 110 | 0.89 | 2026-07-22 | cifra al frente | "El 90 por 100 de las personas que se han leído este libro se han convertido en millonarios, y no solo que se lo han leído, sino que se lo saben de" |
| `ig-008` | 119.463 | 4.008 | 31 | 0.26 | 2026-04-04 | condicional | "Todas las mañanas se despiertas cansado, te recomiendo hacer la regla del 1 10 1." ✂︎ |
| `ig-009` | 119.369 | 9.124 | 3.649 | 30.57 | 2026-08-01 | orden | "Ser el 1º millonario de tu familia 1º tienes que saber esto." |
| `ig-010` | 117.700 | 2.259 | 48 | 0.41 | 2026-03-30 | condicional | "Si alguien te pide, por ejemplo, 1000 dólares, ¿tú se los presta?" |
| `ig-011` | 116.386 | 3.448 | 114 | 0.98 | 2026-07-23 | veredicto | "Rico, padre pobre. Malo. Es muy complejo y los consejos financieros que te da ya pasaron de moda." ✂︎ |
| `ig-013` | 115.478 | 3.539 | 91 | 0.79 | 2026-04-08 | escena | "Ok. El otro día estaba en Milanboyini en medio de un tráfico y se me acercó un niño corriendo, y me dijo, Sensei, Sensei, dame un consejo, y le di literalmente el" |
| `ig-014` | 113.681 | 1.517 | 60 | 0.53 | 2026-08-07 | lista anunciada | "Comprarse el carro del baño para aparentar. Muy de pobres." |
| `ig-015` | 107.733 | 3.281 | 21 | 0.19 | 2026-04-02 | orden | "Como eres principiante, 1º empezaríamos con un libro básico que cambia tu mentalidad y toda tu vida." |
| `ig-016` | 106.320 | 2.932 | 39 | 0.37 | 2026-03-31 | orden | "Ser el 1º millonario de tu familia, 1º tienes que saber eso." |
| `ig-017` | 100.879 | 2.061 | 49 | 0.49 | 2026-08-04 | negación | "No ganas mínimo 10000 al mes, tú no puedes tener novia en Estados Unidos." ✂︎ |
| `ig-018` | 92.870 | 2.863 | 249 | 2.68 | 2026-07-20 | sentencia | "Una mujer le gusta un hombre que progresa, no que se atras, y esto no significa que sea interesada, y eso es porque a todas las personas les gusta la seguridad." |
| `ig-019` | 92.103 | 3.851 | 173 | 1.88 | 2026-07-25 | sentencia | "Terminar con tu novia es literalmente lo mejor que te puede pasar." |
| `ig-020` | 90.204 | 3.709 | 126 | 1.40 | 2026-04-05 | cifra al frente | "Solo necesitas 6 meses para cambiar tu vida, solamente 6 meses." |
| `ig-021` | 89.831 | 2.670 | 81 | 0.90 | 2026-08-05 | lista anunciada | "Hábitos que cambiarán tu vida de la noche a la mañana." |
| `ig-022` | 85.756 | 1.663 | 53 | 0.62 | 2026-04-12 | pregunta del entrevistador | "Libros te han ayudado más a ser millonario?" ✂︎ |
| `ig-023` | 83.612 | 2.136 | 379 | 4.53 | 2026-03-30 | pregunta del entrevistador | "En dios? Claro que sí, yo creo que es imposible conseguir el éxito sin dios." ✂︎ |
| `ig-024` | 79.692 | 2.905 | 75 | 0.94 | 2026-04-07 | sentencia | "Cuando eres joven, no estás en tu momento de dormir 8 horas al día o trabajar hasta las 5 de la tarde." |
| `ig-025` | 76.947 | 3.262 | 122 | 1.59 | 2026-04-10 | condicional | "Si ahora mismo tu vida es difícil y hay muchas dificultades y obstáculos, eso debería ser motivo de alegría, porque significa que dios te está preparando para algo mejor." |
| `ig-027` | 72.564 | 2.308 | 61 | 0.84 | 2026-08-12 | sentencia | "Mudarte de tu país te hará rico más rápido que cualquier otra cosa." |
| `ig-028` | 70.862 | 1.039 | 45 | 0.64 | 2026-08-02 | veredicto | "Cumplir con tareas repetitivas. Puesto 7. Está muy bien, pero si lo haces para cumplir con lo que otros quieren y no con tus propias ambiciones, no." |
| `ig-029` | 64.406 | 1.225 | 66 | 1.02 | 2026-07-24 | pregunta al espectador | "Por qué los ricos llevan a sus hijos a escuelas privadas?" |
| `ig-032` | 57.745 | 1.707 | 247 | 4.28 | 2026-04-14 | sentencia | "La Biblia dice en Isaías 40 31 que los que confían en el señor renovarán sus fuerzas." |
| `ig-034` | 55.292 | 1.311 | 36 | 0.65 | 2026-04-06 | pregunta al espectador | "¿Por qué crees que la mayoría de los jóvenes no consiguen el éxito?" |
| `ig-036` | 50.326 | 1.437 | 56 | 1.11 | 2026-08-09 | condicional | "Si realmente quieres ser más feliz, tienes que dejar de hacer estas 3 cosas desde hoy." |
| `ig-037` | 46.020 | 632 | 2 | 0.04 | 2026-07-26 | condicional | "Abres un negocio, vas a tener que tener equipo, contabilidad, marketing, tratar con clientes." |
| `ig-039` | 43.048 | 958 | 70 | 1.63 | 2026-07-27 | lista anunciada | "Actividades que hacen personas de bajo coeficiente intelectual." |
| `ig-041` | 22.407 | 375 | 18 | 0.80 | 2026-08-13 | orden | "Tatúa eso en tu mente para progresar en la vida." |

---

## 2. `@librosdelsensei` — 50 hooks ordenados por views

(54 transcriptos − 4 re-subidas de `ig-091`.)

| Ref | Views | Likes | Com. | com/1k | Fecha | Molde | Hook literal (ASR) |
|---|--:|--:|--:|--:|---|---|---|
| `ig-001` | 820.523 | 54.804 | 209 | 0.25 | 2026-07-20 | pregunta del entrevistador | "Es lo máximo que le has prestado a un amigo?" ✂︎ |
| `ig-005` | 169.847 | 14.753 | 79 | 0.47 | 2026-07-21 | pregunta del entrevistador | "Sensei, ¿a qué hora te despiertas? Yo me despierto todos los días a las 4 y 47 de la mañana." |
| `ig-012` | 116.369 | 10.301 | 29 | 0.25 | 2026-06-04 | condicional | "Si perdieras tus carros, tu dinero, tus relojes, tu casa, todo, ¿de qué forma te harías millonario de nuevo?" |
| `ig-035` | 53.152 | 7.561 | 91 | 1.71 | 2026-07-03 | condicional | "Le pides a dios ser exitoso, seguramente te quitará todo lo que tienes." |
| `ig-040` | 24.675 | 1.069 | 648 | 26.26 | 2026-07-26 | escena | "Es mi chef y estos son 100 dólares, y voy a enseñarle a cómo convertirlos en 1000 dólares." |
| `ig-042` | 20.927 | 1.346 | 23 | 1.10 | 2026-08-04 | negación | "Escuches consejos de tu mamá, no escuches consejos de tu papá, no escuches consejos de tus profesores y mucho menos de tus amigos pobres." ✂︎ |
| `ig-043` | 18.745 | 458 | 3 | 0.16 | 2026-06-16 | pregunta del entrevistador | "Hora te despiertas? Yo me despierto todos los días a las 4 y 47 de la mañana." ✂︎ |
| `ig-044` | 18.631 | 321 | 5 | 0.27 | 2026-08-06 | lista anunciada | "Tener sexo con muchas mujeres. De pobres. Pagar 50 50 con tu mujer o esposa." |
| `ig-045` | 18.026 | 758 | 29 | 1.61 | 2026-06-10 | negación | "Salgas con estas 5 mujeres. 1, 1 mujer que está obsesionada con la atención, no quiere amor, quiere validación." ✂︎ |
| `ig-046` | 17.532 | 905 | 29 | 1.65 | 2026-07-24 | pregunta del entrevistador | "Sensei, este es tu nuevo carro, ¿verdad? No, ese no es mío." |
| `ig-048` | 16.530 | 365 | 6 | 0.36 | 2026-07-28 | pregunta del entrevistador | "Dinero tienes en tu cuenta de banco? ¿Cuánto tú crees?" ✂︎ |
| `ig-050` | 12.674 | 403 | 87 | 6.86 | 2026-06-05 | condicional | "Te harías millonario de nuevo si tuvieras 20 años?" ✂︎ |
| `ig-051` | 12.587 | 1.128 | 63 | 5.01 | 2026-06-20 | condicional | "Si quieres volverte rico, solo hay una oración que tienes que dominar, y solo esta oración importa, y esta será la razón por la que te harás rico una vez aprendas que" |
| `ig-052` | 12.381 | 859 | 27 | 2.18 | 2026-05-30 | sentencia | "Dios nunca pondrá un sueño en tu mente que no puedas cumplir." |
| `ig-054` | 11.605 | 693 | 18 | 1.55 | 2026-06-11 | condicional | "Tus amigos no hablan de dinero, cambia de amigos." ✂︎ |
| `ig-055` | 11.604 | 975 | 28 | 2.41 | 2026-06-20 | orden | "En los próximos 2 meses, hazte adicto a estos 9 hábitos." |
| `ig-056` | 11.555 | 341 | 16 | 1.38 | 2026-07-03 | pregunta del entrevistador | "¿A qué hora te despiertas? Yo me despierto todos los días a las 4 y 47 de la mañana." |
| `ig-057` | 11.553 | 550 | 243 | 21.03 | 2026-06-10 | cifra al frente | "5 libros cortos que cambiarán tu vida, y los puedes leer todos en un solo día." |
| `ig-058` | 10.782 | 630 | 88 | 8.16 | 2026-06-11 | cifra al frente | "El 90 por 100 de las personas que han leído este libro se han convertido en millonarios, y no solo que se lo han leído sino que han interiorizado el conocimiento." |
| `ig-060` | 9.816 | 354 | 2 | 0.20 | 2026-08-02 | pregunta del entrevistador | "Sensei, este es tu nuevo carro, ¿verdad? No, ese no es mío." |
| `ig-061` | 9.675 | 513 | 11 | 1.14 | 2026-06-27 | cifra al frente | "5 libros cortos que cambiarán tu vida, y los puedes leer todos en un solo día." |
| `ig-062` | 9.478 | 724 | 282 | 29.75 | 2026-06-16 | pregunta del entrevistador | "¿Crees en dios? Claro que sí. Yo creo que es imposible conseguir el éxito sin dios." |
| `ig-063` | 8.885 | 408 | 12 | 1.35 | 2026-05-28 | condicional | "Tú no le pides dinero a tu hombre, tú vas a terminar empobreciéndole, porque la mujer debe y tiene que pedirle dinero a su marido para inspirarlo y motivarlo a generar y" ✂︎ |
| `ig-064` | 8.589 | 348 | 14 | 1.63 | 2026-07-02 | pregunta del entrevistador | "¿Esta casa es rentada o es tuya? Es rentada." |
| `ig-065` | 8.369 | 317 | 21 | 2.51 | 2026-06-16 | orden | "Imagínense tener que esperar 65 años para poder vivir su vida libre y poder retirarse y poder simplemente hacer lo que tú quieras." |
| `ig-066` | 8.284 | 303 | 2 | 0.24 | 2026-06-16 | veredicto | "Libro sobrevalorado. Padre rico, padre pobre. Kiyosaki, ¿por qué?" ✂︎ |
| `ig-067` | 7.592 | 420 | 33 | 4.35 | 2026-06-12 | pregunta del entrevistador | "3 libros te hicieron millonario? He leído más de 500 libros en mi vida, pero si tuviera que elegir 3 que me ayudaron a hacer mi 1000000º de dólares serían estos." ✂︎ |
| `ig-068` | 7.541 | 289 | 20 | 2.65 | 2026-07-27 | pregunta del entrevistador | "Desde ahí, ¿aquí el gráfico va a subir o va a bajar?" |
| `ig-069` | 7.403 | 487 | 4 | 0.54 | 2026-07-23 | negación | "Mucho cuidado con contarle tus sueños a una persona que no tiene la misma mentalidad que tú, porque lo que seguramente te diga no te ayudará a conseguirlo, sino al contrario, te" |
| `ig-070` | 7.379 | 356 | 1 | 0.14 | 2026-07-19 | veredicto | "El mejor libro que te va a ayudar a ganar tu 1000000º de dólares, lo he comprobado con más de 50 personas, que es el mejor libro para ganar dinero es este." |
| `ig-071` | 7.266 | 252 | 1 | 0.14 | 2026-08-07 | pregunta del entrevistador | "¿A qué hora te despiertas? Yo me despierto todos los días a las 4 y 47 de la mañana." |
| `ig-072` | 7.037 | 460 | 21 | 2.98 | 2026-07-01 | orden | "Ser el 1º millonario de tu familia tienes que 1º saber esto." |
| `ig-073` | 7.023 | 544 | 13 | 1.85 | 2026-05-28 | sentencia | "Dios realmente sabe lo que hace, no te estreses, su tiempo es perfecto, su plan es perfecto, él te tiene exactamente donde quiere." |
| `ig-074` | 7.004 | 234 | 23 | 3.28 | 2026-06-03 | cifra al frente | "Solamente un 6 por 100 de la población ha leído este libro que está aquí, y resulta que el otro 94 por 100 que no lo ha leído no ha sabido cómo" |
| `ig-075` | 6.739 | 328 | 57 | 8.46 | 2026-06-02 | pregunta del entrevistador | "3 libros te hicieron millonario? He leído más de 500 libros en mi vida, pero si tuviera que elegir 3 que me ayudaron a hacer mi 1000000º de dólares, serían estos." ✂︎ |
| `ig-076` | 6.245 | 488 | 125 | 20.02 | 2026-08-04 | pregunta al espectador | "Que Satanás hará todo lo posible para que no escuches esto?" ✂︎ |
| `ig-077` | 6.229 | 281 | 11 | 1.77 | 2026-08-12 | pregunta del entrevistador | "Libro nadie conoce y te cambió la vida?" ✂︎ |
| `ig-078` | 6.003 | 194 | 0 | 0.00 | 2026-07-30 | pregunta del entrevistador | "Si tu pareja sale mucho de fiesta? Si saliera mucho de fiesta, 1º que nada, no fuese mi pareja." ✂︎ |
| `ig-079` | 5.773 | 280 | 4 | 0.69 | 2026-05-30 | pregunta del entrevistador | "¿Cuál es el 1º consejo sobre dinero que le darías a tu hijo?" |
| `ig-080` | 5.446 | 264 | 29 | 5.33 | 2026-05-30 | lista anunciada | "Personas que debes evitar a toda costa. Personas que se quejan, personas celosas, personas sin metas, pensadores negativos, aprovechados, personas con mentalidad de víctima, traidores, incrédulos, habladores, procrastinadores." |
| `ig-081` | 5.351 | 255 | 2 | 0.37 | 2026-07-31 | sentencia | "Como hombre no existe nada, pero absolutamente nada." |
| `ig-082` | 5.271 | 211 | 19 | 3.60 | 2026-05-29 | pregunta del entrevistador | "Libros te han hecho ganar más dinero? Yo tengo un libro que me hizo ganar mis primeros 10000 dólares, otro que me hizo ganar mis primeros 100000 y un último que me" ✂︎ |
| `ig-083` | 5.229 | 257 | 3 | 0.57 | 2026-07-29 | lista anunciada | "Hábitos que cambiarán tu vida de la noche a la mañana." |
| `ig-084` | 5.148 | 152 | 3 | 0.58 | 2026-08-05 | escena | "No, otra vez perdí. Normal que perdiste, tienes que activar estas 3 configuraciones en tu gráfico." |
| `ig-085` | 5.091 | 136 | 4 | 0.79 | 2026-07-25 | pregunta al espectador | "¿Por qué crees que la mayoría de los jóvenes no consiguen el éxito?" |
| `ig-086` | 4.873 | 193 | 4 | 0.82 | 2026-07-22 | sentencia | "Sacrifico un par de años de vida para luego vivir como nadie vive." |
| `ig-087` | 4.327 | 155 | 11 | 2.54 | 2026-06-01 | pregunta del entrevistador | "Libros te han hecho ganar más dinero? Yo tengo un libro que me hizo ganar mis primeros 10000 dólares, otro que me hizo ganar mis primeros 100000 y un último que me" ✂︎ |
| `ig-088` | 4.218 | 88 | 1 | 0.24 | 2026-07-04 | condicional | "Si realmente quieres ser más feliz, tienes que dejar de hacer estas 3 cosas desde hoy." |
| `ig-090` | 1.607 | 45 | 1 | 0.62 | 2026-08-13 | lista anunciada | "Actividades que hacen personas de bajo coeficiente intelectual." |
| `ig-091` | 1.492 | 40 | 2 | 1.34 | 2026-08-10 | pregunta al espectador | "¿Te consiguen más mujeres teniendo dinero? 100 por 100 el que tiene dinero tiene mayor ventaja, porque tener dinero no solamente es en el aspecto económico, significa que tomaste algunas decisiones en" |

---

## 3. Qué molde rinde, medido

Diez moldes, clasificados a mano sobre los 81 reels únicos. Las dos tablas van
separadas porque las escalas no son comparables.

### 3a. `@elsensei` (n=31) — mediana del handle: 92.870 views · 0,80 com/1k

| Molde | n | Views (mediana) | Índice fecha | com/1k (mediana) | Qué lo mueve |
|---|--:|--:|--:|--:|---|
| escena | 2 | 218.752 | **2,03** | 0,52 | **No medible**: los 2 son de abril, el mejor mes de la cuenta |
| veredicto | 4 | 143.626 | 1,42 | 0,81 | sólido: 4 reels, 3 meses distintos |
| negación | 1 | 100.879 | 1,24 | 0,49 | **No medible**, n=1 |
| lista anunciada | 3 | 89.831 | 1,11 | 0,90 | sólido |
| cifra al frente | 2 | 106.768 | 1,09 | 1,14 | n=2 |
| orden | 4 | 107.026 | 1,00 | 0,59 | **trampa**: com/1k promedio 7,98, y son todos de `ig-009` (30,57). Sin él el molde da 0,45 |
| sentencia | 5 | 79.692 | 0,89 | 1,88 | el mejor com/1k con n≥3 |
| pregunta del entrevistador | 3 | 85.756 | 0,80 | 2,36 | **trampa**: views promedio 96.113 pero la mediana manda |
| condicional | 5 | 76.947 | 0,71 | 0,41 | el peor de la cuenta en las dos columnas |
| pregunta al espectador | 2 | 59.849 | 0,61 | 0,84 | n=2 |

### 3b. `@librosdelsensei` (n=50) — mediana del handle: 8.327 views · 1,47 com/1k

| Molde | n | Views (mediana) | Índice fecha | com/1k (mediana) | Qué lo mueve |
|---|--:|--:|--:|--:|---|
| escena | 2 | 14.912 | **2,15** | 13,42 | **No medible**: `ig-040` da 26,26 y `ig-084` da 0,58. La mediana de 2 reels es el promedio de 2 reels |
| negación | 3 | 18.026 | 1,67 | 1,10 | el mejor en views con n≥3 |
| condicional | 7 | 12.587 | 1,18 | 1,55 | sólido, 3 meses |
| pregunta del entrevistador | 18 | 8.090 | 1,08 | 1,51 | el molde de la casa: 18 de 50 reels. **Trampa**: views promedio 63.298, empujado por `ig-001` (820.523) |
| cifra al frente | 4 | 10.228 | **0,95** | **5,72** | los 4 son de junio, el mejor mes del satélite → **el índice 0,95 dice que las views no son del creativo; el com/1k sí (2,3× la base de junio)** |
| orden | 3 | 8.369 | 0,94 | 2,51 | sólido |
| sentencia | 4 | 6.187 | 0,91 | 1,34 | sólido |
| veredicto | 2 | 7.832 | 0,88 | 0,19 | n=2, el peor com/1k del corpus |
| lista anunciada | 4 | 5.338 | 0,78 | 0,60 | **trampa**: com/1k agregado 1,23, todo de `ig-080` (5,33) |
| pregunta al espectador | 3 | 5.091 | 0,13 | 1,34 | **no medible**: `ig-091` y `ig-085` son re-subidas de agosto que no despegaron |

### 3c. Qué usar según para qué

- **Para pauta** (llegar lejos, sin importar el comentario): en la madre,
  **veredicto** — 4 reels, 143.626 de mediana, índice 1,42, y es el único molde
  con n≥3 que gana por fecha. En el satélite, **negación** (18.026, índice 1,67).
- **Para llenar el bot** (comentario por view): en la madre, **pregunta del
  entrevistador** (2,36) y **sentencia** (1,88), los dos con views por debajo de
  la mediana del handle — el intercambio es real y está medido. En el satélite,
  **cifra al frente** (5,72 com/1k contra 1,47 del handle) — 3,9× la base, con
  views *exactamente en la media de su mes*. Es el mejor caso del corpus de un
  molde que rinde por el creativo y no por el calendario.
- **Lo que no conviene**: el condicional en la madre (0,41 com/1k, índice 0,71)
  y el veredicto en el satélite (0,19 com/1k).

---

## 4. Los CTA

### 4a. Qué palabra pide y qué le devuelve

Un reel entra a una sola familia, por la palabra que pide. Todos son "comenta X"
salvo los tres del final.

| Palabra | Handle | n | Views (mediana) | com/1k (mediana) | Reels |
|---|---|--:|--:|--:|---|
| **"Yo"** | `@elsensei` | 1 | 119.369 | **30,57** | `ig-009` |
| **"Chef"** | `@librosdelsensei` | 1 | 24.675 | **26,26** | `ig-040` |
| **"Amén"** | `@librosdelsensei` | 2 | 7.862 | **24,88** | `ig-062` (29,75) · `ig-076` (20,02) |
| **"Aprender"** | `@librosdelsensei` | 2 | 7.166 | 6,40 | `ig-067` · `ig-075` |
| **"Clase"** | `@librosdelsensei` | 6 | 5.610 | 4,46 | `ig-050` · `ig-058` · `ig-079` · `ig-080` · `ig-082` · `ig-087` |
| **"Amén"** | `@elsensei` | 2 | 70.678 | 4,41 | `ig-023` (4,53) · `ig-032` (4,28) |
| **"Invertir"** | `@librosdelsensei` | 3 | 8.885 | 3,28 | `ig-057` (21,03) · `ig-074` (3,28) · `ig-063` (1,35) |
| comentario abierto | `@elsensei` | 1 | 43.048 | 1,63 | `ig-039` |
| "Comparte" | ambas | 2 | — | 0,37 / 1,77 | `ig-016` · `ig-077` |
| "Sígueme" | `@elsensei` | 1 | 113.681 | 0,53 | `ig-014` |
| "Guarda" | `@elsensei` | 1 | 117.700 | 0,41 | `ig-010` |

**El hallazgo: la palabra que más usa es la peor de las que piden.** "Clase" va
en 6 reels — el doble que cualquier otra — y da **4,46 com/1k**, el peor de todas
las familias que piden comentario. "Amén" se usó **4 veces** y en el satélite da
**24,88**. Son **5,6×** más comentarios por view, con la misma cuenta y el mismo
mes de por medio.

**Segunda trampa, en "Invertir":** la mediana es 3,28 pero el agregado da 10,13,
y sale entero de `ig-057` (21,03). Los otros dos dan 3,28 y 1,35. Como familia,
"Invertir" rinde como "Clase", no como "Amén".

### 4b. Los CTA, textuales

Cada renglón cierra con su propia ref.

> "Si quieres saber cómo aprender esta estrategia deja la palabra join cometouch." — `ig-009` *(ASR: dice "comenta 'yo'", la ficha lo transcribe mal; el caption del post es "Comenta 👇🏼 'Yo'")*
> "pero si quieres hacerlo sin mi, comenta la palabra chef en este video y te lo mando todo. Comenta chef." — `ig-040`
> "Si esto ha sido de bendición, comenta amén y comparte este video con un amén." — `ig-076`
> "El que cree en dios, que comente amén." — `ig-023`
> "Que cree en dios que comente amén." — `ig-062`
> "toda persona que quiera aprender a invertir va a dejar la palabra aprender en comentarios." — `ig-075`
> "y toda persona que quiera aprender a invertir va a dejar la palabra aprender en comentarios." — `ig-067`
> "Toda persona que quiera aprender a invertir va a dejar la palabra invertir en comentarios y les voy a enviar el link para mi clase gratuita de este martes" — `ig-057`
> "Va a ser gratis para toda la persona que escriba clase en este video." — `ig-058`
> "y si quieres aprender trading comenta la palabra clase en este video para que vayas a mi clase en vivo gratuita este martes a las 7 de la noche y aprendas a invertir. Comenta clase." — `ig-082`
> "Comenta clase y te mando toda la información." — `ig-079`
> "Déjame saber en comentarios si me falto alguno." — `ig-039` *(está en el caption, no dicho en cámara)*
> "Mándale este video a tu amigo que quiere ser millonario" — `ig-077`
> "Vuelvo a ver este video." — `ig-073` *(ASR; el pedido real es "vuelve a ver este video")*

**Forma fija del pedido en el satélite**: *toda persona que quiera aprender a
invertir va a dejar la palabra ___ en comentarios*. Es tercera persona, no
imperativo — y es la única forma que aparece en 4 reels distintos (`ig-057`,
`ig-067`, `ig-074`, `ig-075`).

### 4c. Corrección a `voz.md`

`voz.md` dice que pedir comentario "multiplica los comentarios por 6,7 y **divide
las views por 2,5**". La segunda mitad es un artefacto de mezclar las dos
cuentas: el balde "no pide" tiene 23 reels de la madre, que rinde 11× más views.
Medido **dentro de cada handle**:

| Handle | | n | Views (mediana) | com/1k (mediana) |
|---|---|--:|--:|--:|
| `@elsensei` | pide | 4 | 70.678 | 4,41 |
| `@elsensei` | no pide | 27 | 92.870 | 0,80 |
| `@librosdelsensei` | pide | 14 | 7.298 | 6,09 |
| `@librosdelsensei` | no pide | 36 | 8.479 | 0,80 |

El costo real en views es **−24 %** en la madre y **−14 %** en el satélite
(✅ CORREGIDO: decía −8 %; 7.298 vs 8.479 = −13,9 %), no −60 %. El beneficio en
comentarios es **×5,5** y **×7,6**. Pedir sale barato.

---

## 5. El mismo guion en las dos cuentas — el experimento natural

Siete pares con Jaccard ≥ 0,55 son el mismo guion publicado en las dos cuentas.
Mismo creativo, misma persona, distinto handle:

| Guion | `@elsensei` | `@librosdelsensei` | Ratio views | com/1k madre → satélite |
|---|---|---|--:|---|
| distracciones (sketch entrevista) | `ig-034` 55.292 | `ig-085` 5.091 | 10,9× | 0,65 → 0,79 |
| hábitos de la noche a la mañana | `ig-021` 89.831 | `ig-083` 5.229 | 17,2× | 0,90 → 0,57 |
| fe + CTA amén | `ig-023` 83.612 | `ig-062` 9.478 | 8,8× | 4,53 → **29,75** |
| 3 cosas para ser más feliz | `ig-036` 50.326 | `ig-088` 4.218 | 11,9× | 1,11 → 0,24 |
| bajo coeficiente intelectual | `ig-039` 43.048 | `ig-090` 1.607 | 26,8× | 1,63 → 0,62 |
| de ricos / de pobres | `ig-014` 113.681 | `ig-044` 18.631 | 6,1× | 0,53 → 0,27 |
| primer millonario de tu familia | `ig-009` 119.369 | `ig-072` 7.037 | 17,0× | 30,57 → 2,98 |

**Mediana: 11,9× de views por publicar el mismo guion en la cuenta madre.** Es la
prueba directa de que las views miden la cuenta, no el creativo: cualquier
comparación de views entre handles está midiendo 11,9× de handicap antes de mirar
el hook.

En comentarios no pasa lo mismo: la mediana del ratio es **0,51×** — el satélite
convierte igual o peor por view. La única excepción es el par
`ig-023`/`ig-062`, y es de 6,6× a favor del satélite. Un caso no es un patrón.

**Dentro del satélite** hay además cuatro re-subidas del mismo guion (`ig-005`,
`ig-043`, `ig-056`, `ig-071`: "¿a qué hora te despiertas?" — 169.847 / 18.745 /
11.555 / 7.266). La primera subida se llevó el **82 %** de las views de las
cuatro (✅ CORREGIDO: decía 78 %; 169.847 / 207.413 = 81,9 %).
Repetir un guion en la misma cuenta rinde cada vez menos.

---

## 6. Los cinco arranques que sí se pueden calcar

Sacados de los moldes con n≥3 y rendimiento por encima de la mediana de su
handle. Los `___` son el hueco reemplazable.

1. **Veredicto de dos tiempos** (madre, 143.626 mediana) — nombre + calificación
   seca, sin verbo, y recién después el porqué. `ig-004`, `ig-011`, `ig-003`,
   `ig-028`.
2. **Negación frontal** (satélite, 18.026 mediana) — *no ___, no ___, no ___ y
   mucho menos ___*. `ig-042`, `ig-045`, `ig-017`.
3. **Cifra al frente** (satélite, 5,72 com/1k) — *el ___ % de las personas que
   ___*. Es el mejor molde para comentario del corpus. `ig-057`, `ig-058`,
   `ig-061`, `ig-074`. **Ojo: la cifra siempre es ASR sin verificar.**
4. **Pregunta del entrevistador** (satélite, 18 de 50 reels) — un tercero
   pregunta, él contesta. Es el formato base de la cuenta; el hook es la
   pregunta, no la respuesta. `ig-001`, `ig-005`, `ig-046`, `ig-064`, `ig-067`.
5. **Sentencia sin condicional** (madre, 1,88 com/1k) — afirmación completa en la
   primera oración, sin "si" ni "cuando". `ig-018`, `ig-019`, `ig-024`, `ig-027`.

Y el que **no** hay que calcar: el condicional en la cuenta madre. 5 reels,
índice de fecha 0,71 y 0,41 com/1k — pierde en las dos columnas.

---

## 7. Los 23 hooks que el ASR mutiló

Deepgram se comió la primera palabra en 23 de los 81 reels únicos, casi siempre
la que abre una pregunta. **El texto de la tabla es lo que se oye en el archivo,
no lo que se dice en el video.** Antes de calcar cualquiera de estos hay que
abrir el reel:

`ig-001` · `ig-003` · `ig-006` · `ig-008` · `ig-011` · `ig-017` · `ig-022` ·
`ig-023` · `ig-042` · `ig-043` · `ig-045` · `ig-048` · `ig-050` · `ig-054` ·
`ig-063` · `ig-066` · `ig-067` · `ig-075` · `ig-076` · `ig-077` · `ig-078` ·
`ig-082` · `ig-087`

Cinco reels tienen el problema inverso: el corte automático del campo
`## Hook (0-3s)` quedó **más corto** que el hook real, porque la primera oración
es de dos palabras. En estos la tabla ya trae el hook completo:

- `ig-004` — el corte dice "Padre rico, padre pobre." y el hook es eso **más** el veredicto.
- `ig-011` — el corte dice "Rico, padre pobre." y le falta "Malo."
- `ig-013` — el corte dice "Ok." y el hook es la escena entera.
- `ig-014` — el corte dice "Comprarse el carro del baño para aparentar." y le falta "Muy de pobres."
- `ig-044` — el corte dice "Tener sexo con muchas mujeres." y le falta "De pobres."

---

## 8. Compliance — hooks y cierres que no se reusan

**Compliance bloquea ads para este cliente.** Esta sección no levanta esa
restricción: marca qué material del orgánico tampoco se puede reciclar tal cual.

- **Monto + plazo prometido.** "generar entre 3000 y 8000 dólares extra todos los
  meses" — `ig-050`, `ig-080`, y en variante "ganar entre 3000 y 8000 dólares
  todos los meses" — `ig-063`. Promesa de ingreso con cifra y período.
- **Resultado sin capital.** "cómo latinos están generando dinero invirtiendo en
  los Estados Unidos sin usar su propio capital" — `ig-075`, `ig-079`.
- **Estadísticas de terceros dichas al aire, todas ASR y ninguna verificada:**
  "El 90 por 100 de las personas que se han leído este libro se han convertido en
  millonarios" — `ig-007`; la misma en `ig-058`; "Solamente un 6 por 100 de la
  población ha leído este libro" — `ig-074`.
- **Cifras propias que cambian entre reels del mismo guion**: `ig-009` dice
  "a mis 23 años he ganado más de 7000000 de dólares" y `ig-072` dice "a mis 25
  años he ganado más de 10000000 de dólares". Los dos son ASR y **no coinciden
  entre sí** — ninguno entra a una pieza sin que el cliente confirme el número.
- En 85 reels **no aparece ni una sola vez** lenguaje de descargo de riesgo. Si
  alguna vez se destraba la pauta, ese lenguaje hay que escribirlo de cero:
  no existe en su voz.

---

## 9. SIN DATO

- **10 posts del catálogo sin transcribir.** Tienen métrica pero no audio, así
  que no entran a ninguna tabla:

| Fila del catálogo | Cuenta | Fecha | Views | Com. | com/1k | Caption |
|---|---|---|--:|--:|--:|---|
| n.º 26 | `@elsensei` | 2026-04-17 | 74.855 | 285 | 3,81 | "Gracias Aristóteles 🙏🏼" |
| n.º 30 | `@elsensei` | 2026-07-21 | 62.965 | 49 | 0,78 | "La disciplina te lleva al éxito…" |
| n.º 31 | `@elsensei` | 2026-04-03 | 61.450 | 24 | 0,39 | "La realidad de la sociedad" |
| n.º 33 | `@elsensei` | 2026-08-04 | 56.772 | 38 | 0,67 | "Este sería mi consejo…" |
| n.º 38 | `@librosdelsensei` | 2026-08-09 | 45.020 | 28 | 0,62 | sólo hashtags |
| n.º 47 | `@librosdelsensei` | 2026-06-05 | 16.851 | 14 | 0,83 | sólo hashtags |
| n.º 49 | `@librosdelsensei` | 2026-06-20 | 14.103 | 38 | 2,69 | sólo hashtags |
| n.º 53 | `@librosdelsensei` | 2026-06-04 | 12.021 | 43 | 3,58 | "Comenta👇🏻 'Clase'" |
| n.º 59 | `@librosdelsensei` | 2026-07-08 | 10.613 | 1 | 0,09 | sólo hashtags |
| n.º 89 | `@librosdelsensei` | 2026-08-11 | 3.106 | 3 | 0,97 | sólo hashtags |

  Se los nombra por su número de fila en `catalogo-instagram.csv` y no como
  `ig-NNN`, porque no existe transcripción con ese nombre: es una fila de
  catálogo, no una fuente. La fila 26 es el 6.º reel de la madre por comentarios
  (285) y no sabemos qué dice. La fila 53 es un séptimo reel de la familia
  "Clase" que hoy falta en §4a — con él la mediana de esa familia se movería.

- **El hook visual de los primeros 3 segundos.** Todo lo de acá arriba es audio.
  Qué se ve en el frame 1 (plano, texto en pantalla, cambio de encuadre) no está
  en ninguna fuente del repo. Para reels de 30-40 s con estos números, el texto
  en pantalla probablemente pese tanto como la frase — **hay que pedir capturas o
  los archivos de edición**.
- **Qué reels tuvieron pauta.** Nada en el catálogo distingue orgánico de pago.
  `ig-001` con 820.523 views y 54.804 likes en el satélite (67 veces la mediana
  del handle en su mes) es el candidato obvio, pero no hay forma de confirmarlo
  con los datos que hay. **Pedir el reporte de Ads Manager del período.**
- **Los guiones originales de los 23 hooks mutilados** (§7), o el permiso para
  volver a transcribir esos videos con otro modelo.
- **`@senseiprofe`**: 0 transcripciones, 0 filas de catálogo. Aparece en el
  caption de `ig-014` ("Sígueme —> @senseiprofe") y en los hashtags de casi todos
  los posts, así que es la cuenta a la que se manda el tráfico. **No sabemos ni
  cuántos reels tiene.**
- **Qué pasa después del comentario.** Los CTA mandan a una "clase en vivo
  gratuita este martes a las 7 de la noche" (`ig-082`). No hay fuente sobre el
  flujo posterior, ni sobre el precio de lo que se vende ahí. `oferta.md` también
  tiene el precio en `SIN DATO`.
- **Retención por segundo.** No hay watch-time en la API que alimenta el
  catálogo, así que "hook que funciona" acá significa *views y comentarios*, no
  *cuánta gente se quedó*.

---

## 10. La regla de la casa

Un patrón pasa a ser regla sólo si aparece en **3+ piezas del mismo handle** y
rinde por encima de la mediana de ese handle **después** de mirar el índice de
fecha. Todo lo que en §3 dice "no medible" está ahí porque tiene n≤2 o porque el
agregado sale de un solo reel: son hipótesis, no reglas.

---

### Nota heredada sobre `fuentes/catalogo.csv`

El otro catálogo del cliente — `catalogo.csv`, 879 links de ago-dic 2025 — tiene
las columnas de views, likes y comments **vacías a propósito**: viene de Notion,
donde las métricas se cargan por cuenta × semana y no por video. No se puede
ordenar por views. Todo lo medido en este archivo sale de
`catalogo-instagram.csv`, que sí trae métrica por post.
