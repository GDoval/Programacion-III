"use strict";
var Parcial;
(function (Parcial) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, edad) {
            this.apellido = apellido;
            this.edad = edad;
            this.nombre = nombre;
        }
        Persona.prototype.toString = function () {
            return "nombre:" + this.nombre + "," + "apellido:" + this.apellido + "," + "edad:" + String(this.edad);
        };
        return Persona;
    }());
    Parcial.Persona = Persona;
})(Parcial || (Parcial = {}));
//# sourceMappingURL=persona.js.map