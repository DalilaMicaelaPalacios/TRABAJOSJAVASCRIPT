/*Ejercicio 9:  
Define una constante PI con el valor de pi (3.14159). Pide al usuario 
que ingrese el radio de un círculo y calcula su área y perímetro 
utilizando la constante PI*/



const prompt = require('prompt-sync')();

// constante PI
const PI = 3.14159;

// que el usuario ingrese el radio
let radio = parseFloat(prompt("Ingresa el radio del círculo: "));

// Calcular y mostrar el área y el perímetro
console.log("Área:", PI * radio * radio);
console.log("Perímetro:", 2 * PI * radio);