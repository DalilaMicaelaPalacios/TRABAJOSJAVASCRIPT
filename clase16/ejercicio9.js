/*Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras 
Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos 
saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 'sol' 
tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15. */


const prompt = require('prompt-sync')(); 

// Lista de palabras
let palabras = ['sol', 'luna', 'estrella'];
console.log ("Listado", palabras);

// Calcular la cantidad total de letras
let totalLetras = palabras.reduce((acumulador, palabra) => acumulador + palabra.length, 0);

// Mostrar el resultado en consola
console.log("La Cantidad total de letras es:", totalLetras);