 /*Encuentra la película más corta y analiza los títulos largos 
Supón que tienes una lista de películas con su duración en minutos: 
const movies = [ 
{ title: 'El Señor de los Anillos', duration: 200 }, 
{ title: 'Inception', duration: 148 }, 
{ title: 'Matrix', duration: 136 }, 
{ title: 'Toy Story', duration: 81 }, 
{ title: 'Coco', duration: 105 } 
]; 
Queremos: 
o Encontrar la película más corta en duración. 
o De las películas restantes, quedarnos con aquellas cuyo título tenga 
más de 10 caracteres. 
o Crear una lista de los títulos largos en minúsculas. 
o Imprime en la consola: 
o El título de la película más corta. 
o La lista de títulos largos en minúsculas. */


const prompt = require('prompt-sync')(); 

const movies = [ 
  { titulo: 'El Señor de los Anillos', duration: 200 }, 
  { titulo: 'Inception', duration: 148 }, 
  { titulo: 'Matrix', duration: 136 }, 
  { titulo: 'Toy Story', duration: 81 }, 
  { titulo: 'Coco', duration: 105 } 
];

console.log("Listado de Peliculas", movies);

// 1. Encontrar la película más corta en duración
let peliculaMasCorta = movies.reduce((min, pelicula) => {
  return pelicula.duration < min.duration ? pelicula : min;
}, movies[0]);

// 2. Filtrar películas restantes cuyo título tenga más de 10 caracteres
let peliculasRestantes = movies.filter(pelicula => pelicula.titulo !== peliculaMasCorta.titulo);
let titulosLargos = peliculasRestantes
  .filter(pelicula => pelicula.titulo.length > 10)
  .map(pelicula => pelicula.titulo.toLowerCase());

// Mostrar resultados
console.log("La película más corta en duración es:", peliculaMasCorta.titulo);
console.log("Títulos largos en minúsculas:", titulosLargos);