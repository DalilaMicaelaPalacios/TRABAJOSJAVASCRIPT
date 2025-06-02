/*Ejercicio 2:  
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
valores numéricos de tu elección. Pide al usuario que ingrese un 
número y verifica si está dentro del rango definido por las constantes*/

const prompt = require('prompt-sync')();


// Definir constantes de rango
const RANGO_MINIMO = 9;
const RANGO_MAXIMO = 79;

// se pide al usuario que ingrese un número
const numero = parseFloat(prompt("Ingresa un número: "));

// ese número está dentro del rango?
if (isNaN(numero)) {
    console.log("Por favor, ingresa un número válido.");
} else if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log(`El número ${numero} está dentro del rango (${RANGO_MINIMO} - ${RANGO_MAXIMO}).`);
} else {
    console.log(`El número ${numero} está fuera del rango (${RANGO_MINIMO} - ${RANGO_MAXIMO}).`);
}