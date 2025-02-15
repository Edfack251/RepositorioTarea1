document.addEventListener("DOMContentLoaded", function () {
    // Validación del formulario
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío automático

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (!validarEmail(email)) {
            alert("Por favor, ingresa un correo válido.");
            return;
        }

        alert("Formulario enviado correctamente.");
        formulario.reset(); // Limpia el formulario
    });

    // Función para validar el email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Efecto de transición en la página
    const secciones = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
        secciones.forEach((seccion) => {
            const posicion = seccion.getBoundingClientRect().top;
            const alturaPantalla = window.innerHeight / 1.3;

            if (posicion < alturaPantalla) {
                seccion.classList.add("visible");
            }
        });
    });
});