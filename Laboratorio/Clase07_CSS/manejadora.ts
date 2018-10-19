/// <reference path="./libs/jquery/index.d.ts" />

$(document).ready
(
    function()
    {
        let usuarios = [{"mail": "uno@asd.com", "clave": "pepe"}, {"mail":"adada@kkkk.com", "clave": "juan"}, {"mail": "saratustra@asdasdad", "clave": "nnnnnnn"}];
        let validar:any;
        validar = localStorage.getItem("MisUsuarios");
        if(validar == null)
        {
            localStorage.setItem("MisUsuarios", JSON.stringify(usuarios));
        }        
    }
)


function Verificar()
{
    let mail:any = $("#txtMail").val();
    $("#mensaje").html("");
    let array:any = localStorage.getItem("MisUsuarios");
    let json = JSON.parse(array);
    let flag = 0;
    for(let obj of json)
    {
        if(obj.mail == mail)
        {
            $("#mensaje").removeClass("error");
            $("#mensaje").addClass("exito");
            $("#mensaje").html("Usuario correcto");
            flag = 1;
            break;
        }
    }
    if(flag == 0)
    {
        $("#mensaje").removeClass("exito");
        $("#mensaje").addClass("error");
        $("#mensaje").html("Usuario no existe");
    }else
    {
        window.location.href = "principal.html";
    }
}



