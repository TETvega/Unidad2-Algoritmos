
// Trabajaremos con los metodos propios de JAVASCRIP 


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


const nombreMes = 'Febrero';

meses.forEach( mes => {
    
    if(mes===nombreMes){
        console.log(` ${nombreMes} existe`);
    }
});

// El includes basicamente busca entre los datos del array y devuelve un booleano segun si lo encontro o no
// Distingue tambien si es numero o string , verifica si es del mismo tipo de datos
// Es sensible a mayusculas y minusculas
const resultado = meses.includes(nombreMes);

console.log(resultado);



// Esta rearia la forma para retornar la string, entonces con el if solo devuelve una oracion 1 sola vez en comparacion de cuando 
// lo quisimos hacer con el forEach

if( meses.includes(nombreMes)){
    console.log(` ${nombreMes} existe`);
}else{
    console.log(` ${nombreMes} no existe`);
}



console.log(`----------------------------------------------`);

// Ejercicio parecido al examen

const planilla = [
    {nombre: 'Juan Prez' ,  sueldoBase: 14000},
    {nombre: 'Vicky Maldonado' ,  sueldoBase: 23000},
    {nombre: 'Danilo Issac Newton' ,  sueldoBase: 18000},
    {nombre: 'Carlos Ferrero' ,  sueldoBase: 9000},
    {nombre: 'David Lamborgini' ,  sueldoBase: 15600},
]
//  some() == alguno , algunos
const existe = planilla.some( (empleado) => empleado.nombre === 'Juan Prez')

console.log(`Empleado ${existe}`);