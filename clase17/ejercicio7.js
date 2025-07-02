/*Ejercicio 7: “La Floreria” 
Escribe una función "gestionarFloreria" que realice las siguientes tareas 
con una lista predefinida de nombres de flores: 

let entrada = "Rosa,Tulipán,Orquídea,Lirio";
1. Quite los espacios en blanco alrededor de cada flor. 
2. Verifique si existe la flor "Margarita" y, si está presente, agregue 
"Azucena" al final de la lista. 
3. Reemplace todas las flores "Orquídea" por "Clavel". 
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue 
"Girasol" al inicio de la lista. 
Devuelva una cadena de flores en orden alfabético separadas por puntos. */


function gestionarFloreria(entrada) {
  // 1. Separar y limpiar espacios
  let flores = entrada.split(",").map(flor => flor.trim());


  // 2. Verificar si existe "Margarita"
  if (flores.includes("Margarita")) {
    flores.push("Azucena");
  }

  // 3. Reemplazar "Orquídea" por "Clavel"
  flores = flores.map(flor => flor === "Orquídea" ? "Clavel" : flor);

  // 4. Encontrar índice de "Girasol"
  let indiceGirasol = flores.indexOf("Girasol");

  // Si no existe "Girasol", agregar al inicio
  if (indiceGirasol === -1) {
    flores.unshift("Girasol");
  }

  // 5. Ordenar alfabéticamente y unir con puntos
  let resultado = flores.sort().join(".");

  return resultado;
}

// por ejemplo
let entrada ="Rosa,Tulipán,Orquídea,Lirio";
console.log ("Las flores de la lista son:", entrada);

let resultado = gestionarFloreria(entrada);

console.log("Flores procesadas:", resultado);