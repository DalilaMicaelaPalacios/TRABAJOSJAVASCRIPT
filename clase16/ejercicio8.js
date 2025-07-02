/*Ejercicio 8: Busca un nombre específico 
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber 
si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo. */

const prompt = require('prompt-sync')(); 

// Lista de nombres
let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];
console.log ("Lista Inicial de Nombres", nombres);

// Buscar el nombre 'Lujan' con find
let encontrado = nombres.find(nombre => nombre === 'Lujan');


// Mostrar el resultado en consola
if (encontrado) {
  console.log("Nombre encontrado con éxito:", encontrado);
} else {
  console.log("Nombre no encontrado");
}