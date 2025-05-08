// Este archivo contiene la lógica para manejar el formulario de presupuesto y su validación
let miBotoncito = document.querySelector("#enviar");
let miFormulario2 = document.querySelector("#form-presupuesto");

// Evento para manejar el envío del formulario
miBotoncito.addEventListener("click", (evento) => {
    evento.preventDefault(); // Evita el envío por defecto del formulario

    let valido = validar(); // Llama a la función de validación

    if (valido) {
        alert("Formulario de presupuesto enviado correctamente. ¡Gracias por tu solicitud!");
        miFormulario2.submit(); // Envía el formulario si es válido
    }
});

// Función para validar los campos del formulario
function validar() {
    // Validar nombre
    let nombre = document.getElementById("nombre").value;
    if (nombre == null || nombre.trim() === "") {
        alert("El campo nombre no puede estar vacío.");
        return false;
    }
    let name_re = /^[a-zA-Z\s]{1,15}$/;
    if (!name_re.test(nombre)) {
        alert("El nombre solo puede contener letras y un máximo de 15 caracteres.");
        return false;
    }

    // Validar apellidos
    let apellidos = document.getElementById("apellidos").value;
    if (apellidos == null || apellidos.trim() === "") {
        alert("El campo apellidos no puede estar vacío.");
        return false;
    }
    let apellidos_re = /^[a-zA-Z\s]{1,40}$/;
    if (!apellidos_re.test(apellidos)) {
        alert("Los apellidos solo pueden contener letras y un máximo de 40 caracteres.");
        return false;
    }

    // Validar teléfono
    let telefono = document.getElementById("telefono").value;
    if (telefono == null || telefono.trim() === "") {
        alert("El campo teléfono no puede estar vacío.");
        return false;
    }
    let telefono_re = /^\d{9}$/;
    if (!telefono_re.test(telefono)) {
        alert("El teléfono debe contener exactamente 9 dígitos.");
        return false;
    }

    // Validar correo electrónico
    let email = document.getElementById("email").value;
    if (email == null || email.trim() === "") {
        alert("El campo correo electrónico no puede estar vacío.");
        return false;
    }
    let email_re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email_re.test(email)) {
        alert("Introduce un correo electrónico válido.");
        return false;
    }

    // Validar producto
    let producto = document.getElementById("producto").value;
    if (producto === "Elige tu presupuesto") {
        alert("Debes seleccionar un producto.");
        return false;
    }

    // Validar plazo
    let plazo = document.getElementById("plazo").value;
    if (plazo == null || plazo.trim() === "" || plazo < 1 || plazo > 12) {
        alert("El plazo debe estar entre 1 y 12 meses.");
        return false;
    }

    // Validar condiciones
    let condiciones = document.querySelector("#privacidad");
    if (!condiciones.checked) {
        alert("Debes aceptar las condiciones de privacidad.");
        return false;
    }

    // Retorna true si todas las validaciones son correctas
    return true;
}

// Cálculo dinámico del presupuesto
document.querySelector("#form-presupuesto").addEventListener("input", () => {
    const producto = document.querySelector("#producto").value;
    const plazo = document.querySelector("#plazo").value;
    const extras = Array.from(document.querySelectorAll("input[name='extras']:checked")).map(extra =>
        parseFloat(extra.value)
    );

    let total = 0;

    // Suma el precio del producto
    if (producto) {
        total += parseFloat(producto);
    }

    // Suma los extras seleccionados
    extras.forEach(extra => {
        total += extra;
    });

    // Aplica descuento por plazo
    if (plazo) {
        const descuento = Math.min(plazo * 2, 20); // Aplica un descuento del 2% por mes, con un máximo de 20%
        total -= (total * descuento) / 100;
    }

    // Muestra el total en el DOM
    document.querySelector("#total").textContent = `Total: ${total.toFixed(2)} €`;
});