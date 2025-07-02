/*Ejercicio 5: Buscar la posición de un elemento 
Tienes una lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. Encuentra y 
muestra el índice del color "Azul" en la lista.*/

const prompt = require('prompt-sync')();

// Lista de colores
let colores = ["Rojo", "Verde", "Azul", "Amarillo"];

// Mostrar la lista de colores
console.log("Lista de colores:", colores);

// Función flecha para buscar el índice de un color
let buscarColor = (array, color) => array.indexOf(color);

// Buscar el índice del color "Azul"
let indiceAzul = buscarColor(colores, "Azul");

// Mostrar el resultado
console.log("El índice del color 'Azul' es:", indiceAzul);


