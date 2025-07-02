/*Ejercicio 1: Añadir personajes a una lista 
Tienes una lista de personajes de videojuegos ["Link", "Zelda"]. Agrega los 
personajes "Mario" y "Luigi" al final de la lista utilizando el método adecuado. 
Luego, muestra el array actualizado*/

const prompt = require('prompt-sync')(); 

// Lista inicial de personajes
let personajes = ["Link", "Zelda"];

// Agregar personajes predeterminados al final de la lista
personajes.push("Mario", "Luigi");

// Mostrar el array actualizado
console.log("Lista actualizada de personajes:", personajes);

// Solicitar al usuario un nuevo personaje para agregar
const nuevoPersonaje = prompt("Ingresa un nuevo personaje para agregar a la lista: ");

// Agregar el nuevo personaje al final de la lista
personajes.push(nuevoPersonaje);

// Mostrar el array actualizado nuevamente
console.log("Lista actualizada de personajes después de agregar:", personajes);

