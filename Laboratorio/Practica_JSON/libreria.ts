/// <reference path="producto.ts" />
/// <reference path="enviarJSON.ts" />
/// <reference path="recibirJSON.ts" />
function generoProducto()
{
    let nombre:string =  (<HTMLInputElement>document.getElementById("nombre")).value;
    let precio:string = (<HTMLInputElement>document.getElementById("precio")).value;
    let codigo:string = (<HTMLInputElement>document.getElementById("precio")).value;

    if(nombre != '' && codigo != '' && precio != '')
    {
        let producto = new Producto(nombre, codigo, parseInt(precio));
        return producto;
    }else
    {
        return null;
    }
}

function mandoProducto()
{
    let producto = generoProducto();
    if(producto != null)
    {
        enviarJSON(producto);
    }
}

function reciboProductos()
{
    recibirJSON();
}