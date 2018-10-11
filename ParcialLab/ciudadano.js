"use strict";
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
/// <reference path="persona.ts" />
var Parcial;
(function (Parcial) {
    var Ciudadano = /** @class */ (function (_super) {
        __extends(Ciudadano, _super);
        function Ciudadano(nombre, apellido, edad, dni, pais, foto) {
            var _this = _super.call(this, nombre, apellido, edad) || this;
            _this.dni = dni;
            _this.pais = pais;
            if (foto != undefined)
                _this.foto = foto;
            else
                _this.foto = 'noexiste';
            return _this;
        }
        Ciudadano.prototype.ciudadanoToJSON = function () {
            // let json:string = { this.toString + "," + "dni:" + String(this.dni) + }
            // let retorno = JSON.stringify(json);
        };
        return Ciudadano;
    }(Parcial.Persona));
    Parcial.Ciudadano = Ciudadano;
})(Parcial || (Parcial = {}));
//# sourceMappingURL=ciudadano.js.map