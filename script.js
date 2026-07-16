
// ANIMACIÓN TEXTO "LINK ROLL"=======================
// Divide cada enlace .link-roll en letras para el efecto "roll" escalonado.

document.querySelectorAll('.link-roll').forEach((link) => {
    const text = link.textContent.trim();
    link.textContent = ''; // vaciar el enlace

    [...text].forEach((ch, i) => {
        const char = document.createElement('span');
        char.className = 'char';
        char.style.setProperty('--i', i); // índice para el retraso escalonado

        const top = document.createElement('span');
        const bottom = document.createElement('span');
        // ' ' = espacio que no se colapsa, por si el texto lleva espacios
        top.textContent = bottom.textContent = ch === ' ' ? ' ' : ch;

        char.append(top, bottom);
        link.append(char);
    });
});

// GALERIA ==================================
const gallery = document.createElement("div");
gallery.classList.add("gallery");
document.body.appendChild(gallery);

// Deriva el id de un rótulo a partir de su ruta: "./src/cafe-bar.jpg" -> "cafe-bar"
const idDesdeSrc = (src) => src.split("/").pop().replace(/\.[^.]+$/, "");

const files = [
    "./src/libreria-papeleria.jpg",
    "./src/cafe-bar.jpg",
    "./src/chocolates.jpg",
    "./src/metropol.jpg",
    "./src/congo.jpg",
    "./src/seccion-de-ninos.jpg",
    "./src/estornell.jpg",
    "./src/muebles-sedavi.jpg",
    "./src/chocolates-valero.jpg",
    "./src/la-artistica.jpg",
    "./src/ultramarinos.jpg",
    "./src/mercat-de-russafa.jpg",
    "./src/norte-buen-viaje.jpg",
    "./src/caminos-hierro-norte.jpg",
    "./src/correo-oficinas.jpg",
    "./src/horchateria-santa-catalina.jpg",
    "./src/gran-cine-royalty.jpg",
    "./src/ume-antes-casa.jpg",
    "./src/ume-union-musica.jpg",
    "./src/bicicletas-prieto.jpg",
    "./src/papeleria-vila.jpg",
    "./src/balneario-alameda.jpg",
    "./src/fabrica-conservas.jpg",
    "./src/frutos-secos.jpg",
    "./src/almacenes-espana.jpg",
    "./src/cinema-colon.jpg",
    "./src/talleres-tintoreria-rodrigo.jpg",
    "./src/pescaderia-la-palmera.jpg",
    "./src/muebles-ballester.jpg",
    "./src/muebles-sabater.jpg",
    "./src/pescaderia-pepe.jpg",
    "./src/fontaneria.jpg",
    "./src/ferreteria-beaumont.jpg",
    "./src/la-casa-de-las-pieles.jpg",
    "./src/paqueteria-mary.jpg",
    "./src/garage-guimera.jpg",
    "./src/raga.jpg",
    "./src/la-azulejera-valenciana.jpg",
    "./src/3m-wmditer.jpg",
    "./src/marieta.png",
    "./src/bastian-barber.png",
]

const tiles = [];

// Rejilla para repartir sin amontonar
const cols = Math.round(Math.sqrt(files.length * window.innerWidth / window.innerHeight));
const cellW = 100 / cols;
const cellH = 100 / Math.ceil(files.length / cols);

// Insertar imágenes
files.forEach((src, i) => {
    const figure = document.createElement("figure");
    figure.className = "title";

    // centro de la celda + jitter (0.6 = cuánto se desvía dentro de la celda)
    const col = i % cols;
    const row = Math.floor(i / cols);
    figure.style.left = (col + 0.5) * cellW + (Math.random() - 0.5) * cellW * 0.6 + "%";
    figure.style.top  = (row + 0.5) * cellH + (Math.random() - 0.5) * cellH * 0.6 + "%";

    // Cada foto es un enlace que abre su ficha en la misma pestaña
    const link = document.createElement("a");
    link.href = "./rotulo.html?id=" + idDesdeSrc(src);

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Rótulo: " + idDesdeSrc(src).replace(/-/g, " ");
    img.width = 150;
    img.draggable = false;

    link.appendChild(img);
    figure.appendChild(link);
    gallery.appendChild(figure);

    // depth 0.25–1: unas se mueven más que otras = capas
    tiles.push({ el: figure, depth: 0.25 + Math.random() * 0.75, x: 0, y: 0 });
});

// Efecto parallax magnet
const MAX = 40;                 // px máximos de desplazamiento
let targetX = 0, targetY = 0;

window.addEventListener("mousemove", (e) => {
    // posición del ratón de -1 a 1 respecto al centro de la pantalla
    targetX = (e.clientX / window.innerWidth  - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
});

function magnet() {
    tiles.forEach((t) => {
        // lerp: se acerca suave al objetivo (da inercia, no saltos)
        t.x += (targetX * MAX * t.depth - t.x) * 0.08;
        t.y += (targetY * MAX * t.depth - t.y) * 0.08;
        t.el.style.setProperty("--px", t.x + "px");
        t.el.style.setProperty("--py", t.y + "px");
    });
    requestAnimationFrame(magnet);
}
magnet();



// CURSOR  ==================================
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let posX = mouseX;
let posY = mouseY;


document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function followCursor () {
    posX += (mouseX - posX) * 0.2; // al valor de la posición sumarle la diferencia entre las dos posiciones y multiplicar por factor para que se haga smooth 
    posY += (mouseY - posY) * 0.2;
    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px"; 
    requestAnimationFrame(followCursor);
}

followCursor();

// CURSOR: crecer al pasar por los enlaces ==================
document.querySelectorAll('.link-roll').forEach((link) => {
    link.addEventListener('mouseenter', () => cursor.classList.add('cursor-grow'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('cursor-grow'));
});

// CURSOR: crecer al pasar por las fotos de la galería ==================
document.querySelectorAll('.title').forEach((tile) => {
    tile.addEventListener('mouseenter', () => cursor.classList.add('cursor-grow'));
    tile.addEventListener('mouseleave', () => cursor.classList.remove('cursor-grow'));
});