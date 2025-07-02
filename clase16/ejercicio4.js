/*Ejercicio 4: Calcula la suma total de los números 
Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de 
sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar, 
imprime el total en la consola. */

const prompt = require('prompt-sync')(); 

// Lista de números
let numeros = [1, 2, 3, 4];

// Calcular la suma total usando reduce()
let sumaTotal = numeros.reduce((acumulador, num) => acumulador + num, 0);

// Mostrar el resultado en consola
console.log("Suma total:", sumaTotal);