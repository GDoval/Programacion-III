/// <reference path="envio_a_administracion.ts" />
/// <reference path="validaciones.ts" />
/* Script de test unitarios para cada función dentro de los archivos agregados como referencia.
   Se ejecutan desde pruebas.html
*/
function test_ValidarCamposVacios() {
    var validar = ValidarCamposVacios();
    if (!validar) {
        alert("Hay campos vacios y fueron reportados correctamente por la funcion");
    }
    else {
        alert("Hay campos vacios y NO fueron reportados por la funcion");
    }
}
function test_ValidarRandoNumerico() {
    var validar = ValidarRangoNumerico(10, 100, 0);
    if (validar) {
        alert("El numero esta dentro del rango valido y la funcion funciono bien");
    }
    else {
        alert("El numero esta dentro del rando valido y la funcion NO funciono bien");
    }
}
function test_ObtenerTurnoSeleccionado() {
    var validar = ObtenerTurnoSeleccionado();
    if (validar == "") {
        alert("La funcion devolvio una cadena vacia");
    }
    else {
        alert("La funcion devolvio el siguiente valor: " + validar);
    }
}
function test_ObtenerSueldoMaximo() {
    var validar = ObtenerSueldoMaximo(ObtenerTurnoSeleccionado());
    if (validar == -1) {
        alert("La funcion retorno un valor invalido");
    }
    else {
        alert("La funcion retorno el valor: " + validar);
    }
}
function test_ValidarSueldoPorTurno() {
    var turno = ObtenerTurnoSeleccionado();
    var sueldo = parseInt(document.getElementById("sueldo").value);
    var validar = ValidarSueldoPorTurno(turno, sueldo);
    if (validar) {
        alert("La funcion valido correctamente");
    }
    else {
        alert("La funcion valido de forma incorrecta");
    }
}
