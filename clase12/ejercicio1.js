/*	Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. Luego, 
imprime la suma de todos los números ingresados*/

const prompt = require('prompt-sync')();
let suma = 0; // Inicializar la variable suma en 0

while (true) {
    let numero = parseFloat(prompt("Ingresa un número (en caso que sea se busca salir): "));
    
    // Verificar si el número es negativo para salir del bucle
    if (numero < 0) {
        break;
    }
    suma += numero;
}

console.log("La suma de los números ingresados es:", suma);
