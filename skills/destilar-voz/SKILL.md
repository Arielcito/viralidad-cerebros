---
name: destilar-voz
description: Convierte las transcripciones crudas de un cliente en un voz.md interpretado — cómo habla, en qué registros, con qué palabras y cuándo usa cada una — con cada rasgo medido sobre el corpus y citado con un video abrible. Usala cuando pidan destilar, actualizar o auditar la voz de un cliente de Viralidad (gocho, sensei, academia, bernardo, victor); cuando pregunten cómo habla alguien y la respuesta tenga que ser reusable; y siempre después de cosechar material nuevo, porque un corpus más grande cambia las frecuencias.
---

# Destilar una voz

## El problema que resuelve

Un cerebro con 700.000 palabras transcriptas todavía no sabe cómo habla el
cliente: tiene un archivo. Quien va a escribir un ad no puede leer 700.000
palabras, y si lee 20 videos se lleva una impresión — que es exactamente lo que
falla cuando el cliente dice "yo no hablo así" y no hay con qué contestarle.

Destilar es pasar del archivo a **reglas que alguien puede aplicar y romper**.
La prueba de que una regla sirve: se puede violar. "Habla cercano y directo" no
es una regla, porque ninguna pieza la incumple. "En un ad no dice *vaina*: 0
veces en las 18.110 palabras de sus 90 reels, contra 772 en las 552.293 de sus
lives" sí lo es, y además dice **cuándo**.

## Las tres partes de un rasgo bien destilado

Cada afirmación de `voz.md` lleva las tres. Si le falta una, todavía es una
impresión:

1. **La cifra con su base.** "772 veces en las 552.293 palabras de los lives", no
   "lo dice mucho". Sin base, un número no se puede comparar ni auditar.
2. **El verbatim con su ref.** Al menos una frase textual y un `ig-NNN` /
   `yt-NNN` que se abre y se escucha en 10 segundos.
3. **Cuándo aplica.** El rasgo va atado a un tipo de pieza. Un rasgo que vale
   "siempre" casi nunca es cierto: el mismo hombre vende distinto de como
   conversa.

## El procedimiento

**1. Medí antes de leer.**

```bash
node scripts/medir-voz.mjs <slug> > /tmp/<slug>-medicion.md
```

Separa el corpus por registro y saca volumen, léxico distintivo de cada registro
contra los otros, muletillas, trato (tú/usted/vos), largo de oración y las
aperturas y cierres de las piezas más vistas. Leelo entero antes de abrir una
sola transcripción: es lo que te dice **qué** mirar.

**2. Elegí los contrastes, no los tops.** La lista de palabras más frecuentes de
cualquier hispanohablante es "que, de, la, y". Lo que hace reconocible a alguien
está en la columna **ratio**: lo que dice en un registro y no en el otro. Empezá
por ahí y por los trigramas, que es donde viven las muletillas.

**3. Abrí los videos y escuchá.** Este paso es el que separa destilar de
tabular, y no se saltea. Un ratio dice que la palabra aparece; sólo el video
dice **cuándo** la usa, con qué tono y si es suya o de un invitado.

```bash
grep -rn -B3 -A6 "por lo menos" cerebros/<slug>/fuentes/transcripciones/yt-*.md | head -40
```

Buscá una palabra rara, no una oración: los subtítulos automáticos vienen
cortados a mitad de frase.

**4. Escribí `voz.md`** con la estructura de abajo. Cada rasgo con sus tres
partes.

**5. Verificá.**

```bash
node scripts/verificar-citas.mjs <slug>
```

Chequea que cada frase entrecomillada esté de verdad en el video que le
atribuís. Tiene que dar 0 errores. Después re-corré `medir-voz.mjs` y compará:
toda cifra de `voz.md` tiene que reproducirse. Las que no, se corrigen —
ya pasó, y por eso está el paso.

## Qué mirar, en orden de rendimiento

Lo que más sirve al que escribe, primero. `voz.md` se lee en orden y casi nadie
llega al final.

| | Qué buscar | Por qué rinde |
|---|---|---|
| **Los registros** | Cuántos hay, con qué palabras se separan, y cuál va en cada tipo de pieza | Es la decisión que se toma en cada pieza, y la que más delata una imitación |
| **El trato** | tú / usted / vos / ustedes, y **cuándo cambia** | Se mezcla solo al escribir y salta a la vista |
| **Aperturas y cierres** | El molde de los primeros 3 segundos y el de la última línea | Es lo más reusable que tiene un corpus: se calca entero |
| **Muletillas** | Trigramas propios de cada registro | Son lo que hace que un texto "suene a él" sin decir nada |
| **Cómo arma un argumento** | Cómo pasa de la afirmación a la prueba: ¿anécdota? ¿número? ¿analogía? ¿pregunta retórica? | Es lo que hace que el desarrollo no se caiga después de un buen hook |
| **Cómo trata una objeción** | Qué hace cuando dice "sé lo que estás pensando" | Media pieza de venta es esto |
| **Qué no dice nunca** | Palabras del nicho que evita, y con qué las reemplaza | Un sinónimo de más lo vuelve genérico |
| **Ritmo** | Frases largas o cortas, repetición, enumeración | Lo último, porque es lo que menos se puede accionar |

## Estructura de `voz.md`

```markdown
# Voz — <Cliente>

## Lo primero que hay que saber
<El rasgo que más delata una imitación, en tres líneas. Va acá porque es lo
único que algunos van a leer.>

## Los registros
<Tabla con un registro por fila: cuándo se usa, base en palabras, y las 3-5
palabras que lo marcan con su frecuencia por cada 10.000.>

## Las frecuencias, lado a lado
<La tabla completa. Es la fuente de toda cifra que se cite en una discusión.>

## El trato
## Cómo abre
## Cómo cierra
## Cómo arma un argumento
## Cómo trata una objeción
## Léxico propio
## Lo que no dice
## Cómo se midió
<Qué corpus, cuántas palabras, con qué comando, en qué fecha. Es lo que permite
re-contar y descubrir que algo quedó viejo.>
```

Cada sección con verbatim y ref. La última no es burocracia: es lo que hace que
la próxima persona pueda re-medir en vez de creerte.

## Las trampas

- **Tema disfrazado de voz.** Si grabó ocho videos sobre un lanzamiento, esa
  palabra encabeza todas las tablas y no es un rasgo. Chequealo mirando en
  cuántas piezas distintas aparece, no cuántas veces en total.
- **Un solo registro.** Con puros reels de 30 segundos no se puede separar cómo
  habla de cómo escribe un guion. Si el corpus tiene una sola fuente, `voz.md`
  lo dice y las reglas de registro quedan `SIN DATO` hasta cosechar habla larga
  (`scripts/cosechar-youtube.mjs`).
- **Base chica.** Una palabra 3 veces en 2.000 palabras da un ratio enorme y no
  significa nada. Pedile a la cifra una base que aguante.
- **El ASR.** Los subtítulos automáticos son confiables para giros de lengua y
  poco confiables para dígitos y nombres propios. Un rasgo de voz se puede
  sostener sobre ASR; una cifra del negocio, no — esa sale de `oferta.md`.
- **La voz del invitado.** En entrevistas y lives hay más de una persona
  hablando y la transcripción no las separa. Antes de atribuirle una muletilla,
  mirá el contexto.
- **Artefactos de transcripción.** `[música]`, los saludos del chat en vivo y las
  repeticiones del ASR inflan conteos. `medir-voz.mjs` limpia los corchetes; el
  resto se ve leyendo.

## Cuando el resultado es flaco, decilo

Un `voz.md` corto y honesto sirve más que uno largo y adornado: quien escribe
sabe qué puede apoyar y qué tiene que preguntar. Si el corpus sólo alcanza para
léxico y aperturas, la sección de argumentación va `SIN DATO` con la pregunta
concreta —"¿tiene lives, webinars o entrevistas largas?"— y eso es material para
que la agencia le pida exactamente eso al cliente.
