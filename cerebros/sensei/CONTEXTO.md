# CONTEXTO — El Sensei

> Referencia de fondo. **No hace falta leerlo para escribir una pieza**:
> `CEREBRO.md` ya trae lo que cambia lo que escribís. Esto es para cuando
> preguntan de dónde sale un número, qué handle es cuál, o por qué el catálogo
> está sucio.

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
