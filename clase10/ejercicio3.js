/*	Ejercicio 3 – Constantes / Validación de Edad: 
Más adelante vamos a querer validar que nuestros encuestados sean de 18 años de edad mínima y 99 años
 de edad máxima. 
Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos constantes 
(asignándoles los valores numéricos 18 y 99 respectivamente). Por último, Deberás pedirle al usuario 
que ingrese su edad para validarla usando parseInt.

Desglosando el ejercicio deberás:

1.	Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les 
asignarás los valores numéricos 18 y 99 respectivamente.
2.	Pide al usuario que ingrese su edad.
3.	Usa “parseInt” para convertir la entrada del usuario a un número entero.
4.	Valida si la edad ingresada está dentro del rango permitido y muestra un mensaje adecuado.

Pista: Las constantes se declaran con la palabra reservada const y es buena práctica que sus nombres 
sean declarados siempre con letras mayúsculas. Utiliza parseInt para convertir la entrada del 
usuario a un número entero*/

 const prompt = require('prompt-sync')();

 // Paso 1: se define las constantes para la edad mínima y máxima
const EDAD_MINIMA=18;
const EDAD_MAXIMA=99;

let edad=prompt("Ingrese su edad: ");//usuario ingresa su edad

// Paso 2: se valida o invalida la edad que ingreso el usuario con un if
edad=parseInt(edad);
if(edad>=EDAD_MINIMA && edad<=EDAD_MAXIMA){
    console.log("Edad válida.");
}else{
    console.log("Edad no válida.");
}
