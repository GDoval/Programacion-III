"use strict";
function SubirFoto() {
    //Busca la foto a subir a partir de  un input de tipo  "file" desde el html
    var imagen = document.getElementById("foto"); //recupera un objeto, que no se puede pasar por parametro a AJAX
    //Envia la foto por AJAX hacia el backend (nexo.php) pasando por POST el parametro "subirFoto" 
    //y en $_FILE el parametro "foto"
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "BACKEND/nexo.php", true);
    /* Para mandar fotos a un backend hace falta:
    *Que sea por POST
    *El header tiene que ser:  ("enctype","multipart/form-data");
    *El formulario tiene que tener un input de tipo "file"
    */
    xhttp.setRequestHeader("enctype", "multipart/form-data");
    //Cuando cambia el enctype cambia la forma en que se pasan los parametros por send
    var data = new FormData();
    data.append("op", "subirFoto");
    data.append("foto", imagen.files[0]);
    //let mandar = "op=subirFoto&foto=" + imagen;
    xhttp.send(data);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            if (json.Ok == true) {
                document.getElementById("imgFoto").src = "BACKEND/" + json.Path;
            }
        }
    };
    //Mostrar la imagen en el HTML en el input de tipo "img"
}
//# sourceMappingURL=testFoto.js.map