function sendData(nombre, apellido, dni, sexo, legajo, sueldo, turno) {
    //Se crea la consulta para enviar al script administracion.php
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./administracion.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //Se envian los valores
    var data = 'nombre=' + nombre + '&apellido=' + apellido + '&turno=' + turno + '&dni=' + dni + '&sueldo=' + sueldo + '&sexo=' + sexo + '&legajo=' + legajo;
    xhttp.send(data);
    //Se chequea que todo haya llegado bien
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
            //Generamos un link a mostrar.php
            document.getElementById("link_a_mostrar").href = 'mostrar.php';
            document.getElementById("link_a_mostrar").hidden = false;
        }
    };
}
