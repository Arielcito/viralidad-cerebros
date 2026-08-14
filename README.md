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
| **Gocho** (Franklin Ovalles — El Trading Club) | 193 reels IG + 106 videos YT en `catalogo.csv`; oferta y embudo leídos de la web y de Hotmart | **106 (488.435 palabras)** | ✅ **usable** — voz medida, oferta textual, audiencia del survey, 14 hooks con métricas, 12 historias. Precio y garantía `SIN DATO`. VSL no descargable. Primera salida en `cerebros/gocho/piezas/` |
| **El Sensei** (Sebastián Rodríguez) | 879 links (ago–dic 2025) en `catalogo.csv` | 0 | esqueleto — oferta y embudo verificados, voz vacía, **compliance bloquea ads** |
| **Ramón** (Academia de Construcción) | oferta + embudo leídos de la web; 125 conceptos de ClickUp en `catalogo.csv` (sin URLs ni views) | 0 | esqueleto |
| **Bernardo Jurado** | landing de opt-in leída + 52 conceptos de ClickUp | 0 | esqueleto (oferta parcial) |

Un esqueleto **sirve** para preguntar qué vende el cliente o cómo es su embudo.
No sirve para escribir en su voz: sin transcripciones no hay voz medida, y la
skill está instruida para avisarlo en vez de rellenar con oficio publicitario.

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
    catalogo.csv      ← inventario de contenido + métricas (la cola de trabajo)
    transcripciones/  ← un .md por video: frontmatter + transcript literal
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
git add . && git commit -m "cerebro: <cliente>" && git push
```

Tres cosas que hay que tocar además de la carpeta, o el cliente nuevo queda
invisible:

1. la tabla de **Estado** de este README,
2. la tabla de clientes en `skills/cerebro-cliente/SKILL.md`,
3. `CLIENTES` en `scripts/empaquetar.mjs`.

Quien ya lo tenga instalado lo recibe con `/plugin update cerebros`.

### Sumar material a un cerebro que ya existe

- **YouTube** — `yt-dlp --skip-download --write-auto-subs --sub-langs "es"
  --sub-format vtt`, después `node scripts/subs-a-transcripcion.mjs <slug>`.
  Gratis y automático; los subtítulos salen con puntuación.
- **Instagram** — no tiene subtítulos. `node scripts/bajar-audio.mjs <slug>
  --desde 1 --hasta 10` deja los `.m4a` listos para transcribir a mano en el
  chat. Decisión tomada: no gastar API en esto.
- Los intermedios (`fuentes/subs-youtube/`, `fuentes/audio/`, `*.raw`) están
  gitignoreados: pesan ~69 MB contra 4 MB de markdown útil, y se regeneran.

Ambos scripts necesitan `yt-dlp` en el PATH.

## Ojo con esto

El repo es **público**. Los cerebros contienen oferta, embudo, research de
audiencia y en algunos casos los WhatsApp de soporte que los clientes ya publican
en sus propias landings. No hay credenciales ni datos personales de leads, y no
tienen que entrar nunca: si vas a sumar material, que sea contenido publicado del
cliente, no exports de CRM ni listas de contactos.
