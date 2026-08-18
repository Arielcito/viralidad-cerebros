# Oferta — Víctor Heras

> **Estado: SIN DATO en casi todo lo que importa para vender.** No hay un solo
> precio dicho ni escrito en los 80 reels (17.705 palabras). No hay nombre de
> producto estable. Lo único que se puede reconstruir con certeza es el
> **funnel de entrada** (comentario → DM → entregable gratis) y el hecho de
> que existe un siguiente paso pago (llamada/consultoría 1 a 1), sin saber
> qué es, cuánto cuesta ni qué incluye. Nada de lo de abajo se completa por
> inferencia — lo que falta se lista al final y va a `fase-0-pedido.md`.

## Qué vende Víctor, en una frase

**Su propia agencia de marketing de contenidos/marca personal, más al menos
un producto formativo (el máster) y un producto de captación gratuito
(clases/checklists por keyword) que empuja hacia una consultoría 1 a 1.**
Los casos de cliente citados en `biblioteca/historias.md` §2 (Christian
Villar, Ramón, Alfredo, Diego, el sensei, Bernardo) son la prueba de que el
servicio de agencia es real y tiene track record — pero ni un precio, ni un
alcance de contrato, ni un proceso de venta aparecen dichos en cámara.

## Productos identificados

| Producto | Qué es | Precio | Fuente | Estado |
|---|---|---|---|---|
| Entregable gratis por keyword ("clase", "guion", "sistema", "solución", checklist) | Contenido que se manda por DM al comentar la palabra clave del reel. Es el producto más repetido del corpus — casi todos los CTA de HM terminan acá. | Gratis | decenas de reels HM, ver tabla de CTAs abajo | Confirmado, sin ambigüedad |
| Llamada / consultoría 1 a 1 | Paso siguiente al entregable gratis. Se ofrece explícitamente en 3 reels de HM. | **SIN DATO** | `ig-060`, `ig-094` | Existe, sin precio ni alcance |
| El máster de marca personal | Formación paga con "2ª edición", lista de espera por comentario, cupo que se agotó "en 45 horas" en la 1ª edición. **Sólo aparece en 1 reel, de 2022.** | **SIN DATO** — sólo se promete "el mejor precio" a quien se anote antes | `ig-090` | Existe (o existió) — vigencia hoy SIN DATO |
| Agencia PostMe | El negocio de fondo: "una agencia de creación de contenido y hoy la agencia de marca personal más grande en España, con clientes referentes y un equipo de más de 28 personas" (`ig-090`). Es el servicio que compraron los clientes de `historias.md` §2. | **SIN DATO** | `ig-090`, `ig-031` (transcript) + 15 captions con `#postme` | Nombre confirmado (ver abajo) — precio, alcance y proceso de venta SIN DATO |
| "El reto" — ganar 3.000 €/7 días | Campaña de captación de un solo reel, no un producto continuo. Método a cambio de comentar "RETO". | No es un producto pago — es lead magnet | `ig-001` (caption) | Ver §"Cifras problemáticas" — sólo aparece en caption, nunca dicho en cámara |

### El nombre de la agencia — corrección a `biblioteca/frases.md` §1

`frases.md` dejó el nombre de la agencia como `SIN DATO` porque las 17
repeticiones del cierre de VHE-A dan cinco grafías distintas por ASR
("PostMi" ×4, "Posmi", "PostMean", "Cosme"). Investigando la oferta se
encontraron **dos fuentes mejores que esas 17**, y ambas coinciden:

```
grep -in "postme\|agencia" ig-*.md   # sobre transcript, no sólo el cierre
grep -il "#postme" ig-*.md | wc -l   # → 15 captions
```

> "Hace 3 años abrimos **PostMe**, una agencia de creación de contenido y hoy
> la agencia de marca personal más grande en España…" (`ig-090`)

> "…lo que hacemos en **PostMe**, además, siempre es dar 3 opciones…"
> (`ig-031`)

Estas dos son transcripciones limpias (no ambiguas como las 17 del cierre),
y coinciden con **15 captions** que usan el hashtag `#postme` — el caption
es texto escrito por Víctor mismo, no ASR, así que pesa más que cualquier
instancia de audio. **El nombre es "PostMe".** Esto corrige, no invalida,
la advertencia de `frases.md` §1: la firma verbal del cierre ("CEO de la
agencia PostM[i/e/ean]…") sigue siendo ambigua tal cual se dice, pero el
nombre de fondo ya no es `SIN DATO`.

⚠️ **Lo que sigue sin resolverse: si "PostMe" es el nombre vigente hoy.**
Las 17 repeticiones del cierre y las 15 captions con `#postme` son **todas
de VHE-A/@victorherasemprendedor, 2022-2023**. Se corrió el mismo grep sobre
los 47 reels de HM/@herasmedia (2025-2026, el registro de captación actual)
y **"PostMe" y "agencia" no aparecen ni una sola vez.** No se sabe si la
agencia sigue existiendo, cambió de nombre, o si Víctor simplemente dejó de
mencionarla en el registro de captación más nuevo.

## Escalera de valor (lo verificado)

```
Reel orgánico (HM, 2025-2026)
   ↓  "comenta [KEYWORD] en este vídeo"
   ↓
DM directo (dentro de Instagram — no hay landing ni bot externo confirmado)
   ↓
Entregable gratis: "clase", "checklist", "sistema", "guion", "estructura"
   ↓
Llamada / consultoría 1 a 1  ←  SIN DATO de acá para abajo
   ↓
¿Servicio de agencia? ¿Máster? ¿Otra cosa?  ←  SIN DATO
```

No hay landing pública detectada (a diferencia de Bernardo, que tiene
`juradoacademia.com` con funnel completo verificable en HTML). Todo el
funnel de Víctor vive dentro de Instagram/DM, así que no hay forma de
verificarlo sin acceso a la cuenta o al CRM.

## CTAs oficiales — texto exacto por keyword

Todas las keywords encontradas en los 80 reels, con lo que prometen a
cambio. Es tabla de trabajo, no de firma — cada reel usa una sola:

| Keyword | Qué promete a cambio | Reel |
|---|---|---|
| "BIO" | Cómo optimizar la biografía + "20.000€/mes" (⚠️ ver cifras problemáticas) | `ig-050` |
| "SOLUCIÓN" | Plan de contenidos y ventas + "100.000 seguidores y 20.000€/mes" (⚠️) | `ig-062` |
| "YO" | Igual promesa que arriba, distinto reel (⚠️) | `ig-065` |
| "CLASE" | Clase sobre estructura de vídeo viral | `ig-036` |
| "GUIÓN" | Estructura CIRY (ver abajo) para el nicho del comentarista | `ig-032`, `ig-045` |
| "CCN" | Sistema de ideas de contenido (método CCN, ver abajo) | `ig-054` |
| "VIRAL" | "Paso a paso para hacerte viral" + oferta directa de "consultoría 1 a 1" | `ig-094` |
| "SUSI" | Clase + "llamada 1 a 1 para conseguirlo con tu cuenta" | `ig-060` |
| "RETO" | Método de un caso citado ("el método que va a seguir Amin") | `ig-001` |
| "MÁSTER" | Lista de espera de la 2ª edición del máster | `ig-090` |
| "JUEGO" | Reglas del sorteo del iPhone 14 | `ig-072` |

## Metodologías propias — vocabulario que sí se puede reutilizar

Tres siglas/métodos que Víctor nombra y explica en cámara. A diferencia del
nombre de la agencia, éstas están dichas con letra por letra, así que son
más confiables:

- **Método FR** (`ig-062`) — F de Frustración, R de Responsabilidad. Molde
  de guion: activar la frustración del espectador, quitarle la culpa,
  explicar por qué le pasa (no arreglar el problema, explicarlo).
- **CCN — Creencias Comunes de tu Nicho** (`ig-054`) — "las 10 creencias
  falsas más comunes de tu nicho […] aquellas cosas que van completamente en
  contra de la creencia común". Molde de generación de ideas: 10 CCN × 5
  ganchos × 2 formatos = 100 ideas.
- **PCN — Problemas [más] Comunes de tu Nicho** (`ig-032`) — mencionado de
  pasada, sin el desarrollo de CCN, como paso 1 de un guion de estructura.
- **Método de guiones CIRY** (`ig-045`) — C de Contexto, I de Inclinación, R
  de Retroceso, **Y de — no dicho**. El reel corta justo después de explicar
  la R, sin llegar a la Y. **No es un error de transcripción: el video
  mismo no completa la sigla** (probablemente a propósito, para empujar el
  comentario "GUIÓN" y que el resto se mande por DM). Sigue siendo el hueco
  más citable de todo el corpus — cualquier pieza que use "CIRY" tiene que
  dejar la Y sin inventar, o preguntarle a Víctor qué es.

## Cifras problemáticas — no usar sin verificar contra el video primero

Esta sección amplía, con verificación directa contra los archivos fuente, lo
que `biblioteca/hooks.md` §5 ya encontró sobre compliance. Se agrega acá una
corrección: hooks.md marca el "20.000€/mes" como caption-only en `ig-050` y
`ig-062`, y dicho en cámara sólo en `ig-065`. **Verificando de nuevo contra
el archivo real, `ig-062` también lo dice en cámara**, no sólo en caption:

| Promesa | Caption | Dicho en cámara | Reels |
|---|---|---|---|
| "100.000 seguidores en 30 días" | Sí, 12 captions de HM | SIN DATO — no verificado uno por uno | ver `hooks.md` §5 |
| "20.000 €/mes" | `ig-050`, `ig-062`, `ig-065` | **`ig-065`** ("…llegar a 100.000 seguidores y mínimo 20.000 euros al mes por contrato") y **`ig-062`** ("…escalar a 100.000 seguidores y generar mínimo 20.000 euros al mes con tu cuenta de hoy") — corrección a `hooks.md` §5, que sólo marcaba `ig-065` como hablado | `ig-050`, `ig-062`, `ig-065` |
| "20 minutos al mes" (`ig-050`) | — | Es corrupción de ASR de "20.000 euros al mes" — comparar contra `ig-062`/`ig-065`, mismo molde de frase | `ig-050` |
| "ganar 3.000 € en 7 días" | `ig-001` | No — el audio nunca dice la cifra, sólo "el método que va a seguir Amin" | `ig-001` |
| "2,2 billones de visitas" (el sensei) | — | Sí, dicho en cámara | `ig-014` — ver `historias.md` §2, cifra menos creíble del corpus |
| "200.000 dólares al mes" (Ramón/Lordconstruye) | — | Sí, dicho en cámara, sin nombrarlo directamente | `ig-079` — ver `historias.md` §2 |

**Ninguna de estas cifras entra en un ad o una pieza de venta sin
verificación contra el video y, donde aplique, autorización explícita del
cliente** (regla dura de `voz.md` y de `CEREBRO.md`). Deepgram se come
dígitos de forma sistemática y consistente — dos instancias de ASR
coincidiendo no prueban que el número esté bien, sólo que el modelo comete
el mismo error dos veces.

## Objeciones y respuestas

**SIN DATO.** No hay un solo reel donde Víctor responda una objeción de
precio, tiempo o desconfianza — el corpus entero está en la fase de captación
(hook → contenido → CTA), nunca en fase de cierre. Distinto de Bernardo, cuyo
FAQ público sí tiene un bloque de objeciones anticipadas — acá no existe
ningún texto equivalente.

## Prueba y credenciales usables en copy

Lo único verbatim y verificable:

- "una agencia de creación de contenido y hoy la agencia de marca personal
  más grande en España, con clientes referentes y un equipo de más de 28
  personas" (`ig-090`, 2022 — vigencia hoy SIN DATO)
- Los casos con nombre de `historias.md` §2 (Christian Villar, Ramón,
  Alfredo, Diego, el sensei) — usables sólo con las advertencias de cifra ya
  documentadas ahí.
- "Más de 850 personas queriendo entrar al mismo tiempo" / "todas las
  plazas se acabaron en solo 45 horas" (`ig-090`, lanzamiento del máster,
  cifra ASR sin verificar).

## Lo que falta — `SIN DATO`

- **Precio de todo.** Del máster, de la consultoría/llamada 1 a 1, del
  servicio de agencia. Cero cifras de precio en 17.705 palabras.
- **Si "PostMe" sigue siendo el nombre del negocio hoy.** Confirmado en
  VHE-A (2022-2023); ausente por completo en los 47 reels de HM
  (2025-2026) — ver corrección arriba.
- **Qué incluye la consultoría/llamada 1 a 1** — duración, formato, si es
  con Víctor o con "su equipo" (`ig-094` dice "mi equipo").
- **Si el máster sigue vendiéndose.** Sólo 1 mención, de 2022, hablando de
  una "2ª edición" que se abría "en noviembre" de ese año. Nada en HM lo
  menciona.
- **La Y de CIRY.** Literalmente no está en el corpus — ver arriba.
- **Qué pasa después de la llamada 1 a 1** — ¿se paga un contrato de
  agencia? ¿un curso? ¿mentoría individual? No hay ni una mención de la
  etapa de cierre.
- **Si "el reto" (`ig-001`, 3.000€/7 días) sigue vigente o fue una campaña
  de un solo lanzamiento** (ver `biblioteca/hooks.md` §7 — la misma
  pregunta que ya señala sobre la campaña RETO).
- **Proceso de venta real.** Todo lo de arriba es orgánico de captación; no
  hay ni un reel, caption o dato que muestre qué pasa entre el DM y una
  venta cerrada.
