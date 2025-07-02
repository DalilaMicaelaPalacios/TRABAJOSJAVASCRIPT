/*Ejercicio 9: Última aparición de un modelo de auto 
En este ejercicio, trabajaremos con una lista de modelos de autos. 
Implementa una función llamada ultimaAparicionModeloAuto(modelo) que 
encuentre y muestre la última posición en la lista donde aparece el modelo 
específico de auto dado por modelo. 
Datos Iniciales: 
✔ Utiliza un array llamado modelosAutos que contiene varios modelos de 
autos, algunos repetidos para demostrar la funcionalidad. 
Funcionalidad: 
✔ Implementa la función ultimaAparicionModeloAuto(modelo), que toma 
modelo como parámetro (un string). 
✔ Debes recorrer el array de manera manual para encontrar la última 
aparición del modelo. 
✔ Si el modelo se encuentra en el array, la función debe imprimir por 
consola la posición (índice + 1) en la que aparece (considerando que la 
numeración es de 1 a N). 
✔ Si el modelo no está en el array, debe imprimir un mensaje indicando que 
el modelo no está presente.*/

const prompt = require('prompt-sync')(); 

// Array de modelos de autos
let modelosAutos = [
    "Toyota", "Ford", "Chevrolet", 
    "Fiat", "Volkswagen", "Ford Ranger", 
    "Chevrolet Tracker", "up!","Citroen"
];
// Función para encontrar la última aparición de un modelo de auto
function ultimaAparicionModeloAuto(modelo) {
    let ultimaPosicion = -1; // Inicializar con -1 para indicar que no se encontró
    for (let i = 0; i < modelosAutos.length; i++) {
        if (modelosAutos[i].toLowerCase() === modelo.toLowerCase()) {
            ultimaPosicion = i; // Actualizar la última posición encontrada
        }
    }
    if (ultimaPosicion !== -1) {
        console.log(`El modelo "${modelo}" aparece por última vez en la posición: ${ultimaPosicion + 1}`);
    } else {
        console.log(`El modelo "${modelo}" no está presente en la lista.`);
    }
}
// Solicitar al usuario que ingrese un modelo de auto
let modeloBuscado = prompt("Ingresa el modelo de auto que deseas buscar: ").trim();

// Llamar a la función con el modelo ingresado por el usuario
ultimaAparicionModeloAuto(modeloBuscado);
