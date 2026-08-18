# Cómo usar un cerebro

Un **cerebro de cliente** es markdown curado con la voz real del cliente, su
oferta textual, su audiencia y el archivo de lo que ya le funcionó. Sirve para
que Claude te escriba guiones, ads, hooks, captions y emails **que suenan a él**,
no a un redactor publicitario.

No hay que programar. Elegí una de las tres formas — si estás en Cowork o
en Claude Code, la Forma 0 es la buena.

---

## Forma 0 — El plugin (la más rápida)

Se instala una sola vez y quedan los cerebros de **todos** los clientes
disponibles desde cualquier proyecto tuyo. Nombrás al cliente y la skill se
activa sola.

**Si trabajás en Cowork** (la mayoría del equipo), es por interfaz, no por
comando:

1. Pestaña **Cowork** → menú **Customize** → solapa **Plugins**.
2. En **Personal plugins**, botón **+** → **Add marketplace**.
3. **Add from a repository** y pegás
   `https://github.com/Arielcito/viralidad-cerebros`.
4. **Install** sobre el plugin `cerebros`.

Si el botón de agregar marketplace no aparece, es que el admin de la
organización tiene restringidos los plugins de terceros: avisá y se habilita.

**Si usás Claude Code**, dos comandos adentro de `claude`:

```
/plugin marketplace add Arielcito/viralidad-cerebros
/plugin install cerebros@viralidad-cerebros
```

Para traer los cerebros nuevos que se suban después: `/plugin update cerebros`
en Claude Code, o el botón de update del plugin en Cowork. **Si algo que te
dijeron que ya está no aparece, es esto**: tenés la versión vieja cacheada.

## Forma 1 — Un Proyecto en claude.ai (la más simple)

Para el equipo de contenido. Sin terminal, sin git.

1. Entrá a **claude.ai** → **Projects** → **Create project**.
2. Nombralo con el cliente, p. ej. *Cerebro Gocho*.
3. En **Instructions**, pegá el contenido completo de `INSTRUCCIONES-PROJECT.md`
   (está en esta misma carpeta).
4. En **Knowledge**, subí los archivos de `cerebros/<cliente>/`:
   - `CEREBRO.md`, `voz.md`, `oferta.md`, `audiencia.md` ← **estos cuatro son
     obligatorios**
   - `biblioteca/hooks.md`, `biblioteca/historias.md`
   - `fuentes/catalogo.csv` y `fuentes/catalogo-youtube.csv`
   - `piezas/` — lo que ya se produjo, sirve de ejemplo de formato
5. Después, si entran, subí `fuentes/transcripciones/` (entre 80 y 196 según el cliente). Si el
   proyecto se llena, **dejalos afuera y listo**: los cuatro archivos curados ya
   traen citado lo mejor de las transcripciones. Lo único que se pierde es la
   capacidad de encontrar frases nuevas.

Ya está. Pedile cosas en lenguaje normal:

> *Armame 3 ideas de ads para Gocho, con guion y planos.*
> *¿Qué objeciones tiene su audiencia sobre el capital?*
> *Reescribí este caption en su voz.*

## Forma 2 — Un zip de un cliente en Claude Code

Si te pasaron un zip suelto en vez del plugin. La ventaja sobre la Forma 1 es la
misma que la del plugin: Claude puede **buscar dentro de las transcripciones
completas** —826.000 palabras entre los cinco clientes, 719.000 sólo en Gocho—,
así que encuentra frases textuales del cliente que no están en los archivos
curados. Es la forma en que se armaron los guiones que ya viste.

1. Descomprimí el zip.
2. Abrí una terminal en esa carpeta y corré `claude`.
3. Pedí lo que necesites nombrando al cliente.

La skill que guía el trabajo ya viene adentro (`.claude/skills/cerebro-cliente/`)
y se activa sola. No hay que configurarla.

---

## Las tres reglas que hacen que esto funcione

**1. Nada se inventa.** Si un dato no está en el cerebro, dice `SIN DATO` y hay
que preguntárselo al cliente. Cuando pidas una pieza y Claude te avise que no
puede poner el precio o la garantía, no es un error: es que ese dato todavía no
está confirmado, y un precio inventado en un ad es un problema con el cliente.

**2. Lo textual gana.** El valor del cerebro es que devuelve frases que el
cliente **ya dijo en cámara**, con el video de origen al lado. Si una pieza te
llega sin fuentes citadas, pedile que las marque — así verificás en 10 segundos
en vez de confiar.

**3. Las cifras son el punto débil.** Las transcripciones salen de subtítulos
automáticos: los giros de lengua son fieles, **los números y los nombres propios
no**. Antes de imprimir un monto, una cantidad de alumnos o un dominio,
verificalo contra el video o contra `oferta.md`.

## Qué pedirle y qué no

Anda bien con: ideas de ads · guiones de reel con planos · hooks · captions ·
emails de nutrición · guiones de VSL · preguntas sobre qué vende el cliente, qué
le funcionó, cómo habla y cómo es su audiencia.

No lo uses para: inventar promesas de resultado, precios, garantías o
testimonios. En nichos como trading eso además hace que el ad no corra.

## Si querés agregar material

Decile qué tenés (un video nuevo, una página de venta, un VSL, un audio) y te va
a decir dónde va y qué formato necesita. El procedimiento está en
`cerebros/<cliente>/INTAKE.md`, con las prioridades de cada cliente: lo que falta
y en qué orden conviene conseguirlo.
