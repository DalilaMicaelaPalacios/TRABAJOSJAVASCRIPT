/*Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera. 

a)	Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
b)	La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
c)	Por último, es necesario tener el total de gastos realizados en el mes.
✔	Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
// Respuesta:
No. Podemos recorrer:primero semanas (i), luego días (j) o primero días (j), luego semanas (i)

d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
✔	Posibles matrices para comprobar los resultados.
 	Día 1	Día 2	Día 3	Día 4	Día 5	Día 6	Día 7
Semana 1	 1135	 2500	 900	 1600	 2800	 3650	 1100
Semana 2	 1750	 1890	 1900	 1300	 898	 1750	 2800
Semana 3	 1700	 1150	 1690	 1900	 1770	 4500	 2560
Semana 4	 800	 1250	 1430	 2100	 1980	 1270	 950 */

const prompt = require('prompt-sync')();

// Definir la matriz de gastos (4 semanas x 7 días, dado en la consigna )
let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];
// Función para calcular el total de gastos en una semana

function totalGastosSemana(semana) {
    if (semana < 1 || semana > 4) // Validación de semana de la 1 a la 4
    {
        console.log("Semana inválida. Debe estar entre 1 y 4.");
        return 0;
    }
    let total = 0;// Inicializamos el total en 0
    // Recorremos los días de la semana especificada
    for (let dia = 0; dia < 7; dia++) {
        total += gastos[semana - 1][dia]; // Restamos 1 porque las semanas comienzan en 0
    }
    return total;
}
// Función para calcular el total de gastos en un día específico
function totalGastosDia(dia) // Validación del día de la semana
    {
    if (dia < 1 || dia > 7) // Validación de día de la semana de 1 a 7
        {
        console.log("Día inválido. Debe ser entre 1 y 7.");
        return 0;
    }
    let total = 0;
    for (let semana = 0; semana < 4; semana++)// Recorremos las semanas
        {
        total += gastos[semana][dia - 1]; // Restamos 1 porque los días comienzan en 0
    }
    return total;
}
// Función para calcular el total de gastos en el mes
function totalGastosMes() {
    let total = 0;
    for (let semana = 0; semana < 4; semana++)// Recorremos las semanas
    {
        // Recorremos los días de cada semana
        for (let dia = 0; dia < 7; dia++) {
            total += gastos[semana][dia];
        }
    }
    return total;
}   
// Función para encontrar la semana con más gastos y el día con más gastos
function semanaMasGastos ()// Función para encontrar la semana con más gastos
    {
    let maxSemana = 0;
    let maxGastos = 0;
    for (let semana = 0; semana < 4; semana++) // Recorremos las semanas
        {
        let totalSemana = totalGastosSemana(semana + 1) // Llamamos a la función para obtener el total de gastos de la semana;
        if (totalSemana > maxGastos) {
            maxGastos = totalSemana;
            maxSemana = semana + 1; // Guardamos la semana (1-4)
        }
    }
    return { semana: maxSemana, gastos: maxGastos };
}
// Función para encontrar el día con más gastos en la semana con más gastos
function diaMasGastos(semana) {
    let maxDia = 0;
    let maxGastos = 0;
    for (let dia = 0; dia < 7; dia++) {
        if (gastos[semana - 1][dia] > maxGastos) {
            maxGastos = gastos[semana - 1][dia];
            maxDia = dia + 1; // Guardamos el día (1-7)
        }
    }
    return { dia: maxDia, gastos: maxGastos };
}
// Solicitar al usuario la semana y el día para calcular los gastos
let semana = parseInt(prompt("Ingrese la semana (1-4) para calcular el total de gastos: "));
let totalSemana = totalGastosSemana(semana);
console.log(`Total de gastos en la semana ${semana}: $${totalSemana}`);
let dia = parseInt(prompt("Ingrese el día (1-7) para calcular el total de gastos: "));
let totalDia = totalGastosDia(dia);
console.log(`Total de gastos en el día ${dia}: $${totalDia}`);
let totalMes = totalGastosMes();
console.log(`Total de gastos en el mes: $${totalMes}`);


// Calcular la semana con más gastos y el día con más gastos en esa semana

let { semana: semanaMax, gastos: maxGastos } = semanaMasGastos();// Llamamos a la función para obtener la semana con más gastos
console.log(`La semana con más gastos es la semana ${semanaMax} con un total de $${maxGastos}.`);// Llamamos a la función para obtener el día con más gastos en esa semana
let { dia: diaMax, gastos: maxGastosDia } = diaMasGastos(semanaMax);// Llamamos a la función para obtener el día con más gastos en esa semana
console.log(`El día con más gastos en la semana ${semanaMax} es el día ${diaMax} con un total de $${maxGastosDia}.`);// Mostrar los resultados finales



