/// <reference path="../node_modules/@types/jquery/index.d.ts" /> 
//Se puede hacer asociando la funcion al evento click del boton. Se hace cuando se termina de cargar el formulario
//Se añade la funcion al click, si esta vacio retorna falso, si estan los campos llenos retorna true. En el html
// el input tiene que ser de tipo submit

$(document).ready(function(){
    $('#login').bootstrapValidator({
        message: "Valor no validor",
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid : "glyphicon glyphicon-remove"
        },
        fields: {
            usuario: {
                validators: {
                    notEmpty: {
                        message: "Complete nombre usuario",
                    },
                    stringLenght: {
                        min: 3, 
                        message: "Mas de 3 caracteres"
                    },
                }
            }
        }
    }
    ),
);
