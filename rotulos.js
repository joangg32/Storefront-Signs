// DATOS DE LOS RÓTULOS =======================================================
// Cada entrada está indexada por su "id" (= nombre del archivo sin extensión,
// el mismo que usa la galería en script.js).
//
//   nombre      -> título que se muestra en la cabecera de la ficha
//   original    -> foto original (alta resolución) en ./src/originales/
//   fecha       -> fecha de la fotografía (si se conoce)
//   descripcion -> descripción del letrero: tipografía, materiales, colores,
//                  estilo y detalles singulares

const ROTULOS = {
  "libreria-papeleria": {
    nombre: "Librería Papelería",
    original: "./src/originales/2016-10_11-LibreriapapeleriaWeb-1.jpg",
    fecha: "Octubre 2016",
    descripcion: "Letras corpóreas blancas de palo seco geométrico art déco, con astas finas y contraste marcado, montadas sobre el frontal rosa del comercio. Sobre ellas, el nombre «Vicente» rotulado en caligrafía de trazo continuo. Conjunto de los años 30-40 en plena convivencia con la fachada modernista del edificio.",
  },
  "cafe-bar": {
    nombre: "Café Bar",
    original: "./src/originales/2016-10_18-CafeBarWeb.jpg",
    fecha: "Octubre 2016",
    descripcion: "Rótulo de pletina metálica recortada, hoy oxidada en rojo, sobre un frontal de madera despintada. Caligrafía enlazada de trazo continuo, con la «C» y la «B» de amplios bucles: la letra comercial de posguerra reducida a su esqueleto de hierro.",
  },
  "chocolates": {
    nombre: "Chocolates",
    original: "./src/originales/2016-10_20-ChocolatesWeb.jpg",
    fecha: "Octubre 2016",
    descripcion: "Letras de varilla de latón dorado fijadas sobre piedra caliza. Palo seco de ojo circular casi perfecto, con la «s» final resuelta en espiral caligráfica. Lo acompaña un pequeño elefante dorado en relieve, emblema de la confitería.",
  },
  "metropol": {
    nombre: "Metropol",
    original: "./src/originales/2016-10_27-MetropolWeb.jpg",
    fecha: "Octubre 2016",
    descripcion: "Letras en relieve de obra, integradas en el propio estuco y pintadas del mismo gris que la fachada. Trazado art déco anguloso, con la «M» quebrada en zigzag. Rotulación arquitectónica: el nombre forma parte del edificio, no está añadido a él.",
  },
  "congo": {
    nombre: "Congo",
    original: "./src/originales/2016-10_31-CongoWeb.jpg",
    fecha: "Octubre 2016",
    descripcion: "Rotulación pintada en negro sobre el aplacado verde claro de la fachada. Palo seco geométrico con licencias déco: la «C» prolonga su trazo inferior subrayando todo el nombre y la «g» apoya un pie triangular. Espaciado generoso, muy de cartel de los años 40.",
  },
  "seccion-de-ninos": {
    nombre: "Sección de Niños",
    original: "./src/originales/2016-10_32-SecciondeninosWeb.jpg",
    fecha: "Octubre 2016",
    descripcion: "Panel de azulejo blanco con letras azul cobalto vidriadas. Dibujo modernista de inspiración secesionista: la «S» inicial se despliega en una gran caligrafía de doble bucle y el conjunto remata con un motivo de cuadraditos en retícula, firma ornamental de la época.",
  },
  "estornell": {
    nombre: "Estornell",
    original: "./src/originales/2016-10_56-Estornell1Web.jpg",
    fecha: "Octubre 2016",
    descripcion: "Rotulación sobre vidrio: letras claras perfiladas a doble línea, inclinadas y con subrayado de regla, sobre el cristal oscuro del escaparate. Palo seco condensado art déco. Abajo pervive la versión luminosa en rosa de «Muebles Estornell», con la misma letra.",
  },
  "muebles-sedavi": {
    nombre: "Muebles Sedaví",
    original: "./src/originales/2016-10_69-MueblesSedaviWeb.jpg",
    fecha: "Octubre 2016",
    descripcion: "Letras en relieve de obra sobre la fachada encalada de la nave, visibles solo por su propia sombra. Palo seco déco de trazo fino con la «S» final convertida en rúbrica que cruza la palabra. Rotulación fantasma: blanco sobre blanco.",
  },
  "chocolates-valero": {
    nombre: "Chocolates Valero",
    original: "./src/originales/2016-10_71-ChocolatesValeroWeb.jpg",
    fecha: "Octubre 2016",
    descripcion: "Cartel de chapa pintada en verde con letras corpóreas blancas perforadas para alojar bombillas. Palo seco déco con trazos envolventes en la «C» y el remate de la «s». La retícula de puntos de luz aún se lee en cada letra.",
  },
  "la-artistica": {
    nombre: "La Artística",
    original: "./src/originales/2016-10_79-LaArtisticaWeb.jpg",
    fecha: "Octubre 2016",
    descripcion: "Letras corpóreas rojas sobre fachada blanca. Palo seco geométrico art déco de asta uniforme, con las «A» de travesaño triangular bajo y espaciado muy abierto. Composición mínima y rotunda, típica de los comercios de los años 30.",
  },
  "ultramarinos": {
    nombre: "Ultramarinos",
    original: "./src/originales/2016-10_114-UltramarinosWeb.jpg",
    fecha: "Octubre 2016",
    descripcion: "Letras de tesela cerámica azul cobalto incrustadas en el remate curvo de la fachada, entre un damero de mosaico verde y blanco. Palo seco anguloso adaptado a la curva del frontón, coronado por una escultura. Rotulación modernista de mercado.",
  },
  "mercat-de-russafa": {
    nombre: "Mercat de Russafa",
    original: "./src/originales/2016-10_118-MercatdeRussafaWeb.jpg",
    fecha: "Octubre 2016",
    descripcion: "Letras metálicas de perfil fino sobre el frontis del mercado, palo seco espaciado con las «SS» de trazo serpenteante. Diálogo directo con la arquitectura racionalista del edificio y su celosía de lamas verdes. Sobriedad municipal de los años 50.",
  },
  "norte-buen-viaje": {
    nombre: "Norte Buen Viaje",
    original: "./src/originales/2016-10_125-NorteBuenViaje3Web.jpg",
    fecha: "Octubre 2016",
    descripcion: "Interior de la Estación del Norte: mosaico de teselas con rosas y hojas donde el «Buen Viaje» se dibuja en letra caligráfica amarilla, enmarcado en madera tallada. Arriba, el monograma «NORTE» con las letras entrelazadas en pura marquetería modernista de la escuela de Demetrio Ribes.",
  },
  "caminos-hierro-norte": {
    nombre: "Caminos de Hierro del Norte",
    original: "./src/originales/2016-10_127-CaminosHierroNorteWeb.jpg",
    fecha: "Octubre 2016",
    descripcion: "Cenefa cerámica del vestíbulo de la Estación del Norte: letras blancas con remates en espiral sobre fondo oscuro, palabras separadas por dobles puntos, corriendo bajo una greca de motivos vegetales secesionistas. Tipografía modernista vidriada, decorativa y ferroviaria a la vez.",
  },
  "correo-oficinas": {
    nombre: "Correo · Oficinas",
    original: "./src/originales/2016-10_127-CorreoOficinasWeb.jpg",
    fecha: "Octubre 2016",
    descripcion: "Edificio de Correos: «correo» tallado en piedra, cada letra dentro de un medallón circular orlado de laurel; «oficinas» en letras vidriadas azules sobre discos de cobre repujado flanqueados por estrellas. Dos materiales, un mismo sistema: la letra como medalla.",
  },
  "horchateria-santa-catalina": {
    nombre: "Horchatería Santa Catalina",
    original: "./src/originales/2016-12_HorchateriaSantaCatalina2Web.jpg",
    fecha: "Diciembre 2016",
    descripcion: "Rótulo principal sobre mármol con letras romanas y la «S» caligráfica de «Santa». Debajo, cenefa de azulejo con orla floral y letra gótica: «Casa con dos siglos de tradición». En la entrada, versión en relieve sobre el arco. Tres letras distintas para una misma casa.",
  },
  "gran-cine-royalty": {
    nombre: "Gran Cine Royalty",
    original: "./src/originales/2017-04_GranCineRoyaltyWeb.jpg",
    fecha: "Abril 2017",
    descripcion: "Friso cerámico en lo alto de la fachada de ladrillo: letras azules de estilo modernista con remates bifurcados y bucles, palabras separadas por parejas de puntos. En el detalle, el «Royalty» resuelto en mosaico. Rotulación de cine de primeros de siglo, entre lo victoriano y lo valenciano.",
  },
  "ume-antes-casa": {
    nombre: "UME · Antes Casa",
    original: "./src/originales/2017-11_UME-AntesCasaWeb2.jpg",
    fecha: "Noviembre 2017",
    descripcion: "Franja de azulejo con la advertencia comercial «ANTES \"CASA DOTESIO\"»: palo seco azul con filete naranja, entre cenefas de olas. La tienda cambió de nombre y lo dejó escrito en cerámica para siempre: memoria mercantil vidriada.",
  },
  "ume-union-musica": {
    nombre: "UME · Unión Musical",
    original: "./src/originales/2017-11_UME-UnionMusicaWeb2.jpg",
    fecha: "Noviembre 2017",
    descripcion: "Gran rótulo cerámico de la Unión Musical Española: letras tipo toscana, azules con perfil dorado, festoneadas y con remates partidos, sobre azulejo blanco entre cenefas de olas. Incluye un monograma con clave de sol y notación musical. Letra de circo elevada a fachada.",
  },
  "bicicletas-prieto": {
    nombre: "Bicicletas E. Prieto",
    original: "./src/originales/2018-03_BicicletasE.PrietoWeb.jpg",
    fecha: "Marzo 2018",
    descripcion: "Rotulación pintada en negro sobre el aplacado cerámico amarillo claro de la fachada. Palo seco de trazos biselados con luces y sombras que dan volumen sin relieve real. Oficio de rotulista a pincel sobre azulejo, años 50-60.",
  },
  "papeleria-vila": {
    nombre: "Papelería Vila",
    original: "./src/originales/2018-03_PapeleriaVilaWeb.jpg",
    fecha: "Marzo 2018",
    descripcion: "Caja luminosa con frontal de vidrio: letras negras de estilo romano pintadas por detrás del cristal, compuestas en arco la línea superior y contrapeadas abajo. Marco de madera pintada de blanco. Pieza de rotulación sobre vidrio de manual.",
  },
  "balneario-alameda": {
    nombre: "Balneario Alameda",
    original: "./src/originales/2018-05_BalnearioAlamedaWeb.jpg",
    fecha: "Mayo 2018",
    descripcion: "Panel cerámico azul sobre blanco con el escudo de Valencia: «Balneario de la Alameda» en letra toscana decorada, de remates partidos, y debajo la leyenda «Aguas termales a 43º declaradas de utilidad pública». Cartela termal de azulejería clásica valenciana.",
  },
  "fabrica-conservas": {
    nombre: "Fábrica de Conservas",
    original: "./src/originales/2018-05_FabricaConservasWeb.jpg",
    fecha: "Mayo 2018",
    descripcion: "Fachada industrial cubierta de trencadís: letras azul cobalto condensadas recortadas sobre el mosaico blanco, orladas de cenefas de frutas. En el frontón, panel cerámico de Don Quijote y los molinos con la leyenda «Marca Registrada». Arquitectura-anuncio de principios del XX.",
  },
  "frutos-secos": {
    nombre: "Frutos Secos",
    original: "./src/originales/2018-05_Frutos-SecosWeb2.jpg",
    fecha: "Mayo 2018",
    descripcion: "Rotulación pintada por detrás del vidrio del escaparate: letras rojas de corte egipcio geométrico, con doble filete interior y sombreado verde. El cristal conserva intactos los brillos y transparencias del oficio. Cartel-vitrina de ultramarinos.",
  },
  "almacenes-espana": {
    nombre: "Almacenes España",
    original: "./src/originales/2018-06_AlmacenesEspanaWeb.jpg",
    fecha: "Junio 2018",
    descripcion: "Letras de varilla de latón dorado sobre frontal de madera gris: «Almacenes» en palo seco de tubo, de ojo redondo, y «España» en caligrafía inglesa enlazada de un solo trazo. El contraste entre letra técnica y letra gestual, resuelto en el mismo hilo de metal.",
  },
  "cinema-colon": {
    nombre: "Cinema Colón",
    original: "./src/originales/2018-06_CinemaColonWeb.jpg",
    fecha: "Junio 2018",
    descripcion: "Composición racionalista sobre fachada azul: «Cinema» en caligráfica corpórea blanca de trazo continuo y «COLOM» en palo seco espaciado, ordenados por dos líneas en relieve que se cruzan en ángulo recto. Gráfica de cine de barrio con vocación de cartel moderno.",
  },
  "talleres-tintoreria-rodrigo": {
    nombre: "Talleres Tintorería Rodrigo",
    original: "./src/originales/2018-10_TalleresTintoreriaRodrigo5Web.jpg",
    fecha: "Octubre 2018",
    descripcion: "Letras de perfil metálico acanalado —tubo estriado que atrapa la luz— corriendo sobre un friso de estuco labrado con motivos déco. Minúsculas geométricas con la «g» y la «t» de dibujo singular, palabras unidas por guiones. Rotulación art déco de una elegancia poco común.",
  },
  "pescaderia-la-palmera": {
    nombre: "Pescadería La Palmera",
    original: "./src/originales/2019-01_PescaderiaLaPalmeraWeb.jpg",
    fecha: "Enero 2019",
    descripcion: "Cartel de chapa pintada a pincel: «Pescadería La Palmera» en palo seco azul con sombra y «N. Caparros Jerez» debajo, flanqueado por un atún y un mero pintados del natural. Rotulismo popular de mercado, letra e ilustración del mismo pulso.",
  },
  "muebles-ballester": {
    nombre: "Muebles Ballester",
    original: "./src/originales/2020-01_MueblesBallesterWeb.jpg",
    fecha: "Enero 2020",
    descripcion: "Publicidad mural pintada sobre la nave encalada: «Fábrica de muebles Ballester y Sanchís – Gran exposición – junto estación de tren Benetúser», con flecha indicadora incluida. Ghost sign devorado por el grafiti, del que apenas emerge la rotulación original a la cal.",
  },
  "muebles-sabater": {
    nombre: "Muebles Sabater",
    original: "./src/originales/2020-01_MueblesSabaterWeb-1.jpg",
    fecha: "Enero 2020",
    descripcion: "Pintura mural sobre muro medianero: palo seco rojo con sombra, hoy desvaído hasta casi fundirse con el revoco. Debajo asoman carteles de circo pegados hace décadas. Un rótulo fantasma que resiste capa a capa el paso del tiempo.",
  },
  "pescaderia-pepe": {
    nombre: "Pescadería Pepe",
    original: "./src/originales/2020-01_PescaderiaPepeWeb.jpg",
    fecha: "Enero 2020",
    descripcion: "Caja luminosa de metacrilato retroiluminada: «PESCADERIA» en palo seco azul de esquinas romas y «PEPE» en egipcia roja con filete interior blanco. Fotografiada de noche, encendida: la letra luminosa de barrio en su hábitat.",
  },
  "fontaneria": {
    nombre: "Fontanería",
    original: "./src/originales/2020-03_FontaneriaWeb.jpg",
    fecha: "Marzo 2020",
    descripcion: "Rotulación a pincel sobre el cristal del escaparate: «fontanería» en minúsculas rojas con perfil blanco, de remates latinos afilados y ligadura decorativa en la «f». El vidrio deja ver el taller detrás. Letra de oficio anunciando otro oficio.",
  },
  "ferreteria-beaumont": {
    nombre: "Ferretería Beaumont",
    original: "./src/originales/2021-08_FerreteriaBeaumontWeb-1-2.jpg",
    fecha: "Agosto 2021",
    descripcion: "Letras corpóreas con alma de tubo de neón sobre zócalo de mármol verde: «Ferretería Beaumont» en cursiva inglesa enlazada, de bucles generosos, escrita a un solo trazo por esquina y media de fachada. Caligrafía luminosa de los años 50.",
  },
  "la-casa-de-las-pieles": {
    nombre: "La Casa de las Pieles",
    original: "./src/originales/2021-08_La-CasadelasPielesWeb2.jpg",
    fecha: "Agosto 2021",
    descripcion: "Letras de varilla de latón sobre frontal de chapa bronceada: cursiva geométrica déco con las «s» resueltas como largas eses integrales. Debajo, en el escaparate, «Fábrica de peletería» en letra espaciada dorada. Elegancia comercial de entreguerras.",
  },
  "paqueteria-mary": {
    nombre: "Paquetería Mary",
    original: "./src/originales/2022-11_PaqueteriaMaryWeb3.jpg",
    fecha: "Noviembre 2022",
    descripcion: "Dos vidrios pintados: sobre la puerta, «PAQUETERÍA» en itálica plateada y «Mary» en caligráfica inglesa de trazos lanzados, sobre fondo negro; en el escaparate, «PAQUETERIA» en romana plateada con sombra. Rotulación sobre cristal en fachada rosa de barrio.",
  },
  "garage-guimera": {
    nombre: "Garaje Guimerá",
    original: "./src/originales/2023-09_GarageGuimeraWeb1-2.jpg",
    fecha: "Septiembre 2023",
    descripcion: "Letras corpóreas metálicas de estilo romano-clarendon, con remates marcados y pátina de zinc, ancladas con varillas a la fachada del garaje de los años 20. El frontón escalonado y las letras forman una sola pieza de arquitectura industrial urbana.",
  },
  "raga": {
    nombre: "Raga",
    original: "./src/originales/2024-01_RagaWeb.jpg",
    fecha: "Enero 2024",
    descripcion: "Logotipo pintado en azul sobre el muro encalado: script gestual de palo grueso con rayados interiores a modo de líneas de velocidad y la «R» rematada en una larga cola descendente. Lettering comercial de los años 50-60, dinámico y de una sola palabra.",
  },
  "la-azulejera-valenciana": {
    nombre: "La Azulejera Valenciana",
    original: "./src/originales/2024-10_LaAzulejeraValencianaWeb-0.jpg",
    fecha: "Octubre 2024",
    descripcion: "La fábrica de azulejos de Bernardo Vidal, junto a la vía del tren: fachada íntegramente revestida de cerámica azul y amarilla que es a la vez muestrario y anuncio. El rótulo, en letra romana azul cobalto sobre azulejo blanco, corona un edificio-catálogo único.",
  },
  "3m-wmditer": {
    nombre: "3M · WMditer",
    original: "./src/originales/2025-04_3MWMditerWeb.jpg",
    fecha: "Abril 2025",
    descripcion: "Puertas de taller pintadas de azul con capas superpuestas de rotulación a pincel: el logotipo «MWM Diter» rodeado por su óvalo, el teléfono en itálica, «Talleres RIMI S.L.» en egipcia con sombra y el script rojo «Campeón» bajo «Repuestos Originales». Un palimpsesto de rótulos de taller.",
  },
  "marieta": {
    nombre: "Marieta",
    original: "./src/originales/marieta.png",
    descripcion: "Logotipo caligráfico blanco de trazo continuo sobre panel oscuro: todas las letras enlazadas en una sola línea que arranca en la gran «M» y remata en un subrayado de vuelta. Lettering contemporáneo de espíritu retro, heredero directo de la rotulación clásica.",
  },
  "bastian-barber": {
    nombre: "Bastian Barber",
    original: "./src/originales/bastian-barber.png",
    descripcion: "Neón contemporáneo sobre panel verde oscuro: «Bastian» en script anguloso de trazo blanco con contorno dorado, firmado como una rúbrica con subrayado, y «BARBER» en palo seco. Al lado, monograma «B» en medallón circular. La tradición del rótulo luminoso, versión actual.",
  },
};

// Disponible como window.ROTULOS (lo usa rotulo.js)
window.ROTULOS = ROTULOS;
