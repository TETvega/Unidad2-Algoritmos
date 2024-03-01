
const planilla = [
    {nombre: 'Juan Prez' ,  sueldoBase: 14000},
    {nombre: 'Vicky Maldonado' ,  sueldoBase: 23000},
    {nombre: 'Danilo Issac Newton' ,  sueldoBase: 18000},
    {nombre: 'Carlos Ferrero' ,  sueldoBase: 9000},
    {nombre: 'David Lamborgini' ,  sueldoBase: 15600},
    {nombre: 'David Lamborgini' ,  sueldoBase: 20000},
]


let resultado;

/// Filtrado de Datos
// Saber los em[pleados que tienen sueldos mayores o iguales a 15,000]
// Este Retorna un array con todos los resultados encontrados
resultado = planilla.filter( empleado => empleado.sueldoBase >= 15000)
console.log(resultado);


console.log(`----------------------------------`);

resultado = planilla.filter(     empleado => empleado.sueldoBase < 15000)
console.table(resultado);

console.log(`----------------------------------`);
// Filtrado por nombres
resultado = planilla.filter(     empleado => empleado.nombre === 'David Lamborgini')
console.table(resultado);
// Practicar a hacer el filtrado con uso del split de strings para buscar solo por carlos

console.log(`----------------------------------`);


// uso del y  ,,  o el &&
resultado = planilla.filter( empleado => empleado.sueldoBase >= 15000 && empleado.sueldoBase <=20000)
console.table(resultado);
