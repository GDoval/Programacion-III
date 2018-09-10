var Figuras;
(function (Figuras) {
    var Punto = /** @class */ (function () {
        function Punto(x, y) {
            this._x = x;
            this._y = y;
        }
        Object.defineProperty(Punto.prototype, "GetX", {
            get: function () {
                return this._x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Punto.prototype, "GetY", {
            get: function () {
                return this._y;
            },
            enumerable: true,
            configurable: true
        });
        return Punto;
    }());
    Figuras.Punto = Punto;
})(Figuras || (Figuras = {}));
/// <reference path="./Punto.ts" />
var Figuras;
(function (Figuras) {
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(v1, v3) {
            this._vertice1 = v1;
            this._vertice3 = v3;
            this._vertice2 = new Figuras.Punto(v1.GetX, v3.GetY);
            this._vertice4 = new Figuras.Punto(v3.GetX, v1.GetY);
            this._ladoUno = this._vertice1.GetX;
            this._ladoDos = this._vertice3.GetY;
            this._perimetro = (this._ladoUno * 2) + (this._ladoDos * 2);
            this._area = this._ladoUno * this._ladoDos;
        }
        Object.defineProperty(Rectangulo.prototype, "GetArea", {
            get: function () {
                return this._area;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangulo.prototype, "GetPerimetro", {
            get: function () {
                return this._perimetro;
            },
            enumerable: true,
            configurable: true
        });
        Rectangulo.prototype.ToString = function () {
            return "Area:" + this.GetArea + " Perimetro:" + this.GetPerimetro + " LadoUno:" + this._ladoUno
                + " LadoDos:" + this._ladoDos + " Vertice1:" + this._vertice1 + " Vertice2:" + this._vertice2
                + " Vertice3:" + this._vertice3 + " Verice4:" + this._vertice4;
        };
        return Rectangulo;
    }());
    Figuras.Rectangulo = Rectangulo;
})(Figuras || (Figuras = {}));
/// <reference path="./Rectangulo.ts" />
var p1 = new Figuras.Punto(5, 5);
var p2 = new Figuras.Punto(4, 4);
var rec = new Figuras.Rectangulo(p1, p2);
rec.ToString();
