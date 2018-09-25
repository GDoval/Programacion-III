function sendData(nombre, apellido, dni, sexo, legajo, sueldo, turno) {
    //Se crea la consulta para enviar al script administracion.php
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./administracion.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //Se envian los valores
    //xhttp.send("nombre="+nombre+"apellido"+apellido+"dni="+dni+"sexo="+sexo+"legajo="+legajo+"sueldo="+sueldo+"turno="+turno);
    xhttp.send("sueldo=" + sueldo + "Apellido=" + apellido);
    //Se chequea que todo haya llegado bien
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            alert(xhttp.responseText);
        }
    };
}
/// <reference path="envio_a_administracion.ts" />
function ValidarCamposVacios() {
    var array_ids = ["Apellido", "Nombre", "dni", "sexo", "legajo", "sueldo"];
    var error_log = "";
    var flag = 0;
    for (var _i = 0, array_ids_1 = array_ids; _i < array_ids_1.length; _i++) {
        var id = array_ids_1[_i];
        var validar = document.getElementById(id).value;
        if (validar == "") {
            error_log += id + ",";
            flag = 1;
        }
    }
    if (flag) {
        alert("Los siguientes campos se encuentran vacios: " + error_log);
        return false;
    }
    else {
        return true;
    }
}
function ValidarRangoNumerico(validar, max, min) {
    if (validar >= min && validar <= max) {
        return true;
    }
    else {
        return false;
    }
}
function ValidarCombo(valor, correcto) {
    if (valor === correcto) {
        return true;
    }
    else {
        return false;
    }
}
function ObtenerTurnoSeleccionado() {
    var array_ids = ["mañana", "tarde", "noche"];
    var flag = 0;
    var valor = "";
    for (var _i = 0, array_ids_2 = array_ids; _i < array_ids_2.length; _i++) {
        var id = array_ids_2[_i];
        var validar = document.getElementById(id).checked;
        if (validar) {
            flag += 1;
            valor = document.getElementById(id).value;
        }
    }
    if (flag == 1) {
        return valor;
    }
    else {
        return "";
    }
}
function ObtenerSueldoMaximo(turno) {
    switch (turno) {
        case "Mañana":
            return 20000;
            break;
        case "Tarde":
            return 18500;
            break;
        case "Noche":
            return 25000;
            break;
        default:
            return -1;
            break;
    }
}
function ValidarSueldoPorTurno(turno, sueldo) {
    var resp = true;
    switch (turno) {
        case "Mañana":
            if (sueldo > 20000 || sueldo < 8000)
                resp = false;
            break;
        case "Tarde":
            if (sueldo > 18500 || sueldo < 8000)
                resp = false;
            break;
        case "Noche":
            if (sueldo > 25000 || sueldo < 8000)
                resp = false;
            break;
        default:
            resp = false;
            break;
    }
    return resp;
}
function AdministrarValidaciones() {
    //#region Declaracion de variables
    var validarTodo = false;
    var contValidaciones = 0;
    var array_ids = ["dni", "legajo", "sueldo"];
    var array_min = [1000000, 100, 8000];
    var array_max = [55000000, 550, 25000];
    var error_log = "";
    var indice = 0;
    var valor = "";
    var numero = 0;
    var validar = false;
    var flag = 0;
    //#endregion
    //#region Valida el rango de los campos numericos 
    for (var _i = 0, array_ids_3 = array_ids; _i < array_ids_3.length; _i++) {
        var id = array_ids_3[_i];
        valor = document.getElementById(id).value;
        numero = parseInt(valor);
        validarTodo = ValidarRangoNumerico(numero, array_max[indice], array_min[indice]);
        indice++;
        if (!validarTodo) {
            error_log += id + ",";
            flag = 1;
        }
    }
    if (flag == 1) {
        alert("Los siguientes rangos fallaron: " + error_log);
    }
    else {
        contValidaciones++;
    }
    //#endregion
    //Valida Sexo
    var sexo = document.getElementById("sexo").value;
    //#region Valida que el turno este bien
    var turno = ObtenerTurnoSeleccionado();
    if (turno != "") {
        contValidaciones++;
    }
    //#endregion
    validarTodo = ValidarCamposVacios();
    if (validarTodo == true) {
        contValidaciones++;
    }
    //Validar rango Sueldo
    var sueldo = parseInt(document.getElementById("sueldo").value);
    validarTodo = ValidarSueldoPorTurno(turno, sueldo);
    if (validarTodo == true) {
        contValidaciones++;
    }
    if (contValidaciones == 4) {
        return true;
    }
    else {
        return false;
    }
}
function todoOK() {
    var valido = false;
    valido = AdministrarValidaciones();
    var nombre = "aaaa";
    var Apellido = "bbbb";
    var dni = 21;
    var sexo = "m";
    var legajo = "123";
    var sueldo = 1245;
    var turno = "tarde";
    alert(nombre + Apellido + " " + dni + "  " + sexo + " " + legajo + " " + sueldo + " " + turno);
    //let nombre: string = (<HTMLInputElement>document.getElementById("Nombre")).value;
    //let apellido: string = (<HTMLInputElement>document.getElementById("Apellido")).value;
    /*let dni: number = parseInt((<HTMLInputElement>document.getElementById("dni")).value);
    let sexo: string = (<HTMLInputElement>document.getElementById("sexo")).value;
    let legajo: string = (<HTMLInputElement>document.getElementById("legajo")).value;
    let sueldo: number = parseInt((<HTMLInputElement>document.getElementById("sueldo")).value);
    let turno: string = (<HTMLInputElement>document.getElementById("turno")).value;*/
    if (valido == true) {
        alert("AAAAAAAAAAAA");
        sendData(nombre, Apellido, dni, sexo, legajo, sueldo, turno);
    }
}
