/// <reference path="./Persona.ts" />
namespace Gente
{
    export class Alumno extends Persona
    {
        private _legajo : number;

        public constructor (nombre:string , apellido:string , legajo : number)
        {
            super(nombre,apellido);
            this._legajo=legajo;
        }

        public get GetLegajo() : number
        {
            return this._legajo;
        }
        public set SetLegajo(value:number)
        {
            this._legajo=value;
        }

        public ToString():string
        {
            return this._legajo +"-" + super.ToString();
        }

        public  GuardarEnArchivo():void
        {
            var guardar = this.toString();
            let xhttp = new XMLHttpRequest();
            xhttp.open("POST", "EjercicioPersona/BackEnd/Gestor.php", true);
            xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhttp.send("valor="+guardar);
        }

    }
}