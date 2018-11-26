/// <reference path="node_modules/@types/jquery/index.d.ts" /> 
function Logearse() {
    var usuario = $('#usuario').val();
    var password = $('#password').val();
    var data = new FormData();
    data.append("usuario", usuario);
    data.append("password", password);
    $.ajax({
        type: 'POST',
        url: "index.php/login",
        cache: false,
        processData: false,
        contentType: false,
        data: data,
        success: function (data) {
            var token = JSON.parse(data);
            if (token.exito) {
                document.location.href = 'principal.html';
            }
        },
        async: true
    })
        .fail(function () {
        console.log("No se pudo conectar");
    });
}
