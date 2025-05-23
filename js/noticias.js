// Contenedor principal donde se mostrarán las noticias
const noticiasContainer = document.getElementById('noticias');

// Carga las noticias desde un archivo JSON externo
fetch('./datos-noticias/noticias.json')
    .then(response => response.json()) // Convierte la respuesta en formato JSON
    .then(data => {
        data.noticias.forEach(noticia => {
            // Contenedor para cada noticia
            const noticiaElement = document.createElement('div');
            noticiaElement.classList.add('noticia'); // Clase para estilos

            // Contenido de la noticia, título y descripción
            noticiaElement.innerHTML = `
                <h3>${noticia.titulo}</h3>
                <p>${noticia.descripcion}</p>`;

            // Agrega el contenedor de la noticia al contenedor principal
            noticiasContainer.appendChild(noticiaElement);
        });
    })
    .catch(error => {
        // Maneja errores en la carga del archivo JSON
        console.error('Error al cargar las noticias:', error);
    });
