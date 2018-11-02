/// <reference path="producto.ts" />
/// <reference path="node_modules/@types/jquery/index.d.ts" /> 
namespace Entidades
{
    export class Televisor extends Producto
    {
        public tipo:string;
        public paisOrigen:string;
        public pathFoto:string;

        public constructor(codigo:number, marca:string, precio:number, tipo:string, pais:string, path:string)
        {
            super(codigo, marca, precio);
            this.tipo = tipo;
            this.paisOrigen = pais;
            this.pathFoto = path;
        }

        public toJSON():JSON
        {
            let retorno = JSON.parse(super.toString());
            retorno.pais = this.paisOrigen;
            retorno.pathFoto = this.pathFoto;
            return retorno;
        }
    }
}