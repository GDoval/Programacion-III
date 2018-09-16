/// <reference path="persona.ts" />

namespace Gente {
    
export class Empleado extends Persona
{
    protected _legajo: number;
    protected _sueldo : number;

    constructor(legajo: number, sueldo: number, nombre:string, apellido:string, dni:number, sexo:string)
    {
        super(nombre, apellido, dni, sexo);
        this._legajo = legajo;
        this._sueldo = sueldo;
    }

    public Hablar(idioma:string):string
    {
        return "El empleado habla: " + idioma;
    }

    public ToString()
    {
        return super.ToString()+"-"+this._legajo+"-"+this._sueldo;
    }

}
}