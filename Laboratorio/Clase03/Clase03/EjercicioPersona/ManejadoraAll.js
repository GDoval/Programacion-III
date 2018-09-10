var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/// <reference path="./Persona.ts" />
var Gente;
(function (Gente) {
    var Alumno = /** @class */ (function (_super) {
        __extends(Alumno, _super);
        function Alumno(nombre, apellido, legajo) {
            var _this = _super.call(this, nombre, apellido) || this;
            _this._legajo = legajo;
            return _this;
        }
        Object.defineProperty(Alumno.prototype, "GetLegajo", {
            get: function () {
                return this._legajo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Alumno.prototype, "SetLegajo", {
            set: function (value) {
                this._legajo = value;
            },
            enumerable: true,
            configurable: true
        });
        Alumno.prototype.ToString = function () {
            return this._legajo + "-" + _super.prototype.ToString.call(this);
        };
        return Alumno;
    }(Gente.Persona));
    Gente.Alumno = Alumno;
})(Gente || (Gente = {}));
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
            localStorage.setItem("alumnos", Alum.ToString() + ";");
        };
        return Manejadora;
    }());
    Gente.Manejadora = Manejadora;
})(Gente || (Gente = {}));
