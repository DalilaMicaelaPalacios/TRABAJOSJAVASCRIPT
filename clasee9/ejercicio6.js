/*Ejercicio 6:  
Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
edad. Muestra un mensaje personalizado según el caso*/
 
const prompt = require('prompt-sync')();

// Pedir al usuario que coloque su edad actual
let edad = parseInt(prompt("Ingresa tu edad: "));

// constatar si es mayor o menor de edad

if (edad >= 18) {
    console.log("¡sos mayor de edad!");
} else {
    console.log("¡sos menor de edad!");
}