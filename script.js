// $(document).ready(function () {
//     // Muestra una alerta cuando se hace clic en un enlace del menú
//     $("nav ul li a").on("click", function (event) {
//         event.preventDefault();
//         alert("Esta sección está en construcción.");
//     });

    // Manejo del formulario de registro
    $("#registro-form").submit(function (event) {
        event.preventDefault(); // Evita que la página se recargue

        let nombre = $("#nombre").val();
        let correo = $("#correo").val();
        let ciudad = $("#ciudad").val();
        let sexo = $("input[name='sexo']:checked").val();

        if (nombre === "" || correo === "" || ciudad === "" || !sexo) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        alert("Registro exitoso. ¡Bienvenido, " + nombre + "!");
        $("#registro-form")[0].reset(); // Limpia el formulario después de enviarlo  
});


