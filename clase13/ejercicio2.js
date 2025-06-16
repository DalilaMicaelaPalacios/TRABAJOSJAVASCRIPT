/*Ejercicio 2: Número mayor (función expresada) 
Crea una función expresada llamada encontrarMayor que reciba dos 
números como parámetros y devuelva el número mayor. */

const prompt = require('prompt-sync')();

const encontrarMayor = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
// Ejemplo 
const numero1 = parseFloat(prompt("Ingrese el primer número: "));
const numero2 = parseFloat(prompt("Ingrese el segundo número: "));

// Llamar a la función encontrarMayor y mostrar el resultado
const mayor = encontrarMayor(numero1, numero2);
console.log(`El número mayor es: ${mayor}`);        

