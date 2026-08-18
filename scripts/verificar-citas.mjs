#!/usr/bin/env node
/* =================================================================
   Verifica que todo lo que un cerebro afirma se pueda rastrear hasta un
   video concreto.

   La regla de oro del repo ("nada se inventa") hasta ahora era una promesa.
   Esto la convierte en un test: recorre los archivos curados del cerebro
   (voz.md, oferta.md, audiencia.md, biblioteca/, salidas/, piezas/) y chequea
   tres cosas distintas:

     1. Referencias rotas — el archivo cita `ig-012` y no existe ig-012.
     2. Verbatim que no dice lo que dice — el archivo entrecomilla una frase
        y la atribuye a `ig-012`, pero esa frase no está en ig-012. Si está en
        otra transcripción, lo dice: "aparece en ig-045".
     3. Verbatim sin fuente — hay comillas y no hay ningún ref cerca. Es lo que
        no se puede justificar cuando el cliente pregunta de dónde salió.

   Además reporta cobertura: cuántas transcripciones se citan al menos una vez y
   cuáles de las más vistas quedaron sin usar (el caso "escribiste la voz sin
   mirar el video de 9M").

   Los errores 1 y 2 devuelven exit 1: son falsos verificables. El 3 es
   advertencia — un verbatim puede venir de la web o del VSL, no de un reel.

   Uso:
     node scripts/verificar-citas.mjs                 # todos
     node scripts/verificar-citas.mjs gocho           # uno
     node scripts/verificar-citas.mjs gocho --cobertura 20
     node scripts/verificar-citas.mjs --json

   (en viralidad-dashboard el script está en cerebros/scripts/; el mismo archivo
   sirve en los dos, resuelve solo dónde está cerebros/)
   ================================================================= */

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { dirname, join, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

/* El script vive en dos layouts: `cerebros/scripts/` dentro de viralidad-dashboard
   y `scripts/` en la raíz de viralidad-cerebros (el plugin). En vez de fijar la
   profundidad, sube desde el script hasta encontrar la carpeta `cerebros/`, así
   el archivo es el mismo en los dos repos y se copia sin tocar nada. */
function buscarCerebros(desde) {
  let dir = desde;
  for (let i = 0; i < 5; i++) {
    const cand = join(dir, "cerebros");
    if (existsSync(cand) && statSync(cand).isDirectory()) return cand;
    if (dir.endsWith("/cerebros") && existsSync(join(dir, "..", "cerebros"))) return dir;
    const arriba = resolve(dir, "..");
    if (arriba === dir) break;
    dir = arriba;
  }
  console.error("✗ No encontré la carpeta cerebros/ arriba de este script.");
  process.exit(1);
}

const CEREBROS = buscarCerebros(dirname(fileURLToPath(import.meta.url)));
const REPO = resolve(CEREBROS, "..");

/* Carpetas de un cerebro donde vive lo curado. `fuentes/` queda afuera a
   propósito: es la evidencia, no la afirmación. */
const CURADO = ["", "biblioteca", "salidas", "salidas/ads", "salidas/guiones", "piezas"];
const IGNORAR = new Set(["INTAKE.md", "README.md", "_PLANTILLA.md", "INSTRUCCIONES-PROJECT.md"]);

const MIN_PALABRAS_CITA = 4;

/* En voz.md, la biblioteca y las piezas, una frase entrecomillada es siempre
   material dicho en cámara: si no se rastrea, es un problema. En CEREBRO.md,
   oferta.md y audiencia.md las comillas suelen ser copy de la web, opciones de
   un survey o un título de producto, y exigirles transcripción sería ruido. */
const esDeVoz = (rel) => /(^|\/)voz\.md$|\/biblioteca\/|\/salidas\/|\/piezas\//.test(rel);

const normalizar = (s) =>
  s
    /* "1.000.000" y "1000000" son el mismo número: el curador le pone los puntos
       y el ASR no. Sin esto, cada monto citado se lee como inventado. */
    .replace(/(\d)[.,](?=\d{3}\b)/g, "$1")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const palabras = (s) => (s.trim() ? s.trim().split(/\s+/).length : 0);

/* `ig-1`, `IG-001`, `yt-s3` y `#47` son la misma familia de refs escritas de mil
   maneras. Todo se reduce a una clave para poder comparar. */
function claveRef(token) {
  const t = token.toLowerCase().replace(/^#/, "");
  const m = t.match(/^(ig|yt)-(s?)(\d+)$/);
  if (m) return `${m[1]}-${m[2]}${String(Number(m[3])).padStart(3, "0")}`;
  if (/^\d+$/.test(t)) return `#${Number(t)}`;
  return t;
}

function claveDeArchivo(nombre) {
  const m = nombre.match(/^((?:ig|yt)-s?\d+|\d{2,})/i);
  return m ? claveRef(m[1]) : null;
}

function frontmatter(texto) {
  const m = texto.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const campos = {};
  for (const linea of m[1].split("\n")) {
    const i = linea.indexOf(":");
    if (i > 0) campos[linea.slice(0, i).trim()] = linea.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return campos;
}

function listarMd(dir) {
  if (!existsSync(dir) || !statSync(dir).isDirectory()) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !IGNORAR.has(f))
    .map((f) => join(dir, f));
}

/* Un caption también es fuente citable. `audiencia.md` cita "Comenta CLASE 👇🏽 si
   estás en Estados Unidos…", que él nunca dijo en cámara: está escrito en el
   post. Sin esto el validador lo mandaba a buscar a las transcripciones y lo
   marcaba inventado — un falso ✗ que empuja a borrar una cita que es verdadera.
   Se lee la columna `caption` de cualquier `fuentes/*.csv` del cerebro. */
function parsearCSV(texto) {
  const filas = [];
  let campo = "";
  let fila = [];
  let entre = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (entre) {
      if (c === '"') {
        if (texto[i + 1] === '"') { campo += '"'; i++; } else entre = false;
      } else campo += c;
    } else if (c === '"') entre = true;
    else if (c === ",") { fila.push(campo); campo = ""; }
    else if (c === "\n") { fila.push(campo); filas.push(fila); fila = []; campo = ""; }
    else if (c !== "\r") campo += c;
  }
  if (campo || fila.length) { fila.push(campo); filas.push(fila); }
  return filas.filter((f) => f.some((x) => x !== ""));
}

function cargarCaptions(slug) {
  const dir = join(CEREBROS, slug, "fuentes");
  if (!existsSync(dir) || !statSync(dir).isDirectory()) return [];
  const out = [];
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".csv"))) {
    const filas = parsearCSV(readFileSync(join(dir, f), "utf8"));
    if (!filas.length) continue;
    const cab = filas[0].map((c) => c.trim().toLowerCase());
    const iCap = cab.indexOf("caption");
    if (iCap < 0) continue;
    const iId = ["transcripto", "shortcode", "fecha", "n"].map((c) => cab.indexOf(c)).find((i) => i >= 0) ?? -1;
    for (const fila of filas.slice(1)) {
      const cap = (fila[iCap] || "").trim();
      if (!cap) continue;
      const id = iId >= 0 ? (fila[iId] || "").trim() : "";
      out.push({ clave: `${f}${id && id !== "no" ? ` (${id})` : ""}`, texto: normalizar(cap) });
    }
  }
  return out;
}

function cargarTranscripciones(slug) {
  const dir = join(CEREBROS, slug, "fuentes", "transcripciones");
  const mapa = new Map();
  for (const path of listarMd(dir)) {
    const nombre = path.split("/").pop();
    const clave = claveDeArchivo(nombre);
    if (!clave) continue;
    const crudo = readFileSync(path, "utf8");
    const fm = frontmatter(crudo);
    mapa.set(clave, {
      clave,
      archivo: nombre,
      texto: normalizar(crudo.replace(/^---\n[\s\S]*?\n---/, "")),
      views: Number(fm.views) || 0,
      cuenta: fm.cuenta || "",
      url: fm.url || "",
    });
  }
  return mapa;
}

/* Saca las frases entrecomilladas del archivo entero, no línea por línea: en los
   cerebros una cita larga se parte en dos renglones por el ancho de 80, y
   partirla ahí la vuelve inverificable contra la transcripción. Las formas que
   aparecen son «», comillas tipográficas, comillas rectas y blockquote. */
function citasDeTexto(texto, lineas, inicioDeLinea) {
  const lineaDe = (idx) => {
    let lo = 0;
    let hi = inicioDeLinea.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (inicioDeLinea[mid] <= idx) lo = mid;
      else hi = mid - 1;
    }
    return lo;
  };

  const crudas = [];
  /* Los blockquote se procesan aparte; si no, sus comillas se aparean con las
     del párrafo siguiente y el match captura prosa que nadie citó. Se blanquean
     conservando el largo para no correr los índices. */
  const sinBloques = texto.replace(/^[ \t]*>.*$/gm, (l) => " ".repeat(l.length));
  const patrones = [/«([\s\S]{10,600}?)»/g, /[“”]([\s\S]{10,600}?)[“”]/g, /"([\s\S]{10,600}?)"/g];
  for (const re of patrones) {
    for (const m of sinBloques.matchAll(re)) {
      if ((m[1].match(/\n/g) || []).length > 5) continue;
      /* Filtro de forma: una cita empieza como oración y termina puntuada. Sin
         esto, dos comillas de énfasis sueltas ("usted" … "tú") se aparean entre
         sí y capturan el párrafo que hay en el medio. */
      const limpio = m[1].replace(/\s+/g, " ").trim();
      if (!/^[¿¡A-ZÁÉÍÓÚÑ]/.test(limpio) || !/[.?!…]$/.test(limpio.replace(/["»”)\s]+$/, ""))) continue;
      /* Una comilla suelta adentro delata que el par se armó mal: el cierre de
         una palabra entrecomillada corta ("Ramón") se apareó con la apertura de
         la siguiente y el capturado es la prosa del medio. */
      if (/["«»“”]/.test(limpio)) continue;
      /* Rótulo, no cita: **"Yo no sé clavar un clavo."** titula un apartado y el
         verbatim real va abajo, en el blockquote, con su propia ref. */
      if (sinBloques.slice(Math.max(0, m.index - 2), m.index) === "**") continue;
      crudas.push({ contenido: m[1], ini: lineaDe(m.index), fin: lineaDe(m.index + m[0].length) });
    }
  }

  /* Blockquote: renglones `>` consecutivos son una sola cita partida por el
     ancho de 80 — salvo que el renglón cierre con su propia ref, que es como
     voz.md lista varios verbatim distintos uno abajo del otro. Ahí termina. */
  const cierraCita = (t) =>
    /(?:ig|yt)-s?\d{1,4}\s*$/i.test(t.trim()) ||
    /\((?:ig|yt)-s?\d{1,4}[^)]*\)[.\s]*$/i.test(t.trim());
  let bloque = null;
  lineas.forEach((linea, i) => {
    const m = linea.match(/^\s*>\s?(.*)$/);
    if (m) {
      if (!bloque) bloque = { contenido: "", ini: i, fin: i };
      bloque.contenido += `${m[1]} `;
      bloque.fin = i;
      if (cierraCita(m[1])) {
        crudas.push(bloque);
        bloque = null;
      }
    } else if (bloque) {
      crudas.push(bloque);
      bloque = null;
    }
  });
  if (bloque) crudas.push(bloque);

  /* Un blockquote suele traer la cita entre comillas y, pegado, el comentario del
     curador: "…más grande de España." (ig-043) — la misma fórmula en 6 reels.
     Lo dicho es sólo lo que va entre comillas; el resto es anotación y arrastra
     el parecido para abajo hasta hacer pasar por inventada una cita real. */
  const soloLoEntrecomillado = (t) => {
    const m = t.match(/^\s*[«"“]([\s\S]+?)[»"”](?=\s*(?:\(|—|$))/);
    return m && palabras(m[1]) >= MIN_PALABRAS_CITA ? m[1] : t;
  };

  const vistas = new Set();
  const citas = [];
  for (const c of crudas) {
    /* Un blockquote que abre en negrita y no entrecomilla nada es un aviso al
       lector — "**Los hooks recortados NO se calcan tal cual.**" — y no material
       dicho en cámara. El verbatim en blockquote siempre va entre comillas. */
    if (/^\s*\*\*/.test(c.contenido) && !/["«»“”]/.test(c.contenido)) continue;
    const contenido = soloLoEntrecomillado(
      c.contenido
        .replace(/^\s*>\s?/gm, " ")
        .replace(/\*\*|__|`/g, "")
        .replace(/\s+/g, " ")
        .trim()
    )
      /* La ref suele venir pegada al final de la cita — "…aquí abajo." (yt-018) —
         y a veces arrastra las métricas del reel: (ig-001, 9.085.136 views — el
         más visto del corpus). Todo eso es anotación, no es lo dicho. */
      .replace(/[\s—·-]*\(?(?:ig|yt)-s?\d{1,4}\)?\s*(?:[,·—-][^"«»“”]*)?$/i, "")
      .replace(/\s+/g, " ")
      .trim();
    const clave = `${c.ini}:${normalizar(contenido)}`;
    if (vistas.has(clave)) continue;
    if (palabras(contenido) < MIN_PALABRAS_CITA || /SIN DATO/i.test(contenido)) continue;
    /* Molde, no cita: "Comenta [palabra que nombra el entregable] en este vídeo"
       es una estructura para calcar. Un hueco de varias palabras entre corchetes
       lo delata; los `[música]` del ASR son de una sola y siguen contando. */
    if (/\[[^\]]*\s[^\]]*\]/.test(contenido)) continue;
    vistas.add(clave);
    citas.push({ ...c, contenido });
  }
  return citas;
}

function refsDeTexto(texto, admiteNumeral) {
  const re = admiteNumeral ? /\b(?:ig|yt)-s?\d{1,4}\b|#\d{1,4}\b/gi : /\b(?:ig|yt)-s?\d{1,4}\b/gi;
  return [...new Set((texto.match(re) || []).map(claveRef))];
}

/* Una cita puede tener ellipsis: "arranqué de cero … y hoy retiran". Se verifica
   por fragmentos, porque el pedazo del medio no está en la transcripción. */
function fragmentos(cita) {
  return cita
    .split(/\s*(?:…|\.\.\.|\[\.\.\.\])\s*/)
    .map(normalizar)
    .filter((f) => palabras(f) >= MIN_PALABRAS_CITA);
}

/* Match tolerante por 3-gramas en vez de substring exacto. Una cita curada casi
   nunca es byte a byte igual al ASR: se le sacan los "[música]", los tartamudeos
   y algún "eh". Exigir igualdad exacta marcaría como inventado todo lo que
   alguien limpió a mano, que es justo lo que queremos que se haga. */
const CAE_OK = 0.8;
const CAE_RETOQUE = 0.55;

function gramas(palabrasArr, n = 3) {
  const out = [];
  for (let i = 0; i + n <= palabrasArr.length; i++) out.push(palabrasArr.slice(i, i + n).join(" "));
  return out;
}

function gramasDe(t) {
  if (!t.gramas) t.gramas = new Set(gramas(t.texto.split(" ")));
  return t.gramas;
}

function cobertura(fragmento, t) {
  const w = fragmento.split(" ");
  if (w.length < 3) return t.texto.includes(fragmento) ? 1 : 0;
  const sh = gramas(w);
  const set = gramasDe(t);
  let aciertos = 0;
  for (const s of sh) if (set.has(s)) aciertos++;
  return aciertos / sh.length;
}

function puntaje(trozos, t) {
  return Math.min(...trozos.map((f) => cobertura(f, t)));
}

function verificarCita(cita, refs, transcripciones, captions = []) {
  const trozos = fragmentos(cita);
  if (!trozos.length) return { estado: "corta" };

  let mejorRef = { p: 0, clave: null };
  for (const ref of refs) {
    const t = transcripciones.get(ref);
    if (!t) continue;
    const p = puntaje(trozos, t);
    if (p > mejorRef.p) mejorRef = { p, clave: ref };
  }
  if (mejorRef.p >= CAE_OK) return { estado: "ok", donde: mejorRef.clave, p: mejorRef.p };

  let mejorOtra = { p: 0, clave: null };
  for (const t of transcripciones.values()) {
    const p = puntaje(trozos, t);
    if (p > mejorOtra.p) mejorOtra = { p, clave: t.clave };
  }
  if (mejorOtra.p >= CAE_OK) {
    return { estado: refs.length ? "otra-fuente" : "sin-ref-hallada", donde: mejorOtra.clave, p: mejorOtra.p };
  }
  if (mejorRef.p >= CAE_RETOQUE) return { estado: "retocada", donde: mejorRef.clave, p: mejorRef.p };

  /* Recién acá se miran los captions: si la frase estuviera dicha en otro video,
     eso es una atribución mal puesta y tiene que seguir siendo error. El caption
     sólo rescata lo que no está en ninguna transcripción. */
  let mejorCap = { p: 0, clave: null };
  for (const c of captions) {
    const p = puntaje(trozos, c);
    if (p > mejorCap.p) mejorCap = { p, clave: c.clave };
  }
  if (mejorCap.p >= CAE_OK) return { estado: "caption", donde: mejorCap.clave, p: mejorCap.p };

  return { estado: refs.length ? "no-aparece" : "sin-fuente", donde: mejorOtra.clave, p: mejorOtra.p };
}

function verificar(slug) {
  const raiz = join(CEREBROS, slug);
  const transcripciones = cargarTranscripciones(slug);
  const captions = cargarCaptions(slug);
  const admiteNumeral = [...transcripciones.keys()].some((k) => k.startsWith("#"));

  const errores = [];
  const avisos = [];
  const citadas = new Set();
  const porArchivo = [];
  let sinDato = 0;
  let totalCitas = 0;

  const archivos = CURADO.flatMap((sub) => listarMd(join(raiz, sub)));

  for (const path of archivos) {
    const rel = relative(CEREBROS, path);
    const crudo = readFileSync(path, "utf8");
    const lineas = crudo.split("\n");
    /* Índice de dónde arranca cada renglón, para traducir posición → línea. */
    const inicioDeLinea = [];
    let acumulado = 0;
    for (const linea of lineas) {
      inicioDeLinea.push(acumulado);
      acumulado += linea.length + 1;
    }

    const esTitulo = (l) => /^#{1,6}\s/.test(l);
    /* Borde de ítem: un título, o un ítem numerado en negrita ("**3 · La rutina
       de las 4:47** — ig-005"), que es como voz.md lista sus anclajes. */
    const esBorde = (l) => esTitulo(l) || /^\s*\*\*\d+\s*[·.)]/.test(l);
    const inicioItem = (i) => {
      for (let k = i; k >= 0; k--) if (esBorde(lineas[k])) return k;
      return 0;
    };
    const finItem = (i) => {
      for (let k = i + 1; k < lineas.length; k++) if (esBorde(lineas[k])) return k - 1;
      return lineas.length - 1;
    };
    const inicioSeccion = (i) => {
      for (let k = i; k >= 0; k--) if (esTitulo(lineas[k])) return k;
      return 0;
    };
    const finSeccion = (i) => {
      for (let k = i + 1; k < lineas.length; k++) if (esTitulo(lineas[k])) return k;
      return lineas.length;
    };

    sinDato += (crudo.match(/SIN DATO/g) || []).length;
    const refsArchivo = new Set();

    lineas.forEach((linea, i) => {
      for (const ref of refsDeTexto(linea, admiteNumeral)) {
        refsArchivo.add(ref);
        if (transcripciones.has(ref)) citadas.add(ref);
        else if (!ref.startsWith("#")) errores.push({ tipo: "ref-rota", archivo: rel, linea: i + 1, ref });
      }
    });

    const citas = citasDeTexto(crudo, lineas, inicioDeLinea);
    for (const cita of citas) {
      totalCitas++;
      /* La ref casi nunca comparte renglón con la cita: viene abajo, como
         "— ig-012 · 9,08M views". Si no hay ninguna cerca, vale la de la sección
         entera: en biblioteca/ el patrón es varias citas seguidas y un
         "**Fuente:** yt-004, yt-007." al pie del bloque — y sólo esa línea de
         atribución explícita cuenta, porque una ref suelta en la prosa de la
         sección no es una atribución. Cuando sí hay una ref pegada, esa manda — si no, una ref vecina taparía la atribución mal
         puesta, que es justo lo que hay que cazar. */
      /* Las dos convenciones del repo son opuestas: en biblioteca/ y en los
         bloques de anclaje la ref va debajo o en el encabezado de arriba, y en
         voz.md va inline al final de la cita. Adivinar la dirección hace que en
         un archivo bien escrito la ref del ítem *siguiente* se lleve la cita —
         un corrimiento de uno que ensucia el reporte entero. Así que no se
         adivina: gana la ref más cercana en líneas, y empatan las que estén a
         la misma distancia — pero sin cruzar el borde del ítem, porque el
         encabezado del ítem siguiente suele quedar más cerca que el propio. */
      const candidatas = new Map();
      const desde = Math.max(inicioItem(cita.ini), cita.ini - 4);
      const hasta = Math.min(finItem(cita.fin), cita.fin + 3);
      for (let k = desde; k <= hasta; k++) {
        const d = k < cita.ini ? cita.ini - k : k > cita.fin ? k - cita.fin : 0;
        for (const ref of refsDeTexto(lineas[k], admiteNumeral)) {
          if (!candidatas.has(ref) || candidatas.get(ref) > d) candidatas.set(ref, d);
        }
      }
      const minDist = Math.min(...candidatas.values());
      const cerca = [...candidatas].filter(([, d]) => d === minDist).map(([ref]) => ref);

      const seccion = refsDeTexto(
        lineas
          .slice(inicioSeccion(cita.ini), finSeccion(cita.fin))
          .filter((l) => /\b(fuente|referencia|refs?)\b\s*:?\*{0,2}\s*:/i.test(l))
          .join("\n"),
        admiteNumeral,
      );
      const refs = (cerca.length ? cerca : seccion).filter((r) => transcripciones.has(r));
      const r = verificarCita(cita.contenido, refs, transcripciones, captions);
      const linea = cita.ini + 1;
      const corta = cita.contenido.length > 90 ? `${cita.contenido.slice(0, 90)}…` : cita.contenido;

      if (r.estado === "ok") citadas.add(r.donde);
      else if (r.estado === "otra-fuente")
        errores.push({ tipo: "fuente-equivocada", archivo: rel, linea, cita: corta, refs, donde: r.donde });
      else if (r.estado === "no-aparece")
        errores.push({ tipo: "no-aparece", archivo: rel, linea, cita: corta, refs, donde: r.donde, p: r.p });
      else if (r.estado === "sin-ref-hallada") {
        citadas.add(r.donde);
        avisos.push({ tipo: "sin-ref", archivo: rel, linea, cita: corta, donde: r.donde });
      } else if (r.estado === "retocada") {
        citadas.add(r.donde);
        avisos.push({ tipo: "retocada", archivo: rel, linea, cita: corta, donde: r.donde, p: r.p });
      } else if (r.estado === "caption")
        avisos.push({ tipo: "caption", archivo: rel, linea, cita: corta, donde: r.donde });
      else if (r.estado === "sin-fuente" && esDeVoz(rel))
        avisos.push({ tipo: "sin-fuente", archivo: rel, linea, cita: corta });
    }

    porArchivo.push({ archivo: rel, refs: refsArchivo.size, citas: citas.length });
  }

  /* Sin `texto` ni el cache de gramas: son megabytes que nadie quiere ver. */
  const sinCitar = [...transcripciones.values()]
    .filter((t) => !citadas.has(t.clave))
    .sort((a, b) => b.views - a.views)
    .map(({ clave, archivo, views, cuenta, url }) => ({ clave, archivo, views, cuenta, url }));

  return {
    slug,
    transcripciones: transcripciones.size,
    archivos: porArchivo,
    totalCitas,
    citadas: citadas.size,
    sinDato,
    errores,
    avisos,
    sinCitar,
  };
}

const miles = (n) => n.toLocaleString("es-AR");

function imprimir(r, topCobertura) {
  const pct = r.transcripciones ? Math.round((r.citadas / r.transcripciones) * 100) : 0;
  const estado = r.errores.length ? "✗" : r.avisos.length ? "⚠" : "✓";
  console.log(`\n${estado} ${r.slug}`);
  console.log(
    `  ${r.archivos.length} archivos curados · ${miles(r.totalCitas)} citas · ` +
      `${r.citadas}/${r.transcripciones} transcripciones usadas (${pct}%) · ${r.sinDato} SIN DATO`,
  );

  for (const e of r.errores) {
    if (e.tipo === "ref-rota") console.log(`  ✗ ${e.archivo}:${e.linea} — cita ${e.ref}, que no existe`);
    else if (e.tipo === "fuente-equivocada")
      console.log(`  ✗ ${e.archivo}:${e.linea} — «${e.cita}» atribuida a ${e.refs.join(", ")}; está en ${e.donde}`);
    else {
      const pista = e.donde ? ` (lo más parecido: ${e.donde} al ${Math.round(e.p * 100)}%)` : "";
      console.log(`  ✗ ${e.archivo}:${e.linea} — «${e.cita}» no aparece en ${e.refs.join(", ")}${pista}`);
    }
  }
  for (const a of r.avisos) {
    if (a.tipo === "retocada")
      console.log(`  ⚠ ${a.archivo}:${a.linea} — «${a.cita}» retocada sobre ${a.donde} (${Math.round(a.p * 100)}% literal)`);
    else if (a.tipo === "sin-ref") console.log(`  ⚠ ${a.archivo}:${a.linea} — «${a.cita}» sin ref; es de ${a.donde}`);
    else if (a.tipo === "caption")
      console.log(`  ⚠ ${a.archivo}:${a.linea} — «${a.cita}» es caption, no dicho en cámara — ${a.donde}`);
    else console.log(`  ⚠ ${a.archivo}:${a.linea} — «${a.cita}» sin fuente citable`);
  }

  if (topCobertura && r.sinCitar.length) {
    console.log(`  Sin citar, las más vistas:`);
    for (const t of r.sinCitar.slice(0, topCobertura)) {
      console.log(`    ${t.clave} — ${miles(t.views)} views — ${t.archivo}`);
    }
  }
}

const args = process.argv.slice(2);
const json = args.includes("--json");
const iCob = args.indexOf("--cobertura");
const topCobertura = iCob >= 0 ? Number(args[iCob + 1]) || 10 : 0;
const pedidos = args.filter((a) => !a.startsWith("--") && a !== String(topCobertura));

const slugs = pedidos.length
  ? pedidos
  : readdirSync(CEREBROS)
      /* Un cerebro a medio fundar todavía no tiene CEREBRO.md pero ya cita
         verbatim en voz.md. Pedir el maestro lo dejaba fuera del test justo
         cuando más falta hace. */
      .filter(
        (d) =>
          statSync(join(CEREBROS, d)).isDirectory() &&
          (existsSync(join(CEREBROS, d, "CEREBRO.md")) || existsSync(join(CEREBROS, d, "voz.md")))
      )
      .sort();

const resultados = slugs.map(verificar);

if (json) {
  console.log(JSON.stringify(resultados, null, 2));
} else {
  for (const r of resultados) imprimir(r, topCobertura);
  const errores = resultados.reduce((n, r) => n + r.errores.length, 0);
  const avisos = resultados.reduce((n, r) => n + r.avisos.length, 0);
  console.log(
    `\n${errores ? "✗" : "✓"} ${errores} error${errores === 1 ? "" : "es"} de trazabilidad, ${avisos} advertencia${avisos === 1 ? "" : "s"}.`,
  );
  if (!errores) console.log("  Todo lo entrecomillado con ref se puede abrir y leer en su transcripción.");
}

process.exit(resultados.some((r) => r.errores.length) ? 1 : 0);
