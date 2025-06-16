/*Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o impar. Muestra un mensaje 
explicativo indicando qué significa cada caso*/

const prompt = require('prompt-sync')();

// Solicitar un número al usuario
let numero = parseInt(prompt("Ingrese un número: "));

// Determinar si el número es par o impar
if (numero % 2 === 0) {
    console.log("El número " + numero + " es par.");
} else {
    console.log("El número " + numero + " es impar.");
}
// Explicación según sea par o impar
if (numero % 2 === 0) {
    console.log("Un número es par si es divisible por 2 sin dejar resto");
}   else {
    console.log("Un número es impar si no es divisible por 2, es decir, deja un resto de 1.");
}
