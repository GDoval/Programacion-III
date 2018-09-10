/// <reference path="./Punto.ts" />

namespace Figuras
{
    export class Rectangulo
    {
        private _area : number;
        private _ladoDos : number;
        private _ladoUno : number;
        private _perimetro : number;
        private _vertice1 : Figuras.Punto;
        private _vertice2 : Figuras.Punto;
        private _vertice3 : Figuras.Punto;
        private _vertice4 : Figuras.Punto;

        public constructor(v1 : Figuras.Punto , v3: Figuras.Punto)
        {
            this._vertice1 = v1;
            this._vertice3 = v3;
            this._vertice2 = new Figuras.Punto(v1.GetX(),v3.GetY());
            this._vertice4 = new Figuras.Punto(v3.GetX(),v1.GetY());
            this._ladoUno = this._vertice1.GetX();
            this._ladoDos = this._vertice3.GetY();
            this._perimetro = (this._ladoUno * 2) + (this._ladoDos *2);
            this._area = this._ladoUno * this._ladoDos;

        }

        public GetArea() : number
        {
            return this._area;
        }

        public GetPerimetro() : number
        {
            return this._perimetro;
        }

        public ToString(): string
        {
            return "Area:" + this.GetArea() + " Perimetro:" + this.GetPerimetro() + " LadoUno:" + this._ladoUno 
            + " LadoDos:" + this._ladoDos + " Vertice1:" + this._vertice1 + " Vertice2:" + this._vertice2 
            + " Vertice3:" + this._vertice3 + " Verice4:" +this._vertice4 ;
        }


    }
}