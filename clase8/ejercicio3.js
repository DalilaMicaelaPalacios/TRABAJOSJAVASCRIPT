/*Ejercicio 3: Suma de dos números ingresados por el usuario 
Enunciado: 
Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores 
aritméticos. Escribe un programa que: 
1. Pida al usuario que ingrese dos números. 
2. Sume ambos números. 
3. Muestre el resultado de la suma. 
Requisitos: 
• Utiliza prompt() para recibir los números. 
• Utiliza parseFloat() para convertir las entradas a números. 
• Almacena los resultados en variables adecuadas y muestra el resultado.*/


const prompt = require('prompt-sync')();

// se pide el ingreso de dos números cualquieras
let numero1 = parseFloat(prompt("Ingreso del primer número: "));
let numero2 = parseFloat(prompt("Ingreso del segundo número: "));

// Sumar los dos números
let suma = numero1 + numero2;

// se observa  el resultado de lo sumado
console.log("La suma de los dos números es: " + suma);