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
var Testing;
(function (Testing) {
    var Miembro = /** @class */ (function (_super) {
        __extends(Miembro, _super);
        function Miembro(nombre, apellido, instrumento, genero) {
            var _this = _super.call(this, genero, instrumento) || this;
            _this.nombre = nombre;
            _this.apellido = apellido;
            return _this;
        }
        Miembro.prototype.getNombre = function () {
            return this.nombre;
        };
        Miembro.prototype.getApellido = function () {
            return this.apellido;
        };
        Miembro.prototype.ToString = function () {
            var resp = this.getNombre() + " " + this.getApellido() + " " + this.getInstrumento() + " " + this.getGenero();
            return resp;
        };
        return Miembro;
    }(Testing.Musico));
    Testing.Miembro = Miembro;
})(Testing || (Testing = {}));
//# sourceMappingURL=clase02.js.map