/// <reference path="node_modules/@types/jquery/index.d.ts" /> 

$(document).ready(function(){
    let items = localStorage.getItem("token");
    let data = new FormData();
    data.append("token", items);
    $.ajax({
        type: 'POST',
        url: "index.php/validar",
        cache: false,
        processData: false,
        contentType: false,
        data: data,
        success: function(data)
        {
            console.log(data);
        },
        async: true
    })
 
    .fail(function()
    {
        console.log("aaaaaaa");
    });
})