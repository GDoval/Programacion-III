var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Gente;
(function (Gente) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, dni, sexo) {
            this._apellido = apellido;
            this._dni = dni;
            this._nombre = nombre;
            this._sexo = sexo;
        }
        Object.defineProperty(Persona.prototype, "Nombre", {
            get: function () {
                return this._nombre;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Apellido", {
            get: function () {
                return this._apellido;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Sexo", {
            get: function () {
                return this._sexo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Dni", {
            get: function () {
                return this._dni;
            },
            enumerable: true,
            configurable: true
        });
        Persona.prototype.ToString = function () {
            return this.Nombre + "-" + this.Apellido + "-" + this.Dni + "-" + this.Sexo;
        };
        return Persona;
    }());
    Gente.Persona = Persona;
})(Gente || (Gente = {}));
/// <reference path="persona.ts" />
var Gente;
(function (Gente) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(legajo, sueldo, nombre, apellido, dni, sexo) {
            var _this = _super.call(this, nombre, apellido, dni, sexo) || this;
            _this._legajo = legajo;
            _this._sueldo = sueldo;
            return _this;
        }
        Empleado.prototype.Hablar = function (idioma) {
            return "El empleado habla: " + idioma;
        };
        Empleado.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + "-" + this._legajo + "-" + this._sueldo;
        };
        return Empleado;
    }(Gente.Persona));
    Gente.Empleado = Empleado;
})(Gente || (Gente = {}));
/// <reference path="./persona.ts" />
/// <reference path="./Empleado.ts" />
var emple = new Gente.Empleado(12, 5487, "Juan", "Tiroides", 123456789, "M");
console.log(emple.Hablar("Ingles"));
