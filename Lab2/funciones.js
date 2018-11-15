var Manejadora = /** @class */ (function () {
    function Manejadora() {
    }
    Manejadora.ComprobarCampos = function () {
        var mail = $('#email').val();
        var clave = $('#clave').val();
        var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        var resp = true;
        if (mail == '') {
            $('#errorEmail').html('*');
            $('#mostrarErrorEmail').html("<div class=\"alert alert-warning\" role=\"alert\">\n            El email se encuentra vacio.\n          </div>");
            resp = false;
        }
        else if (!emailRegex.test(String(mail))) {
            $('#errorEmail').html('*');
            $('#mostrarErrorEmail').html("<div class=\"alert alert-warning\" role=\"alert\">\n            El email no tiene un formato valido\n          </div>");
            resp = false;
        }
        if (clave == '') {
            $('#errorClave').html('*');
            $('#mostrarErrorClave').html("<div class=\"alert alert-warning\" role=\"alert\">\n            El email no tiene un formato valido.\n          </div>");
            resp = false;
        }
        else if (String(clave).length < 4 || String(clave).length > 8) {
            $('#errorClave').html('*');
            $('#mostrarErrorClave').html("<div class=\"alert alert-warning\" role=\"alert\">\n            La clave tiene que estar entre 4 y 8 caracteres\n          </div>");
            resp = false;
        }
        return resp;
    };
    Manejadora.chequearUsuario = function () {
        if (Manejadora.ComprobarCampos()) {
            var mail = $('#email').val();
            var clave = $('#clave').val();
            var resp = false;
            var usuarios = JSON.parse(localStorage.getItem('usuarios'));
            for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
                var user = usuarios_1[_i];
                if (mail == user.correo && clave == user.clave) {
                    document.location.href = 'principal.html';
                    resp = true;
                    break;
                }
            }
            if (!resp) {
                $('#mostrarErrores').html("<div class=\"alert alert-danger\" role=\"alert\">\n                El usuario no esta registrado\n              </div>");
            }
        }
    };
    return Manejadora;
}());
