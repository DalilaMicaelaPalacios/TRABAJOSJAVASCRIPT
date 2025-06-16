/*Ejercicio 7: Calculadora simple
Consigna:
Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o 
división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa una operación
inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.*/

const prompt = require('prompt-sync')();
// Solicitar al usuario que ingrese dos números
let numero1 = parseFloat(prompt("Ingresa el primer número: "));
let numero2 = parseFloat(prompt("Ingresa el segundo número: "));
let operacion = prompt("Ingresa la operación a realizar (suma, resta, multiplicación, división): ").toLowerCase();  
let resultado;

// Usar switch para determinar la operación a realizar
switch (operacion) {
    case 'suma':
        resultado = numero1 + numero2;
        console.log("El resultado de la suma es: " + resultado);
        break;
    case 'resta':
        resultado = numero1 - numero2;
        console.log("El resultado de la resta es: " + resultado);
        break;
    case 'multiplicación':
        resultado = numero1 * numero2;
        console.log("El resultado de la multiplicación es: " + resultado);
        break;
    case 'división':
        resultado = numero1 / numero2;
        console.log("El resultado de la división es: " + resultado);
        break;

    default:
        console.log("Operación inválida. Por favor, ingresa una operación válida (suma, resta, multiplicación, división).");
}

