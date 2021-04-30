/* IMPORTANT 
Crear objetos: prototype
Heredar objetos: __proto__
*/

"use strict";

// Variables Declaradas
let variable = "string";
variable = variable.substr(0, 3)
console.log(variable)

// Modificar Propiedades
const obj1 = {};
Object.defineProperty(obj1, 'nombre', {value: "pedro", writeable: false});
console.log(obj1.nombre);

// Agregar Propiedades
const obj2 = { nombre: "alan" };
Object.preventExtensions(obj2)
console.log(obj2.nombre);

// No puede agregarse una propiedad a un string
const str = "Alan Cabot";
console.log(str);

// No existen multiples variables en una función
function hablar (texto) {
    console.log(texto);
}

hablar("pedro");

// Delete en objetos o variables
const obj3 = {
    nombre: "Luis"
}

delete obj3.nombre
console.log(obj3.nombre)

// Palabras reservadas no pueden ser usadas como variables
let await = "Juan";
console.log(await);

// Números Octañes con una "o" adelante y no existe With
console.log(0o25);