/*Ejercicio 4: Ciclo For - Array
Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla:

1.	Crear un array para almacenar las notas.
2.	Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
3.	Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
4.	Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
5.	Imprime en consola las notas ingresadas usando el array */

const prompt = require('prompt-sync')();

// array vacío para almacenar las notas
let notas = [];


// Solicitar al usuario cuántas notas desea ingresar
let cantidadNotas = parseInt(prompt("¿Cuántas notas deseas ingresar? "));

// Usar un bucle for para solicitar las notas
for (let i = 0; i < cantidadNotas; i++) {
    let nota = parseFloat(prompt(`Ingresa la nota del estudiante ${i + 1}: `));
    // Asignar la nota al array en la posición correcta

    notas[i] = nota;
}

// Imprimir las notas ingresadas
console.log("Las notas que se ingresaron son:");

// se usa un for para mostrar las notas
for (let i = 0; i < notas.length; i++) {
    console.log(`Estudiante ${i + 1}: ${notas[i]}`);
}       

