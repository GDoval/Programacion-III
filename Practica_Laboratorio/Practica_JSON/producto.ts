class Producto
{
    //Primero probamos con atributos publicos, despues con privados a ver como sale el JSON

    public nombre:string;
    public precio:number;
    public codigo:string;

    public constructor(nombre:string, codigo:string, precio:number)
    {
        this.nombre = nombre;
        this.precio = precio;
        this. codigo = codigo;
    }
}