/*Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario ingresar un nombre y 
verifica si ese nombre se encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su desarrollo)*/

const prompt = require('prompt-sync')();

// Inicializar un array para almacenar los nombres  
let nombres = [];

// Solicitar al usuario que ingrese 5 nombres
for (let i = 0; i < 5; i++) {
    let nombre = prompt(`Ingresa el nombre ${i + 1}: `);
    nombres.push(nombre); // Agregar el nombre al array
}

// Solicitar al usuario que ingrese un nombre para buscar
let nombreBuscado = prompt("Ingresa un nombre para buscar: ");

// Verificar si el nombre ingresado se encuentra (if) o no (else) en el array
if (nombres.includes(nombreBuscado)) {

    console.log(`El nombre "${nombreBuscado}" se encuentra en el array.`);
}
else {
    console.log(`El nombre "${nombreBuscado}" no se encuentra en el array.`);
}
// Mostrar todos los nombres almacenados en el array
console.log("Los nombres ingresados son:", nombres.join(", "));





