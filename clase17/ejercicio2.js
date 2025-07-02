/*Ejercicio 2: Análisis y Modificación de Cadenas de Texto 
Pide al usuario que ingrese una oración. Luego, escribe la función 
“procesarOracion” que haga lo siguiente: 
1. Quite los espacios en blanco al principio y al final. 
2. Divida la oración en palabras. 
3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar 
“/a/g” que indica que se debe buscar todas las apariciones del 
carácter 'a' en la cadena (la bandera g es para global, lo que 
significa que reemplazará todas las apariciones, no solo la primera). 
4. Encuentre la posición de la primera aparición de la palabra 
"javascript". De no aparecer retornar -1 
5. Convierta la oración a una cadena de palabras separadas por 
guiones. */

const prompt = require('prompt-sync')();

function procesarOracion(oracion) {
  // 1. Quitar espacios al inicio y al final
  oracion = oracion.trim();

  // 2. Dividir en palabras
  let palabras = oracion.split(" ");

  // 3. Reemplazar todas las 'a' por '@'
  let oracionReemplazada = oracion.replace(/a/g, '@');

  // 4. Buscar la posición de "javascript"
  let posicion = oracion.toLowerCase().indexOf("javascript");

  // 5. Unir las palabras con guiones
  let conGuiones = palabras.join("-");

  return {
    reemplazada: oracionReemplazada,
    posicion: posicion,
    conGuiones: conGuiones
  };
}

// Pedir la oración al usuario
let oracion = prompt("Escribe una oración: ");
let resultado = procesarOracion(oracion);

// Mostrar resultados
console.log("\nOración con 'a' → '@':", resultado.reemplazada);// se reemplaza la a por la @
console.log("Posición de 'javascript':", resultado.posicion);// se muestra posicion de javascript o -1 si no estuviera escrito
console.log("Oración con guiones:", resultado.conGuiones);// la frase se muestra con guiones