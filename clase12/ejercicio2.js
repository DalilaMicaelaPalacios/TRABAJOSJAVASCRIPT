
/*	Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, debe volver 
a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234"*/


const prompt = require('prompt-sync')();

// variables, definir la contraseña correcta
let contraseñaCorrecta = "1234";
let contraseñaquequeseingresa;

//te deja ingresar la contraseña hasta que sea correcta
do {
    contraseñaquequeseingresa = prompt("Ingresa la contraseña: ");
} while (contraseñaquequeseingresa!== contraseñaCorrecta);

// Si la contraseña esta ok, se muestra el mensaje
console.log("La contraseña es correcta");
