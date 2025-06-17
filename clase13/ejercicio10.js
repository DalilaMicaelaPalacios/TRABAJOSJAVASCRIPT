/*Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
Crea una función expresada llamada calcularFactorial que reciba un número 
y devuelva su factorial. 
Fórmula del factorial: n! = n * (n - 1) * (n - 2) * ... * 1 */

const prompt = require('prompt-sync')();

// Función que calcula el factorial de un número
const calcularFactorial = function(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";// El factorial no está definido para números negativos
    }
    if (numero === 0 || numero === 1) // El factorial de 0 y 1 es 1
    {
        return 1; // El factorial de 0 y 1 es 1
    }
    let factorial = 1 // Inicializar el factorial en 1;
    // Bucle para calcular el factorial
    for (let i = 2; i <= numero; i++) {
        factorial *= i; // Multiplica el número por todos los enteros menores que él
    }
    return factorial;
};

// Solicitar al usuario que ingrese un número
const numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));
if (isNaN(numero) || numero < 0) // Verificar si el número es válido
    {
    console.log("Por favor, ingresa un número entero no negativo.");
}

else {
    const resultado = calcularFactorial(numero); // Llamar a la función calcularFactorial
    console.log(`El factorial de ${numero} es: ${resultado}`); // Mostrar el resultado
}
