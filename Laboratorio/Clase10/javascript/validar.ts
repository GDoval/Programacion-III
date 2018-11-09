/// <reference path="../node_modules/@types/jquery/index.d.ts" /> 

//Se puede hacer asociando la funcion al evento click del boton. Se hace cuando se termina de cargar el formulario
//Se añade la funcion al click, si esta vacio retorna falso, si estan los campos llenos retorna true. En el html
// el input tiene que ser de tipo submit
function Validar()
{
    $(document).ready(function(){
        $('#login').bootstrapValidator({
            
        }
    })
    
    var usuario = $('#usuario').val();
    var pass = $('#password').val();

    if(usuario != '' && pass != '')
    {
        let data = new FormData();
        data.append("usuario", String(usuario));
        data.append("password", String(pass));
        $.ajax({
            type: 'POST',
            url: "./BACKEND/pagina.php",
            cache: false,
            processData: false,
            contentType: false,
            data: data,
            success: function(data)
            {
                console.log(data);
            },
            async: true
        })
     
        .fail(function()
        {
            console.log("aaaaaaa");
        });
    }
}