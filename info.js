// PÁGINA DE PROYECTO =========================================================
// Reutiliza los dos detalles de interacción de la home: el efecto "roll" de los
// enlaces del menú y el cursor personalizado.

// --- Efecto "roll" letra a letra en los enlaces --------------------------
document.querySelectorAll(".link-roll").forEach((link) => {
    const text = link.textContent.trim();
    link.textContent = "";

    [...text].forEach((ch, i) => {
        const char = document.createElement("span");
        char.className = "char";
        char.style.setProperty("--i", i);

        const top = document.createElement("span");
        const bottom = document.createElement("span");
        top.textContent = bottom.textContent = ch === " " ? " " : ch;

        char.append(top, bottom);
        link.append(char);
    });
});

// --- Cursor personalizado ------------------------------------------------
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

let mouseX = innerWidth / 2, mouseY = innerHeight / 2, posX = mouseX, posY = mouseY;
addEventListener("mousemove", (e) => { mouseX = e.clientX; mouseY = e.clientY; });

(function followCursor() {
    posX += (mouseX - posX) * 0.2;
    posY += (mouseY - posY) * 0.2;
    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";
    requestAnimationFrame(followCursor);
})();

document.querySelectorAll(".link-roll").forEach((link) => {
    link.addEventListener("mouseenter", () => cursor.classList.add("cursor-grow"));
    link.addEventListener("mouseleave", () => cursor.classList.remove("cursor-grow"));
});
