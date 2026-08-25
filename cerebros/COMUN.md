# Bloques comunes de los cerebros

Fuente única de lo que se repite en los cinco `CEREBRO.md`. Antes vivía copiado
a mano en siete archivos y se separó solo: el formato de guion tenía tres
variantes y el conteo de "vaina" de la skill contradecía al de `gocho/voz.md`.

Cada bloque de acá se **inyecta** en los `CEREBRO.md` entre marcadores
`<!-- comun: <nombre> -->` … `<!-- /comun: <nombre> -->`:

```bash
node cerebros/scripts/sincronizar-comun.mjs           # escribe
node cerebros/scripts/sincronizar-comun.mjs --check   # falla si alguno quedó viejo
```

Se inyecta en vez de referenciarse porque un `CEREBRO.md` tiene que valer solo:
en un Claude Project se sube **una carpeta de cliente**, y un puntero a un
archivo hermano de la raíz no resuelve.

**Editá este archivo, nunca el resultado.** Lo que es propio de un cliente va en
la sección "Reglas de este cliente" de su `CEREBRO.md`, que el script no toca.

---

<!-- bloque: reglas-comunes -->
Estas cuatro valen para los cinco clientes. Las propias de este van más abajo.

- **El dato sale del cerebro o se pregunta.** Precio, cuotas, garantía, nombre
  del programa, cifras de alumnos, credenciales y testimonios salen de
  `oferta.md` o de una fuente citada. Lo que no está se entrega marcado
  `SIN DATO`, con la pregunta concreta que hay que hacerle al cliente.
- **Verbatim gana a mejor escrito.** Ante una frase textual del cliente y una
  paráfrasis tuya más elegante, va la textual: su ventaja competitiva es que
  suena a él, y tu prosa la borra. Citá de dónde salió (`ig-NNN`, `yt-NNN`,
  `oferta.md`) para que se pueda abrir y escuchar en 10 segundos.
- **Los hooks se calcan, no se admiran.** Si un hook rindió, la variante nueva
  conserva su estructura y cambia el contenido. La estructura es lo que
  funcionó; el tema es lo reemplazable.
- **Las cifras y los nombres propios se verifican fuera del ASR.** Las
  transcripciones son reconocimiento automático: los giros de lengua son
  confiables, los dígitos y los nombres no ("Franklin o Valles",
  "trincloud.com"). Todo número que vaya a una pieza sale de `oferta.md`, de una
  decisión ya registrada en el cerebro, o de escuchar el video.
<!-- /bloque: reglas-comunes -->

<!-- bloque: formatos -->
Cuando te pidan una pieza, entregá exactamente esta estructura.

**Guion de reel / ad**

```
IDEA: <una línea, qué vende y a quién>
HOOK (0-3s): <texto exacto a decir>
DESARROLLO: <una oración por línea, como se habla>
CTA: <el CTA de oferta.md, textual>
PLANOS:
  1. <plano> — <qué se ve> — <qué se dice encima>
  2. ...
TEXTO EN PANTALLA: <los rótulos, uno por línea>
DISCLAIMER: <el texto de riesgo de oferta.md, si la pieza toca resultados>
DURACIÓN ESTIMADA: <segundos>
REFERENCIA: <el ig-NNN / yt-NNN / fila del catálogo de donde sale el patrón>
```

La línea `DISCLAIMER` va sólo si `oferta.md` de este cliente exige uno y la
pieza toca resultados; si no, se omite.

Los planos son para que alguien filme sin preguntarte nada: van con lo que se ve
y lo que se dice encima, y son filmables con lo que el cliente realmente tiene y
muestra.

**Email / mensaje de nutrición**

```
ASUNTO: <línea>
CUERPO: <en su voz, párrafos cortos>
CTA: <textual de oferta.md>
```
<!-- /bloque: formatos -->
