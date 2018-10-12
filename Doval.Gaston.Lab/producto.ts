namespace Entidades
{
    export class Producto
    {
        public codigo:number;
        public marca:string;
        public precio:number;

        public constructor(codigo:number, marca:string, precio:number)
        {
            this.codigo = codigo;
            this.marca = marca;
            this.precio = precio;
        }

        public toString():string
        {
            return JSON.stringify({codigo: this.codigo, marca: this.marca, precio: this.precio});
        }
    }
}