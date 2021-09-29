let nombre = prompt("Ingresá tu nombre");
let apellido = prompt("Ahora tu apellido");
let edadIngresada = prompt("¿Cuál es tu edad?");
let respuesta = prompt("¿Qué temperatura hace en tu zona?");
let respuesta2 = prompt("¿Cuántos km hay de tu localidad a Rio de Janeiro?")


if((nombre !="") && ((nombre == "JUAN") || (nombre =="Juan"))){
    console.log("Hola Juan"); 
}else{
    console.log("Error: Ingresar nombre valido");
}

if ((respuesta <= 50) && ((respuesta >= 10))) {
    console.log("Podés aprovechar el día saliendo al parque o correr un rato");
} else {
    console.log("No hay nada para mostrar");}

 
if (respuesta2 >= 1000)    {
    alert("Te conviene viajar en avión");
} 