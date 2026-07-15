// FICHA DE RÓTULO ============================================================
// Lee ?id=<slug> de la URL, busca los datos en window.ROTULOS y monta la ficha:
// foto original + SVG que se "escribe" a modo caligráfico + ubicación e historia.

(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const data = (window.ROTULOS || {})[id];

    const $titulo    = document.getElementById("titulo");
    const $original  = document.getElementById("original");
    const $holder    = document.getElementById("svg-holder");
    const $aviso     = document.getElementById("svg-aviso");
    const $replay    = document.getElementById("replay");
    const $ubicacion = document.getElementById("ubicacion");
    const $historia  = document.getElementById("historia");

    // --- Sin datos: mensaje y salida -----------------------------------------
    if (!data) {
        $titulo.textContent = "Rótulo no encontrado";
        $aviso.textContent = "No hay datos para este rótulo.";
        return;
    }

    // --- Rellenar textos e imagen --------------------------------------------
    document.title = data.nombre + " · Rótulos animados";
    $titulo.textContent = data.nombre;
    $original.src = data.original;
    $original.alt = "Rótulo de " + data.nombre;
    $ubicacion.textContent = data.ubicacion || "—";
    $historia.textContent = data.historia || "—";

    // --- Cargar y animar el SVG ----------------------------------------------
    fetch(data.svg)
        .then((r) => {
            if (!r.ok) throw new Error("404");
            return r.text();
        })
        .then((markup) => {
            $holder.innerHTML = markup;
            const svg = $holder.querySelector("svg");
            if (!svg) throw new Error("sin <svg>");
            prepararTrazos(svg);
            $replay.hidden = false;
            animar();
        })
        .catch(() => {
            $aviso.textContent =
                "Aún no hay SVG para este rótulo.\n(Colócalo en " + data.svg + ")";
        });

    // Prepara cada trazo: marca data-draw, calcula su longitud y guarda el
    // relleno final para que aparezca tras dibujarse el contorno.
    function prepararTrazos(svg) {
        const trazos = svg.querySelectorAll("path, line, polyline, polygon, circle, ellipse, rect");
        const VELOCIDAD = 420; // unidades de trazo por segundo (mayor = escribe más rápido)
        let delay = 0;

        trazos.forEach((el) => {
            let len = 0;
            try { len = el.getTotalLength(); } catch (_) { len = 0; }
            if (!len) return; // elementos sin longitud (defs, etc.) se ignoran

            // duración proporcional a la longitud: trazos largos tardan más
            const dur = Math.min(2.2, Math.max(0.35, len / VELOCIDAD));

            // relleno final: el que ya trae el SVG (o ninguno si es line-art)
            const fillActual = getComputedStyle(el).fill;
            const fillFinal = fillActual && fillActual !== "none" ? fillActual : "none";

            el.setAttribute("data-draw", "");
            el.style.setProperty("--len", len);
            el.style.setProperty("--fill-final", fillFinal);
            el.style.setProperty("--delay", delay.toFixed(2) + "s");
            el.style.setProperty("--dur", dur.toFixed(2) + "s");
            el.style.fill = "none"; // se oculta hasta terminar el trazo

            // el siguiente trazo arranca antes de acabar el actual: pluma continua
            delay += dur * 0.85;
        });
    }

    function animar() {
        $holder.classList.remove("animar");
        void $holder.offsetWidth; // reinicia las animaciones CSS
        $holder.classList.add("animar");
    }

    $replay.addEventListener("click", animar);

    // --- Cursor personalizado (coherente con la home) ------------------------
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    let mx = innerWidth / 2, my = innerHeight / 2, px = mx, py = my;
    addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });
    (function follow() {
        px += (mx - px) * 0.2;
        py += (my - py) * 0.2;
        cursor.style.left = px + "px";
        cursor.style.top = py + "px";
        requestAnimationFrame(follow);
    })();

    document.querySelectorAll(".link-roll, .btn-replay, img").forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("cursor-grow"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("cursor-grow"));
    });
})();
