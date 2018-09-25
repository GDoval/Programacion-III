/// <reference path="envio_a_administracion.ts" />
/// <reference path="validaciones.ts" />

/* Script de test unitarios para cada función dentro de los archivos agregados como referencia.
   Se ejecutan desde pruebas.html
*/

function test_ValidarCamposVacios()
{
    let validar:boolean = ValidarCamposVacios();
    if(!validar)
    {
        alert("Hay campos vacios y fueron reportados correctamente por la funcion")
    }else
    {
        alert("Hay campos vacios y NO fueron reportados por la funcion")
    }
}

function test_ValidarRandoNumerico()
{
    let validar:boolean = ValidarRangoNumerico(10, 100, 0);
    if(validar)
    {
        alert("El numero esta dentro del rango valido y la funcion funciono bien")
    }else
    {
        alert("El numero esta dentro del rando valido y la funcion NO funciono bien");
    }
}

function test_ObtenerTurnoSeleccionado()
{
    let validar:string = ObtenerTurnoSeleccionado();
    if (validar == "")
    {
        alert("La funcion devolvio una cadena vacia")
    }else
    {
        alert("La funcion devolvio el siguiente valor: "+validar);
    }
}

function test_ObtenerSueldoMaximo()
{
    let validar:number = ObtenerSueldoMaximo(ObtenerTurnoSeleccionado());
    if(validar == -1)
    {
        alert("La funcion retorno un valor invalido")
    }else
    {
        alert("La funcion retorno el valor: "+validar);
    }
}

function test_ValidarSueldoPorTurno()
{
    let turno:string = ObtenerTurnoSeleccionado();
    let sueldo:number = parseInt((<HTMLInputElement> document.getElementById("sueldo")).value);

    let validar:boolean = ValidarSueldoPorTurno(turno, sueldo);
    if(validar)
    {
        alert("La funcion valido correctamente");
    }else
    {
        alert("La funcion valido de forma incorrecta");
    }
}



