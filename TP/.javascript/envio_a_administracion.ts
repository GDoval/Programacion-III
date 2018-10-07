function sendData(nombre:string, apellido:string, dni:number, sexo:string, legajo:string, sueldo:number, turno:string)
{
    //Se crea la consulta para enviar al script administracion.php
    let xhttp : XMLHttpRequest =  new XMLHttpRequest();
    xhttp.open("POST", "./administracion.php", true);
    //xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.setRequestHeader("enctype", "multipart/form-data");

    //Se envian los valores
    
    let foto:any = document.getElementById("foto");
    let data = new FormData();
    data.append("nombre", nombre);
    data.append("apellido", apellido);
    data.append("turno", turno);
    data.append("dni", String(dni));
    data.append("sexo", sexo);
    data.append("legajo", legajo);
    data.append("sueldo", String(sueldo));
    data.append("foto",foto.files[0]);
    xhttp.send(data);

    //Se chequea que todo haya llegado bien

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
        //Generamos un link a mostrar.php
        if(xhttp.responseText == "OK!")
        {
            (<HTMLLinkElement>document.getElementById("link_a_mostrar")).href = 'mostrar.php';
            (<HTMLLinkElement>document.getElementById("link_a_mostrar")).hidden = false;
        }

        }
    }
}