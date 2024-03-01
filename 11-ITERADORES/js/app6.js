


//uso del for each

const pendientes = [ 'Tarea' ,
    'Comer' ,
    'Ir con la Novia' ,
    'Estudiar Programacion']

// por funcion fecha omitimos los parentecis
console.log(`-----------------------------------------------`);

pendientes.forEach(  pendiente =>  console.log(pendiente))
// Para tener un numero del arreglo 
// EL usa el Index y el solo inyecta en cada interacion 
pendientes.forEach(  (pendiente, index) =>  {
    // el mas 1 solo es para que no muestre el 0
    console.log( `Pendiente # ${index+1} : ${pendiente}`);
})

console.log(`-----------------------------------------------`);

const carrito = [
    {nombre: `Semitas` , precio: 28},
    {nombre: `Cafe` , precio: 130},
    {nombre: `Leche` , precio: 30},

]


carrito.forEach( (producto , i) => {

    console.log( `Producto # ${i+1} : ${producto.nombre}   L ${producto.precio}`);
})



console.log(`-----------------------------------------------`);

// uso del Map
// map lo que hace es devolver un nuevo arreglo a partir de su respuesta
// nuevoCarrito es el nuevo arreglo y dontro se usa el return para que retorne lo que necestamos del arreglo 
const nuevoCarrito = carrito.map( (producto) => {

    return producto.nombre
})

console.log(nuevoCarrito);
console.log(`-----------------------------------------------`);
// DESTRUCTURACION CON EL MAP
// Para acceder a una key de nuestro arreglo usamos el {}
// pasamos el parametro de nombre de una sola vez y retornamos el mismo, se usa bastante en reac , y otros elementos que trabajan con js
const nuevoCarrito2 = carrito.map( ({nombre}) => {

    return nombre
})

console.log(nuevoCarrito2);

console.log(`-----------------------------------------------`);
// DESTRUCTURACION CON EL MAP
// pasamos el parametro de nombre de una sola vez y retornamos el mismo, se usa bastante en reac , y otros elementos que trabajan con js
const nuevoCarrito3 = carrito.map( ({nombre , precio}) => {

    return `${nombre} - ${precio}`
})

console.log(nuevoCarrito3);