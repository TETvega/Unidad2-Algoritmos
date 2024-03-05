//imprimir nombre y apellido por separado
const planilla = [
    {nombre: 'Juan Prez' ,  sueldoBase: 14000},
    {nombre: 'Vicky Maldonado' ,  sueldoBase: 23000},
    {nombre: 'Danilo Issac Newton Vicentez' ,  sueldoBase: 18000},
    {nombre: 'Carlos Ferrero Mkanci' ,  sueldoBase: 9000},
    {nombre: 'David Lamborgini' ,  sueldoBase: 15600},
]

    // let  in  array
    // basicamente devuelve el indice del arreglo
    // devuelve el lado izquierdo , las keys o indices
//     for ( let pendiente in pendientes){
//         console.log(pendiente);
//     }
// for ( let empleado in planilla){
//     console.log( planilla.);
// }
planilla.forEach( empleado => {

    const nombreCompleto = empleado.nombre.split(' ');
   // console.log(nombreCompleto);


    const nombre = nombreCompleto[0];
    const apellido = nombreCompleto[1] ;
    const restoNombre = nombreCompleto.slice(2).join(' ')
    

    console.log(` Nombre: ${nombre}`);
    console.log(` Apellido: ${apellido}`);
    //console.log(restoNombre);
    console.log('-----------------------------------------------'); 
})
