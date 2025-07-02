/*Ejercicio 3: Clasificación de edades 
Solicita al usuario una edad y usa una función flecha para clasificarla en 
niño, adolescente, adulto o adulto mayor*/


const prompt = require('prompt-sync')(); // 

// Pedir una edad al usuario
let edad = parseInt(prompt("Ingresa tu edad:"));

// Función flecha para clasificar la edad
let clasificarEdad = (edad) => {
  if (edad >= 0 && edad <= 13) return "Niño";
  else if (edad >= 14 && edad <= 17) return "Adolescente";
  else if (edad >= 18 && edad <= 59) return "Adulto";
  else if (edad >= 60) return "Adulto mayor";
  else return "Edad inválida";
};

// Mostrar la clasificación
console.log("Estás clasificado como: " + clasificarEdad(edad));
