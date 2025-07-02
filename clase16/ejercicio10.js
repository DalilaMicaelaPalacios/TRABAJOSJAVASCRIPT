/*Ejercicio 10: Construye una frase a partir de una lista de palabras 
Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], queremos construir una 
frase completa concatenando cada palabra en orden, separadas por 
espacios. Al final, deberíamos obtener el texto 'Me gusta aprender 
JavaScript'. */

const prompt = require('prompt-sync')(); 

// Lista de palabras
let palabras = ['Me', 'gusta', 'aprender', 'JavaScript'];
console.log ("Listado de palabras sueltas", palabras);

// Unir las palabras en una sola frase con join
let frase = palabras.join(' ');

// Mostrar la frase en consola
console.log("La Frase completa es:", frase);