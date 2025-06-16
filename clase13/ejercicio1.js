/*Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista) 
Crea una función declarada llamada calcularAreaTriangulo que reciba dos 
parámetros: la base y la altura de un triángulo. La función debe devolver el 
área del triángulo. 
Pista: Usa la fórmula:
area= (base * altura) / 2;*/

prompt = require('prompt-sync')();

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}   

// Ejemplo de su uso
const base = parseFloat(prompt("Ingrese la base del triángulo: "));
const altura = parseFloat(prompt("Ingrese la altura del triángulo: "));
const area = calcularAreaTriangulo(base, altura);
console.log(`El área del triángulo es: ${area}`);