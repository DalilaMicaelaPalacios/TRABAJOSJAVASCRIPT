/*Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra 
Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. 
Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un 
sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!"*/

const prompt = require('prompt-sync')(); 

// Lista de palabras
let palabras = ['hola', 'mundo', 'javascript'];
console.log("Lista de palabras",palabras);

// Transformar cada palabra con prefijo y sufijo
let transformadas = palabras.map(palabra => `¡${palabra}!`);

// Mostrar el resultado en consola
console.log("Palabras transformadas con exclamación cada una:", transformadas);