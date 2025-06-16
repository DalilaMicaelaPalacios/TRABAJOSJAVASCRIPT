/*Ejercicio 4: Número par o impar 
Crea una función declarada llamada esPar que reciba un número y devuelva 
"Es par" si el número es par o "Es impar" si el número es impar. Usa una 
variable local para guardar el resultado. */

const prompt = require('prompt-sync')();

function esPar(numero) // Función que determina si un número es par o impar
    {
    let resultado; // Variable local para guardar el resultado
    if (numero % 2 === 0)// Verificar si el número es par
        {
        resultado = "es par";
    } else {
        resultado = "es impar";
    }
    return resultado; // Devolver el resultado
}

// Ejemplo 
const numero = parseInt(prompt("Ingrese un número: "));// Solicitar un número al usuario

const resultado = esPar(numero);    // Llamar a la función esPar
console.log(`El número ${numero} ${resultado}.`); // Mostrar el resultado