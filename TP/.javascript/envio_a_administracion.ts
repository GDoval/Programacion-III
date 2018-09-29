function sendData(nombre:string, apellido:string, dni:number, sexo:string, legajo:string, sueldo:number, turno:string)
{
    //Se crea la consulta para enviar al script administracion.php
    let xhttp : XMLHttpRequest =  new XMLHttpRequest();
    xhttp.open("POST", "./administracion.php", true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");


    //Se envian los valores
    let data:string = 'nombre=' + nombre +'&apellido=' + apellido + '&turno=' + turno + '&dni=' + dni + '&sueldo=' + sueldo + '&sexo=' + sexo + '&legajo=' + legajo;
    xhttp.send(data);

    //Se chequea que todo haya llegado bien

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
        //Generamos un link a mostrar.php
        (<HTMLLinkElement>document.getElementById("link_a_mostrar")).href = 'mostrar.php';
        (<HTMLLinkElement>document.getElementById("link_a_mostrar")).hidden = false;
        }
    }
    

}