/*Ejercicio 5: Manipulación de Arrays y Cadenas 
A partir del siguiente array de frases, escribe la función “procesarFrases” 
que realice las siguientes tareas: 
1. Convierta cada frase a minúsculas. Investigar el método 
“.toLowerCase()” para este punto. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
 /Global_Objects/String/toLowerCase 
2. Divida cada frase en palabras. 
3. Reemplace las palabras "malo" por "bueno". 
4. Combine las palabras de cada frase en una nueva cadena separada 
por espacios. 
5. Devuelva un nuevo array con las frases modificadas.

let frases = [
  "el clima es malo hoy",
  "este libro es muy malo",
  "el servicio aqui es malo"
];*/

const prompt = require('prompt-sync')();

let frases = [
  "el clima es MALO hoy",
  "este libro es muy MALO",
  "el servicio aqui es MALO"
];
console.log ("frases originales: ", frases);

function procesarFrases(frases) {
  let frasesProcesadas = frases.map(frase => {
    // 1. Convertir a minúsculas
    let minuscula = frase.toLowerCase();

    // 2. Dividir en palabras cada frase
    let palabras = minuscula.split(" ");

    // 3. Reemplazar "malo" por "bueno"
    let reemplazadas = palabras.map(palabra => 
      palabra === "malo" ? "bueno" : palabra
    );

    // 4. Unir palabras en una frase
    return reemplazadas.join(" ");
  });

  // 5. Retornar nuevo array
  return frasesProcesadas;
}


let resultado = procesarFrases(frases);

// 🖨 Mostrar resultado:
console.log("\nFrases modificadas:");
resultado.forEach(frase => console.log("- " + frase));