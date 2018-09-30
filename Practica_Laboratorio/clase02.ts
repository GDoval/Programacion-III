namespace Testing
{
    export class Miembro extends Musico
    {
        protected nombre:string;
        protected apellido:string;

        public constructor(nombre:string, apellido:string, instrumento:string, genero:string)
        {
            super(genero, instrumento)
            this.nombre = nombre;
            this.apellido = apellido;
        }

        public getNombre():string
        {
            return this.nombre;
        }

        public getApellido():string{
            return this.apellido;
        }

        public ToString():string
        {
            let resp:string =  this.getNombre() + " " + this.getApellido() + " " + this.getInstrumento() + " " + this.getGenero();
            return resp;
         }
    }
}