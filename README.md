# Cerebros de cliente — Viralidad

Un **cerebro** es una carpeta de markdown curado que hace que Claude escriba
**como el cliente**: sus guiones, sus ads, sus hooks, su nutrición, sus VSLs.

No es un chatbot ni un RAG con embeddings. Es contexto curado. La decisión es
deliberada: para un puñado de clientes y unos cientos de videos, el contexto
entra en una ventana y el resultado es mucho mejor que el de un retriever que te
trae 3 chunks sueltos y fuera de tono.

Este repo es además un **plugin de Claude Code**: se instala con un comando y
trae las skills `cerebro-cliente`, `destilar-voz` y `email-semanal` más los
cerebros adentro.

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

## Instalar (Cowork)

En Cowork no hay `/plugin`: el marketplace se agrega desde la interfaz, una sola
vez.

1. Pestaña **Cowork** → menú **Customize** → solapa **Plugins**.
2. En **Personal plugins**, botón **+** → **Add marketplace**.
3. **Add from a repository** y pegar
   `https://github.com/Arielcito/viralidad-cerebros` (el repo es público, no hace
   falta acceso).
4. En el marketplace que quedó agregado, **Install** sobre `cerebros`.

Después se usa igual que en Claude Code: nombrás al cliente y la skill se activa
sola. En plan Enterprise el admin puede tener restringidos los marketplaces de
terceros — si el botón no aparece, es eso.

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

Números al **2026-08-25**, medidos con `node scripts/verificar-citas.mjs` (citas =
frases textuales del cliente con su video citado; cobertura = transcripciones
usadas al menos una vez) y `node scripts/medir-voz.mjs` (palabras).

| Cliente | Transcripciones | Palabras | Cerebro |
|---|---:|---:|---|
| **Gocho** (Franklin Ovalles — El Trading Club) | **223** | **1.008.343** | ✅ **usable** — 80 videos largos + 27 lives + 90 reels + 26 shorts. Voz medida por registro, oferta textual, audiencia del survey, hooks con métricas. 119 citas · 46 % de cobertura · 20 `SIN DATO` |
| **Víctor Heras** | **259** | **1.009.554** | ✅ **usable en orgánico** — 170 videos largos + 80 reels + 9 de una serie con invitados (voz mixta, excluida de los conteos). 168 citas · 39 % · 36 `SIN DATO` |
| **Bernardo Jurado** | **465** | **338.395** | ✅ **usable en orgánico** — ⚠️ el canal de YouTube es de la **editorial**, no de la marca personal: sólo 22 videos son de oratoria. 101 citas · 17 % · 33 `SIN DATO` |
| **Ramón** (Academia de Construcción — `@lordconstruye`) | **101** | **60.772** | ✅ **usable en orgánico** — 16 videos largos + 85 reels. Es el único donde la oferta está dicha en voz alta. 115 citas · 98 % · 46 `SIN DATO` |
| **El Sensei** (Sebastián Rodríguez) | **85** | **13.603** | ⚠️ **sólo reels** — un único registro, sin material largo en ninguno de sus handles. Alcanza para orgánico; **compliance bloquea ads**. 225 citas · 100 % · 41 `SIN DATO` |

Los cinco pasan el test de trazabilidad en **0 errores**: cada frase
entrecomillada se puede abrir en la transcripción que la cita. Ver
[docs/PRUEBAS.md](docs/PRUEBAS.md).

Dos cosas que conviene saber antes de pedir una pieza:

- **Lo que falta en los cuatro que no son Gocho es oferta**: precio, garantía,
  nombre del producto y CTA textual. Eso no sale de los videos — hay que pedírselo
  al cliente. Cada carpeta tiene su `fase-0-pedido.md` con la lista exacta.
- **Las transcripciones son ASR.** Los giros de lengua son confiables; las cifras
  y los nombres propios **no**. Ningún número llega a una pieza sin verificar.

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
    frases.md         ← frases firma y tics verbales, verbatim y con conteo
  fuentes/
    catalogo.csv            ← inventario de contenido + métricas (la cola de trabajo)
    catalogo-instagram.csv  ← reels cosechados de IG, ordenados por views
    transcripciones/        ← un .md por video: frontmatter + transcript literal
  piezas/             ← lo que ya se produjo con este cerebro
  salidas/            ← ídem; el nombre que usan los cerebros nuevos

cerebros/COMUN.md         ← las reglas y el formato que valen para los cinco;
                            se inyectan en cada CEREBRO.md con sincronizar-comun.mjs
skills/cerebro-cliente/   ← escribe piezas leyendo todo esto
skills/destilar-voz/      ← convierte transcripciones crudas en un voz.md medido
skills/email-semanal/     ← arma la tanda semanal de emails (cadencia en cerebros/<slug>/email/)
scripts/                  ← cosecha, medición, empaquetado y los dos tests
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
node scripts/verificar-citas.mjs <slug-nuevo>    # que cada cita se pueda abrir
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

- **YouTube — es lo que más rinde, y es gratis.** Un canal entero, dos comandos:

  ```bash
  node scripts/cosechar-youtube.mjs <slug> https://www.youtube.com/@elcanal
  node scripts/subs-a-transcripcion.mjs <slug>
  ```

  Baja el catálogo y los subtítulos automáticos **sin descargar un solo video**, y
  es reanudable: cortarlo y volver a correrlo es seguro. Rinde tanto porque un
  reel de 30 segundos es un guion escrito, y para imitar a alguien hace falta cómo
  habla cuando habla largo: las muletillas, las digresiones, cómo contesta una
  objeción.
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

**Después de sumar material hay que volver a destilar la voz.** Más corpus cambia
las frecuencias, y un `voz.md` medido sobre el corpus viejo pasa a mentir sin que
nadie lo note. `node scripts/medir-voz.mjs <slug>` saca los conteos sobre el
corpus de hoy y la skill `destilar-voz` los interpreta — pedíselo a Claude en
lenguaje normal: *"destilá de nuevo la voz de Bernardo"*.

## Ojo con esto

El repo es **público**. Los cerebros contienen oferta, embudo, research de
audiencia y en algunos casos los WhatsApp de soporte que los clientes ya publican
en sus propias landings. No hay credenciales ni datos personales de leads, y no
tienen que entrar nunca: si vas a sumar material, que sea contenido publicado del
cliente, no exports de CRM ni listas de contactos.
