/*Ejercicio 8: Encuentra los múltiplos de un número
Consigna:
Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo 
for para resolverlo*/
const prompt = require('prompt-sync')();
// Solicitar al usuario que ingrese un número entero positivo

let numero = parseInt(prompt("Ingresa un número entero positivo: "));

// Verificar que el número sea positivo
if (numero > 0) {
    console.log("Los múltiplos de " + numero + " entre 1 y 100 son:");
    
    // for encuentra los múltiplos del número ingresado
    for (let i = 1; i <= 100; i++) {
        if (i % numero === 0) {
            console.log(i); // en pantalla se muestra el número
        }
    }
}
else {
    console.log("Por favor, ingresa un número entero positivo"); //el usuario ingreso un número negativo

}


