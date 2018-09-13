"use strict";
var Gente;
(function (Gente) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido) {
            this._nombre = nombre;
            this._apellido = apellido;
        }
        Object.defineProperty(Persona.prototype, "GetNombre", {
            get: function () {
                return this._nombre;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "GetApellido", {
            get: function () {
                return this._apellido;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "SetNombre", {
            set: function (value) {
                this._nombre = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "SetApellido", {
            set: function (value) {
                this._apellido = value;
            },
            enumerable: true,
            configurable: true
        });
        Persona.prototype.ToString = function () {
            return this._nombre + "-" + this._apellido;
        };
        return Persona;
    }());
    Gente.Persona = Persona;
})(Gente || (Gente = {}));
//# sourceMappingURL=Persona.js.map