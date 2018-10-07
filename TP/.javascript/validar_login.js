"use strict";
/// <reference path="validaciones.ts" />
function ValidarVacios() {
    var array_ids = ["apellido", "dni"];
    var array_errores = [];
    for (var _i = 0, array_ids_1 = array_ids; _i < array_ids_1.length; _i++) {
        var id = array_ids_1[_i];
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
        for (var id in array_vacios) {
            alert(id);
            //AdministrarSpanError(id, false);
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
            elemento.value = "Vacio";
        }
    }
    else {
        if (elemento != null) {
            elemento.value = "Vacio";
        }
    }
}
//# sourceMappingURL=validar_login.js.map