function sendData(nombre, apellido, dni, sexo, legajo, sueldo, turno) {
    //Se crea la consulta para enviar al script administracion.php
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./administracion.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //Se envian los valores
    //xhttp.send("nombre="+nombre+"apellido"+apellido+"dni="+dni+"sexo="+sexo+"legajo="+legajo+"sueldo="+sueldo+"turno="+turno);
    xhttp.send("sueldo=" + sueldo + "Apellido=" + apellido);
    //Se chequea que todo haya llegado bien
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            alert(xhttp.responseText);
        }
    };
}
