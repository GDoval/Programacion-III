/// <reference path="libs/jquery/index.d.ts" />

$(document).ready(function(){
$("#btnAceptar").on("click",EjemploBootstrap);
});

function EjemploBootstrap()
{

    if($("#btnAceptar").hasClass("btn-info"))
    {
        $("#btnAceptar").removeClass("btn-info");
        $("#btnAceptar").addClass("btn-success");

    }
    else if($("#btnAceptar").hasClass("btn-success"))
    {
        $("#btnAceptar").removeClass("btn-success");
        $("#btnAceptar").addClass("btn-warning");
    }
    else if($("#btnAceptar").hasClass("btn-warning"))
    {
        $("#btnAceptar").removeClass("btn-warning");
        $("#btnAceptar").addClass("btn-danger");
    }
    else if($("#btnAceptar").hasClass("btn-danger"))
    {
        $("#btnAceptar").removeClass("btn-danger");
        $("#btnAceptar").addClass("btn-default");
    }
    else if($("#btnAceptar").hasClass("btn-default"))
    {
        $("#btnAceptar").removeClass("btn-default");
        $("#btnAceptar").addClass("btn-info");
    }
    //var cont:number=0;
    //let boton=(<HTMLButtonElement>document.getElementById("btnAceptar"));
    //boton.cla
    //if()
}