
/*Ejercicio 3: ¿Sabes contar?
Consigna:
Crea un programa que le pida al usuario un número positivo. El programa deberá contar desde el 1 hasta ese número e 
imprimir cada valor en la consola. Usa un ciclo for para realizar la tarea*/

const prompt = require('prompt-sync')();
// Solicitar al usuario que ingrese un número positivo
let numero = parseInt(prompt("Ingresa un número positivo: "));


// Verificar que el número sea positivo

if (numero > 0) {
    // Usar un ciclo for para contar desde 1 hasta el número ingresado
    for (let i = 1; i <= numero; i++) {
        console.log(i); // se muestra cada número en la pantalla 
    }
} else {
    console.log("Por favor, ingresa un número positivo");
}