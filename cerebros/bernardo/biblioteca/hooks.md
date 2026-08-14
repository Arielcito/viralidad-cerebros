# Hooks — Bernardo Jurado

> Los primeros 3 segundos de cada video transcripto, **ordenados por views**.
> Esta es la pieza más rentable del cerebro: es la evidencia de qué abre bien en
> su audiencia concreta, no en la teoría.

Cada fila es un hook real. La columna `patrón` clasifica la estructura para
poder pedir "dame 5 hooks con el patrón que mejor funcionó".

| Views | Hook verbatim | Patrón | Video |
|---|---|---|---|
| _(pendiente de transcripciones)_ | | | |

**Por qué está vacío:** no hay ni un video de Bernardo con URL ni con views en el
repo. `content_video` = 0 filas para la cuenta `bernardo`, y esa tabla ni tiene
columna de URL. Las 6 filas de `content_account_week` (jun-2026) están todas en
views=0. No se puede ordenar por views lo que no tiene views. Ver
`../fuentes/catalogo.csv` y `../fase-0-pedido.md`.

## Patrones detectados

Se completa después de tener ~30 hooks. Un patrón sólo cuenta si aparece en 3+
videos con buen rendimiento; con menos es ruido.

_(pendiente de transcripciones)_

---

## Conceptos de producción — 52 verbatim, jul-2026

⚠️ **Esto NO son hooks.** Son los títulos internos que el equipo escribe en
ClickUp para producir cada video. Sirven para tres cosas: saber de qué habla,
calcar la **forma** del ángulo, y elegir qué reel transcribir primero. No sirven
para copiar el texto hablado: nadie dice "arriba : diogenes vs alejandro magno"
a cámara.

Fuente: tabla `content_edit_task`, cuenta `bernardo`
(`f2aa594b-835d-45e4-b627-57156727e352`), 52 filas, `due_date` del 2026-07-01 al
2026-07-28, editor "Emilio" en las 52, ingesta `clickup_folder:901318169377`.
Sin views asociadas — la tabla no las tiene.

### Lista "Bernardo" (cuenta principal) — 31 filas

| Estado | Concepto verbatim |
|---|---|
| publicado | 10 habitos que debes dejar de hacer |
| publicado | 10 hobbies para ser mas inteloigente |
| publicado | 15 Reglas del hombre |
| publicado | 3 errores segun maquiavelo que te mantienen debil |
| publicado | 5 hobbies que todos deberiamos teenr |
| publicado | 5 leyes del universo que deberias conocer |
| publicado | 5 leyes para el éxito |
| publicado | 7señales de que un hombre maduró demasiado pronto |
| publicado | 8 señales de que eres insoportable |
| publicado | arriba : diogenes vs alejandro magno, ''Apartate! me estas tapando el sol'' le dijo Diogenes, un vagabundo, a Alejandro Magno, |
| publicado | como ser un hombre 10 de 10 |
| publicado | cuando un hombre descubre |
| publicado | directamente : el diablo conoce tu nombre ... |
| publicado | el idioma de los hombres |
| listo para publicar | en español decimos ... |
| publicado | en español decimos me gustas |
| publicado | en español decimos me haces feliz |
| publicado | las 4 frases mas valiosas de maquiavelo |
| publicado | las personas con estos 4 rasgos |
| publicado | Ley de Pareto |
| publicado | maquiavelo dijo, nunca juegues limpio en un juego |
| publicado | Nicholas Taleb dijo, ser odiado por idiotas es el precio que pagas por no ser uno de ellos... pero como sabes |
| publicado | nietszche dijo |
| publicado | no puedes odiar a todas las rosas |
| publicado | satanas el maligno hará todo lo posible para que no escuches esto, modificar los versiculos y decir el versiculo , cortitos solo |
| publicado | segun maquiavelo el poder pertenece |
| listo para publicar | si la leche se echa a perder.. |
| publicado | si quieres dejar de hablar como un niño de primaria, y hablar como los mejores, ... |
| publicado | tiro un facto y me voy |
| publicado | todas las teorias filosoficas explicadas en 1 minuto |
| publicado | todo hombre necesita un alter ego |

### Lista "Secundaria" — 21 filas

| Estado | Concepto verbatim |
|---|---|
| publicado | 3 libros que no quieren que leas |
| publicado | 3 trabalenguas para pronunciar mejor y que todo el mundo deje de preguntartee ''que dijiste'' ??? |
| publicado | a que nivel dejas de entenderme |
| publicado | bernardo como dirias esto |
| publicado | como dejar de decir muletillas ( recopilacion de muletillas - ahh - ehhh- yyy clips de gente ) |
| publicado | Como responder una pregunta que NO quieres respodner |
| publicado | CS POLICIA |
| publicado | cuando alguien te haga una pregunta trampa delante de otras personas, no titubees, responde asi |
| publicado | cuando un payaso se muda a un palacio |
| publicado | las manos cerradas x la postura abierta y ... |
| publicado | maquiavelo nos dice no te cases si eres pobre |
| publicado | necesitas un alter ego, pero que es? |
| publicado | no se dice ( con 2 columnas ) |
| publicado | palabras que haran que los demas piensen que eres un catedrático |
| publicado | por esta razon nadie te escucha cando hablas |
| listo para publicar | Si le vendes a gente rica |
| publicado | si quieres intimidar, mirale a ( zona del cuerpo), si quiers gustarle mirale a ( zona del cuerpo) , si quieres que te respeten x, si quieres seducir x s |
| publicado | si te llaman para robarte dinero responde asi : |
| publicado | socrates dijo |
| en edicion | top oradores con CEOS ( elon musk , mark zukerberg, bezzos, ... ) TRIALS REELS |
| publicado | usa estas preguntas para persuadir a cualquiera e influir en la mente de cualquiera |

**Nota sobre el reparto:** los nombres de lista son "Bernardo" y "Secundaria"
(fuente: `content_edit_task.account_handle` = 31 "Bernardo" + 21 "Secundaria", y
`import_log.source_label` = `clickup_folder:901318169377:Bernardo_Julio+Secundaria_Julio`.
Ojo: `src/lib/importers/clickup-importer.ts:140,284` **no** dice eso — sus
comentarios usan de ejemplo "Bernardo Secundaria_mayo", que es otra forma de
nombrar la sub-cuenta). Que "Secundaria" corresponda a
`@bernardojuradofacts` es lo lógico pero **no está escrito en ningún lado** —
pedido en `../fase-0-pedido.md`.

### Formas de ángulo que se repiten (cuenta cruda, sin views)

Se cuentan sobre los 52 conceptos. Sirve para pedir "dame 5 ángulos con la forma
de lista numerada". **No** dice cuál rinde mejor: eso requiere views, que no hay.

| Forma | Veces | Ejemplo |
|---|---|---|
| Lista numerada ("N cosas que…") | 13 | "8 señales de que eres insoportable" |
| Cita atribuida ("X dijo…") | 8 | "maquiavelo dijo, nunca juegues limpio en un juego" |
| Instrucción condicional ("si X, hacé Y") | 7 | "si te llaman para robarte dinero responde asi :" |
| Corrección de lenguaje ("no se dice / en español decimos") | 5 | "en español decimos me haces feliz" |
| Escena / situación social a resolver | 4 | "cuando alguien te haga una pregunta trampa delante de otras personas, no titubees, responde asi" |
| Metáfora suelta | 4 | "cuando un payaso se muda a un palacio" |

Cuando lleguen las transcripciones, esta tabla se reemplaza por la de arriba
(hooks reales con views) y esta queda sólo como cola de temas.
