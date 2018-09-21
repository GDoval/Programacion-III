"use strict";
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
        alert("Elegiste mal el turno soquete");
    }
    return "";
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
function AdministrarValidaciones() {
    ValidarCamposVacios(); // Valida vacios
    // Valida maximos y minimos
    var array_ids = ["dni", "legajo", "sueldo"];
    var array_min = [1000000, 100, 8000];
    var array_max = [55000000, 550, 25000];
    var error_log = "";
    var indice = 0;
    var valor = "";
    var numero = 0;
    var validar = false;
    var flag = 0;
    for (var _i = 0, array_ids_3 = array_ids; _i < array_ids_3.length; _i++) {
        var id = array_ids_3[_i];
        valor = document.getElementById(id).value;
        numero = parseInt(valor);
        validar = ValidarRangoNumerico(numero, array_max[indice], array_min[indice]);
        indice++;
        if (!validar) {
            error_log += id + ",";
            flag = 1;
        }
    }
    if (flag == 1) {
        alert("Los siguientes rangos fallaron: " + error_log);
    }
    //Valida Sexo
    var sexo = document.getElementById("sexo").value;
    //Valida turno
    var turno = ObtenerTurnoSeleccionado();
    alert(turno);
}
//# sourceMappingURL=validaciones.js.map