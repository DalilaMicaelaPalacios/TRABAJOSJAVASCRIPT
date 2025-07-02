/*Ejercicio 1: Crea un nuevo array con los cuadrados de los números 
Imagina que tienes una lista de números, como [2, 4, 6, 8]. Tu objetivo es 
crear una nueva lista donde cada número de la lista original se haya 
transformado en su cuadrado. Por ejemplo, el número 2 debería convertirse 
en 4, el número 4 en 16, y así sucesivamente. Al final, imprime la nueva lista*/


const prompt = require('prompt-sync')(); 

// Lista original de números
let numeros = [2, 4, 6, 8];

// Crear una nueva lista con los cuadrados usando map()
let cuadrados = numeros.map(num => num * num);

// Mostrar el resultado por consola
console.log("Números originales:", numeros);
console.log("Cuadrados de los números:", cuadrados);