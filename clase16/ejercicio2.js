/*Ejercicio 2: Filtra los números pares de una lista 
Tienes una lista con varios números: [1, 2, 3, 4, 5, 6]. Queremos separar y 
guardar únicamente los números pares en una nueva lista. Los números 
pares son aquellos que se pueden dividir entre 2 sin dejar residuo. Una vez 
que hayas creado la nueva lista, muéstrala en la consola.*/

const prompt = require('prompt-sync')(); 

// Lista original de números
let numeros = [1, 2, 3, 4, 5, 6];

// Filtrar solo los números pares usando filter() y dividiendo por 2 sin llegar a residuos
let pares = numeros.filter(num => num % 2 === 0);

// Mostrar el resultado en consola
console.log("Lista Inicial", numeros);
console.log("Números pares de la Lista Inicial:", pares);