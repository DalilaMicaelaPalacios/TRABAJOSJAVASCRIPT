/* Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC). 
El IMC se calcula con la fórmula: 

IMC = peso / (altura * altura)

Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:
let imc = peso / (altura * altura); */


const prompt = require('prompt-sync')();

// Paso 1: el usuario ingresa su peso y altura
let peso = parseFloat(prompt("Ingrese su peso en kg: "));
let altura = parseFloat(prompt("Ingrese su altura en mt: "));

// Paso 2: Se calcula el IMC utilizando la fórmula dada en la consigna
let imc = peso / (altura * altura);

// Paso 3: Se muestra el IMC calculado en la consola
console.log(`Su Índice de Masa Corporal (IMC) es: ${imc}`);
