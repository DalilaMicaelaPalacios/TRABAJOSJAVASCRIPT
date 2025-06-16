/*Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba 
una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit. 
Fórmula: (°C * 9/5) + 32 = °F*/

const prompt = require('prompt-sync')();

// Función que convierte grados Celsius a Fahrenheit
const convertirCelsiusAFahrenheit = function(celsius) {
    return (celsius * 9/5) + 32;
};


// Ejemplo
const gradosCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

// Llamar a la función convertirCelsiusAFahrenheit y mostrar el resultado
const gradosFahrenheit = convertirCelsiusAFahrenheit(gradosCelsius);
console.log(`La temperatura en grados Fahrenheit es: ${gradosFahrenheit}`);

