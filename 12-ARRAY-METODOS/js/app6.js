


// // every 
// se utiliza para determinar si todos los elementos de un array 
// cumplen con una condición especificada por una función. 
// Devuelve true si todos los elementos cumplen con la condición 
// y false si al menos uno no la cumple.

const planilla = [
    {nombre: 'Juan Prez' ,  sueldoBase: 14000},
    {nombre: 'Vicky Maldonado' ,  sueldoBase: 23000},
    {nombre: 'Danilo Issac Newton' ,  sueldoBase: 18000},
    {nombre: 'Carlos Ferrero' ,  sueldoBase: 9000},
    {nombre: 'David Lamborgini' ,  sueldoBase: 15600},
    {nombre: 'David Lamborgini' ,  sueldoBase: 20000},
]



let resultado 
//falso
resultado = planilla.every(  empleado => empleado.sueldoBase < 20000)
console.log(resultado);

// verdadero
resultado = planilla.every(  empleado => empleado.sueldoBase < 29000)
console.log(resultado);

