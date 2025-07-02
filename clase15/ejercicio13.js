
/*Simulador de una cola de atención al cliente 
Simula una cola de atención al cliente donde los clientes llegan y son 
atendidos uno por uno. Tienes una lista inicial de clientes en espera y un 
bucle que los atiende de a uno. Realiza lo siguiente: 
1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por 
consola. 
2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un 
mensaje especial. 
3. Al final, muestra cuántos clientes fueron atendidos en total. 
Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"] */


const prompt = require('prompt-sync')();

// Lista inicial de clientes
let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
console.log("clientes en espera", clientes)

// Contador de clientes atendidos
let atendidos = 0;

// Bucle para atender a cada cliente
while (clientes.length > 0) {
  let cliente = clientes.shift(); // Elimina y obtiene el primero de la cola
  atendidos++;

  if (cliente === "VIP") {
    console.log(`🔔 Atendiendo a cliente VIP con prioridad especial.`);
  } else {
    console.log(`Atendiendo a: ${cliente}`);
  }
}

// Mostrar total de clientes atendidos
console.log(`Total de clientes atendidos: ${atendidos}`);
