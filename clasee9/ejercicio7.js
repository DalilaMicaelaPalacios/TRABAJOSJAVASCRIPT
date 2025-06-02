/*Ejercicio 7:  
Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
kg a libras, Pista: 2.20462) */



const prompt = require('prompt-sync')();


// ingresar tu peso en kg 
let pesoKg = parseFloat(prompt("Ingresa tu peso en kilogramos: "));

//se muestra tu peso convertido en libras
console.log ("hola")
console.log("Tu peso en libras es:", pesoKg * 2.20462);
