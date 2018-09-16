namespace AhoraSi
{
    export abstract class Persona
    {
        protected nombre : string;
        protected apellido : string;

        constructor(nombre:string, apellido:string)
        {
            this.apellido = apellido;
            this.nombre = nombre;
        }

        public Hablar(){};
        public get Nombre()
        {
            return this.nombre;
        }
    }

}