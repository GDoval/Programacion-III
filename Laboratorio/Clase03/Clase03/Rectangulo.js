"use strict";
/// <reference path="./Punto.ts" />
var Figuras;
(function (Figuras) {
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(v1, v3) {
            this._vertice1 = v1;
            this._vertice3 = v3;
            this._vertice2 = new Figuras.Punto(v1.GetX(), v3.GetY());
            this._vertice4 = new Figuras.Punto(v3.GetX(), v1.GetY());
            this._ladoUno = this._vertice1.GetX();
            this._ladoDos = this._vertice3.GetY();
            this._perimetro = (this._ladoUno * 2) + (this._ladoDos * 2);
            this._area = this._ladoUno * this._ladoDos;
        }
        Rectangulo.prototype.GetArea = function () {
            return this._area;
        };
        Rectangulo.prototype.GetPerimetro = function () {
            return this._perimetro;
        };
        Rectangulo.prototype.ToString = function () {
            return "Area:" + this.GetArea() + " Perimetro:" + this.GetPerimetro() + " LadoUno:" + this._ladoUno
                + " LadoDos:" + this._ladoDos + " Vertice1:" + this._vertice1 + " Vertice2:" + this._vertice2
                + " Vertice3:" + this._vertice3 + " Verice4:" + this._vertice4;
        };
        return Rectangulo;
    }());
    Figuras.Rectangulo = Rectangulo;
})(Figuras || (Figuras = {}));
//# sourceMappingURL=Rectangulo.js.map