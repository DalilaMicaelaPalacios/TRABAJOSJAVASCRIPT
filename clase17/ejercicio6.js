/*Ejercicio 6: Autos y más autos… 
Escribe una función "gestionarAutos" que realice las siguientes tareas con 
una lista predefinida de marcas de autos: 

let entrada= "Toyota, Honda, Ford, Chevrolet, Nissan";

1. Quite los espacios en blanco alrededor de cada marca. 
2. Verifique si existe la marca "Tesla". 
3. Reemplace todas las marcas "Ford" por "BMW". 
4. Encuentre el índice de la marca "Chevrolet".  
5. Devuelva una cadena de marcas en orden alfabético separadas por 
puntos. Utilizar “.sort()” */

const prompt = require('prompt-sync')();

function gestionarAutos(entrada) {
  // 1. Separar por comas y quitar espacios
  let marcas = entrada.split(",").map(m => m.trim());

  // 2. Verificar si existe la marca "Tesla"
  let existeTesla = marcas.includes("Tesla");

  // 3. Reemplazar "Ford" por "BMW"
  marcas = marcas.map(m => m === "Ford" ? "BMW" : m);

  // 4. Índice de "Chevrolet"
  let indiceChevrolet = marcas.indexOf("Chevrolet");

  // 5. Ordenar y unir por puntos
  let marcasOrdenadas = marcas.sort().join(".");

  // Devolver resultados
  return {
    marcasProcesadas: marcas,
    contieneTesla: existeTesla,
    indiceChevrolet: indiceChevrolet,
    marcasOrdenadas: marcasOrdenadas
  };
}
let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";
console.log("Los autos de la lista son: ", entrada); // me muestra el listado inicial
let resultado = gestionarAutos(entrada);

// Mostrar resultados
console.log("¿Contiene 'Tesla'?:", resultado.contieneTesla);
console.log("Índice de 'Chevrolet':", resultado.indiceChevrolet);
console.log("Marcas ordenadas:", resultado.marcasOrdenadas);