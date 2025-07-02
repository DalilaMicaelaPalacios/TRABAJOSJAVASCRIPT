/*Ejercicio 9: Eliminar espacios innecesarios 
Tienes la siguiente cadena con espacios adicionales  
"    Hola, mundo!    " 
Elimina los espacios al inicio y al final y muestra la cadena resultante.*/

const prompt = require('prompt-sync')();

// Cadena original
let cadena = "    Hola, mundo!    ";

// Mostrar la cadena original
console.log("Cadena original:", cadena);

// Eliminar espacios al inicio y al final
let cadenaSinEspacios = cadena.trim();

// Mostrar la cadena resultante
console.log("Cadena sin espacios al principio y al final:", cadenaSinEspacios);
