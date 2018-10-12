<?php
//Esto en typescript obviamente

//Otra forma de pasar a JSON

return JSON.stringify({nombre:this.nombre , apellido:this.apellido})

//Eso en persona

//En ciudadano

toJSON()
{
	let obj = JSON.parse(super.toString());
	obj.pais = this.pais
	obj.dni = this.dni
	return obj;
}

<?