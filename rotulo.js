// FICHA DE RÓTULO ============================================================
// Lee ?id=<slug> de la URL, busca los datos en window.ROTULOS y monta la ficha:
// foto original a la izquierda + descripción del letrero a la derecha.

(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const data = (window.ROTULOS || {})[id];

    const $titulo      = document.getElementById("titulo");
    const $original    = document.getElementById("original");
    const $descripcion = document.getElementById("descripcion");

    // --- Sin datos: mensaje y salida -----------------------------------------
    if (!data) {
        $titulo.textContent = "Rótulo no encontrado";
        $descripcion.textContent = "No hay datos para este rótulo.";
        return;
    }

    // --- Rellenar textos e imagen --------------------------------------------
    document.title = data.nombre + " · Rótulos valencianos";
    $titulo.textContent = data.nombre;
    $original.src = data.original;
    $original.alt = "Rótulo de " + data.nombre;
    $descripcion.textContent = data.descripcion || "—";

    // Fecha de la fotografía (solo se pinta si existe en los datos)
    document.getElementById("meta").textContent = data.fecha || "";

    // --- Navegación anterior / siguiente (orden de ROTULOS, circular) --------
    const ids = Object.keys(window.ROTULOS || {});
    const pos = ids.indexOf(id);
    const prevId = ids[(pos - 1 + ids.length) % ids.length];
    const nextId = ids[(pos + 1) % ids.length];
    document.getElementById("nav-prev").href = "./rotulo.html?id=" + prevId;
    document.getElementById("nav-next").href = "./rotulo.html?id=" + nextId;

    // --- Descripción inmóvil: el sticky "engancha" justo donde nace el texto,
    //     así no se desplaza ni un píxel al hacer scroll ------------------------
    const $desc = document.querySelector(".ficha-descripcion");
    const fijarDescripcion = () => {
        $desc.style.top = "auto";   // volver a la posición natural antes de medir
        $desc.style.top = ($desc.getBoundingClientRect().top + window.scrollY) + "px";
    };
    requestAnimationFrame(fijarDescripcion);
    addEventListener("resize", fijarDescripcion);

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

    document.querySelectorAll(".link-roll, img").forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("cursor-grow"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("cursor-grow"));
    });
})();
