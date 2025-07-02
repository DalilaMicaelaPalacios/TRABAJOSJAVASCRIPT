/*Clasificación de palabras según su longitud 
Tienes una lista de palabras en una oración. Debes: 
1. Dividir la oración en palabras individuales. 
2. Clasificar las palabras en dos categorías: 
▪ Cortas (menos de 5 letras) 
▪ Largas (5 letras o más) 
3. Mostrar ambas listas de palabras clasificadas. 
4. La oración es: "JavaScript es un lenguaje poderoso y versátil". */

const prompt = require('prompt-sync')();

// Oración inicial
let oracion = "JavaScript es un lenguaje poderoso y versátil";
console.log("Oración inicial:", oracion);// Mostrar la oración inicial

// 1. Dividir la oración en palabras individuales
let palabras = oracion.split(" ");
console.log("Palabras individuales:", palabras);// Mostrar las palabras individuales

// 2. Clasificar las palabras en dos categorías
let cortas = [];
let largas = [];
palabras.forEach(palabra => {
    if (palabra.length < 5) {
        cortas.push(palabra);
    } else {
        largas.push(palabra);
    }
}
);

// 3. Mostrar ambas listas de palabras clasificadas
console.log("Palabras cortas (menos de 5 letras):", cortas);
console.log("Palabras largas (5 letras o más):", largas);

// 4. Mostrar ambas listas de palabras clasificadas en una sola cadena
console.log("Palabras cortas:", cortas.join(", ")); // Mostrar las palabras cortas en una sola cadena
console.log("Palabras largas:", largas.join(", ")); // Mostrar las palabras largas en una sola cadena