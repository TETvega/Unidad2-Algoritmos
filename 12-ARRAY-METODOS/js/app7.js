// metodo concat con arreglos

const planilla = [
    {nombre: 'Juan Prez' ,  sueldoBase: 14000},
    {nombre: 'Vicky Maldonado' ,  sueldoBase: 23000},
    {nombre: 'Danilo Issac Newton' ,  sueldoBase: 18000},
    {nombre: 'Carlos Ferrero' ,  sueldoBase: 9000},
    {nombre: 'David Lamborgini' ,  sueldoBase: 15600},
    {nombre: 'David Lamborgini' ,  sueldoBase: 20000},
]


const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",

    
]
const meses2 = [
    "Agosto",
    "Septiembre",
    'Octubre',

]

const meses3 = [
    'Noviembre',

]

let resultado;
// podemos seguir metiendo arreglos si usamos el ,  e incluso meter un elemento por nuestra propia cuenta 

// resultado = meses.concat(meses2)
resultado = meses.concat(meses2 , meses3 , 'Diciembre' , )

console.log(resultado);
console.table(resultado);


//mostando mediante el spred operator

const resultado2 = [ ...meses, ...meses2 , ...meses3 , 'Diciembre' , ...planilla]
console.log(resultado2);
console.table(resultado2);