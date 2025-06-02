/*Ejercicio 4:  
Declara una variable nombre y pide al usuario que ingrese su nombre. 
Verifica si el nombre ingresado es igual a tu nombre*/

const prompt = require('prompt-sync')();


let nombre = prompt("Ingresa tu nombre: ");

if (nombre === "Dalila") {
    console.log("¡Ese es mi nombre también!");
} else {
    console.log("Tu nombre es diferente al mío.");
}