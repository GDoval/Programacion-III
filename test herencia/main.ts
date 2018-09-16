/// <reference path="empleado.ts" />

let obj = new AhoraSi.Empleado("Gaston", "Doval", 9999);
obj.Hablar();
let nombre:string = obj.Nombre;
console.log(nombre);
let sueldo = obj.Sueldo;
console.log(sueldo);