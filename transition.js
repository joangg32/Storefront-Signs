// Transición de desvanecimiento entre páginas
(() => {
    // Al volver desde el bfcache (botón atrás), quitar el estado de salida
    window.addEventListener("pageshow", () => {
        document.body.classList.remove("page-leaving");
    });

    // Interceptar clics en enlaces internos (delegación: sirve también para enlaces creados por JS)
    document.addEventListener("click", (e) => {
        const link = e.target.closest("a[href]");
        if (!link) return;

        // Ignorar: nueva pestaña, teclas modificadoras, anclas de la misma página y enlaces externos
        if (link.target === "_blank") return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        const url = new URL(link.href, location.href);
        if (url.origin !== location.origin) return;
        if (url.pathname === location.pathname && url.hash) return;

        e.preventDefault();
        document.body.classList.add("page-leaving");
        setTimeout(() => { location.href = link.href; }, 150);
    });
})();
