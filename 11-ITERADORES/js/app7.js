const carrito = [
    {nombre: `Semitas` , precio: 28},
    {nombre: `Cafe` , precio: 130},
    {nombre: `Leche` , precio: 30},

]

// uso del for OF

//    iterador    of   objeto 
// va a recorrer cada elemento dentro de este objeto
for( let producto of carrito){
    // ahora los objetos estan por separador
    // devuelve casi que la posicion de cada arreglo
    console.log(producto);

}
console.log(`-----------------------------------------------`);
// en este ejemplo se aprecia de mejor manera
const pendientes = [ 'Tarea' ,
    'Comer' ,
    'Ir con la Novia' ,
    'Estudiar Programacion']
    console.log(`-----------------------------------------------`);
for( let pendiente of pendientes){
    // ahora los objetos estan por separador
    // devuelve casi que la posicion de cada arreglo
    console.log(pendiente);
    
}
console.log(`-----------------------------------------------`);
// con las {} devolvemos el coso en objeto sin embargo cuando es solo 1 cosa que se devuelve no es aconsejable pero este seria el ejemplo
for( let pendiente of pendientes){
    // ahora los objetos estan por separador
    // devuelve casi que la posicion de cada arreglo
    console.log({pendiente});
    
}