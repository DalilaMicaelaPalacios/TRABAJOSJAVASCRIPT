/* Hasta ahora te di los pasos detallados a seguir para desarrollar los ejercicios. Ahora es tu turno desglosar 
los ejercicios para conseguir esos pasos.

Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores. 
Muestra los valores antes y después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), 
eres libre de elegir el que desees, eso si, investiga sobre el que usaras*/

const prompt = require('prompt-sync')();

// primero realizo la declaración de las variables
let primerValor = prompt("Ingrese el primer valor: ");  // Usuario ingresa el primer valor
let segundoValor = prompt("Ingrese el segundo valor: "); // Usuario ingresa el segundo valor                                        

// luego declaro la variable temporal elegida que en este caso es temp, la cual realiza el intercambio de valores
let temp = primerValor;
primerValor = segundoValor;
segundoValor = temp;

// se muestra por consola los valores antes y despues del proceso de intercambio
console.log("Valores después del intercambio:");
console.log("Primer Valor: " + primerValor);
console.log("Segundo Valor: " + segundoValor);
