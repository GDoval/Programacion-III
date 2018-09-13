"use strict";
/// <reference path="./Alumno.ts" />
var Gente;
(function (Gente) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.AceptarClick = function () {
            var nombre = document.getElementById("txtNombre").value;
            var apellido = document.getElementById("txtApellido").value;
            var legajo = document.getElementById("txtLegajo").value;
            var Alum = new Gente.Alumno(nombre, apellido, parseInt(legajo));
            alert(Alum.ToString());
            document.getElementById("DivId").innerHTML += Alum.ToString() + "<br>";
        };
        return Manejadora;
    }());
    Gente.Manejadora = Manejadora;
})(Gente || (Gente = {}));
//# sourceMappingURL=Manejadora.js.map