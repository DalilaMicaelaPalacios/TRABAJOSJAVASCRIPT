 /*Ejercicio 7: Verificar si una lista contiene un elemento 
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si 
"Sushi" está en la lista y muestra un mensaje que confirme si está o no*/

const prompt = require('prompt-sync')();

// Lista de comidas
let comidas = ["Pizza", "Hamburguesa", "Tacos"];

// Mostrar la lista de comidas
console.log("Lista de comidas:", comidas);

// Función flecha para verificar si un elemento está en la lista
let verificarComida = (array, comida) => {
    return array.includes(comida); // Devuelve true si la comida está en la lista, false si no
};

// Verificar si "Sushi" está en la lista
let comidaBuscada = "Sushi";
let estaEnLaLista = verificarComida(comidas, comidaBuscada);

// Mostrar el resultado
if (estaEnLaLista) {
    console.log(`La comida '${comidaBuscada}' está en la lista.`);// Si está en la lista, muestra un mensaje confirmando su presencia
} else {
    console.log(`La comida '${comidaBuscada}' no está en la lista.`);// Si no está en la lista, muestra un mensaje indicando que no está presente
}

