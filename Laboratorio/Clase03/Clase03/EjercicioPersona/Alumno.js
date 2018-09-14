"use strict";
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
        Alumno.GuardarEnArchivo = function () {
            var guardar = this.toString();
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "./BackEnd/Gestor.php", true);
            xhttp.send("valor=" + guardar);
        };
        return Alumno;
    }(Gente.Persona));
    Gente.Alumno = Alumno;
})(Gente || (Gente = {}));
//# sourceMappingURL=Alumno.js.map