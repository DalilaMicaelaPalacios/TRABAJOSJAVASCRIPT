/*Ejercicio 10: Flores Favoritas 
Escribe un programa en JavaScript para contar cuántas veces el usuario 
menciona sus flores favoritas. Realiza las siguientes acciones: 
1. Inicializa un array vacío para almacenar las flores favoritas. 
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
agrega cada una al array manualmente (sin usar métodos como push). 
3. Pregunta al usuario por una flor específica y verifica si está entre sus 
favoritas. 
4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto 
debe hacerse manualmente). */

const prompt = require('prompt-sync')(); 

// Inicializar un array vacío para almacenar las flores favoritas
let floresFavoritas = [];

// Preguntar al usuario por sus tres flores favoritas
for (let i = 0; i < 3; i++) {
    let flor = prompt(`Ingresa tu flor favorita ${i + 1}: `);
    floresFavoritas[i] = flor; // Agregar cada flor al array manualmente
}

// Preguntar al usuario por una flor específica
let florEspecifica = prompt("Ingresa una flor específica para verificar si está entre tus favoritas: ");

// Inicializar un contador para contar cuántas flores favoritas se mencionaron
let contador = 0;

// Verificar si la flor específica está entre las favoritas
for (let i = 0; i < floresFavoritas.length; i++) {
    if (floresFavoritas[i].toLowerCase() === florEspecifica.toLowerCase()) {
        contador++; // Incrementar el contador si la flor está en las favoritas
    }
}
// Mostrar por consola cuántas veces se mencionó la flor específica
if (contador > 0) {
    console.log(`La flor "${florEspecifica}" se mencionó ${contador} vez/veces entre tus flores favoritas.`);
}
else {
    console.log(`La flor "${florEspecifica}" no está entre tus flores favoritas.`);
}
// Mostrar todas las flores favoritas
console.log("Tus flores favoritas son: " + floresFavoritas.join(", ")); // Mostrar todas las flores favoritas
