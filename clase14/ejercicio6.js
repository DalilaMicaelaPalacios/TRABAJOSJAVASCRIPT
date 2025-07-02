/*Ejercicio 6: El deportista 
Para este ejercicio deberán definir un objeto literal “deportista”, con los 
siguientes atributos: nombre, energía, experiencia. 
Ademas queremos poder pedirle al deportista que entrene. Para esto, 
nuestro trabajo va a ser realizar una función “entrenarHoras.” 
La función entrenarHoras tiene las siguientes tres características: 
✔ Recibe por parámetro la cantidad de horas. 
✔ Resta a su energía (this.energia) la cantidad de horas x 5. 
✔ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2. 
Una vez definida la función, podemos ejecutar el código y ver cómo va 
variando la energía y experiencia del deportista por consola.*/

const prompt = require('prompt-sync')(); // Requiere el paquete prompt-sync


// Definición "deportista"
let deportista = {
    nombre: prompt("Ingresa el nombre del deportista: "),
    energia: 100, // Energía inicial
    experiencia: 0, // Experiencia inicial

    // Método para entrenar horas
    entrenarHoras: function(horas) {
        this.energia -= horas * 5; // Resta la energía
        this.experiencia += horas * 2; // Incrementa la experiencia
        console.log(`Después de entrenar ${horas} horas:`);
        console.log(`Energía restante: ${this.energia}`);
        console.log(`Experiencia acumulada: ${this.experiencia}`);
    }
};

// Solicitar al usuario la cantidad de horas a entrenar
let horasEntrenamiento = parseInt(prompt("¿Cuántas horas desea entrenar? "));

// se valida la entrada
if (isNaN(horasEntrenamiento) || horasEntrenamiento < 0) {
    console.log("Por favor, ingresa un número válido de horas.");
} else {
    // Llamar al método entrenarHoras del objeto deportista
    deportista.entrenarHoras(horasEntrenamiento);
}

// Mostrar el estado final del deportista
console.log(`Estado final del deportista ${deportista.nombre}:`);
console.log(`Energía: ${deportista.energia}`);
console.log(`Experiencia: ${deportista.experiencia}`);
