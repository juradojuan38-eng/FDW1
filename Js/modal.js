document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario-contacto");
    const modal = new bootstrap.Modal(document.getElementById("modalConfirmacion"));

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página
        modal.show(); // Muestra el modal
    });
});
