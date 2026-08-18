# Audiencia — Víctor Heras

> **No existe ninguna fuente de audiencia real.** No hay encuesta, no hay
> comentarios cosechados, no hay acceso a Insights de Instagram ni al CRM.
> Todo lo de abajo sale de una sola fuente: **cómo Víctor se dirige a quien
> lo escucha, dentro de los 80 reels transcriptos.** Es la misma limitación
> que tiene `cerebros/bernardo/audiencia.md` con los comentarios reales, pero
> acá es más grave — Bernardo al menos tiene una landing con un avatar
> declarado por escrito. Víctor no tiene ni eso.

## A quién le habla — evidencia por dirección, no por declaración

Víctor nunca dice "mi audiencia es X". Lo que sí hace, en los 80 reels, es
dirigirse a alguien con un vocabulario constante. Eso es lo único que se
puede usar como avatar, y con el peso de "esto es cómo habla, no un dato
demográfico verificado":

```
grep -io "emprendedor" ig-*.md | wc -l    # 37
grep -io "marca personal" ig-*.md | wc -l # 30
grep -io "tu nicho" ig-*.md | wc -l       # 75 (incluye "para tu nicho")
```

**El denominador común es "tu nicho".** Aparece 75 veces en 80 reels —
Víctor nunca vende para un rubro específico, siempre para "tu nicho, el que
sea". Eso ya dice algo del avatar: **no es un curso vertical (finanzas,
fitness, belleza), es un método horizontal para cualquiera que tenga o
quiera un negocio/marca con contenido.**

## Dos audiencias distintas, según el sub-corpus — no las mezcles

Igual que `voz.md` separa los cuatro sub-corpus por registro, acá hay que
separarlos por a quién le hablan. **No es la misma persona la que sigue
`@herasmedia` hoy que la que seguía `@victorherasemprendedor` en 2022.**

### VHE-A (2022-2023) — quien "quiere aprender marca personal y redes sociales"

El cierre de 17 de 22 reels (`biblioteca/frases.md` §1) termina con esta
invitación exacta, repetida casi palabra por palabra:

> "…si quieres aprender más sobre marca personal y redes sociales, sígueme
> por aquí…" (`ig-043`, `ig-049`, `ig-059`, `ig-069`, `ig-080`, `ig-087`,
> `ig-100` — 10 instancias con esta frase o variante muy cercana)

Dos reels varían el gancho hacia dinero explícito, no sólo aprendizaje:

> "…si quieres aprender más sobre redes sociales y sobre todo cómo ganar
> dinero con ellas, sígueme por Instagram…" (`ig-095`)

> "…si quieres aprender cómo crecer en redes sociales y, sobre todo, cómo
> ganar dinero con ellas, sígueme por Instagram…" (`ig-100`)

**Avatar de VHE-A:** alguien que todavía no tiene marca personal — está
aprendiendo, es contenido educativo/divulgativo, el CTA es "seguime", nunca
"comenta" (`hooks.md` §6: 0 apariciones de "comenta/coméntame" en los 22
reels de VHE-A). Es contenido de awareness/top-of-funnel, no de captación
directa.

### HM (2025-2026) — quien "ya tiene un nicho" y quiere crecer con él

Acá el vocabulario cambia: ya no se habla de "aprender marca personal" en
abstracto, sino de negocio ya en marcha, con nicho propio y necesidad de
clientes:

> "…3 tipos de contenido que sí funcionan y que tienes que hacer para
> **conseguir clientes con lista**." (`ig-065`)

> "…te voy a explicar cuál es el plan de contenidos y plan de ventas exacto
> que tienes que seguir para escalar a 100.000 seguidores y generar mínimo
> 20.000 euros al mes **con tu cuenta de hoy**." (`ig-062`)

"Con tu cuenta de hoy" es la marca más clara del avatar de HM: no es
alguien que empieza de cero, es alguien que **ya tiene una cuenta de
Instagram activa** (probablemente estancada o de bajo alcance — de ahí que
casi todos los CTA de HM prometan "estructura", "sistema" o "guion", no
"empezá de cero") y quiere convertirla en negocio.

**Avatar de HM:** dueño de negocio/creador con nicho definido, cuenta de
Instagram ya activa, quiere crecer alcance y convertir ese alcance en
clientes o ventas — no awareness, es fondo de funnel.

## El framework que Víctor mismo enseña sobre "el seguidor ideal"

Es meta-información: no describe la audiencia de Víctor, describe el
framework que **Víctor le enseña a su audiencia** para que definan la
propia. Vale la pena tenerlo documentado porque, si algún día hay que
construir el avatar real de Víctor, este es el molde que él mismo usaría:

> "Toda buena estrategia de marketing y de redes sociales parte, antes de
> nada, de una cosa: tu seguidor ideal. […] Si no sabes bien quién es tu
> seguidor ideal, no vas a vender ni un colín." (`ig-097`)

Caption del mismo reel, los 5 elementos declarados como framework completo:

> "Aquí tienes los elementos primordiales de tu seguidor ideal: Problemas
> externos · Problemas internos · Enemigo Común · Metas tangibles · Deseo
> principal." (`ig-097`)

Nadie completó estos 5 elementos para el propio avatar de Víctor en ningún
otro reel del corpus — es un framework enseñado, no aplicado a sí mismo.

## Dolores, en palabras del cliente — inferidos, no citados

⚠️ A diferencia de Bernardo (que tiene un bloque "¿Te identificas?" escrito
en su landing), **acá no hay ningún texto donde Víctor liste el dolor de su
audiencia en 1ª persona del lead.** Lo que sigue son dolores que se pueden
inferir del propio copy de los CTA — quedan marcados como inferencia, no
como cita:

- "Tu cuenta no crece" / "tus vídeos no funcionan" — implícito en cada CTA
  de "estructura"/"sistema"/"guion" (ver `oferta.md`, tabla de CTAs).
- "Tienes seguidores pero no clientes" — implícito en "conseguir clientes
  con lista" (`ig-065`).
- "Tu contenido no convierte en dinero" — implícito en las promesas de
  "20.000 €/mes" (ver `oferta.md` §Cifras problemáticas).
- La escena de `ig-060` (Susana: cuenta "intoxicada", 500-700 visitas por
  vídeo, 17.000 seguidores estancados) es el único momento del corpus donde
  se dramatiza el problema de un lead con números concretos — pero es un
  sketch actuado con nombre propio, no una cita textual de un lead real.

## Nivel de sofisticación

**Medio.** No es principiante absoluto (a diferencia del público de
`@bernardojuradofacts`, que consume trabalenguas y filosofía en 1 minuto):
el vocabulario de HM asume que quien mira ya sabe qué es un "reel", un
"hashtag", un "carrusel" — `ig-094` ("11 cosas que bajan el alcance") habla
de tácticas específicas de la plataforma sin explicar los conceptos base.
Pero tampoco es experto: cada CTA promete "la estructura"/"el sistema" como
si el espectador no lo tuviera todavía — es alguien que publica pero no
tiene método.

## Vacíos de audiencia — todos van a `fase-0-pedido.md`

- **Ningún dato demográfico.** Edad, género, país, tamaño de negocio: todo
  `SIN DATO`. No hay Insights de IG conectados al dashboard.
- **Ningún comentario real cosechado.** Los 80 reels traen `views/likes/
  comments` como número, pero no el texto de los comentarios — sería la
  fuente más valiosa (igual que en `bernardo/audiencia.md`) y no está.
- **Relación entre las 2-3 cuentas y sus audiencias.** ¿Los seguidores de
  VHE-A (marca personal, aprendices) migraron a HM (nicho ya definido,
  clientes)? ¿Son la misma base de gente 2-3 años después, o dos públicos
  distintos? No hay forma de saberlo desde el contenido.
- **Quién responde a los CTA realmente.** No hay dato de qué % de
  comentaristas son leads calificados vs. curiosos — sólo el conteo bruto
  de comentarios por reel (ya medido en `hooks.md`).
- **Cualquier dato de `@victorherasreels`.** 1 sola transcripción — no
  alcanza para saber a quién le habla esa cuenta.
