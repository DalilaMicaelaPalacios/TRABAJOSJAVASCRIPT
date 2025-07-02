/*Ejercicio 6: Buscar la última posición de un elemento repetido 
Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última 
posición en la que aparece el número 7*/

const prompt = require('prompt-sync')();

// Lista de números
let numeros = [2, 5, 7, 2, 8, 7];

// Mostrar la lista de números
console.log("Lista de números:", numeros);

// Función flecha para buscar la última posición de un número
let buscarUltimaPosicion = (array, numero) => {
    return array.lastIndexOf(numero);
};

// Buscar la última posición del número 7
let ultimaPosicionSiete = buscarUltimaPosicion(numeros, 7);

// Mostrar el resultado
console.log("La última posición del número '7' es:", ultimaPosicionSiete);
