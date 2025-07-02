/*Ejercicio 4: Calcular descuento por cantidad 
Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la 
cantidad.*/

const prompt = require('prompt-sync')(); 

// Solicitar datos al usuario
let cantidad = parseInt(prompt("Cantidad de productos:"));
let precio = parseFloat(prompt("Precio unitario:"));

// Función flecha para calcular el total con descuento
let calcularTotal = (cant, precioUnit) => {
  let subtotal = cant * precioUnit;
  let descuento = 0;

    // Aplicar descuento según la cantidad
  if (cant >= 10 && cant < 20) descuento = 0.1;      // 10%
  else if (cant >= 20 && cant < 50) descuento = 0.2;  // 20%
  else if (cant >= 50) descuento = 0.3;               // 30%

  return subtotal - (subtotal * descuento);
};

// Mostrar el total con descuento
console.log("Total a pagar con descuento: $" + calcularTotal(cantidad, precio).toFixed(2));

