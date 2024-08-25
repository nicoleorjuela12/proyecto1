// validaciones.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener valores de los campos
        const nombre = document.getElementById("grid-first-name-1").value.trim();
        const celular = document.getElementById("grid-last-name-1").value.trim();
        const correo = document.getElementById("grid-password-1").value.trim();
        const numPersonas = document.getElementById("grid-first-name-2").value.trim();
        const fecha = document.getElementById("grid-last-name-2").value.trim();
        const hora = document.getElementById("grid-password-2").value.trim();
        const comentarios = document.getElementById("grid-first-name-3").value.trim();
        const decoracion = document.getElementById("grid-decoracion-3").value;
        const actividades = document.getElementById("grid-actividades-3").value;

        // Validar campos
        if (!nombre || !celular || !correo || !numPersonas || !fecha || !hora || !comentarios || decoracion === "" || actividades === "") {
            Swal.fire("Campo vacío", "Por favor, completa todos los campos del formulario", "warning");
            return;
        }

        // Validar formato del celular (ejemplo básico)
        if (!/^\d+$/.test(celular)) {
            Swal.fire("Celular inválido", "Por favor, ingresa un número de celular válido", "warning");
            return;
        }

        // Validar formato del correo
        if (!/\S+@\S+\.\S+/.test(correo)) {
            Swal.fire("Correo inválido", "Por favor, ingresa una dirección de correo electrónico válida", "warning");
            return;
        }

        // Validar formato de la fecha (ejemplo básico)
        if (!/\d{4}-\d{2}-\d{2}/.test(fecha)) {
            Swal.fire("Fecha inválida", "Por favor, ingresa una fecha válida (YYYY-MM-DD)", "warning");
            return;
        }

        // Validar formato de la hora (ejemplo básico)
        if (!/\d{2}:\d{2}/.test(hora)) {
            Swal.fire("Hora inválida", "Por favor, ingresa una hora válida (HH:MM)", "warning");
            return;
        }

        // Si todo está bien, mostrar un mensaje de éxito
        Swal.fire("Formulario enviado", "Tu reserva ha sido enviada con éxito", "success");
        form.reset(); // Opcional: reinicia el formulario después de enviarlo
    });
});
