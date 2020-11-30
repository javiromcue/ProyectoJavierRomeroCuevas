window.onload = function() {
    document.getElementById("email").onblur = validacionEmail;
    document.getElementById("mensaje").onblur = validacionMensaje;

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
        }
    }
}