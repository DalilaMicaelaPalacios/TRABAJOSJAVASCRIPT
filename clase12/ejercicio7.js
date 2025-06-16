/*	Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. Luego, escribe un algoritmo para sumar todos 
los números en la matriz*/

const prompt = require('prompt-sync')();

// Definir una matriz de 5x5 con números enteros y positivos
let matriz = [
    [1, 4, 2, 2, 10],
    [6, 8, 8, 3, 10],
    [110, 2, 1, 14, 26],
    [36, 47, 28, 19, 20],
    [22, 8, 6, 33, 25]
];

//  se inicializa la variable para la suma
let suma = 0;

// se recorre la matriz y asi se suman todos los números
for (let i = 0; i < matriz.length; i++) {
    for (let m = 0; m < matriz[i].length; m++) {
        suma += matriz[i][m];
    }
}

// se muestra el resultado en la consola
console.log("La suma de todos los números en la matriz es:", suma);
