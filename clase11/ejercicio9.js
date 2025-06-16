/*Ejercicio 9: Cuenta regresiva para el despegue
Consigna:
Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. El programa debe contar desde 10 hasta 0 e imprimir 
"¡Despegue!" al final. Usa un ciclo for para realizar la cuenta regresiva.*/

const prompt = require('prompt-sync')();

//la cuenta regresiva se inicia desde 10
console.log("Cuenta regresiva para el despegue:");
for (let i = 10; i >= 0; i--) {
    console.log(i); // se muestra el número actual de la cuenta regresiva del cohete
}
console.log("¡Despegue!"); // fin de la cuenta regresiva

