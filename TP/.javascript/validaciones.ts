function ValidarCamposVacios()
{
    let array_ids: string[] = ["Apellido","Nombre", "dni", "sexo","legajo", "sueldo"]
    let error_log : string ="";
    let flag:number = 0;
    for(let id of array_ids)
    {
        let validar : string = (<HTMLInputElement> document.getElementById(id)).value;
        if (validar == "")
        {
            error_log += id + ",";
            flag = 1;
        }
    }
    if(flag)
    {
        alert("Los siguientes campos se encuentran vacios: " + error_log);
    }  
}

function ValidarRangoNumerico(validar:number, max:number, min:Number):boolean
{
    if(validar >= min && validar <= max)
    {
        return true;
    }else
    {
        return false;
    }
}

function ValidarCombo(valor:string, correcto:string):boolean //Valida el Sexo
{
    if(valor === correcto)
    {
        return true;
    }else
    {
        return false;
    }
}

function ObtenerTurnoSeleccionado():string
{
    let array_ids: string[] = ["mañana", "tarde", "noche"];
    let flag:number = 0;
    let valor:string = "";
    for(let id of array_ids)
    {
        let validar : boolean = (<HTMLInputElement> document.getElementById(id)).checked;
        if(validar)
        {
            flag += 1;
            valor= (<HTMLInputElement> document.getElementById(id)).value;
        }
    }
    if(flag == 1)
    {
        return valor;
    }else
    {
        alert("Elegiste mal el turno soquete");
    }
    return "";
    
}

function ObtenerSueldoMaximo(turno:string):number
{
    switch(turno)
    {
        case "Mañana":
            return 20000;
            break;
        case "Tarde":
            return 18500;
            break;
        case "Noche":
            return 25000;
            break;
        default:
            return -1;
            break;
    }
}

function AdministrarValidaciones()
{
    ValidarCamposVacios(); // Valida vacios

    // Valida maximos y minimos
    let array_ids:string[] = ["dni", "legajo", "sueldo"];
    let array_min:number[] = [1000000, 100, 8000];
    let array_max:number[] = [55000000, 550, 25000];
    let error_log:string = "";
    let indice:number = 0;
    let valor :string= "";
    let numero: number = 0
    let validar:boolean = false;
    let flag:number = 0;
    for(let id of array_ids)
    {
        valor = (<HTMLInputElement> document.getElementById(id)).value;
        numero = parseInt(valor);
        validar = ValidarRangoNumerico(numero, array_max[indice], array_min[indice]);
        indice++;
        if(!validar)
        {
            error_log += id +",";
            flag = 1;
        }
    }
    if(flag == 1)
    {
        alert("Los siguientes rangos fallaron: " + error_log);
    }

    //Valida Sexo
    let opciones :HTMLOptionsCollection;
    let select: HTMLSelectElement = (<HTMLSelectElement> document.getElementById("sexo"))
    opciones =select.options;
    let sexo:string = opciones[opciones.selectedIndex].value;
    let checked:number = opciones.selectedIndex;
    switch(checked)
    {
        case 1:
            validar = ValidarCombo(sexo, "Mujer");
            break;
        case 2:
            validar = ValidarCombo(sexo, "Hombre");
            break;
        case 3:
            validar = ValidarCombo(sexo, "Indefinido");
            break;
    }

    if(!validar)
    {
        alert("Le pifiaste al sexo");
    }
}
