class Manejadora
{
    public static ComprobarCampos(): boolean
    {
        let mail = $('#email').val();
        let clave = $('#clave').val();
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        let resp = true;

        if(mail == '')
        {
            $('#errorEmail').html('*');
            $('#mostrarErrorEmail').html( `<div class="alert alert-warning" role="alert">
            El email se encuentra vacio.
          </div>`);
            resp = false;
        }else if(!emailRegex.test(String(mail)))
        {
            $('#errorEmail').html('*');
            $('#mostrarErrorEmail').html( `<div class="alert alert-warning" role="alert">
            El email no tiene un formato valido
          </div>`);
            resp = false;
        }


        if(clave == '')
        {
            $('#errorClave').html('*');
            $('#mostrarErrorClave').html(`<div class="alert alert-warning" role="alert">
            El email no tiene un formato valido.
          </div>`);
          resp = false;
        }else if(String(clave).length < 4 || String(clave).length > 8)
        {
            $('#errorClave').html('*');
            $('#mostrarErrorClave').html(`<div class="alert alert-warning" role="alert">
            La clave tiene que estar entre 4 y 8 caracteres
          </div>`);
          resp = false;
        }
        return resp;
    }



    public static chequearUsuario()
    {
        if(Manejadora.ComprobarCampos())
        {
            let mail = $('#email').val();
            let clave = $('#clave').val();
            let resp = false;

            let usuarios = JSON.parse(localStorage.getItem('usuarios'));

            for(let user of usuarios)
            {   
                if(mail == user.correo && clave == user.clave)
                {
                    document.location.href = 'principal.html';
                    resp = true;
                    break;
                }
            }

            if(!resp)
            {
                $('#mostrarErrores').html(`<div class="alert alert-danger" role="alert">
                El usuario no esta registrado
              </div>`)
            }
        }
    }

}