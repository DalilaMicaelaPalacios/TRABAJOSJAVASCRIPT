/*Estas a cargo de organizar un desfile!.Tenes que decidir cuantos personajes van a participar y que emoji representa a tu equipo.
 usando un blucle for, mostra como desfilan uno auno por la pasarela*/

const prompt = require('prompt-sync')();
// Solicitar al usuario que ingrese la cantidad de personajes y el emoji
let cantidadPersonajes = parseInt(prompt("Ingrese la cantidad de personajes que van a participar: "));

let equipo = prompt("Ingrese el emoji que representa a su equipo (❤️ 😊👍): ");

console.log ("Bienvenidos al desfile de personajes!");
    
    // Usar un ciclo for para mostrar el desfile
    for (let i = 1; i <= cantidadPersonajes; i++) {
        console.log(i+ " " + equipo + " desfilando por la pasarela");
    }
