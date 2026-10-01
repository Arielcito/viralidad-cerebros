---
name: email-semanal
description: Arma la tanda semanal de emails de un cliente de Viralidad (gocho, sensei, academia, bernardo, victor) combinando su cerebro curado con copywriting de email — cadencia fija por cliente, cada email calcado de un hook o una historia real, con verbatim citado y compliance del nicho. Usala cuando pidan "los emails de la semana", "la secuencia de email de Gocho", "newsletter", "email marketing para <cliente>", "convertí este reel/live en emails", o cualquier tanda de más de un email; para un email suelto alcanza con cerebro-cliente.
---

# Emails de la semana

## Qué resuelve

`cerebro-cliente` sabe escribir **un** email en la voz del cliente. Esta skill
sabe escribir **la semana**: qué email va qué día, con qué objetivo, calcado de
qué material, y cómo los tres se encadenan sin repetirse. El cerebro aporta la
voz, la oferta y el archivo de lo que funcionó; acá se agrega el oficio de
email —asunto, apertura, un solo CTA, P.S.— y la cadencia.

La regla madre no cambia: **nada se inventa**. Un email con precio inventado o
con "garantía" en un nicho que la prohíbe no es un error de estilo, es un
problema con el cliente. Lo que falta va `SIN DATO` con la pregunta concreta.

## Dónde están los cerebros

Resolvé la ruta base antes de leer nada, en este orden:

1. **Instalada como plugin**: `${CLAUDE_PLUGIN_ROOT}/cerebros/<slug>/`
   (`echo $CLAUDE_PLUGIN_ROOT` si no sabés a qué apunta).
2. **Repo `viralidad-cerebros` o zip de `empaquetar.mjs`**: `cerebros/<slug>/`
   desde la raíz.
3. **Ninguna**: `find . ~/.claude/plugins -maxdepth 6 -type d -name cerebros 2>/dev/null`.

Abajo escribo `cerebros/<slug>/…` por brevedad. Si no encontrás la carpeta,
**decilo** en vez de escribir de memoria.

## Qué pedir antes de escribir

Tres datos de entrada. Si faltan, asumí y decí qué asumiste en la primera línea
de la entrega.

1. **Cliente** (slug).
2. **Qué pasó esta semana**: el reel o live que salió, el tema que se está
   empujando, un evento (clase en vivo, apertura de cupos). Es lo que hace que
   la tanda sea de *esta* semana y no genérica. Sin esto, la tanda sale de
   `biblioteca/` sola y hay que avisarlo.
3. **Objetivo de la semana**, si difiere del default de la cadencia: nutrir,
   llenar una clase, empujar a la llamada.

## El procedimiento

**1. `cerebros/<slug>/CEREBRO.md` primero, siempre.** Manda el orden de lectura,
las reglas del cliente, el formato de salida y la tabla de cobertura. Si la
cobertura dice que la voz no está destilada, la tanda sale con esa advertencia
arriba, no se rellena con oficio.

**2. `cerebros/<slug>/email/estructura-semanal.md`.** La cadencia del cliente:
cuántos emails, qué día, con qué objetivo, en qué registro, de qué material.
Si el archivo no existe, usá la cadencia por defecto de abajo y **creá el
archivo** con esa cadencia marcada como supuesto, para que la próxima vez ya
esté y alguien la corrija.

**3. Los archivos que `CEREBRO.md` indique**, en su orden: `voz.md` primero
(y dentro, los registros y la mezcla usted/tú), después `oferta.md` con su
Compliance, `audiencia.md`, `biblioteca/hooks.md`, `biblioteca/historias.md`.

**4. Material verbatim antes de una línea propia.** Cada email se ancla en algo
que el cliente ya dijo: una historia de `historias.md`, un hook de `hooks.md`,
una respuesta a objeción de `oferta.md`. Grepeá las transcripciones por una
palabra rara del tema de la semana:

```bash
grep -rli "fondeo" cerebros/<slug>/fuentes/transcripciones/ | head
grep -rn -B2 -A6 "empezar desde cero" cerebros/<slug>/fuentes/transcripciones/
```

`voz.md`, `historias.md` y `oferta.md` son índices, no fuentes: cuando una
frase te llega por ahí ("Y si tú quieres aprender…", 33 reels), grepeala igual
y anotá el `ig-NNN` donde la leíste. Los archivos curados a veces dicen "en
`yt-015`" y la frase está en otro video, o dicen "33 reels" sin nombrar uno. La
ref que va a `REFERENCIA` es la que vos abriste, no la que el índice prometió.

**5. Escribí la tanda** con el formato de `CEREBRO.md` (bloque "Email / mensaje
de nutrición"). Un archivo, todos los emails, encabezado con supuestos y con la
lista de `SIN DATO` al final.

**6. Checklist** (abajo) y el test de trazabilidad sobre el archivo entregado,
viva donde viva:

```bash
# plugin instalado
node "$CLAUDE_PLUGIN_ROOT/skills/email-semanal/scripts/verificar-tanda.mjs" <slug> <ruta/a/emails-semana.md>
# dashboard
node .claude/skills/email-semanal/scripts/verificar-tanda.mjs <slug> <ruta/a/emails-semana.md>
```

Si no encuentra el cerebro solo, pasale `--cerebros <ruta a la carpeta cerebros/>`.

Arma un cerebro sombra en `/tmp`, corre `verificar-citas.mjs` contra la tanda
y lo borra; no toca el cerebro real. Si marca `✗ … atribuida a X; está en Y`,
corregí la ref y volvé a correr: una tanda se entrega con `✓ 0 errores`. Si la
guardaste en `cerebros/<slug>/piezas/`, alcanza con
`node cerebros/scripts/verificar-citas.mjs <slug>`.

## Cadencia por defecto — 3 emails, tres trabajos distintos

Vale cuando el cliente no tiene `email/estructura-semanal.md`. Los días son
convención de la agencia, no dato del cliente: van marcados como supuesto.

| # | Día | Objetivo | Molde | Material |
|---|---|---|---|---|
| 1 | Lunes | **Nutrición** | Historia → lección → puente a la oferta | una anécdota de `historias.md` que toque el tema de la semana; o el reel/live que salió, contado en primera persona |
| 2 | Miércoles | **Prueba / objeción** | PAS: la objeción en boca del lector → él la agita con lo que vivió → cómo la contesta la oferta | fila de "Objeciones" de `oferta.md` + su respuesta textual en vivo, si la hay |
| 3 | Viernes | **Venta** | Cierre condicional del cliente: "si tú quieres… / si calificas" → un solo CTA | la promesa textual de `oferta.md` y su CTA oficial; **cero cifras nuevas** |

Los tres tienen que ser distintos **en ángulo**, no en redacción: tres emails
sobre la misma historia son una idea escrita tres veces. El 3 puede
retomar la historia del 1 en una línea (un callback), no volver a contarla.

## Las reglas del email que el cerebro no trae

El cerebro mide cómo habla. Estas son las que agrega el formato:

- **El asunto se calca de un hook medido.** `hooks.md` tiene las estructuras
  que rindieron con su métrica. El asunto conserva la estructura y cambia el
  contenido; cero mayúsculas de grito, cero emoji salvo que el cliente los use
  en sus captions. Preferí los hooks con mejor **tasa de comentarios**, no los
  de más views: en un email se mide apertura y clic, no alcance.
- **Siete palabras como máximo, contadas.** Un celular corta el asunto cerca
  de ahí y lo que sigue no existe. Contá las palabras de cada asunto y anotá el
  número en `REFERENCIA` ("asunto: 6 palabras"); "Exactamente lo que yo haría
  en tu lugar" son 8 y se nota recién al contar. Si da 8, sacá una, no la
  dejes "porque suena bien".
- **Las cifras del reel de la semana también son ASR.** Que el reel sea
  literalmente sobre montos ("¿3.000? ¿1.000? Con 50…") no las vuelve dato:
  la transcripción es automática y los números son lo primero que confunde.
  Un email con `⚠️ cifra ASR` al lado se envía igual, con la advertencia
  adentro. Así que el email conserva la **forma** del reel (la escalera, la
  pregunta, el remate) y deja los números afuera: "¿cuánto necesitas? mucho
  menos de lo que piensas"; los montos van a `SIN DATO` con el reel a abrir y
  el minuto. Vale igual para una cifra de `historias.md` si el archivo no la
  marca como verificada.
- **Sin saludo antes del gancho.** Si `voz.md` dice cómo abre el cliente en su
  contenido de venta, el email abre igual. La primera línea del cuerpo hace el
  trabajo del hook hablado.
- **Una oración por línea, del largo que él habla.** Si `voz.md` mide 10
  palabras por oración, el email va a 10, no a 25. El email se lee en celular:
  párrafos de una o dos líneas.
- **El registro lo decide la estructura semanal del cliente**, no esta skill.
  Regla general de los cerebros: venta → registro de venta; nutrición →
  registro de comunidad. Pero un email es texto escrito y público: si el
  registro de comunidad trae groserías o localismos que el cliente se
  autocensura al vender, el email toma el léxico del registro de venta y solo
  la calidez del de comunidad. `estructura-semanal.md` dice cuál.
- **Un CTA por email, textual de `oferta.md`, una sola vez** en el cuerpo. El
  P.S. puede repetirlo con otras palabras suyas, no con las tuyas.
- **Nada que el email no pueda cumplir.** Si el CTA oficial es "comenta PUEDO"
  y esto es un email, el CTA se adapta al canal (link, responder al email)
  **sólo si `oferta.md` trae uno para ese canal**. Si no, va `SIN DATO: CTA de
  email` y se usa el de la página de venta.
- **Compliance igual que en un ad.** Recorré las reglas de `oferta.md` una por
  una. Si el email toca resultados, lleva `DISCLAIMER`. En nichos de dinero,
  el verbo verificable ("retiran") gana al verbo promesa ("ganan").

## Checklist antes de entregar

- ¿Cada email tiene un objetivo distinto y un ángulo distinto? Nombralos.
- ¿Cada asunto calca una estructura de `hooks.md`? ¿Cuál, con su ref?
- ¿Cada verbatim tiene su `ig-NNN` / `yt-NNN` en `REFERENCIA`, en la misma
  línea que la cita, y lo abriste o lo grepeaste? `voz.md §…` o
  `historias.md §N` acompañan a la ref del video, no la reemplazan: el
  verificador le asigna a cada cita la ref más cercana en líneas, y una cita
  con sólo `voz.md` al lado se lleva la del vecino.
- ¿Cada asunto tiene su conteo de palabras y ninguno pasa de 7?
- ¿Corriste `verificar-tanda.mjs` sobre el archivo final y dio `✓ 0 errores`?
- ¿En qué registro escribiste y es el que `estructura-semanal.md` asigna?
- ¿Cifras, precio, garantía, nombres propios: todos del cerebro, ninguno tuyo
  ni de un ASR sin verificar?
- ¿El CTA es el textual de `oferta.md` y aparece una vez?
- ¿Disclaimer donde toca resultados?
- ¿La lista de `SIN DATO` está al final, con la pregunta concreta para el
  cliente? Es lo que la agencia va a ir a pedir.

## Lo que esta skill no hace

No mide qué email rindió: para eso hace falta la plataforma de envío con sus
aperturas y clics, y hoy ningún cerebro la tiene. Cuando llegue, va a
`cerebros/<slug>/email/biblioteca.md` con el mismo criterio que `hooks.md`:
asunto verbatim, fecha, apertura, clic. Ahí los asuntos dejan de calcarse de
los reels y empiezan a calcarse de los emails que abrieron.
