# Audiencia — El Sensei

> Se llena de dos fuentes: lo que él dice sobre su audiencia en los videos, y cómo
> habla la audiencia en los comentarios (que es más valioso, porque es el lenguaje
> real del cliente).

## Avatar

**SIN DATO.** No hay insights de IG, ni demografía, ni una sola frase de un lead.

Lo único verificado, y es poco:

| Señal | Qué dice | Fuente |
|---|---|---|
| Países que el embudo espera | USA, España, México, Colombia, "Otro" — son las opciones del formulario de aplicación | https://institutodeltrading.com/survey |
| Edad mínima | 18+ (el formulario lo pregunta como filtro) | idem |
| Edades que la prueba social muestra | 17 a 31 años (Dylan 17, Alan 19, Gaby 20, David 24, Angie 31) | https://institutodeltrading.com/ — **ojo, es prueba social del sitio, no demografía medida** |
| Nivel declarado | Principiante absoluto: la clase se vende "incluso si nunca invertiste antes" | https://institutodeltrading.com/librosdelsensei |
| Capacidad de pago (declarada por el lead) | 4 tramos: USD 0-300 / 300-1.000 / 1.000-3.000 / +3.000 | https://institutodeltrading.com/survey |

## Segmentación por interés (leída de los nombres de los satélites)

La red de ~30 handles funciona como una grilla de intereses. Los nombres son
fuente legítima de **qué ángulo** se le sirve a cada audiencia, no de quién la
compone:

| Ángulo | Handles | Fuente |
|---|---|---|
| Lectura / autoeducación | `@librosdelsensei` | `data/csv/el-sensei__{IG,TT,YT}.csv` |
| Disciplina / rutinas | `@habitosdelsensei` | idem |
| Mentalidad | `@senseimentalidad`, `@senseialma`, `@almadelsensei` | idem |
| Lujo aspiracional | `@carrosdelsensei`, `@relojesdelsensei`, `@senseirich_` / `@richsensei` | idem |
| Frases / motivación | `@frasesdelsensei`, `@frasesdelcalvito`, `@Lavozdelsensei` | idem |
| Fitness | `@senseifit` | idem |
| Didáctico / explicativo | `@elsenseiexplica`, `@senseielprofesor`, `@senseielcoach`, `@senseielsabio` | idem |
| Autenticidad / "el real" | `@elrealsensei`, `@senseideverdad` | idem |
| Estética personal ("calvito") | `@calvitoclips`, `@senseisinpelo`, `calvito.sensei`, `senseicalvito` | idem |
| Fans / clips | `@Senseifans`, `@Senseishorts`, `@clipsdelsensei`, `@elsenseireel` | idem |
| Otros sin clasificar | `@lasprimasdelsensei`, `@alestilodelsensei`, `@senseicontenidos` | idem |

Que un ángulo exista no significa que funcione. Para saber qué ángulo rinde, hay
que mirar `weekly_metric` en la DB o el dashboard — **y antes mergear los handles
duplicados**, porque hoy las métricas están fragmentadas
(`docs/adr/0002-smart-cleanup-auto-create-handles.md:10-15`).

## Dolores, en palabras del cliente

Frases textuales de comentarios. No parafraseadas — el copy que convierte usa las
palabras que el lead ya tiene en la cabeza.

| Frase textual | Dónde apareció |
|---|---|
| _(pendiente — hay que cosechar comentarios)_ | |

## Creencias que hay que romper

_(pendiente)_

Lo que la oferta *asume* que hay que romper (del copy, no de la audiencia): "no
tengo experiencia", "no tengo capital", "no tengo tiempo", "el trading es una
apuesta". Ver `oferta.md` → objeciones.

## Nivel de sofisticación

Qué tanto sabe del tema el que consume. Define si el hook puede usar jerga
(`apalancamiento`, `drawdown`, `BIAS`) o tiene que hablar en castellano.

_(pendiente)_ — la única pista es que la oferta se posiciona para principiante
absoluto ("incluso si nunca invertiste antes",
https://institutodeltrading.com/librosdelsensei). Con eso solo **no** alcanza para
decidir el nivel de jerga de los clips, que es otra audiencia (tope de embudo).

## Cómo cerrar este hueco

1. Insights de Instagram de 2-3 handles grandes (edad, género, país, horarios) —
   es lo más rápido y lo pide `fase-0-pedido.md`.
2. Comentarios de los top 20 videos del catálogo, pegados en crudo. De ahí sale la
   tabla de dolores verbatim, que es la parte que más mueve el copy.
3. Lo que digan los setters/closers: las objeciones que escuchan por WhatsApp son
   la fuente más rica y nadie la está capturando.
