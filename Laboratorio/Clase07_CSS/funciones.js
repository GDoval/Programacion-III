/// <reference path="./libs/jquery/index.d.ts" />
$(document).ready(function () {
    var usuarios = [{ "mail": "uno@asd.com", "clave": "pepe" }, { "mail": "adada@kkkk.com", "clave": "juan" }, { "mail": "saratustra@asdasdad", "clave": "nnnnnnn" }];
    var validar;
    validar = localStorage.getItem("MisUsuarios");
    if (validar == null) {
        localStorage.setItem("MisUsuarios", JSON.stringify(usuarios));
    }
});
function Verificar() {
    var mail = $("#txtMail").val();
    $("#mensaje").html("");
    var array = localStorage.getItem("MisUsuarios");
    var json = JSON.parse(array);
    var flag = 0;
    for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
        var obj = json_1[_i];
        if (obj.mail == mail) {
            $("#mensaje").removeClass("error");
            $("#mensaje").addClass("exito");
            $("#mensaje").html("Usuario correcto");
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        $("#mensaje").removeClass("exito");
        $("#mensaje").addClass("error");
        $("#mensaje").html("Usuario no existe");
    }
    else {
        window.location.href = "principal.html";
    }
}
