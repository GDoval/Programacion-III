/// <reference path="producto.ts" />

function enviarJSON(producto:any)
{
    //Pasamos de un objeto en Java a un string en formato JSON
    let json:string = JSON.stringify(producto);
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./Practica_JSON/guardoJSON.php", true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send("json=" + json);

    xhttp.onreadystatechange = function () 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200)
        {
            //console.log(xhttp.responseText);

            //Recibo el JSON en formato string y lo paso a un objeto Java. Se puede acceder a los campos usando el punto: obj.nombre, obj.precio etc
             let obj:any = xhttp.responseText;
             console.log(JSON.stringify(obj));
        }

    }
}
