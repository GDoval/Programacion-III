namespace Gente {

export abstract class Persona {
    
    private _nombre : string;
    private _apellido : string;
    private _dni : number;
    private _sexo : string;  
        
    
    constructor(nombre :string, apellido: string, dni : number, sexo : string) 
    {
        this._apellido = apellido;
        this._dni = dni;
        this._nombre = nombre;
        this._sexo = sexo;
    }

    public get Nombre() :string
    {
        return this._nombre;
    }

    public get Apellido() :string
    {
        return this._apellido;
    }

    public get Sexo() :string
    {
        return this._sexo;
    }

    public get Dni() :number
    {
        return this._dni;
    }

    public abstract Hablar(idioma:string) :string;

    public ToString()
    {
        return this.Nombre + "-" +this.Apellido+"-"+this.Dni+"-"+this.Sexo;
    }

}

}