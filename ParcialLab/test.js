"use strict";
/// <reference path="persona.ts" />
/// <reference path="ciudadano.ts" />
// let persona = new Parcial.Ciudadano("Gaston", "Doval", 30, 33712616, "Argentina");
// let json = persona.ciudadanoToJSON();
// console.log(json);
var persona = { "nombre": "Juan", "edad": 35 };
console.log(persona.nombre + " - " + persona.edad);
console.log(persona["nombre"] + " - " + persona["edad"]);
//# sourceMappingURL=test.js.map