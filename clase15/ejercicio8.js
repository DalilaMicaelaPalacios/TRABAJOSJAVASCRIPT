/*Ejercicio 8: Extraer una parte de una frase 
Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte 
"gatos" utilizando el método adecuado.*/

const prompt = require('prompt-sync')();

// Frase original
let frase = "Los gatos son geniales";

// Mostrar la frase original
console.log("Frase original:", frase);

// Extraer la parte "gatos"
let parteExtraida = frase.substring(4, 9);// Extrae desde el índice 4 hasta el índice 9 (sin incluir el 9)

// Mostrar la parte extraída
console.log("Parte extraída:", parteExtraida);

