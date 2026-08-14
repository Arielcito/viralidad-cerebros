# Cerebros de cliente — Viralidad

Un **cerebro** es una carpeta de markdown curado que hace que Claude escriba
**como el cliente**: sus guiones, sus ads, sus hooks, su nutrición, sus VSLs.

No es un chatbot ni un RAG con embeddings. Es contexto curado. La decisión es
deliberada: para un puñado de clientes y unos cientos de videos, el contexto
entra en una ventana y el resultado es mucho mejor que el de un retriever que te
trae 3 chunks sueltos y fuera de tono.

Este repo es además un **plugin de Claude Code**: se instala con un comando y
trae la skill `cerebro-cliente` más los cerebros adentro.

---

## Instalar (Claude Code)

```
/plugin marketplace add Arielcito/viralidad-cerebros
/plugin install cerebros@viralidad-cerebros
```

Listo. Desde cualquier proyecto tuyo, pedile cosas en lenguaje normal:

> *Armame 3 ideas de ads para Gocho, con guion y planos.*
> *¿Qué objeciones tiene su audiencia sobre el capital?*
> *Reescribí este caption en la voz de Bernardo.*

La skill se activa sola cuando nombrás a un cliente. Para traer los cerebros
nuevos que se hayan subido después:

```
/plugin update cerebros
```

## Instalar (claude.ai, sin terminal)

Para el equipo de contenido. Ver **[docs/PARA-EL-EQUIPO.md](docs/PARA-EL-EQUIPO.md)**:
se arma un Project, se pegan las instrucciones de
[docs/INSTRUCCIONES-PROJECT.md](docs/INSTRUCCIONES-PROJECT.md) y se suben los
archivos del cliente. Sin git.

Si a alguien le conviene un zip por cliente:

```bash
node scripts/empaquetar.mjs gocho      # un cliente
node scripts/empaquetar.mjs --todos    # todos, para la agencia
```

Deja el zip en `paquetes/`. Por defecto va **un cliente por paquete**: cada
cerebro tiene su oferta, sus precios y su research de audiencia, y eso no viaja
dentro del paquete de otro.

---

## Estado de los cerebros

| Cliente | Fuentes | Transcripciones | Cerebro |
|---|---|---|---|
| **Gocho** (Franklin Ovalles — El Trading Club) | 200 reels IG + 193 videos YT catalogados; oferta y embudo leídos de la web y de Hotmart | **196 (718.949 palabras)** | ✅ **usable** — voz medida, oferta textual, audiencia del survey, 14 hooks con métricas, 12 historias. Precio y garantía `SIN DATO`. VSL no descargable. Salidas en `cerebros/gocho/piezas/` |
| **El Sensei** (Sebastián Rodríguez) | 95 reels IG + 879 links (ago–dic 2025) en `catalogo.csv` | 85 (23.388 palabras) | oferta y embudo verificados, **voz sin re-curar** con los reels nuevos. **Compliance bloquea ads** |
| **Ramón** (Academia de Construcción) | 165 reels IG; oferta + embudo leídos de la web; 125 conceptos de ClickUp | 85 (30.142 palabras) | oferta y audiencia escritas, **voz sin re-curar** con los reels nuevos |
| **Bernardo Jurado** | 200 reels IG + landing de opt-in leída | 89 (25.668 palabras) | oferta parcial y audiencia escritas, **voz sin re-curar** con los reels nuevos |
| **Víctor Heras** | 240 reels IG (`@herasmedia` + `@victorherasemprendedor`) | 80 (28.326 palabras) | ⚠️ **sólo material bruto** — todavía no hay `CEREBRO.md`, `voz.md` ni `oferta.md` |

El 2026-08-13 entró la cosecha automática de Instagram y los cuatro cerebros que
estaban en cero pasaron a tener transcripciones. Eso es **materia prima, no
cerebro**: los archivos curados (`voz.md`, `oferta.md`, `audiencia.md`) todavía
no se rescribieron a partir de ellas. Sirve para preguntar qué vende el cliente o
buscar una frase textual suya; para escribir en su voz, sólo `gocho` está
terminado. La skill está instruida para avisarlo en vez de rellenar con oficio
publicitario.

## Estructura

```
cerebros/<cliente>/
  CEREBRO.md          ← el archivo maestro. Si sólo leés uno, es este.
  voz.md              ← cómo habla: léxico, ritmo, muletillas, qué nunca dice
  oferta.md           ← qué vende, a qué precio, con qué promesa y objeciones
  audiencia.md        ← a quién le habla, con qué dolores y en qué palabras
  fase-0-pedido.md    ← lo que falta y hay que pedirle al cliente
  INTAKE.md           ← estado de las fuentes y cómo sumar material
  biblioteca/
    hooks.md          ← hooks reales, ordenados por views
    historias.md      ← anécdotas y casos reutilizables
  fuentes/
    catalogo.csv            ← inventario de contenido + métricas (la cola de trabajo)
    catalogo-instagram.csv  ← reels cosechados de IG, ordenados por views
    transcripciones/        ← un .md por video: frontmatter + transcript literal
  piezas/             ← lo que ya se produjo con este cerebro

skills/cerebro-cliente/   ← la skill que lee todo esto
scripts/                  ← cosecha de fuentes y empaquetado
docs/                     ← cómo usarlo sin terminal
```

## Regla de oro

**Nada en un cerebro se inventa.** Cada afirmación sobre la voz, la oferta o la
audiencia sale de una fuente citable: un video transcripto, un VSL, una página de
venta, o algo que el cliente dijo explícitamente. Lo que no tiene fuente se marca
`SIN DATO` y se pide.

Un cerebro que rellena huecos con suposiciones plausibles produce contenido que
suena genérico y, peor, promete cosas que el cliente no vende. Un precio
inventado en un ad no es un error de estilo, es un problema con el cliente.

---

## Subir un cerebro nuevo

```bash
git clone https://github.com/Arielcito/viralidad-cerebros.git
cd viralidad-cerebros
cp -r cerebros/bernardo cerebros/<slug-nuevo>     # esqueleto de arranque
# ... vaciás el contenido y lo llenás con fuentes citadas ...
node scripts/publicar.mjs "cerebro: <cliente>"
```

Tres cosas que hay que tocar además de la carpeta, o el cliente nuevo queda
invisible:

1. la tabla de **Estado** de este README,
2. la tabla de clientes en `skills/cerebro-cliente/SKILL.md`,
3. `CLIENTES` en `scripts/empaquetar.mjs`.

### Publicá con el script, no con `git push` a secas

Claude Code cachea el plugin instalado **por versión**, en
`~/.claude/plugins/cache/`. Si pusheás un cerebro nuevo sin subir la versión,
`/plugin update` contesta *"already at the latest version"* y el equipo se queda
con el contenido viejo sin enterarse.

`scripts/publicar.mjs` sube la versión en los dos manifiestos (tienen que
coincidir), commitea y pushea. Usá `--minor` cuando entre un cliente nuevo y el
patch por defecto para material que se suma a uno que ya está.

Del otro lado, para recibirlo:

```
/plugin update cerebros@viralidad-cerebros
```

y reiniciar la sesión de Claude Code.

### Sumar material a un cerebro que ya existe

- **YouTube** — `yt-dlp --skip-download --write-auto-subs --sub-langs "es"
  --sub-format vtt`, después `node scripts/subs-a-transcripcion.mjs <slug>`.
  Gratis y automático; los subtítulos salen con puntuación.
- **Instagram** — dos comandos, y hay que correrlos seguidos:

  ```bash
  node scripts/cosechar-instagram.mjs <slug> <handle...>   # Apify → instagram.json
  node scripts/transcribir-instagram.mjs <slug> --top 100  # Deepgram → transcripciones/
  ```

  yt-dlp choca contra el login wall de IG; el scraper de Apify devuelve un
  `videoUrl` del CDN que se baja sin sesión. Esa URL está **firmada y caduca en
  horas**, así que transcribir al día siguiente no funciona: hay que volver a
  cosechar. El detalle está en
  [docs/INTAKE-INSTAGRAM.md](docs/INTAKE-INSTAGRAM.md).

  Necesita `APIFY_TOKEN` y `DEEPGRAM_API_KEY` en el entorno o en un `.env.local`
  de la raíz — que está gitignoreado, y en un repo público conviene que siga así.
- Los intermedios (`fuentes/subs-youtube/`, `fuentes/audio/`, `*.raw`,
  `fuentes/instagram.json`) están gitignoreados: pesan decenas de MB, y se
  regeneran.

Los scripts de YouTube necesitan `yt-dlp` en el PATH.

## Ojo con esto

El repo es **público**. Los cerebros contienen oferta, embudo, research de
audiencia y en algunos casos los WhatsApp de soporte que los clientes ya publican
en sus propias landings. No hay credenciales ni datos personales de leads, y no
tienen que entrar nunca: si vas a sumar material, que sea contenido publicado del
cliente, no exports de CRM ni listas de contactos.
