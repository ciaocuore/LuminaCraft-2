// Seleccionar del contenedor de la galería 
const galleryContainer = document.getElementById("gallery-container");

// Lista de imágenes con sus títulos y descripciones
const images = [
    { src: "diseño-interiores1.jpg", title: "Elegancia el comedor", description: "Luce una sala de comedor moderna con lámparas colgantes que combinan estilo y funcionalidad. Perfecto para crear un ambiente cálido y sofisticado." },
    { src: "diseño-interiores2.jpg", title: "Cocina luminosa y moderna", description: "Ilumina tu cocina con luces empotradas y diseños limpios. Ideal para un espacio fresco, práctico y lleno de estilo." },
    { src: "diseño-interiores3.jpg", title: "Escaleras con toque acogedor", description: "Destaca la belleza de tus escaleras con lámparas colgantes y luz cálida. Un detalle que transforma cualquier hogar en un lugar especial." },
    { src: "diseño-interiores4.jpg", title: "Salón con vibras mediterráneas", description: "Dale vida a tu salón con una lámpara artesanal y detalles vibrantes. Perfecto para un ambiente relajado y con personalidad." },
    { src: "diseño-interiores5.jpg", title: "Baño verde y tranquilo", description: "Un baño sereno con luz natural y plantas decorativas. Ideal para crear un espacio de paz y bienestar en tu hogar." },
    { src: "diseño-interiores6.jpg", title: "Mueble auxiliar con encanto", description: "Añade un toque de elegancia a tu espacio con este mueble auxiliar de madera clara. Combinado con plantas, flores y accesorios decorativos, es perfecto para organizar y embellecer cualquier rincón de tu hogar." },
    { src: "diseño-interiores7.jpg", title: "Dormitorio lleno de color y arte", description: "Crea un ambiente acogedor y energético en tu dormitorio con colores cálidos y obras de arte contemporáneas. Este diseño combina comodidad con estilo, ideal para descansar y inspirarte." },
    { src: "diseño-interiores8.jpg", title: "Escandinavo en el dormitorio", description: "Disfruta de la simplicidad y la calma del estilo escandinavo con este dormitorio limpio y bien organizado. La combinación de muebles negros, alfombras geométricas y plantas crea un espacio relajante y moderno." },
    { src: "diseño-interiores9.jpg", title: "Cocina moderna", description: "Transforma tu cocina en un espacio multifuncional con una isla central de mármol y sillas cómodas. Diseñada para brindar luz natural y comodidad, esta cocina es perfecta para cocinar y socializar." },
    { src: "diseño-interiores10.jpg", title: "Sala de estar con chimenea", description: "Crea un ambiente cálido y sofisticado en tu sala de estar con una chimenea moderna y detalles minimalistas. Perfecto para relajarte frente al fuego mientras disfrutas de la luz suave y los toques de arte." },
    { src: "diseño-interiores11.jpg", title: "Sala de estar acogedora", description: "Crea un ambiente relajante y confortable en tu sala de estar con luces cálidas y lámparas modernas. Perfecto para disfrutar de las tardes junto a la familia o amigos." },
    { src: "diseño-interiores12.jpg", title: "Sala de Reuniones", description: "Crea un entorno profesional y acogedor con nuestro sistema de iluminación integrado. Diseñado para espacios de reuniones o oficinas, este ambiente minimalista ofrece luz suave y equilibrada, ideal para inspirar creatividad y productividad." }
];

// Genera dinámicamente los elementos de la galería a partir de la lista de imágenes
images.forEach(image => {
    
    // Crea un contenedor para cada imagen con su título y descripción
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("gallery-item"); // Clase para estilos de cada elemento de la galería

    // Crea el elemento de la imagen
    const imgElement = document.createElement("img");
    imgElement.src = `../images/galeria/${image.src}`; // Ruta de la imagen
    imgElement.alt = image.title; // Texto alternativo para la imagen
    imgElement.classList.add("gallery-image"); // Clase para estilos de la imagen

    // Crea el elemento para el título de la imagen
    const titleElement = document.createElement("h3");
    titleElement.textContent = image.title; // Asigna el título de la imagen
    titleElement.classList.add("gallery-title"); // Clase para estilos del título

    // Crea el elemento para la descripción de la imagen
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = image.description; // Asigna la descripción ala imagen
    descriptionElement.classList.add("gallery-description"); // Clase para estilos de la descripción

    // Agrega la imagen, el título y la descripción al contenedor de la imagen
    imageWrapper.appendChild(imgElement);
    imageWrapper.appendChild(titleElement);
    imageWrapper.appendChild(descriptionElement);

    // Agrega el contenedor completo a la galería
    galleryContainer.appendChild(imageWrapper);
});