/*Ejercicio 3: Agregar y eliminar a la fila de mascotas 
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", 
"Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el 
"Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y 
muéstrala. Finalmente, muestra la lista actualizada. */


const prompt = require('prompt-sync')();

// Lista inicial de mascotas
let mascotas = ["Perro", "Gato", "Conejo"];
console.log("Fila inicial de mascotas:", mascotas);

// Agregar el Hámster al inicio de la lista para que sea atendido urgente
mascotas.unshift("Hámster");
console.log("El hamster debe ser atendido como urgencia:", mascotas);

// Atender a la primera mascota de la fila
let mascotaAtendida = mascotas.shift();
console.log("Mascota atendida como urgencia:", mascotaAtendida);

// Mostrar la lista actualizada
console.log("Lista actualizada de mascotas:", mascotas);