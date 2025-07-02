 /*Ejercicio 3: Gestión Compleja de Arrays 
A partir del siguiente array de productos, escriba la función 
‘gestionarProductos’ que realice las siguientes tareas: 
1. Añada un nuevo producto al array. 
2. Elimine el último producto del array. 
3. Encuentre el índice de un producto específico. En este punto 
pueden usar forEach o investigar el método “findIndex()” 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
 /Global_Objects/Array/findIndex 
4. Verifique si existe un producto con precio mayor a 50. Para esto 
investigar el método “.some()” 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Glo
 bal_Objects/Array/some 
5. Devuelva una cadena de nombres de productos separados por 
comas. */

const prompt = require('prompt-sync')();

let productos = [
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 45 },
  { nombre: "Monitor", precio: 120 },
  { nombre: "Cable HDMI", precio: 15 }
];

function gestionarProductos(productos) {
  // 1. Añadir nuevo producto con push
  productos.push({ nombre: "Parlantes", precio: 35 });

  // 2. Eliminar el último producto con pop
  productos.pop();

  // 3. Buscar índice de un producto específico (por ejemplo, "Teclado")
  let indice = productos.findIndex(p => p.nombre.toLowerCase() === "teclado");

  // 4. Verificar si hay algún producto con precio > 50
  let hayCaro = productos.some(p => p.precio > 50);

  // 5. Obtener cadena con nombres separados por comas
  let nombres = productos.map(p => p.nombre).join(", ");

  // Retornar todos los resultados
  return {
    productos: productos,
    indiceTeclado: indice,
    productoMayor50: hayCaro,
    nombresCadena: nombres
  };
}

// Llamar a la función y mostrar resultados
let resultado = gestionarProductos(productos);
console.log("Productos finales:", resultado.productos);
console.log("Índice de 'Teclado':", resultado.indiceTeclado);
console.log("¿Hay producto > 50?:", resultado.productoMayor50);
console.log("Nombres de productos:", resultado.nombresCadena);