// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    // Obtiene el contenedor principal donde se mostrará el mapa
    const mapContainer = document.querySelector("#map");

    // Define las coordenadas de la ubicación de la empresa (latitud, longitud, nivel de zoom)
    const empresaCoordenadas = [41.8402331, -3.3491668, 13]; // Dirección de la empresa

    // Inicializa el mapa centrado en la ubicación de la empresa
    const map = L.map(mapContainer).setView(empresaCoordenadas, 13);

    // Carga capas visuales del mapa desde OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); // Agrega la capa al mapa

    // Agrega un marcador en la ubicación de la empresa
    L.marker(empresaCoordenadas).addTo(map)
        .bindPopup("LuminaCraft - Nuestra ubicación") // Mensaje emergente en el marcador
        .openPopup(); // Abre el mensaje emergente automáticamente

    // Verifica si el navegador soporta geolocalización
    if (navigator.geolocation) {
        // Si la geolocalización está disponible, obtiene la ubicación del cliente
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Coordenadas de la ubicación del cliente
                const clienteCoordenadas = [position.coords.latitude, position.coords.longitude];

                // Agrega un marcador en la ubicación del cliente
                L.marker(clienteCoordenadas).addTo(map)
                    .bindPopup("Tu ubicación") // Mensaje del marcador del cliente
                    .openPopup();

                // Traza una ruta desde la ubicación del cliente hasta la ubicación de la empresa
                L.Routing.control({
                    waypoints: [
                        L.latLng(clienteCoordenadas), // Ubicación del cliente
                        L.latLng(empresaCoordenadas)  // Ubicación de la empresa
                    ],
                    routeWhileDragging: true // Permite ajustar la ruta mientras se arrastra
                }).addTo(map); // Agrega el control de rutas al mapa
            },
            (error) => {
                // Maneja errores al intentar obtener la ubicación del cliente
                console.error("Error al obtener la ubicación del cliente:", error);
                alert("No se pudo obtener tu ubicación. Por favor, habilita la geolocalización."); // Muestra un mensaje al usuario
            }
        );
    } else {
        // Si el navegador no soporta geolocalización, muestra un mensaje al usuario
        alert("Tu navegador no soporta geolocalización.");
    }
});