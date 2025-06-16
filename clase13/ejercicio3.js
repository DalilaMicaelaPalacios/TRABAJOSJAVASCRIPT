/*Ejercicio 3: Mensaje global y local 
Declara una variable global llamada saludoGlobal con el valor "Hola desde el 
scope global". Luego, crea una función llamada mostrarMensaje que declare 
una variable local llamada saludoLocal con el valor "Hola desde el scope 
local" y que imprima ambos mensajes. */

const prompt = require('prompt-sync')();
// Variable global
let saludoGlobal = "Hola desde el scope global";

function mostrarMensaje() // Función que imprime los mensajes
    {
    // Variable local
    let saludoLocal = "Hola desde el scope local";
    console.log(saludoGlobal);
    console.log(saludoLocal);
}
// Llamar a la función para mostrar los mensajes
mostrarMensaje();   

// Aquí se puede acceder a la variable global, pero no a la local, se muestra el mensaje global fuera de la función
console.log(saludoGlobal); // Esto funciona 
 // console.log(saludoLocal); // Esto da un error, ya que saludoLocal es local a la función


