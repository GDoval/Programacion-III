"use strict";
/// <reference path="persona.ts" />
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
var AhoraSi;
(function (AhoraSi) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(nombre, apellido, sueldo) {
            var _this = _super.call(this, nombre, apellido) || this;
            _this.sueldo = sueldo;
            return _this;
        }
        Empleado.prototype.Hablar = function () {
            console.log("FUNCIONEEEEEEEEEEEEEEEEE");
        };
        Object.defineProperty(Empleado.prototype, "Sueldo", {
            get: function () {
                return this.sueldo;
            },
            enumerable: true,
            configurable: true
        });
        return Empleado;
    }(AhoraSi.Persona));
    AhoraSi.Empleado = Empleado;
})(AhoraSi || (AhoraSi = {}));
//# sourceMappingURL=empleado.js.map