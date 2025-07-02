/*Ejercicio 1: Calcular el precio final con IVA 
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una 
función flecha para calcular el precio */

const prompt = require('prompt-sync')(); // Requiere el paquete

// Solicitar datos al usuario por pantalla
const precio = parseFloat(prompt("Ingresa el precio del producto: "));
const iva = parseFloat(prompt("Ingresa el porcentaje de IVA: "));

// Función flecha para calcular el precio con IVA
const calcularPrecioConIVA = (precio, iva) => precio + (precio * iva / 100);

// se muestra el resultado
const precioFinal = calcularPrecioConIVA(precio, iva);
console.log(`El precio final con IVA es: ${precioFinal.toFixed(2)}`);