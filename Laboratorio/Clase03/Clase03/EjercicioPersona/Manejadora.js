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
            // voy mostrando uno abajo de otro los elementos que ingreso
            document.getElementById("DivId").innerHTML += Alum.ToString() + "<br>";
            //guarda solo valores de string , la clave va a ser alumnos//
            var aux = localStorage.getItem("alumnos");
            localStorage.setItem("alumnos", Alum.ToString() + ";");
        };
        return Manejadora;
    }());
    Gente.Manejadora = Manejadora;
})(Gente || (Gente = {}));
//# sourceMappingURL=Manejadora.js.map