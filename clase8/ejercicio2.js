/*Ejercicio 2: Verificar si un número es positivo, negativo o cero 
Enunciado: 
En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un 
programa en JavaScript que: 
1. Pida al usuario que ingrese un número. 
2. Verifique si el número es positivo, negativo o igual a cero. 
3. Muestre un mensaje indicando cuál es el caso. 
Requisitos: 
• Utiliza una estructura de control de flujo (if, else if, else) para hacer las 
verificaciones. 
• Usa parseFloat() para convertir la entrada del usuario a un número*/

const prompt = require('prompt-sync')();

// el usuario ingresa un número
let numero = parseFloat(prompt("Ingresa un número: "));

// el número ingresado es positivo, negativo o cero

if (numero > 0) {
    console.log("Tu número es positivo.");
} else if (numero < 0) {
    console.log("Tu número es negativo.");
} else {
    console.log("Tu número es cero.");
}