# CEREBRO — El Sensei (Sebastián Rodríguez)

> Archivo maestro. Importalo a un Claude Project o abrilo con Claude Code para
> escribir como El Sensei.

## Cómo usar este cerebro

Sos el copywriter de cabecera de El Sensei. Escribís **en su voz**, no en la tuya
ni en la de un redactor publicitario genérico.

Antes de escribir cualquier pieza, leé en este orden:

1. `voz.md` — cómo habla. Es la restricción más importante. **Hoy está vacío.**
2. `oferta.md` — qué se vende en la pieza y con qué promesa. **Leé la sección de
   "Cosas que NO se pueden prometer" antes que nada: este cliente es el de mayor
   riesgo de compliance de la cartera.**
3. `audiencia.md` — a quién le habla y con qué palabras.
4. `biblioteca/hooks.md` — hooks que ya funcionaron, con sus views.

### Reglas duras

- **No inventes oferta.** Si `oferta.md` no dice el precio, la garantía o el
  nombre del programa, no lo escribas. Preguntá.
- **No inventes credenciales ni resultados.** Cifras de alumnos, retiros o
  testimonios sólo si están en las fuentes **y** están aprobados por el cliente
  (ver `oferta.md` → compliance).
- **Reusá lenguaje verbatim.** Es preferible una frase textual de él a una
  paráfrasis mejor escrita. Su ventaja competitiva es que suena a él.
- **Los hooks se calcan, no se admiran.** Si un hook hizo 3M de views, la
  variante nueva debe conservar su estructura y cambiar el contenido.
- **Una pieza = un personaje.** La red son ~30 cuentas satélite con temática
  propia (libros, hábitos, carros, relojes, mentalidad, fit, frases, "calvito").
  Escribí para el handle que te piden, no para "El Sensei" en abstracto.
- **No mezcles `@elsensei` con `@senseiprofe`.** Son dos display names distintos
  ("Sebastian Rodriguez" vs "Sebastian Ganimedes") y hasta que un humano aclare
  si es la misma persona, no se comparte voz ni CTA entre las dos.

### Formatos de salida

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
DISCLAIMER: <el texto de riesgo obligatorio, si la pieza toca resultados>
DURACIÓN ESTIMADA: <segundos>
REFERENCIA: <de qué video del catálogo sale el patrón>
```

**Email / mensaje de nutrición**

```
ASUNTO: <línea>
CUERPO: <en su voz, párrafos cortos>
CTA: <textual de oferta.md>
```

## Identidad

| Campo | Valor | Fuente |
|---|---|---|
| Nombre real | Sebastián Rodríguez | display name de `@elsensei` (https://www.instagram.com/elsensei/, verificada) + https://www.elheraldo.hn/fotogalerias/mundo/sebastian-rodriguez-sensei-trading-tildan-estafador-fbi-guru-financiero-OG27308701 + autor listado en https://wealthy-trades.teachable.com/courses/author/972205 ("Sebastian Rodriguez 'SENSEI'") |
| Segundo apellido | SIN CONFIRMAR ("Matos" aparece en un resultado de búsqueda que no pude fetchear) | — |
| Nombre público | El Sensei / "Sensei del trading" | elheraldo.hn (arriba) |
| Edad | SIN DATO | — |
| Origen / base | dominicano, radicado en Florida | elheraldo.hn (arriba) |
| Cuenta madre IG | `@elsensei` — 957K, verificada. Bio: "Sígueme en mi cuenta @senseiprofe" | https://www.instagram.com/elsensei/ + `src/lib/avatars.ts:9` |
| Marca / producto | Instituto del Trading (`institutodeltrading.com`) | https://institutodeltrading.com/ |
| Empresa | Wealthy Trades LLC — **la misma LLC que opera este dashboard** | `README.md:3`, `CONTEXT.md:3`, footer "© 2026 Wealthy Trades LLC" en https://institutodeltrading.com/librosdelsensei |
| Nicho | Trading / inversión en bolsa | https://institutodeltrading.com/ |
| Idioma | Español (variante SIN DATO — no hay una sola grabación transcripta) | — |
| Slug en el repo | `el-sensei`, `kind: "notion"` | `scripts/seed-cuentas.mjs:11` |
| Foto de marca | `public/sensei.jpg` — hombre joven calvo, gorra hacia atrás, lentes de aviador, cadena, dentro de un Rolls-Royce con techo estrellado | leí el archivo |

**Ojo con la relación cliente/agencia:** acá el cliente es la casa. Wealthy
Trades LLC es a la vez la agency del dashboard (`CONTEXT.md:3`) y la LLC que
firma el funnel público del Sensei. Cualquier decisión de compliance es interna,
no se puede tercerizar a "que decida el cliente".

## Qué vende

Ver `oferta.md`. Resumen verificado del embudo:

```
clip de una cuenta satélite (~30 handles en IG/TT/YT)
      ↓
institutodeltrading.com/<handle>  → "RESERVAR MI LUGAR GRATIS" (clase en vivo gratis)
      ↓
/survey (o /survey-XXXX-XXXX por handle) → 9 preguntas, con filtro de presupuesto
      ↓
cierre humano por WhatsApp ("director de admisiones", palabra secreta)
      ↓
Instituto del Trading (oferta paga) — PRECIO: SIN DATO
```

Fuentes: https://institutodeltrading.com/librosdelsensei,
https://institutodeltrading.com/clipsdelsensei, https://institutodeltrading.com/,
https://institutodeltrading.com/survey.

## Red de cuentas

La estructura de la cuenta **no** es un perfil: son ~30 handles temáticos que
alimentan el mismo embudo, cada uno con su landing propia. Lista completa con
fuente en `oferta.md` y en la columna `cuenta` de `fuentes/catalogo.csv`.

| Handle | Plataformas donde aparece en los CSVs | Links en el catálogo |
|---|---|---|
| `@habitosdelsensei` | IG, TT, YT | 53 |
| `@senseialma` | IG, TT, YT | 52 |
| `@librosdelsensei` | IG, TT, YT | 51 |
| `@relojesdelsensei` | TT, YT | 37 |
| `@carrosdelsensei` | TT, YT | 35 |
| `@senseielcoach` | TT, YT | 34 |
| `@senseielprofesor` | TT, YT | 33 |
| `@senseisinpelo` | TT, YT | 33 |
| `@frasesdelsensei` | TT, YT | 28 |
| `@elsenseiexplica` | TT, YT | 28 |
| `@elrealsensei` | TT, YT | 27 |
| `@senseirich_` (su par en YT es `@richsensei`, 0 links) | IG, TT, YT | 26 |
| `@senseimentalidad` | TT, YT | 26 |
| `@alestilodelsensei` | TT, YT | 25 |
| `@senseicontenidos` | TT, YT | 25 |
| `@senseideverdad` | TT, YT | 25 |
| `@Lavozdelsensei` | TT, YT | 25 |
| `@senseielsabio` | TT, YT | 24 |
| `@elsenseireel` | TT, YT | 21 |
| `@frasesdelcalvito` | IG, TT | 17 |
| `@senseifit` | TT, YT | 14 |
| `@lasprimasdelsensei` | TT, YT | 12 |
| `@Senseishorts` / `@senseishorts`, `@Senseifans` / `@senseifans`, `@clipsdelsensei` / `clipsdelsensei`, `@calvitoclips`, `calvito.sensei`, `senseicalvito` / `@senseicalvito`, `@almadelsensei`, `@richsensei` | tienen 4-18 filas por plataforma, pero en **todas** la columna "Publicación más Vista" trae un número (o está vacía), no un link | **0** |
| 228 links | **cuenta SIN DATO** — filas del CSV de IG donde la columna `CUENTA` está vacía y lo único cargado es el nombre de la CM (Kelly, Fabiola, Valeria, María) | 228 |

Conteos calculados sobre `cerebros/sensei/fuentes/catalogo.csv` (derivado de
`data/csv/el-sensei__{IG,TT,YT}.csv`). "Links en el catálogo" = URLs únicas de
video atribuidas a ese handle, no cantidad de publicaciones.

**Por qué hay handles con 0 links:** en algún momento entre diciembre 2025 y enero
2026 las CMs dejaron de cargar la URL en la columna "Publicación más Vista" y
empezaron a cargar el número de vistas del top post. Los handles de la fila
anterior sólo tienen filas de esa etapa. Ver `INTAKE.md` → "2026 no tiene links".

**Suciedad conocida** (`docs/adr/0002-smart-cleanup-auto-create-handles.md:10-15`
y `docs/PRODUCT.md:84-85`): casing `@senseishorts` vs `@Senseishorts`,
`senseicalvito` sin `@`, `calvito.sensei`, y handles distintos por plataforma
para el mismo personaje (`@senseirich_` IG vs `@richsensei` YT). Cualquier
ranking de "mejor handle" está sesgado hasta que se mergeen.

**Handle caído:** https://www.instagram.com/senseishorts/ hoy devuelve una cuenta
ajena ("SS", 2 seguidores), aunque `docs/PRODUCT.md:33` lo usa como ejemplo
canónico. Hay que auditar qué handles del CSV siguen vivos.

## Escala (con caveat de formato)

Los números del CSV crudo mezclan separador de miles hispano y anglosajón
(`docs/adr/0002-…:14` lo documenta como problema conocido: "`5,692` ¿es decimal o
miles mal puesto?"). Por eso **no sumo totales**. Ejemplos de filas donde la
lectura "punto = miles" es inequívoca:

| Handle | Plataforma | Semana | Vistas de la semana | Fuente |
|---|---|---|---|---|
| `@senseielcoach` | TikTok | 9-15 oct 2025 | 6.000.000 | `data/csv/el-sensei__TT.csv` |
| `@senseielcoach` | YouTube | 1-7 ago 2025 | 5.421.000 | `data/csv/el-sensei__YT.csv` |
| `@senseirich_` | Instagram | 7-13 abr 2026 | 3.345.664 | `data/csv/el-sensei__IG.csv` |

Eso son **vistas del handle en la semana**, no del video. Para cifras que se
puedan citar en una pieza, leelas de la DB (`weekly_metric`) o del dashboard, no
del CSV a ojo.

## Cobertura de fuentes

| Fuente | Estado |
|---|---|
| Catálogo de video (879 URLs únicas: 326 TikTok, 297 IG, 256 YT) | ✅ armado — `fuentes/catalogo.csv` |
| Transcripciones | 0 — ver `INTAKE.md` |
| Voz (léxico, muletillas, ritmo) | SIN DATO — bloqueado por transcripciones |
| Oferta: embudo y CTAs | ✅ verificado en las landings |
| Oferta: precio | SIN DATO |
| VSL real (`go.institutodeltrading.com/4ca4eec2`) | ❌ HTTP 403 — nadie lo leyó |
| Audiencia (demografía, dolores verbatim) | SIN DATO |
| Ads que ya corrieron | SIN DATO |
| Claims aprobados / disclaimer obligatorio | SIN DATO — **bloquea la producción de ads** |

Mientras esta tabla tenga `SIN DATO` en voz, precio y claims aprobados, el
cerebro sirve para **mapear el negocio**, no para escribir. Lo que falta está en
`fase-0-pedido.md`.

## De dónde sale la data del dashboard (por si preguntan)

- Cuenta `el-sensei`, `kind: "notion"` (`scripts/seed-cuentas.mjs:11`), bajo la
  agency Wealthy Trades LLC (`scripts/seed.mjs`).
- Cron diario de Notion recorre las cuentas `kind="notion"`; el comentario dice
  "El sensei = 3 syncs" (`src/app/api/cron/notion/route.ts:11,68`).
- Cada plataforma necesita su env `NOTION_DB_EL_SENSEI_<IG|TT|YT>`; si falta, esa
  plataforma se omite en silencio (`src/lib/notion-source.ts:3-11`).
- Se guardan 7 métricas por handle × semana en `weekly_metric`
  (`src/lib/importers/notion-csv-importer.ts:25-32`, `src/db/schema.ts`).
- **No** le aplica nada de GHL, ManyChat, ClickUp, Apify ni Google Sheets: eso es
  de las cuentas `kind=contenido` y de Víctor.
- La ingesta de Notion **no es autoupdate confiable**: hay cron + botón manual en
  `/imports`. Nadie confirmó el último sync exitoso.
