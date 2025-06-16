/*Ejercicio 10: Adivina el número
Consigna:
Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. 
Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no acierta después de los 
3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio. */


const prompt = require('prompt-sync')();
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numerocorrecto = false;

for (let i = 1; i <= 3; i++) {
  const respuesta = prompt("Intento 1 de 3: Adivina el número del 1 al 10: ");
  const adivinanza = parseInt(respuesta);

  if (adivinanza === numeroSecreto) {
    console.log("🎉 ¡Felicidades! Adivinaste el número.");
    numerocorrecto = true;
    break; // Salir del bucle si acertó

  } else {
    console.log("❌ Incorrecto.");
  }
}

// Si no acertó, mostrar el número secreto
if (!numerocorrecto) {
  console.log(`😞 No adivinaste. El número secreto era: ${numeroSecreto}`);
}