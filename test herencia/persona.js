"use strict";
var AhoraSi;
(function (AhoraSi) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido) {
            this.apellido = apellido;
            this.nombre = nombre;
        }
        Persona.prototype.Hablar = function () { };
        ;
        Object.defineProperty(Persona.prototype, "Nombre", {
            get: function () {
                return this.nombre;
            },
            enumerable: true,
            configurable: true
        });
        return Persona;
    }());
    AhoraSi.Persona = Persona;
})(AhoraSi || (AhoraSi = {}));
//# sourceMappingURL=persona.js.map