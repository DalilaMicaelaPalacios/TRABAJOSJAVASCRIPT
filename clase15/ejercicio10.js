/*Ejercicio 10: Reemplazar una palabra en una frase 
Tienes la frase "Me gusta el invierno". Cambia la palabra "invierno" por 
"verano" y muestra la frase actualizada*/

const prompt = require('prompt-sync')();

// Frase original
let frase = "Me gusta el invierno";

// Mostrar la frase original
console.log("Frase original:", frase);

// Reemplazar "invierno" por "verano"
let fraseActualizada = frase.replace("invierno", "verano");

// Mostrar la frase actualizada
console.log("Frase actualizada:", fraseActualizada);
