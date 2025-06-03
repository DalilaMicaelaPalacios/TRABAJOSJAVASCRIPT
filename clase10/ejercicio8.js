/* Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que convierta una temperatura dada en grados Celsius a 
grados Fahrenheit. La fórmula de conversión es: 

Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
	Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi: 
let fahrenheit = celsius * 9 / 5 + 32; */

const prompt = require('prompt-sync')();

// Paso 1: Se pide al usuario que ingrese la temperatura en grados Celsius
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));


// Paso 2: con la fórmula investigada se pasa de grados celsius a grados Fahrenheit 
let fahrenheit = celsius * 9 / 5 + 32;


// Paso 3: se muestra el resultado en la consola
console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit}`);


