# Pedido a Víctor / Ivan (y al cliente) — Fase 0

Esto es lo que el cerebro **no puede sacar de los videos ni de las páginas
públicas**. Sin estos datos el cerebro sirve para mapear el negocio, pero no para
escribir: no sabe cómo habla, no sabe el precio y no sabe qué se puede prometer.

Particularidad de este cliente: **es la casa.** Wealthy Trades LLC es la agency
del dashboard (`CONTEXT.md:3`) y también la LLC que firma el funnel del Sensei. La
decisión de compliance es interna, no se puede patear a "que la tome el cliente".

Copiable tal cual para mandar por WhatsApp:

---

Para armar el cerebro de El Sensei necesito esto. Lo que ya tengo resuelto: el
embudo (clip → landing institutodeltrading.com/<handle> → clase gratis → survey →
WhatsApp), los CTAs de las landings, y 879 links de video de ago-dic 2025 para
transcribir. Lo que me falta:

**Compliance (esto bloquea todo, va primero)**
1. ¿Qué podemos prometer y qué no? Necesito la lista por escrito. Hoy la home de
   institutodeltrading.com dice "Gana $2938/mes haciendo trading en 90 días" sin
   disclaimer de riesgo, y hay testimonios con retiros de hasta $585.000 y alumnos
   de 17 años. No pienso escribir un ad que repita eso sin que alguien lo firme.
2. El disclaimer de riesgo obligatorio, en español y corto, para meter en pantalla
   y en el copy. El que existe está sólo en inglés y sólo en las landings.
3. ¿Se pueden usar testimonios de alumnos? ¿Cuáles, con qué texto exacto, con
   permiso escrito de quién?
4. El contador "Los estudiantes del Sensei han retirado" marcaba $0 cuando lo
   miré, mientras los testimonios de la misma página hablan de seis cifras.
   ¿Alguien lo revisa? Es lo primero que ve quien audite un ad.

**Oferta**
5. ¿Cuánto cuesta el Instituto del Trading? Ticket, planes, formas de pago.
   (Los tramos del survey — 0-300 / 300-1.000 / 1.000-3.000 / +3.000 — son filtro
   de presupuesto, no precio, y no los voy a usar como precio.)
6. ¿Hay garantía? ¿Cuál, textual?
7. ¿Qué se vende después del programa? (upsell, backend, renovación)
8. "Academia del Sensei", "Proyecto 2.0", "Amigos del Sensei", "Manual de BIAS",
   Rocket21: ¿algo de eso sigue vivo? Lo vi sólo en sitios de cursos pirateados y
   en blogs críticos, así que no lo tomé como oferta.

**VSL**
9. El link https://go.institutodeltrading.com/4ca4eec2 (el de la bio de
   @senseiprofe) me devuelve 403. ¿Me pasás el VSL, o una grabación de pantalla?
   Es el único lugar donde está el pitch completo y sin eso no puedo escribir ads.
10. ¿Hay más VSLs o funnels activos además de institutodeltrading.com?

**CTAs**
11. El CTA exacto que usan en los reels. En la landing es "RESERVAR MI LUGAR
    GRATIS" y en la home "APLICAR A SER ESTUDIANTE", pero el de los clips no lo
    tengo. ¿Es comentario-gatillo tipo "Comenta CLASE"? ¿Link en bio? ¿DM?
12. ¿Cada uno de los ~30 handles tiene su propia landing
    institutodeltrading.com/<handle>? Verifiqué librosdelsensei y clipsdelsensei;
    del resto no sé. Si hay una lista, mandámela.

**Identidad de las cuentas (esto me está frenando la voz)**
13. @elsensei (957K, verificada, display "Sebastian Rodriguez") vs @senseiprofe
    (316K, display "**Sebastian Ganimedes**", bio "Trabajo en el JP Morgan").
    ¿Es la misma persona? ¿Socio? ¿Rebrand? No mezclo las dos voces hasta que me
    lo confirmen.
14. ¿Cuál es la cuenta madre hoy, en 2026? @elsensei tiene posts hasta enero 2026
    y su bio manda tráfico a la otra.
15. ¿Quién aparece en cámara en los clips de los satélites? ¿Es siempre él, o hay
    editores/actores/voz en off? Si son varias personas, el cerebro se parte en
    varias voces.
16. @senseishorts: la URL de Instagram hoy es una cuenta ajena ("SS", 2
    seguidores). ¿Se perdió el handle, se renombró, o se cayó? Y de paso: ¿qué
    handles de la lista siguen vivos?

**Contenido (para la voz)**
17. ¿Hay algún video largo, live, podcast o clase grabada del Sensei? Una hora de
    él hablando vale más que 100 clips para clonar la voz.
18. Insights de Instagram de 2 o 3 handles grandes (edad, género, país). Hoy la
    audiencia es SIN DATO: lo único que tengo son los países del formulario.
19. Los comentarios de los videos que mejor funcionaron, en crudo. De ahí salen
    los dolores en las palabras del lead, que es lo que hace que el copy
    convierta.
20. Lo que escuchan los setters/closers por WhatsApp: las 5 objeciones más
    repetidas, textuales. Nadie está capturando eso y es la fuente más rica que
    tienen.

**Ads**
21. Ads que ya corrieron: creativos + resultado, aunque sea "este funcionó, este
    no".

**Operación del dashboard (aparte, pero conviene)**
22. Desde enero 2026 las CMs dejaron de cargar el **link** en "Publicación más
    Vista" y cargan sólo el número. Por eso los 879 videos que tengo son todos de
    ago-dic 2025. ¿Pueden volver a cargar el link? Es la única fuente de URLs de
    video que existe.
23. En el CSV de Instagram hay 228 filas donde la columna CUENTA está vacía y sólo
    está el nombre de la CM (Kelly, Fabiola, Valeria, María). Esos videos no los
    puedo atribuir a ningún handle.
24. Confirmar que estén las 3 env vars NOTION_DB_EL_SENSEI_IG / _TT / _YT en
    Vercel: si falta una, esa plataforma se omite en silencio y el panel muestra
    datos incompletos sin avisar.

---

## Estado

| # | Ítem | Respondido |
|---|---|---|
| 1-4 | Compliance y claims aprobados (**bloquea ads**) | ☐ |
| 5-8 | Oferta y precio | ☐ |
| 9-10 | VSL | ☐ |
| 11-12 | CTAs y landings por handle | ☐ |
| 13-16 | Identidad de las cuentas | ☐ |
| 17-20 | Material de voz y audiencia | ☐ |
| 21 | Ads históricos | ☐ |
| 22-24 | Operación de la data | ☐ |

## Lo que ya está resuelto (no hace falta pedirlo)

| Dato | Fuente |
|---|---|
| Nombre real: Sebastián Rodríguez | display name de @elsensei (verificada) + prensa + autor en Teachable |
| Empresa: Wealthy Trades LLC | `README.md:3` + footer de las landings |
| Marca del producto: Instituto del Trading | https://institutodeltrading.com/ |
| Embudo completo, de clip a WhatsApp | las dos landings + `/survey` |
| CTA de lead magnet: "RESERVAR MI LUGAR GRATIS" | https://institutodeltrading.com/librosdelsensei |
| CTA de venta: "APLICAR A SER ESTUDIANTE — HAZ CLICK AQUI" | https://institutodeltrading.com/ |
| Las 9 preguntas del formulario de aplicación | https://institutodeltrading.com/survey |
| Red de ~30 handles satélite con su temática | `data/csv/el-sensei__{IG,TT,YT}.csv` |
| 879 URLs de video de ago-dic 2025 | `fuentes/catalogo.csv` |
| Disclaimer de riesgo en inglés (texto verbatim) | landings por handle |

## Pendiente del lado nuestro (no es pedido, es tarea)

- Registrar `sensei` en `~/.claude/skills/reel-to-guion/clients.json` (hoy sólo
  está Bernardo Jurado) — pero recién cuando haya CTA y notas de voz reales, no
  antes.
- Mergear los handles duplicados (`@senseishorts` vs `@Senseishorts`,
  `senseicalvito` sin `@`, `calvito.sensei`, `@senseirich_` vs `@richsensei`):
  hasta entonces cualquier ranking de handles está sesgado
  (`docs/adr/0002-smart-cleanup-auto-create-handles.md:10-15`).
- Confirmar cuándo fue el último sync exitoso de Notion antes de citar cualquier
  número del panel.
