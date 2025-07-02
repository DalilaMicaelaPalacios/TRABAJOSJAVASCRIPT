 /*Ejercicio 8: Lugar y números 
Para practicar la implementación del algoritmo de búsqueda binaria, 
vamos a empezar con un ejemplo simple. Quiero que se familiaricen con 
la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la 
solución. 
Dada la siguiente lista: 

let list =[1,2,3,4,5,6,7,8,9,10,11];

Utilizar el algoritmo de búsqueda binaria para responder los siguientes 
ítems: 
o ¿Cuál es la posición del número 1? 
o ¿Cuál es la posición del número 5? 
o ¿Cuál es la posición del número 6? 
o ¿Cuál es la posición del número 9? 
o ¿Cuál es la posición del número 11? 
Sabemos que responder estas preguntas es extremadamente fácil, ya 
que podemos leer el array, y determinar con un cálculo visual la posición 
de cada elemento, pero, la propuesta que les hago es que codeen un 
algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el 
6, y nos indique por consola la posición del mismo. 
El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir 
complejidad extra. */



const prompt = require('prompt-sync')();

// Lista ordenada de números
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Función de búsqueda binaria
function buscarNumero(lista, numero) {
  // Límites de búsqueda: inicio (izquierda) y fin (derecha)
  let izquierda = 0;
  let derecha = lista.length - 1;

  // Mientras la izquierda no pase a la derecha...
  while (izquierda <= derecha) {
    // Calcular la posición del medio
    let medio = Math.floor((izquierda + derecha) / 2);

    // Si el número del medio es el que buscamos, devolver su posición
    if (lista[medio] === numero) {
      return medio;
    }

    // Si el número del medio es menor al buscado, buscar en la mitad derecha
    if (lista[medio] < numero) {
      izquierda = medio + 1;
    } else {
      // Si el número del medio es mayor al buscado, buscar en la mitad izquierda
      derecha = medio - 1;
    }
  }

  // Si no se encontró, devolver -1
  return -1;
}

// Llamamos a la función para distintos números y mostramos el resultado
console.log("Posición del 1:", buscarNumero(list, 1));
console.log("Posición del 5:", buscarNumero(list, 5));
console.log("Posición del 6:", buscarNumero(list, 6));
console.log("Posición del 9:", buscarNumero(list, 9));
console.log("Posición del 11:", buscarNumero(list, 11));