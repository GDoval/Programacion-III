/// <reference path="node_modules/@types/jquery/index.d.ts" /> 


function Logearse()
{
    let usuario: any = $('#usuario').val();
    let password: any = $('#password').val();

    let data: any = new FormData();
    data.append("usuario", usuario);
    data.append("password", password);
 
    $.ajax({
        type: 'POST',
        url: "index.php/login",
        cache: false,
        processData: false,
        contentType: false,
        data: data,
        success: function(data)
        {
            let token = JSON.parse(data);
            if(token.exito)
            {
                localStorage.setItem("token", token.token);
                document.location.href = 'principal.html';
            }
        },
        async: true
    })
 
    .fail(function()
    {
        console.log("No se pudo conectar");
    });
 
}