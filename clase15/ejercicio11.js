/*Gestión de inventario de una tienda 
Eres encargado de una tienda y tienes un inventario inicial de productos. La 
lista de productos es: 
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"]; 
Debes realizar las siguientes acciones: 
1. Agregar un nuevo producto "Impresora" al inventario usando el 
método adecuado. 
2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje 
adecuado. 
3. Eliminar el primer producto del inventario. 
4. Mostrar la lista actualizada de productos en una sola cadena, 
separados por comas*/

const prompt = require('prompt-sync')();

// Inventario inicial de productos
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
console.log("Inventario inicial de productos:", inventario);// Mostrar el inventario inicial

// 1. Agregar un nuevo producto "Impresora" al inventario
inventario.push("Impresora");
console.log("Producto 'Impresora' agregado al inventario.");// Mostrar mensaje de confirmación
console.log("Lista actualizada de productos:", inventario.join(", "));// Mostrar la lista actualizada de productos

// 2. Comprobar si "Tablet" está en el inventario
if (inventario.includes("Tablet")) {
    console.log("El producto 'Tablet' está en el inventario.");
}
else {
    console.log("El producto 'Tablet' no está en el inventario.");
}

// 3. Eliminar el primer producto del inventario
let primerProducto = inventario.shift();
console.log(`El primer producto '${primerProducto}' ha sido eliminado del inventario.`);

// 4. Mostrar la lista actualizada de productos
console.log("Lista actualizada de productos:", inventario.join(", "));

