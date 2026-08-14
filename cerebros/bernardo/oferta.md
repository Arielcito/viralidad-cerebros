# Oferta — Bernardo Jurado

> **Estado: parcial y asimétrica.** El frente del funnel está verificado línea
> por línea sobre `https://juradoacademia.com/`. El producto pago existe
> confirmado por el propio FAQ del cliente, pero su nombre, formato, duración,
> garantía y **precio son SIN DATO**. Nada de eso se estima acá. Ver
> `fase-0-pedido.md`.

## Productos

| Producto | Qué es | Precio | Promesa | Para quién | Fuente |
|---|---|---|---|---|---|
| Clase gratuita de "Transustanciación Comunicativa" | Clase **en directo** con opt-in previo (nombre, email, teléfono). Es el único producto con página de venta pública. | Gratis — verbatim: "Sin coste · Acceso inmediato · Sin compromiso" | "La habilidad que multiplica tus acuerdos, tu influencia y tu carrera" | "profesionales, ejecutivos, emprendedores y líderes" | `https://juradoacademia.com/` |
| "Acompañamiento" (nombre real SIN DATO) | Programa pago que se presenta **al final de la clase gratuita**. Existe confirmado. | **SIN DATO** | **SIN DATO** — lo único público es que es para "quienes quieran ir más lejos" | **SIN DATO** | FAQ de `juradoacademia.com`, pregunta "¿Es realmente gratuito?" |
| Libros propios | Dice tener 13 libros. Verificado al menos "Manual de Oratoria (Spanish Edition)", autor "Bernardo Jurado Toro", ISBN-13 9798361683727 (formato exacto SIN DATO: Amazon no lo expuso) y "Cuatro Palabras: ...la voluntad de hacerlo". | SIN DATO (Amazon no expuso precio) | Credencial más que producto de funnel | Lectores / ejecutivos | amazon.com/dp/B0BLYHPZ86 + juradogrupoeditorial.com |
| Jurado Grupo Editorial (B2B) | Su empresa de self-publishing. Unidades: "Servicios editoriales", "Servicio de publicidad", "Unidad de negocios de entrenamiento, oratoria y ventas", "Unidad de eventos corporativos". | SIN DATO (el sitio sólo dice "precios accesibles" en un testimonio) | "¡Desata tu creatividad, haz realidad tu libro ahora mismo!" | Autores que quieren publicar | juradogrupoeditorial.com |

⚠️ **La editorial es un negocio distinto del funnel de oratoria.** No mezclar en
ads de `@juradonegocios` sin confirmar con el cliente.

## Escalera de valor

Qué se vende primero, qué después, y con qué se hace upsell.

```
Reel orgánico (@juradonegocios / @bernardojuradofacts)
   ↓  CTA de bio: juradoacademia.com/?utm_source=IG-biography&utm_medium=OG
                  &utm_campaign=JURADONEGOCIOS  (o ...=JURADOFACTS)
   ↓
Landing de opt-in (GoHighLevel) → form "Opt in" id BF1B5CcIrcJ4tfERCX0D
   campos: "Nombre y Apellido *", "Email *", "Teléfono *", botón "Enviar"
   captura utm_source / utm_medium / utm_campaign
   ↓
Clase gratuita EN DIRECTO (+ grabación si hay imprevisto)
   ↓
Pitch del "acompañamiento" pago  ←  SIN DATO de acá para abajo
```

Fuente del tramo verificado: `https://juradoacademia.com/` (HTML público, assets
`stcdn` / `api.leadconnectorhq.com`) + bios de IG.

**Confirmado que la clase es en directo, no evergreen** — FAQ verbatim: "¿Y si
no puedo asistir en directo? — Te recomendamos asistir en directo para
aprovechar la interacción con Bernardo. Registrándote, recibirás información
sobre cómo acceder a la grabación si surge algún imprevisto."

Eso tiene consecuencia de copy: hay urgencia real (fecha/hora), y hay que pedirle
al cliente la cadencia de la clase antes de escribir ads con countdown.

## El método (contenido, no SKU)

"Transustanciación Comunicativa", 4 módulos nombrados. Todo verbatim de
`https://juradoacademia.com/`, sección "El método".

| # | Módulo | Etiqueta | Copy verbatim |
|---|---|---|---|
| 01 | Ingeniería de Percepción | "Autoridad instantánea" | "Aprende a controlar cómo te perciben antes de que digas la primera palabra. Presencia, postura, voz y ritmo son herramientas de poder que se pueden dominar." |
| 02 | Estructura Narrativa de Alto Impacto | "Claridad + Persuasión" | "Los mejores comunicadores no improvisan: estructuran. Domina el marco que hace que tus ideas fluyan con claridad y que tu audiencia no pueda dejar de escucharte." |
| 03 | La Voz de Mando | "Confianza real" | "Tu voz es tu instrumento más poderoso. Aprende a usarla para proyectar liderazgo, generar confianza y cerrar conversaciones de alto valor con autoridad natural." |
| 04 | Comunicación que Cierra | "Ingresos × comunicación" | "De nada sirve comunicar bien si no conviertes esa energía en acuerdos, clientes y oportunidades. Aprende a conectar tu mensaje directamente con el resultado económico." |

Frase de posicionamiento del método, verbatim:

> "No es hablar más bonito. Es ingeniería de percepción. Es hacer que el mismo
> mensaje, dicho por ti, genere un impacto completamente diferente en quien te
> escucha."

Diferenciador declarado, verbatim del FAQ:

> "La mayoría de los cursos enseñan técnicas de hablar en público. Bernardo
> enseña ingeniería de percepción: cómo cambiar lo que los demás sienten cuando
> te escuchan. Es la diferencia entre aprender trucos y transformar tu identidad
> comunicativa."

## VSLs

| VSL | Link | Producto que vende | Duración | Transcripto |
|---|---|---|---|---|
| No hay VSL con video. La pieza central es una **landing de opt-in larga**. | `https://juradoacademia.com/` | Opt-in a la clase gratuita | n/a | n/a — leída completa |
| La clase en sí (post opt-in) | **bloqueada** tras el form de GHL | Ahí vive el pitch real, el nombre del programa y el precio | SIN DATO | no |
| Sitio de la editorial | `https://www.juradogrupoeditorial.com/` | Servicios editoriales B2B, catálogo de libros a Amazon | n/a | leído |

Detalle técnico de la landing (por si hay que replicarla o instrumentarla): los
botones son `href="#"` y abren un modal titulado "Acceso gratuito" con el form de
GoHighLevel embebido (`api.leadconnectorhq.com/widget/form/BF1B5CcIrcJ4tfERCX0D`,
verificado); **no hay URL de siguiente paso pública**. Los links del footer
(Política de privacidad / Aviso legal / Contacto) también son `href="#"`: hoy no
llevan a ninguna parte. Footer: "© 2026 Bernardo Jurado. Todos los derechos reservados." +
links Política de privacidad / Aviso legal / Contacto. Mismo stack GoHighLevel
que el resto de la agencia.

## CTAs oficiales

El texto **exacto** de cada CTA según la etapa. Se usan verbatim, nunca
reescritos.

| Etapa | CTA textual | Fuente |
|---|---|---|
| Orgánico / crecimiento | "Si quieres mejorar tu comunicación y oratoria, mi nombre es Bernardo Jurado, sígueme aquí." | `~/.claude/skills/reel-to-guion/clients.json` |
| Lead magnet (botón principal) | "👇 Quiero ver la clase gratuita" | juradoacademia.com |
| Lead magnet (variantes en la página) | "Ver la clase gratuita →" · "Ver la clase →" · "Acceso gratuito" | juradoacademia.com |
| Micro-copy de reaseguro junto al CTA | "Sin coste · Acceso inmediato · Sin compromiso" | juradoacademia.com |
| Consentimiento del form | "Al clickear en enviar acepta los términos y condiciones" | form GHL en juradoacademia.com |
| Venta directa del programa pago | **SIN DATO** — no hay ningún CTA público al producto pago | — |

## Prueba y credenciales (usables en copy, todas verbatim)

Fuente única: `https://juradoacademia.com/`, secciones de credenciales y "Sobre
Bernardo Jurado". Estas son las **únicas** credenciales que se pueden usar.

- "44 años de carrera Capitán de Navío"
- "4 Buques de guerra bajo su mando como Capitán de Navío"
- "13 Operaciones internacionales UNITAS con la Armada de EE.UU."
- "13 Libros publicados sobre comunicación y liderazgo"
- "+30 Años formando líderes y ejecutivos de alto nivel"
- "CEO de Jurado Grupo Editorial — editorial boutique con más de 130 escritores en todo el mundo"
- "Profesor de posgrado en la Universidad de Carabobo y formador de C-Levels y líderes corporativos"
- "Lector voraz — 1 libro por semana durante décadas, más de 700 palabras por minuto"

Historia de origen, verbatim y completa (es el mejor activo narrativo que hay):

> "Soy Bernardo Jurado. A los 17 años entré a la Escuela Naval de Venezuela. A
> los 21 me gradué oficial. A los 44 me retiré con el grado de **Capitán de
> Navío**, habiendo comandado 4 buques de guerra y participado en 13 operaciones
> internacionales junto a la Armada de los Estados Unidos."
>
> "Desde entonces he dedicado mi vida a dominar y enseñar lo que llamo la
> **Transustanciación Comunicativa**: la ingeniería de percepción que transforma
> lo ordinario en extraordinario."

Anécdota de origen del negocio editorial, verbatim de la landing: "13 libros
publicados — el primero lo vendió en un restaurante de Coral Gables. Hoy lo leen
ejecutivos en toda América Latina."

## Objeciones y respuestas

Las objeciones reales de sus leads y cómo las responde él (no cómo las
responderías vos). El FAQ de la landing es la única fuente; son objeciones
**anticipadas por quien escribió la página**, no necesariamente objeciones
observadas en leads reales — eso último es SIN DATO.

| Objeción | Respuesta verbatim |
|---|---|
| "¿Esto es para mí?" | "Para profesionales, ejecutivos, emprendedores y líderes que saben que su comunicación no refleja todo su potencial y están dispuestos a hacer algo al respecto. Si tienes ambición y quieres escalar, esta clase es para ti." |
| "¿De verdad es gratis o me van a vender algo?" | "Sí, la clase es completamente gratuita. Al final, Bernardo presentará una oportunidad para quienes quieran ir más lejos con su acompañamiento, pero el acceso a la clase no tiene ningún coste." |
| "Ya hice cursos de oratoria" | "La mayoría de los cursos enseñan técnicas de hablar en público. Bernardo enseña ingeniería de percepción: cómo cambiar lo que los demás sienten cuando te escuchan. Es la diferencia entre aprender trucos y transformar tu identidad comunicativa." |
| "¿Cuánto tardo en ver resultados?" | "Los primeros cambios son inmediatos — en la propia clase ya aplicarás herramientas concretas. Los resultados profundos en tu carrera e ingresos suelen manifestarse en un plazo de 30 a 90 días de aplicación constante." |
| "No puedo el día de la clase" | "Te recomendamos asistir en directo para aprovechar la interacción con Bernardo. Registrándote, recibirás información sobre cómo acceder a la grabación si surge algún imprevisto." |
| Objeción de precio del programa pago | **SIN DATO** — no se puede responder una objeción de precio sin saber el precio |

### Descalificación (copy defensivo reutilizable)

Bloque "🚫 Esto NO es para ti si…", verbatim. Es el único contrapeso de
expectativas que tiene la página y sirve muy bien para filtrar leads en ads:

- "Crees que ya lo sabes todo sobre comunicación y no necesitas mejorar nada."
- "No crees que hablar bien pueda cambiar tu carrera, tus ingresos o tu vida."
- "Buscas una fórmula mágica sin esfuerzo. Aquí hay método, práctica y disciplina."
- "No tienes ningún interés en liderar, influir o dejar huella en las personas con las que hablas."
- "Prefieres seguir en tu zona de confort antes que incomodarte para crecer de verdad."

## Cosas que NO se pueden prometer

> **Esta sección requiere decisión explícita del humano (Emilio / Ivan /
> Bernardo) antes de publicar un solo ad pago.** No es una recomendación de
> estilo: es riesgo de rechazo de plataforma y de reclamo.

El nicho no es finanzas, pero **la landing hace claims de ingresos**, y eso lo
mete en el mismo terreno regulatorio que un ad de trading. Todo lo siguiente
está en la página **sin ningún disclaimer de resultados**:

**Claims numéricos de la propia página**
- "cierran acuerdos de $10.000+"
- "3× Aumento promedio en tasa de cierre de acuerdos"
- "$10k+ Valor de los acuerdos que aprenden a cerrar los participantes"
- "90 Días para ver resultados tangibles en tu carrera e ingresos"
- "+130 Escritores y líderes formados"
- "💰 Multiplicas tus ingresos — Cuando comunicas el valor que realmente tienes, las personas pagan lo que vales. Tu tarifa sube"

**Testimonios con cifras duras (sin substanciación pública)**
- Miguel Moreno (Mike del Futuro · Alto ticket): "Pasé de no tener confianza a cerrar ventas de $80.000 en una sola llamada. En el último año generé más de $1.000.000. Lo único que cambió: mi comunicación."
- Ramón Páez (Referente mundial de liderazgo): "De tener potencial sin herramientas a liderar equipos de +500 personas y cerrar más de $3.000.000 al año. La transformación fue de comunicación, no de imagen."
- Tito Luzardo (Speaker internacional · Coach): "Me convertí en speaker internacional, coach de millonarios y tengo más de 600.000 seguidores. Todo empezó aprendiendo a hablar con impacto real."
- Cristina Jiménez (Empresaria): "En mi primer mes di un giro de 180° a mi comunicación, subí mis precios y me siento completamente segura en cualquier conversación de ventas."
- Saúl González (Empresario): "Pensaba que no tenía autoridad al sentarme con empresarios más adultos — me temblaba la voz. Hoy comunico con completa autoridad y capto la atención de todos en las reuniones." *(este no tiene cifra — es el más seguro de los seis)*
- Isabel Mendoza (Formadora corporativa): "Llevaba años siendo pieza clave pero pasaba desapercibida. Después del método me dieron la oportunidad que merecía — hoy soy formadora y doy clases en tarima delante de decenas de personas." *(sin cifra — también seguro)*

**Disclaimers encontrados en la página: ninguno de earnings ni de resultados.**
Lo único cercano es el FAQ de los "30 a 90 días", y **no exime** — al contrario,
fija un plazo. Y esta línea directamente **amplifica** el claim en vez de
matizarlo: "Estos no son datos teóricos. Son el resultado de aplicar el método
con profesionales y ejecutivos en toda América Latina y EE.UU." No hay página de
"resultados típicos" ni de "resultados no garantizados".

**Bandera aparte — la barra de prensa.** La página dice "Visto en TV Azteca ·
Univisión · Forbes · Telemundo · CNN en Español" y en el HTML público quedó al
lado el placeholder de plantilla "Tu logo aquí". No hay ni un link de respaldo.
**No copiar esos logos ni esas menciones a un ad sin evidencia escrita.**

### Reglas provisorias hasta que el humano decida

Mientras no haya decisión, estas son las reglas de trabajo por defecto:

1. Ningún ad usa cifras de dinero (ni $10.000, ni $80.000, ni $1.000.000, ni
   "3×", ni "multiplicas tus ingresos").
2. Ningún ad usa los testimonios con cifras. Se permiten los dos sin cifra
   (Saúl González, Isabel Mendoza).
3. Ningún ad usa la barra de prensa.
4. Ningún ad promete plazo ("en 90 días").
5. Los ads se apoyan en lo que **sí** está substanciado y es verificable: las
   credenciales militares, los 13 libros, la editorial, la cátedra de posgrado, y
   el beneficio no-monetario ("Hablas en público sin miedo", "Proyectas liderazgo
   real").
6. Se usa el bloque de descalificación como contrapeso explícito de expectativas.

Preguntas concretas para el humano en `fase-0-pedido.md`.
