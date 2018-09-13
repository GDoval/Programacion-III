"use strict";
var Figuras;
(function (Figuras) {
    var Punto = /** @class */ (function () {
        function Punto(x, y) {
            this._x = x;
            this._y = y;
        }
        Punto.prototype.GetX = function () {
            return this._x;
        };
        Punto.prototype.GetY = function () {
            return this._y;
        };
        return Punto;
    }());
    Figuras.Punto = Punto;
})(Figuras || (Figuras = {}));
//# sourceMappingURL=Punto.js.map