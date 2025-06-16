/*	Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000
let matriz = [
    [10,3,2,1,4,7],
    [5,5,10,100,4],
    [5,125,10,1020,4],
    5,5,5097,100,4]
];*/


const prompt = require('prompt-sync')();

// Definir la matriz (dado en el enunciado)
let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];      
// inicializo la variable para la suma
let suma = 0;

// Se recorre la matriz for
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        let numero = matriz[i][j];
        // Verificar si el número es mayor o igual a 10 y menor que 1000
        if (numero >= 10 && numero < 1000) {
            suma += numero; // Sumar el número a la suma total
        }
    }
}
// Mostrar el resultado en consola
console.log(`La suma de los valores iguales o mayores a 10 y menores que 1000 es: ${suma}`);


