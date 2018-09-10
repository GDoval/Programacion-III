/// <reference path="./Rectangulo.ts" />

let p1 = new Figuras.Punto(5,5);
let p2 = new Figuras.Punto(4,4);
let rec = new Figuras.Rectangulo(p1,p2);
console.log(rec.ToString());