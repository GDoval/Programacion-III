function sendData(nombre, apellido, dni, sexo, legajo, sueldo, turno) {
    //Se crea la consulta para enviar al script administracion.php
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./administracion.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //Se envian los valores
    var data = 'nombre=' + nombre + '&apellido=' + apellido + '&turno=' + turno + '&dni=' + dni + '&sueldo=' + sueldo + '&sexo=' + sexo + '&legajo=' + legajo;
    xhttp.send(data);
    //Se chequea que todo haya llegado bien
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
            //Generamos un link a mostrar.php
            if (xhttp.responseText == "OK!") {
                document.getElementById("link_a_mostrar").href = 'mostrar.php';
                document.getElementById("link_a_mostrar").hidden = false;
            }
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
    turno;
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
    var nombre = document.getElementById("Nombre").value;
    var apellido = document.getElementById("Apellido").value;
    var dni = parseInt(document.getElementById("dni").value);
    var sexo = document.getElementById("sexo").value;
    var legajo = document.getElementById("legajo").value;
    var sueldo = parseInt(document.getElementById("sueldo").value);
    var turno = ObtenerTurnoSeleccionado();
    if (valido == true) {
        sendData(nombre, apellido, dni, sexo, legajo, sueldo, turno);
    }
}
/// <reference path="validaciones.ts" />
function ValidarVacios() {
    var array_ids = ["apellido", "dni"];
    var array_errores = [];
    for (var _i = 0, array_ids_4 = array_ids; _i < array_ids_4.length; _i++) {
        var id = array_ids_4[_i];
        var validar = String(document.getElementById(id).value);
        if (validar == "") {
            array_errores.push(id);
        }
    }
    return array_errores;
}
function VerificarValidacionesLogin() {
    var array_vacios = ValidarVacios();
    var validar_vacios = false;
    var flag = 0;
    var validar_rango = ValidarRangoNumerico(parseInt(document.getElementById("dni").value), 55000000, 1000000);
    if (array_vacios.length == 0) {
        validar_vacios = true;
    }
    else {
        for (var _i = 0, array_vacios_1 = array_vacios; _i < array_vacios_1.length; _i++) {
            var id = array_vacios_1[_i];
            AdministrarSpanError(id, false);
            flag++;
        }
    }
    if (validar_vacios && validar_rango && flag == 0) {
        return true;
    }
    else {
        return false;
    }
}
function AdministrarSpanError(id, validar) {
    var elemento = document.getElementById(id);
    if (!validar) {
        if (elemento != null) {
            elemento.style.borderColor = "red";
        }
    }
    else {
        if (elemento != null) {
            elemento.style.borderColor = "white";
        }
    }
}
