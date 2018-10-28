/// <reference path="../node_modules/@types/jquery/index.d.ts" />

function Ajax() {

    let nombre: any = $('#nombre').val();
    let apellido: any = $('#apellido').val();
    let pais: any = $('#pais').val();

    let data = new FormData();
    data.append("nombre", nombre);
    data.append("apellido", apellido);
    data.append("pais", pais);
    /*
        //Este ajax envia una variable de tipo DataForm
        $.ajax({
            type: 'POST',
            url: "./php/reciboAjax.php",
            cache: false,
            processData: false,
            contentType: false,
            data: data,
            success: function (asd) {
    
                //El php devuelve un string en formato JSON, y aca se lo parsea a un objeto de JavaScript. Funciona OK
                let json = JSON.parse(asd);
                console.log(json);
            },
            async: true
        })
    
            .fail(function () {
                console.log("aaaaaaa");
            });
*/
    /*************************************************************************************************************************** */
    //Este AJAX envia un string en formato JSON

    

    let json_string: any = { "nombre": nombre, "apellido": apellido, "pais": pais };
    let envio: string = JSON.stringify(json_string);
    $.ajax({
        type: 'POST',
        url: "./php/reciboAjax.php",
        data: { data: envio },
        success: function (resp) {

            //Recibo un string que contiene un array de tipo JSON y lo parseo a un array en JS
            
            let array:any = JSON.parse(resp);
            console.log(resp + "\n");
            console.log(array);
        },
        async: true
    })

        .fail(function () {
            console.log("No envie AJAX");
        });
}


