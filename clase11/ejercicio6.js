/*Ejercicio 6: La tabla de multiplicar
Consigna:
Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. 
Usa un ciclo for.*/
const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese un númeroclear
let numero = parseInt(prompt("Ingrese un número: "));

// Imprimir la tabla de multiplicar

console.log("Tabla de multiplicar del " + numero + ":");
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}

