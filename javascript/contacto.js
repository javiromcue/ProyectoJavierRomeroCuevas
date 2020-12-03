window.onload = function() {
    document.getElementById("email").onblur = validacionEmail;
    document.getElementById("mensaje").onblur = validacionMensaje;
    document.getElementById("telefono").onblur = validacionTelefono;

    function validacionEmail() {
        var email = document.getElementById("email").value;
        if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))) {
            alert("Email incorrecto.");
            document.getElementById("email").focus();
        }
    }

    function validacionMensaje() {
        var mensaje = document.getElementById("mensaje").value;
        if (mensaje.length < 20) {
            alert("Mensaje muy corto (> 20 letras).");
            document.getElementById("mensaje").focus();
        }
    }

    function validacionTelefono() {
        var telefono = document.getElementById("telefono").value;
        if (!(/^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/.test(telefono))) {
            alert("Teléfono erroneo.");
            document.getElementById("telefono").focus();
        }
    }
}