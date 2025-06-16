/*Ejercicio 5: Concatenar nombres (función expresada) 
Crea una función expresada llamada concatenarNombres que reciba dos 
nombres (nombre y apellido) como parámetros y devuelva el nombre 
completo concatenado. */

const prompt = require('prompt-sync')();

// Función expresada que concatena nombres
const concatenarNombres = function(nombre, apellido) {
    return `${nombre} ${apellido}`;
};

// Ejemplo
const nombre = prompt("Ingrese su nombre: ");
const apellido = prompt("Ingrese su apellido: ");

// Llamar a la función concatenarNombres y mostrar el resultado
const nombreCompleto = concatenarNombres(nombre, apellido);

//se muestra el nombre completo concatenado
console.log(`El nombre completo es: ${nombreCompleto}`);

