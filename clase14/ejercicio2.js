/*Ejercicio 2: Calcular promedio de calificaciones 
Solicita al usuario cinco calificaciones y usa una función flecha para calcular 
el */


// promedio. Muestra el resultado por pantalla.
const prompt = require('prompt-sync')(); // Requiere el paquete prompt-sync

// Pedir al usuario 5 calificaciones
let a = parseFloat(prompt("Calificación 1:"));
let b = parseFloat(prompt("Calificación 2:"));
let c = parseFloat(prompt("Calificación 3:"));
let d = parseFloat(prompt("Calificación 4:"));
let e = parseFloat(prompt("Calificación 5:"));

// Función flecha para calcular el promedio de las calificaciones
let promedio = (x, y, z, w, v) => (x + y + z + w + v) / 5;

// Mostrar el resultado
console.log("El promedio es: " + promedio(a, b, c, d, e));