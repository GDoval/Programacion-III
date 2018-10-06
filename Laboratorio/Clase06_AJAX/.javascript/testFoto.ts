/// <reference path="index.d.ts" />

function SubirFoto()
{
    //Busca la foto a subir a partir de  un input de tipo  "file" desde el html

    let imagen:any = (<HTMLInputElement>document.getElementById("foto")); //recupera un objeto, que no se puede pasar por parametro a AJAX


    //Envia la foto por AJAX hacia el backend (nexo.php) pasando por POST el parametro "subirFoto" 
    //y en $_FILE el parametro "foto"


    let xhttp : XMLHttpRequest =  new XMLHttpRequest();
    xhttp.open("POST", "BACKEND/nexo.php", true);

    /* Para mandar fotos a un backend hace falta:
    *Que sea por POST
    *El header tiene que ser:  ("enctype","multipart/form-data");  
    *El formulario tiene que tener un input de tipo "file"
    */
    xhttp.setRequestHeader("enctype","multipart/form-data"); //cabecera para mandar imagenes
    //Cuando cambia el enctype cambia la forma en que se pasan los parametros por send

    let data:FormData = new FormData();// Prepara los elementos a enviar por AJAX.
    data.append("op", "subirFoto");
    data.append("foto", imagen.files[0]);// El objeto que recuperamos del HTML puede tener un array de imagenes, si se eligio mas de una


    //Con Jquery




    //let mandar = "op=subirFoto&foto=" + imagen; Asi no funciona si hay que mandar valores al $_FILES
    xhttp.send(data);

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let json = JSON.parse(xhttp.responseText);
            if (json.Ok == true)
            {
                //Mostramos la imagen en el HTML
                (<HTMLInputElement>document.getElementById("imgFoto")).src = "BACKEND/" + json.Path;
            }
        }
    }


    //Mostrar la imagen en el HTML en el input de tipo "img"


}