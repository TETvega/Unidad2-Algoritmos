


// ITERADORES

for(let i =0 ; i<10 ; i++ ){

    console.log(`Numero ${i}`);
}

for (let i = 0; i < 20; i++) {
    

    if (i % 2 ===0) {
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }
    
}

// {
//     numeroPlanilla: ``
//     nombreEmpresa: ``
//     empleados: {
//         nombre : ``,
//         apellido: ``,

//     }

//     // push operator
// }



const carrito = [
    {nombre: `Semitas` , precio: 28},
    {nombre: `Cafe` , precio: 130},
    {nombre: `Leche` , precio: 30},

]


// para hacer esto se aconseja bastante hacer uso del punto length
for(let i = 0 ; i< carrito.length; i++){


    console.log(carrito[i].nombre);
}