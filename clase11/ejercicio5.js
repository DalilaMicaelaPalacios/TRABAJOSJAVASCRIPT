/*Ejercicio 5: Encuentra los números pares entre dos valores
Consigna:
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe mostrar todos los números 
pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los 
números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando 
que los valores son inválidos.*/

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese dos números enteros     
let inicio = parseInt(prompt("Ingresa el número de inicio: "));
let fin = parseInt(prompt("Ingresa el número de fin: "));   

// el nro inicial no puede ser mayor que el final
if (inicio > fin) {
    console.log("Los valores no son válidos, el número de inicio no puede ser mayor que el número de fin.");
}
else {
    console.log("Los números pares entre " + inicio + " y " + fin + " son:");
    
    // Usar un ciclo for para recorrer los números entre inicio y fin
    for (let i = inicio; i <= fin; i++) {
        // Verificar si el número es par
        if (i % 2 === 0) {
            console.log(i); // se muestra el número par
        }
    }
}
