/*Ejercicio 10:  
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
semana correspondiente. Si el número no está dentro de ese rango, 
muestra un mensaje de error*/

const prompt = require('prompt-sync')();

//usuario ingresa un numero
let numero = parseInt(prompt("Ingresa un número del 1 al 7: "));

if (numero === 1) {
    console.log("Lunes");
} else if (numero === 2) {
    console.log("Martes");
} else if (numero === 3) {
    console.log("Miércoles");
} else if (numero === 4) {
    console.log("Jueves");
} else if (numero === 5) {
    console.log("Viernes");
} else if (numero === 6) {
    console.log("Sábado");
} else if (numero === 7) {
    console.log("Domingo");
} else {
    console.log("Error: Número fuera de rango.");
}

