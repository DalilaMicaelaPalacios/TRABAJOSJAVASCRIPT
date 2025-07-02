/*Ejercicio 9: Desafío extra! Orden, lugar y números 
Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso, 
aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo 
mismo del ejercicio anterior (buscar la posición de un número en un 
array), pero partiendo de esta lista: 
let list =["12,3,5,7,1,22,47,100"];

Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor 
a mayor, utilizando bubble sort. Luego, respondan las siguientes 
preguntas: 
o ¿Cuál es la posición del número 12? 
o ¿Cuál es la posición del número 5? 
o ¿Cuál es la posición del número 22? 
o ¿Cuál es la posición del número 100? */

const prompt = require('prompt-sync')();

// Lista original como cadena 
let list = ["12,3,5,7,1,22,47,100"];
console.log("Lista inicial",list);

// Paso 1: Convertir a array de números reales
let numeros = list[0].split(",").map(n => parseInt(n)); // [12, 3, 5, 7, 1, 22, 47, 100]

// Paso 2: Ordenar con Bubble Sort
function bubbleSort(arr) {
  let len = arr.length;

  // Recorremos el array varias veces
  for (let i = 0; i < len; i++) {
    // Comparamos cada par de elementos
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Intercambiamos si están desordenados
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Ordenamos el array
bubbleSort(numeros);

// Paso 3: Búsqueda binaria
function buscarNumero(lista, numero) {
  let izquierda = 0;
  let derecha = lista.length - 1;

  while (izquierda <= derecha) {
    let medio = Math.floor((izquierda + derecha) / 2);

    if (lista[medio] === numero) {
      return medio;
    }

    if (lista[medio] < numero) {
      izquierda = medio + 1;
    } else {
      derecha = medio - 1;
    }
  }

  return -1;
}

// Mostramos lista ordenada
console.log("Lista ordenada:", numeros);

// Preguntas
console.log("Posición del número 12:", buscarNumero(numeros, 12));
console.log("Posición del número 5:", buscarNumero(numeros, 5));
console.log("Posición del número 22:", buscarNumero(numeros, 22));
console.log("Posición del número 100:", buscarNumero(numeros, 100));