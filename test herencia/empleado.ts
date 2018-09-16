/// <reference path="persona.ts" />

namespace AhoraSi
{
    export class Empleado extends AhoraSi.Persona
    {
        protected sueldo: number;

        constructor(nombre:string, apellido:string, sueldo:number)
        {
            super(nombre, apellido);
            this.sueldo = sueldo;
        }

        public Hablar()
        {
            console.log("FUNCIONEEEEEEEEEEEEEEEEE");
        }

        public get Sueldo()
        {
            return this.sueldo;
        }
    }
}