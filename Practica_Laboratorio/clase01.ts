namespace Testing
{
    export class Musico
    {
        protected genero : string;
        protected instrumento : string;

        public constructor(genero:string, instrumento:string)
        {
            this.instrumento = instrumento;
            this.genero = genero;
        }
        
        public getGenero():string
        {
            return this.genero;
        }

        public getInstrumento():string{
            return this.instrumento;
        }
    }

}