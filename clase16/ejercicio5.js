/*Ejercicio 5: Recorre una lista e imprime cada elemento 
Tienes una lista de frutas ['manzana', 'banana', 'cereza']. Tu tarea es recorrer la 
lista y mostrar el nombre de cada fruta en la consola, una por una. */

const prompt = require('prompt-sync')(); 

// Lista de frutas
let frutas = ['manzana', 'banana', 'cereza'];
console.log("lista de frutas", frutas);

// Recorre la lista e imprime cada fruta
for (let i = 0; i < frutas.length; i++) {
  console.log("fruta: ", frutas[i]
  );
}

