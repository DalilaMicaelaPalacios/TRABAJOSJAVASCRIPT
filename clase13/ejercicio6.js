/*Ejercicio 6: Convertir a minutos 
Crea una función declarada llamada convertirHorasAMinutos que reciba un 
número de horas como parámetro y devuelva el total en minutos. */

const prompt = require('prompt-sync')();

// Función que convierte horas a minutos
function convertirHorasAMinutos(horas) // Recibe un número de horas y devuelve el total en minutos
{
    return horas * 60;
}

// Ejemplo
const horas = parseInt(prompt("Ingrese el número de horas: "));// Solicitar al usuario el número de horas
const minutos = convertirHorasAMinutos(horas);// Llamar a la función convertirHorasAMinutos
console.log(`El total en minutos es: ${minutos}`);  // Mostrar el resultado