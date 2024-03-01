
// USO DEL FOR IN
const pendientes = [ 
    'Tarea' ,
    'Comer' ,
    'Ir con la Novia' ,
    'Estudiar Programacion']



    const carrito = [
        {nombre: `Semitas` , precio: 28},
        {nombre: `Cafe` , precio: 130},
        {nombre: `Leche` , precio: 30},
    
    ]

    // let  in  array
    // basicamente devuelve el indice del arreglo
    // devuelve el lado izquierdo , las keys o indices
for ( let pendiente in pendientes){
    console.log(pendiente);
}
console.log(`-----------------------------------------------`);

for ( let producto in carrito){
    console.log(producto);
}

console.log(`-----------------------------------------------`);

// devuelve el nombre de las Keys
for ( let producto in carrito[0]){
    console.log(producto);
}