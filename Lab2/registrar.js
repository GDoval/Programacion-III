/// <reference path="node_modules/@types/jquery/index.d.ts" /> 
var Registrar = /** @class */ (function () {
    function Registrar() {
    }
    Registrar.ValidarCampos = function () {
        var email = $('#email').val();
        var nombre = $('#nombre').val();
        var clave = $('#clave').val();
        var apellido = $('#apellido').val();
        var legajo = $('#legajo').val();
        var confirmar = $('#confirmar').val();
        var foto = document.getElementById("foto");
        var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        var extFoto = foto.files[0].name.split('.');
        console.log(extFoto[1]);
        return true;
    };
    return Registrar;
}());
