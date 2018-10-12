namespace Parcial {
    export class Persona {
        public nombre: string;
        public apellido: string;
        public edad: number;

        public constructor(nombre: string, apellido: string, edad: number) {
            this.apellido = apellido;
            this.edad = edad;
            this.nombre = nombre;
        }
        public toString() {
            return '"nombre" : "' + this.nombre + '", "apellido": "' + this.apellido + '", "edad" : "' + String(this.edad) +'"';
        }
    }
}   

