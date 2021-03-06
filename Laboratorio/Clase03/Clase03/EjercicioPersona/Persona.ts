 namespace Gente 
 {

     export class Persona
    {
        private _nombre : string;
        private _apellido : string;

        public constructor(nombre:string , apellido:string)
        {
            this._nombre=nombre;
            this._apellido = apellido;
        }

        public get GetNombre() : string
        {
            return this._nombre;
        }
        public get GetApellido() : string
        {
            return this._apellido;
        }
        public set SetNombre(value:string)
        {
            this._nombre = value;
        }
        public set SetApellido(value:string) 
        {
            this._apellido = value;
        }

        public ToString () : string
        {
            return this._nombre +"-"+ this._apellido ;
        }

    }
 }