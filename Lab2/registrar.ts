/// <reference path="node_modules/@types/jquery/index.d.ts" /> 


class Registrar
{
    public static ValidarCampos():boolean
    {
        let email = $('#email').val();
        let nombre = $('#nombre').val();
        let clave = $('#clave').val();
        let apellido = $('#apellido').val();
        let legajo = $('#legajo').val();
        let confirmar = $('#confirmar').val();
        let foto:any = document.getElementById("foto");
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


        let extFoto = foto.files[0].name.split('.');
        if(extFoto != 'jpg' || extFoto != 'png')
        {
            
        }

        return true;
    }
}