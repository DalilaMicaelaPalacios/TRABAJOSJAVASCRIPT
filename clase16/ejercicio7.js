/*Ejercicio 7: Filtra nombres que empiecen con la letra 'A' 
Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos 
quedarnos solo con los nombres que comiencen con la letra 'A'. Por ejemplo, 
el nombre 'Luis' no debería estar en el resultado porque empieza con 'L'.*/

const prompt = require('prompt-sync')(); 

// Lista de nombres
let nombres = ['Ana', 'Luis', 'Andrea', 'María'];
console.log("Listado Inicial de nombres", nombres);

// Filtrar nombres que comienzan con 'A' con filter
let nombresConA = nombres.filter(nombre => nombre.startsWith('A'));

// Mostrar el resultado en consola
console.log("Nombres que comienzan con 'A':", nombresConA);