function sendData(nombre, apellido, dni, sexo, legajo, sueldo, turno) {
    //Se crea la consulta para enviar al script administracion.php
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./administracion.php", true);
    //xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.setRequestHeader("enctype", "multipart/form-data");
    //Se envian los valores
    var foto = document.getElementById("foto");
    var data = new FormData();
    data.append("nombre", nombre);
    data.append("apellido", apellido);
    data.append("turno", turno);
    data.append("dni", String(dni));
    data.append("sexo", sexo);
    data.append("legajo", legajo);
    data.append("sueldo", String(sueldo));
    data.append("foto", foto.files[0]);
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
function ValidarCamposVacios(cadena) {
    if (cadena == '') {
        return true;
    }
    else {
        return false;
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
    for (var _i = 0, array_ids_1 = array_ids; _i < array_ids_1.length; _i++) {
        var id = array_ids_1[_i];
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
    for (var _i = 0, array_ids_2 = array_ids; _i < array_ids_2.length; _i++) {
        var id = array_ids_2[_i];
        valor = document.getElementById(id).value;
        numero = parseInt(valor);
        validarTodo = ValidarRangoNumerico(numero, array_max[indice], array_min[indice]);
        indice++;
        if (!validarTodo) {
            document.getElementById("spn" + id).hidden = false;
            flag = 1;
        }
    }
    if (flag != 1) {
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
    //#region Valida campos vacios
    var array_ids_todos = ["Apellido", "Nombre", "dni", "sexo", "legajo", "sueldo"];
    var array_errores = [];
    var hay_vacios = false;
    for (var _a = 0, array_ids_todos_1 = array_ids_todos; _a < array_ids_todos_1.length; _a++) {
        var id = array_ids_todos_1[_a];
        var validar_1 = ValidarCamposVacios(String(document.getElementById(id).value));
        if (validar_1) {
            document.getElementById("spn" + id).hidden = false;
            hay_vacios = true;
        }
    }
    if (!hay_vacios) {
        contValidaciones++;
    }
    //#endregion
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
function AdministrarModificar(dni) {
    var form = document.getElementById("Modificar");
    var input = document.getElementById("modificar");
    input.value = dni.toString();
    form.submit();
}
