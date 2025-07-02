/*Ejercicio 4: Convertir una lista de palabras en una frase 
Tienes un array de palabras ["JavaScript", "es", "divertido"]. Une todas las 
palabras en una sola frase, separadas por un espacio, y muestra el 
resultado*/

const prompt = require('prompt-sync')();

// Array de palabras
let palabras = ["JavaScript", "es", "divertido"];

// Función flecha para unir las palabras en una frase
let unirPalabras = (array) => array.join(" ");

// Mostrar el resultado
console.log("La frase es:", unirPalabras(palabras));