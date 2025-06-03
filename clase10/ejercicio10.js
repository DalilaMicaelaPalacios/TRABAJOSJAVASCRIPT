/* Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el precio final de un producto después de aplicar
 un descuento. Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:

let montoDescuento = precioOriginal * (porcentajeDescuento / 100); */

const prompt = require('prompt-sync')();

// Paso 1: Se pide al usuario que ingrese el precio original y el porcentaje de descuento
let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));

// Paso 2: Se calcula el monto del descuento
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

// Paso 3: Se calcula el precio final
let precioFinal = precioOriginal - montoDescuento;

// Paso 4: Se muestra el precio final en la consola
console.log(`El precio final del producto después de aplicar el descuento es: ${precioFinal}`);