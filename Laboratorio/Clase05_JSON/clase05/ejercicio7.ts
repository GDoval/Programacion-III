function Probar()
{
    //El tipo XMLHTttpRequest no puede usarse directamente desde TypeScript, hay que transpilarlo a JS y usarlo desde ahi (llamando a la funcion desde HTML por ejemplo)
    let xhttp : XMLHttpRequest =  new XMLHttpRequest();
    xhttp.open("POST", "traerAuto.php", true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    //Siempre usar el send aunque no se mande nada, para que se establezca la conexion
    xhttp.send();

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //console.log(xhttp.responseText);
            //Se parsea el string que retorna el PHP a un objeto de tipo JSONG
            let parseado:any = JSON.parse(xhttp.responseText);

            for(let coche of parseado)
            {
                console.log(coche.Marca + " " + coche.Precio);
            }


        }
    } 
}


