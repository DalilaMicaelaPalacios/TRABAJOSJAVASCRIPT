/*Ejercicio 4: Transformación y Análisis de Cadenas 
Pide al usuario que ingrese una lista de nombres separados por comas. 
Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, 
“Pablo” y “Pedro”. 
Luego, escribe la función “transformarYAnalizarNombres”que realice las 
siguientes tareas: 
1. Quite los espacios en blanco alrededor de cada nombre. 
2. Verifique si existe el nombre "Juan". 
3. Reemplace todos los nombres "María" por "Ana". 
4. Encuentre el índice del nombre "Pedro". 
5. Devuelva una cadena de nombres en orden alfabético separados 
por puntos. Investigar el método “.sort()” 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
 /Global_Objects/Array/sort */

 const prompt = require('prompt-sync')();

function transformarYAnalizarNombres(input) {
  // 1. Separar por comas y quitar espacios a cada nombre
  let nombres = input.split(",").map(nombre => nombre.trim());

  // 2. Verificar si existe "Juan"
  let existeJuan = nombres.includes("Juan");

  // 3. Reemplazar "Maria" por "Ana" (sin tilde para coincidencia simple)
  nombres = nombres.map(nombre => nombre === "Maria" ? "Ana" : nombre);

  // 4. Encontrar índice de "Pedro"
  let indicePedro = nombres.indexOf("Pedro");

  // 5. Ordenar alfabéticamente y unir con puntos
  let nombresOrdenados = nombres.sort().join(".");

  // Devolver resultados
  return {
    nombresFinales: nombres,
    contieneJuan: existeJuan,
    indicePedro: indicePedro,
    cadenaOrdenada: nombresOrdenados
  };
}

// 📝 Entrada del usuario (ejemplo: Julian, Maria, Malena, Andrea, Pablo, Pedro)
let entrada = prompt("Ingresa los nombres separados por comas: ");
let resultado = transformarYAnalizarNombres(entrada);

// ✅ Mostrar resultados
console.log("\n--- Resultados ---");
console.log("¿Contiene 'Juan'?:", resultado.contieneJuan);
console.log("Índice de 'Pedro':", resultado.indicePedro);
console.log("Nombres ordenados:", resultado.cadenaOrdenada);