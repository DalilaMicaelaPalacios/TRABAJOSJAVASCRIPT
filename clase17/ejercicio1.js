/*Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays 
Crea un objeto literal que represente un estudiante. El mismo debe tener 
las siguientes propiedades: nombre, edad y un array de notas (con 5 
notas).  
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo 
realizar las siguientes tareas: 
1. Agregar una nueva nota al array de notas. 
2. Eliminar la primera nota del array. 
3. Calcular el promedio de las notas restantes. 
4. Convertir el nombre del estudiante a mayúsculas. Para esto 
investiga sobre el método “toUpperCase()” 
https://www.w3schools.com/jsref/jsref_touppercase.asp 
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de 
las notas.*/

const prompt = require('prompt-sync')();

// se declara nombre, edad y u  array vacio de notas
let estudiante = {
  nombre: prompt("Nombre del estudiante: "),
  edad: parseInt(prompt("Edad del estudiante: ")),
  notas: []
};

// Pedir 5 notas
for (let i = 1; i <= 5; i++) {
  estudiante.notas.push(parseFloat(prompt(`Nota ${i}: `)));
}
 // usar una función
function procesarEstudiante(est) {
  est.notas.push(parseFloat(prompt("Nueva nota a agregar: "))); // Agregar nueva nota
  est.notas.shift(); // Eliminar la primera

  let suma = 0;
  for (let nota of est.notas) {
    suma += nota;
  }

  let promedio = suma / est.notas.length;// se saca el promedio
  let nombreMayus = est.nombre.toUpperCase();//coloca el nombre en mayuscula

  return {
    nombre: nombreMayus, 
    promedio: promedio
  };
}
// se muestra el nombre en mayuscula y el promedio 
let resultado = procesarEstudiante(estudiante);
console.log(`\nNombre: ${resultado.nombre}`);
console.log(`Promedio: ${resultado.promedio.toFixed(2)}`);