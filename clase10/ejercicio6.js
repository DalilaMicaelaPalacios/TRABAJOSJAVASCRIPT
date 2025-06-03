/* Ejercicio 6 - Comparaciones y Operadores Lógicos: 
Declara dos variables con valores numéricos. Utiliza operadores de comparación y lógicos para verificar si ambos 
números son mayores que 10 y muestra el resultado en la consola.

Pasos a seguir:
Declaración y Asignación de Variables:
1.	Declara dos variables y asígnales valores numéricos de tu elección.
Operadores de Comparación y Lógicos:

2.	Utiliza los operadores > (mayor que) y && (y lógico) para verificar si ambos números son mayores que 10.
Mostrar Resultado en la Consola:

3.	Utiliza console.log() para mostrar el resultado de la comparación.
Pista: Recuerda que para crear una variable utilizamos la palabra "let" seguida del nombre al cual vamos a hacer referencia.
Pista 2: Los operadores de comparación en JavaScript son >, <, >=, <=, ===, !==. El operador lógico "&&" (y lógico) 
se utiliza para combinar condiciones y todas deben cumplirse para que el resultado sea verdadero*/

const prompt = require('prompt-sync')();

// Declaración y Asignación de Variables
let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

// Operadores de Comparación y Lógicos
if (numero1 > 10 && numero2 > 10) {
    console.log("Ambos números son mayores que 10.");
} else {
    console.log("Uno o ambos números no son mayores que 10.");
}
// Mostrar Resultado en la Consola
console.log(`Resultado de la comparación: ${numero1 > 10 && numero2 > 10}`);        