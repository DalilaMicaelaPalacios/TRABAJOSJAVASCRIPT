/*	Ejercicio 8: Rojo y Verde
Para este ejercicio vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. Rojo: 505
Verde 505
IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el método “push” en los Arrays. ¡Este método lo veremos en las próximas clases, 
pero si desean pueden investigarlo para resolver este desafío!*/


const prompt = require('prompt-sync')();

// Generar una matriz 10x10 con números del 1 al 100
let matriz = [];
let numero = 1;

// Llenar la matriz con números del 1 al 100, el for de afuera crea cada fila (10 veces) y el for de adentro llena cada fila con 10 números.
for (let i = 0; i < 10; i++) {
  let fila = [];

  for (let j = 0; j < 10; j++) {
    fila.push(numero);
    numero++;
  }
  matriz.push(fila);//añade la fila a la matriz
}

// a) Función para sumar la diagonal roja (↘)
function sumaDiagonalRoja(matriz) {
  let suma = 0;
  for (let i = 0; i < 10; i++) {
    suma += matriz[i][i];
  }
  return suma;
}

// b) Función para obtener los valores de la diagonal verde (↙)
function obtenerDiagonalVerde(matriz) {
  let valores = [];
  for (let i = 0; i < 10; i++) {
    valores.push(matriz[i][9 - i]);
  }
  return valores;
}

// Mostrar los resultados
console.log("🔴 Suma diagonal roja:", sumaDiagonalRoja(matriz));    
console.log("🟢 Valores diagonal verde:", obtenerDiagonalVerde(matriz)); 