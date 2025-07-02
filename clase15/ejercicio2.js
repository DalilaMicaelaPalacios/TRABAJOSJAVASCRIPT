/*Ejercicio 2: Eliminar al último invitado 
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El 
último invitado no puede asistir. Elimina al último invitado y muestra quién 
fue eliminado y el estado actualizado de la lista. */

const prompt = require('prompt-sync')();

// Lista inicial de invitados
let invitados = ["Ana", "Juan", "Carlos", "Sofía"];
console.log("Lista inicial de invitados:", invitados);

// Eliminar al último invitado
let ultimoInvitado = invitados.pop();

// Mostrar quién fue eliminado
console.log("El último invitado eliminado fue:", ultimoInvitado);

// Mostrar el estado actualizado de la lista
console.log("Lista actualizada de invitados:", invitados);


