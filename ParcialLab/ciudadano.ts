/// <reference path="persona.ts" />
namespace Parcial {
    export class Ciudadano extends Parcial.Persona {
        public dni: number;
        public pais: string;
        public foto: string;

        public constructor(nombre: string, apellido: string, edad: number, dni: number, pais: string, foto?: string) {
            super(nombre, apellido, edad);
            this.dni = dni;
            this.pais = pais;
            if (foto != undefined)
                this.foto = foto;
            else
                this.foto = 'noexiste';
        }

        public ciudadanoToJSON() {
            let json:string = '{' + this.toString() + ', "dni" : "' + this.dni + '", "pais" : "' + this.pais + '", "foto" : "' + this.foto +'"}';
            return JSON.parse(json);
        }
    }
}
