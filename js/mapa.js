// Selecciona el contenedor donde se mostrará el mapa
const mapContainer = document.getElementById("map");

// Coordenadas de la ubicación de la empresa
const empresaCoordenadas = [41.8402331, -3.3491668];

// Inicializa el mapa centrado en la ubicación de la empresa
const map = L.map(mapContainer).setView(empresaCoordenadas, 13);

// Muestra el mapa desde OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright ">OpenStreetMap</a> contributors'
}).addTo(map);

// Agrega un marcador en la ubicación de la empresa con un popup informativo
L.marker(empresaCoordenadas).addTo(map)
    .bindPopup("LuminaCraft - Nuestra ubicación")
    .openPopup();

// Verifica si el navegador soporta geolocalización
if (navigator.geolocation) {
    // Obtiene la ubicación actual del cliente
    navigator.geolocation.getCurrentPosition(
        (position) => {
            // Extrae las coordenadas del cliente
            const clienteCoordenadas = [position.coords.latitude, position.coords.longitude];

            // Agrega un marcador en la ubicación del cliente
            L.marker(clienteCoordenadas).addTo(map)
                .bindPopup("Tu ubicación actual")
                .openPopup();

            // Dibuja una ruta entre la ubicación del cliente y la empresa
            L.Routing.control({
                waypoints: [
                    L.latLng(clienteCoordenadas),      // Ubicación del cliente
                    L.latLng(empresaCoordenadas)       // Destino: ubicación de la empresa
                ],
                routeWhileDragging: true               // Permite recalculcular la ruta al mover el mapa
            }).addTo(map);
        },
        (error) => {
            // Muestra un mensaje de error si no se puede obtener la ubicación
            console.error("Error al obtener la ubicación del cliente:", error);
            alert("No se pudo obtener tu ubicación. Por favor, asegúrate de permitir el acceso a tu ubicación.");
        }
    );
} else {
    // Alerta si el navegador no soporta geolocalización
    alert("Tu navegador no soporta geolocalización. No será posible mostrarte la ruta desde tu ubicación.");
}