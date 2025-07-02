/* Encuentra los nombres más cortos y transforma su formato 
Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 
'Pablo']. Queremos realizar varias tareas con esta lista: 
o Primero, filtra los nombres que tengan menos de 5 letras. 
o Luego, transforma los nombres resultantes para que estén en 
mayúsculas. 
o Finalmente, construye una frase que diga: "Los nombres 
seleccionados son: [nombres]", donde [nombres] sea la lista resultante 
unida por comas. 
Al final, imprime la frase en la consola.*/

const prompt = require('prompt-sync')(); 

// Lista original de nombres
let nombres = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];
console.log ("Listado Inicial de nombres", nombres);

// 1: Filtrar los nombres con menos de 5 letras con filter
let nombresCortos = nombres.filter(nombre => nombre.length < 5);
console.log ("Los nombres que se piden del listado son aquellos cortos: ", nombresCortos);

// 2: Transformar los nombres a mayúsculas
let nombresMayus = nombresCortos.map(nombre => nombre.toUpperCase());

// 3: Construir la frase
let frase = "Se pasan de minus a mayus los nombres seleccionados anteriormente: " + nombresMayus.join(', ');

// Mostrar la frase en consola
console.log(frase);