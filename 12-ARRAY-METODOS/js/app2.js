const planilla = [
    {nombre: 'Juan Prez' ,  sueldoBase: 14000},
    {nombre: 'Vicky Maldonado' ,  sueldoBase: 23000},
    {nombre: 'Danilo Issac Newton' ,  sueldoBase: 18000},
    {nombre: 'Carlos Ferrero' ,  sueldoBase: 9000},
    {nombre: 'David Lamborgini' ,  sueldoBase: 15600},
]

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    1
]

// manera que conocemos para saber el index del una posicion 
const nombreMes = 'Agosto'

meses.forEach((mes, index) =>{
    if( mes===nombreMes ){
        console.log(`${nombreMes} tiene el indice ${index}`);
    }
} )

// Manera de saber el indice mediante el .findIndex
const indice = meses.findIndex( mes => mes === nombreMes)

console.log(indice);

// devuelve el indice primario 
//
const indice2 = planilla.findIndex( empleado => empleado.nombre === 'Vicky Maldonado')
console.log(indice2);