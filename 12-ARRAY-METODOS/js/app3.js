



const planilla = [
    {nombre: 'Juan Prez' ,  sueldoBase: 14000},
    {nombre: 'Vicky Maldonado' ,  sueldoBase: 23000},
    {nombre: 'Danilo Issac Newton' ,  sueldoBase: 18000},
    {nombre: 'Carlos Ferrero' ,  sueldoBase: 9000},
    {nombre: 'David Lamborgini' ,  sueldoBase: 15600},
]

// forma facil de sumar los totales a pagar 

let totalPagar = 0;

planilla.forEach(empleado => totalPagar += empleado.sueldoBase)

console.log(`Total a Pagar de la Planilla: ${totalPagar}`);


// Otro metodo

// reduce
//                   variable que almacena | Opreador que vamos a iterar
let resultado = planilla.reduce( (total ,           empleado ) =>  
    total + empleado.sueldoBase, 0    ) // el que va despues de la , es el valor con el que va iniciar en este caso 0

    console.log(`Forma en Reduce ${resultado}`);