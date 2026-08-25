---
name: cerebro-cliente
description: Escribe piezas en la voz real de un cliente de Viralidad leyendo su cerebro curado en cerebros/<slug>/ — ideas de ads, guiones de reel con planos, hooks, captions, emails de nutrición, guiones de VSL. Usala siempre que se pida contenido para Gocho / Franklin Ovalles, El Sensei, Ramón / Academia de Construcción / @lordconstruye, Bernardo Jurado o Víctor Heras, aunque no nombren el cerebro ni pidan "en su voz"; cuando pregunten qué vende un cliente, cómo habla, a quién le habla o qué le funcionó; cuando haya que auditar qué le falta a un cerebro; y cuando haya que agregarle material nuevo.
---

# Cerebro de cliente

## Por qué esta skill existe

La agencia vende contenido que tiene que sonar al cliente, no a un redactor
publicitario. Un ad genérico bien escrito rinde peor que una frase que el cliente
ya dijo en cámara, porque la audiencia ya lo escuchó hablar y detecta el doblaje.

Por eso cada cliente tiene un **cerebro**: markdown curado en `cerebros/<slug>/`
con su voz medida, su oferta textual, su audiencia y su archivo de lo que ya
funcionó — todo con la fuente citada. Tu trabajo no es inventar contenido bueno;
es **recombinar material que ya existe y está verificado**.

La regla de la que cuelga todo lo demás: **nada en un cerebro se inventa.** Lo
que no está se entrega marcado `SIN DATO`, con la pregunta concreta que hay que
hacerle al cliente. Un precio inventado en un ad no es un error de estilo, es un
problema con el cliente.

## Dónde están los cerebros

Esta skill viaja de tres formas y la carpeta `cerebros/` cae en distinto lugar
según cuál sea. Resolvé la ruta base **antes de leer nada**, en este orden:

1. **Instalada como plugin** (lo normal): los cerebros están en
   `${CLAUDE_PLUGIN_ROOT}/cerebros/<slug>/`. La variable la expone Claude Code;
   si no sabés a qué apunta, ejecutá `echo $CLAUDE_PLUGIN_ROOT`.
2. **Abriste el repo `viralidad-cerebros` directo**, o te llegó un zip de
   `empaquetar.mjs`: están en `cerebros/<slug>/` desde la raíz del proyecto.
3. **Ninguna de las dos**: buscá con
   `find . ~/.claude/plugins -maxdepth 6 -type d -name cerebros 2>/dev/null`.

En el resto de este archivo escribo las rutas como `cerebros/<slug>/…` por
brevedad. Sustituí por la base que resolviste. Si no encontrás la carpeta,
**decilo** en vez de escribir de memoria: una pieza sin cerebro es exactamente el
redactor genérico que esta skill existe para evitar.


## Clientes

| Slug | Cliente | Marca / cuentas |
|---|---|---|
| `gocho` | Franklin Ovalles — "Gocho" | El Trading Club · `@elgocho` (IG) · `@Gocholive` (YT) |
| `sensei` | El Sensei — Sebastián Rodríguez | `@elsensei` (madre, IG) + red de ~30 satélites. `@senseielcoach` es TT/YT, **no existe en IG** |
| `academia` | Ramón | Academia de Construcción · `@lordconstruye` |
| `bernardo` | Bernardo Jurado | `@juradonegocios` |
| `victor` | Víctor Heras | `@herasmedia` · `@victorherasemprendedor` |

Los cerebros están en distinto grado de avance. `gocho` es el más completo. Si
te piden un cliente cuyo cerebro es sólo catálogo, decilo antes de escribir en
vez de rellenar con oficio publicitario genérico.

Esa tabla puede quedar corta: el repo recibe clientes nuevos. Si te nombran uno
que no está acá, listá `cerebros/` antes de decir que no existe.

## El procedimiento

**1. Leé `cerebros/<slug>/CEREBRO.md` primero, siempre.** Es el archivo maestro
y es la fuente de las reglas: te da el orden de lectura, las reglas comunes y
las propias de ese cliente, el formato de salida exacto y una tabla de
**cobertura de fuentes** que dice para qué alcanza el cerebro hoy y para qué no.
Nada de lo que sigue acá reemplaza a ese archivo: esta skill te dice **por qué**
las reglas son las que son y **cómo** trabajar; el **qué** lo manda `CEREBRO.md`.

**2. Leé los archivos que CEREBRO.md te indique**, en ese orden. El orden no es
decorativo: la voz va primero porque es la restricción más fuerte, y la oferta va
antes que los hooks porque un hook brillante para la oferta equivocada no sirve.

**3. Buscá material verbatim antes de escribir una sola línea propia.** Las
transcripciones crudas están en `cerebros/<slug>/fuentes/transcripciones/`
(cientos de miles de palabras). Grepealas. Si vas a escribir sobre un tema, es
muy probable que el cliente ya haya dicho algo sobre ese tema mejor de lo que lo
vas a escribir vos.

```bash
grep -rli "fondeo" cerebros/gocho/fuentes/transcripciones/ | head
grep -rn -B2 -A6 "empezar desde cero" cerebros/gocho/fuentes/transcripciones/
```

Grepeá **una palabra rara**, no una oración: las transcripciones vienen de
subtítulos y están cortadas por línea a mitad de frase.

**4. Escribí**, con el formato de salida que trae `CEREBRO.md`.

**5. Pasá el checklist** del final de esta skill antes de entregar.

## Las tres cosas que separan una pieza usable de una inservible

### Verbatim gana a mejor escrito

Ante la duda entre una frase textual del cliente y una paráfrasis tuya más
elegante, va la textual. Su ventaja competitiva es que suena a él; tu prosa la
borra. Cuando uses algo textual, **citá de dónde salió** (`ig-NNN`, `yt-NNN`,
`oferta.md`) en la línea `REFERENCIA` o entre paréntesis. No es burocracia: es lo
que le permite al humano verificar en 10 segundos en vez de confiar.

Y tomatelo literal: si te preguntan de qué video sacaste una frase o un rasgo de
la voz, la respuesta es un `ig-NNN` / `yt-NNN` que se puede abrir, nunca "de su
estilo general". Cuando el cliente discute una pieza, esa referencia es lo único
que hay para contestarle.

### Los hooks se calcan, no se admiran

`biblioteca/hooks.md` tiene los hooks con métricas reales. Si un hook hizo 400k
views, la variante nueva **conserva su estructura y cambia el contenido**. No
"toma inspiración de". La estructura es lo que funcionó; el tema es lo
reemplazable.

Y leé las métricas con desconfianza sana: un número alto puede ser efecto de la
fecha (una cuenta en crecimiento reparte más views) y no del creativo. `hooks.md`
suele marcar esos casos. Un hook con menos views pero mejor tasa de comentarios
puede ser el mejor para llenar un ManyChat, y un molde puede quedarse con toda la
cola larga sin mover la mediana — `gocho/biblioteca/hooks.md` tiene medido ese
caso exacto.

### El registro cambia según la pieza

Un cliente casi nunca habla igual vendiendo que conversando con su comunidad, y
en varios cerebros esa diferencia está **medida en palabras por cada 10.000**, no
estimada. La regla general: **ads y venta → el registro de sus piezas de venta.
Nutrición y comunidad → el registro de sus lives.** El `voz.md` de cada cliente
dice cuáles son sus registros, con qué palabras se diferencian y cuál va en cada
pieza. Los números salen de ahí, nunca de esta skill: si mezclás registros, lo
hacés sonar menos profesional de lo que él elige sonar cuando vende.

## Compliance no es un paso opcional

Varios de estos clientes están en nichos donde Meta rechaza creativos: trading,
dinero, resultados económicos. Un ad mal escrito no rinde poco — no corre.

`oferta.md` de cada cliente tiene los disclaimers textuales y las reglas duras
del nicho. Leelas antes de escribir el cierre, no después.

Los dos patrones que más ayudan, y que ya son de ellos:

- **Recompensa diferida sin cifra.** Una analogía que promete progreso sin
  prometer un número pasa donde "seis mil dólares en una operación" no pasa.
- **Verbo verificable.** En trading, Gocho dice que sus alumnos **retiran**, no
  que ganan. Un retiro es un hecho comprobable; un P&L en pantalla es una
  promesa. Mejor argumento y mejor compliance a la vez.

Si una historia del cerebro está marcada con 🚨, tiene promesa implícita de
resultado. Se puede usar el cuerpo y hay que reescribir el cierre.

## Las cifras son el punto débil

Las transcripciones son **ASR** (reconocimiento automático). Los giros de lengua
son confiables; **los números y los nombres propios no lo son**. El
reconocimiento se come dígitos y destroza nombres ("Franklin o Valles",
"trincloud.com").

Entonces: los años de oficio, los montos, la cantidad de alumnos y los nombres de
personas o dominios salen de `oferta.md` o de una decisión ya registrada en el
cerebro. Si no están ahí, se preguntan.

## Formato de salida

Lo define `CEREBRO.md` del cliente, que trae el bloque canónico ya inyectado
(guion de reel con planos, y email de nutrición). Ese bloque sale de
`cerebros/COMUN.md` y se propaga con
`node scripts/sincronizar-comun.mjs` — si hay que cambiar el formato,
se cambia ahí una vez, no en cada cerebro.

Dos cosas que no están en el bloque y valen igual. Los planos tienen que ser
filmables con lo que el cliente realmente tiene y muestra: si su posicionamiento
es anti-ostentación, un plano de autos lo contradice aunque se vea lindo. Y
cuando entregues varias piezas, **hacelas distintas entre sí en el ángulo**, no
en la redacción: tres variantes del mismo ángulo son una sola idea escrita tres
veces, y no dan información al testear.

## Checklist antes de entregar

- ¿Cada cifra, precio, garantía y nombre propio sale del cerebro, y ninguno de tu
  cabeza ni de un ASR sin verificar?
- ¿El hook calca una estructura de `hooks.md`? ¿Cuál, con su ref?
- ¿En qué registro escribiste, y es el que `voz.md` asigna a este tipo de pieza?
  Tenés que poder nombrarlo.
- ¿El CTA es el textual de `oferta.md`?
- ¿Recorriste una por una las reglas de compliance de `oferta.md`, y la pieza
  lleva disclaimer si toca resultados?
- ¿Citaste las fuentes de lo verbatim, con `ig-NNN` / `yt-NNN` abribles?
- ¿Qué quisiste escribir y no pudiste por falta de dato? Va al final de la
  entrega, explícito, con la pregunta concreta para el cliente.
- Si guardaste la pieza en `salidas/` o `piezas/`, ¿corriste
  `node scripts/verificar-citas.mjs <slug>`? Chequea que cada frase
  entrecomillada esté de verdad en el video que decís. Ver `docs/PRUEBAS.md`.

Ese anteúltimo punto es el más valioso para el equipo: la lista de lo que falta
es lo que le permite a la agencia ir a pedirle exactamente eso al cliente.

## Si te piden agregar material a un cerebro

`cerebros/<slug>/INTAKE.md` tiene el estado de las fuentes y el procedimiento.
Resumen de lo aprendido a fuerza de perder tiempo:

- **YouTube es gratis, automático y es donde está el habla larga.** Un canal
  entero se cosecha con dos comandos:
  `node scripts/cosechar-youtube.mjs <slug> <url-del-canal>` baja el
  catálogo y los subtítulos automáticos sin descargar un solo video, y
  `node scripts/subs-a-transcripcion.mjs <slug>` los convierte. Es
  reanudable: cortarlo y volver a correrlo es seguro.
- **Después de cosechar, destilá.** Material nuevo cambia las frecuencias, y un
  `voz.md` medido sobre el corpus viejo pasa a mentir. La skill `destilar-voz`
  tiene el procedimiento, y `node scripts/medir-voz.mjs <slug>` saca los
  números sobre los que se escribe.
- **Instagram también es automático** desde 2026-08-13, y era el cuello de
  botella de todos los cerebros. Dos comandos:
  `node scripts/cosechar-instagram.mjs <slug> <handle...>` y después
  `node scripts/transcribir-instagram.mjs <slug> --top 100`. El truco es
  que yt-dlp choca contra el login wall de IG, pero el scraper de Apify devuelve
  un `videoUrl` del CDN que se baja sin sesión; de ahí va a Deepgram. El detalle
  está en `docs/INTAKE-INSTAGRAM.md`, incluido por qué hay que transcribir
  enseguida después de cosechar (la URL firmada caduca).
- **yt-dlp sale con exit 0 y 0 archivos** si se corta la red. Verificá contando
  archivos, nunca leyendo el exit code.
- Los intermedios (`fuentes/subs-youtube/`, `fuentes/audio/`) están gitignoreados
  a propósito: pesan más que el cerebro entero y se regeneran.

Los scripts sólo corren si tenés **clonado el repo** `viralidad-cerebros`. Desde
una instalación por plugin la carpeta es de sólo lectura en la práctica: lo que
escribas ahí lo pisa el próximo `/plugin update`. Para sumar material, trabajá en
el clon y pusheá.

Cuando escribas un archivo de cerebro nuevo, sostené la misma regla: cada
afirmación con su fuente, y `SIN DATO` donde no hay dato. Un cerebro con huecos
marcados es utilizable; uno con huecos rellenados a ojo no, porque ya no sabés
qué parte creer.

Si el cambio toca algo que vale para los cinco clientes (el formato de salida,
una regla común), va en `cerebros/COMUN.md` y se propaga con el script. Lo propio
de un cliente va en la sección "Reglas de este cliente" de su `CEREBRO.md`.

## Cerebro nuevo desde cero

`cerebros/<slug>/` con la misma estructura que los demás — `CEREBRO.md`,
`voz.md`, `oferta.md`, `audiencia.md`, `biblioteca/`, `fuentes/`. Lo más rápido
es copiar el esqueleto de un cliente que todavía no tiene transcripciones
(`academia` o `bernardo`) y vaciar el contenido, así arrastrás los encabezados y
las convenciones. `fase-0-pedido.md` es el documento que se le manda al cliente
para pedirle lo que falta; también conviene copiarlo.

Después: agregá el slug a la tabla de clientes de arriba, a la del `README.md` y
a `CLIENTES` en `scripts/empaquetar.mjs`, que si no el paquete no lo reconoce.
