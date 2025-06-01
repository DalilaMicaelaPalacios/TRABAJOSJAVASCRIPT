/*Ejercicio 3: 
Declara dos variables booleanas condicion1 y condicion2. Pide al 
usuario que ingrese dos valores booleanos (true o false) y muestra el 
resultado de diversas combinaciones lógicas*/

const prompt = require('prompt-sync')();

// Pedir los valores boolean
let condicion1 = prompt("Ingresa el primer valor (t/f): ") === 'true';
let condicion2 = prompt("Ingresa el segundo valor (t/f): ") === 'true';

// Mostrando los resultados lógicos
console.log("AND:", condicion1 && condicion2);
console.log("OR:", condicion1 || condicion2);
