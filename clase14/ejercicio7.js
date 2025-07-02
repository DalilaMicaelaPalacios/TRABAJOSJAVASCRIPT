 /*Ejercicio 7: Libros 
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores: 
✔ título: una cadena con el título del libro. 
✔ autor: una cadena con el nombre del autor del libro. 
✔ anioPublicacion: un número con el año de publicación del libro. 
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
como parámetro y muestre por consola la información de cada libro en el 
formato especificado*/

const prompt = require('prompt-sync')(); 

// Definición de los objetos libro1 y libro2
let libro1 = {
    titulo: prompt("Ingresa el título del primer libro: "),
    autor: prompt("Ingresa el autor del primer libro: "),
    añoPublicacion: parseInt(prompt("Ingresa el año de publicación del primer libro: "))
};
let libro2 = {
    titulo: prompt("Ingresa el título del segundo libro: "),
    autor: prompt("Ingresa el autor del segundo libro: "),
    añoPublicacion: parseInt(prompt("Ingresa el año de publicación del segundo libro: "))
};

// Función para mostrar la información de los libros
function mostrarLibro(libros) {
    libros.forEach(libro => {
        console.log(`Título: ${libro.titulo}`);
        console.log(`Autor: ${libro.autor}`);
        console.log(`Año de Publicación: ${libro.añoPublicacion}`);
      
    });
}
// Llamar a la función mostrarLibro con un arreglo que contiene los dos libros
mostrarLibro([libro1, libro2]);


