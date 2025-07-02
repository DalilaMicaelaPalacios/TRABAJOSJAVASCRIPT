/*Calcula el total de ventas de productos seleccionados 
Supón que tienes una lista de productos con sus precios en formato de 
objeto: 
const products = [ 
{ name: 'Laptop', price: 1000 }, 
{ name: 'Mouse', price: 25 }, 
{ name: 'Teclado', price: 50 }, 
{ name: 'Monitor', price: 200 }, 
{ name: 'Audífonos', price: 75 } 
]; 
Queremos: 
o Seleccionar los productos cuyo precio sea mayor o igual a 50. 
o Obtener solo los nombres de esos productos. 
o Calcular el precio total sumando los precios de los productos 
seleccionados. 
o Imprime el total y los nombres de los productos seleccionados en la 
consola.*/


const prompt = require('prompt-sync')(); 

// Lista de productos con sus precios
const products = [ 
  { nombre: 'Laptop', price: 1000 }, 
  { nombre: 'Mouse', price: 25 }, 
  { nombre: 'Teclado', price: 50 }, 
  { nombre: 'Monitor', price: 200 }, 
  { nombre: 'Audífonos', price: 75 } 
];
console.log ("Listado de productos", products);

// 1: Seleccionar productos con precio >= 50 con filter
let productosSeleccionados = products.filter(producto => producto.price >= 50);

// 2: Obtener solo los nombres de esos productos
let nombresSeleccionados = productosSeleccionados.map(producto => producto.nombre);

// Paso 3: Calcular el precio total sumando los precios
let totalPrecio = productosSeleccionados.reduce((total, producto) => total + producto.price, 0);

// Mostrar resultados en consola
console.log("Los Productos seleccionados con precios mayor o igual a 50, son: ", nombresSeleccionados.join(", "));
console.log("El Precio total de estos productos seleccionados es de:", totalPrecio);