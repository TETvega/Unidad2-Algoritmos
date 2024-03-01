
const planilla = [
    {nombre: 'Juan Prez' ,  sueldoBase: 14000},
    {nombre: 'Vicky Maldonado' ,  sueldoBase: 23000},
    {nombre: 'Danilo Issac Newton' ,  sueldoBase: 18000},
    {nombre: 'Carlos Ferrero' ,  sueldoBase: 9000},
    {nombre: 'David Lamborgini' ,  sueldoBase: 15600},
    {nombre: 'David Lamborgini' ,  sueldoBase: 20000},
]


// USO DEL     .find()
let resultado;
// Filtrado buscando solo el primer objeto 
// devuelve un objeto en este caso el primero que encuentre 
// duvuelve solo el primer resultado 
resultado = planilla.find( empleado => empleado.nombre === 'David Lamborgini')
console.table(resultado);
console.log(resultado);