/*Ejercicio 9: Contar hasta un número 
Crea una función declarada llamada contarHasta que reciba un número y 
use un bucle para imprimir todos los números desde 1 hasta ese número.
*/

const prompt = require('prompt-sync')();

function contarHasta(numero) {
    for (let i = 1; i <= numero; i++)// Bucle que cuenta desde 1 hasta el número ingresado{
        console.log(i)// Muestra cada número en la consola;
    }
// Solicitar al usuario que ingrese un número
const numero = parseInt(prompt("Ingrese un número: "));// Convertir la entrada a un número entero
if (isNaN(numero) || numero <= 0) {// Verificar si el número es válido
    console.log("Por favor, ingresa un número positivo.");
}
else {
    contarHasta(numero);// Llamar a la función contarHasta con el número ingresado
}


