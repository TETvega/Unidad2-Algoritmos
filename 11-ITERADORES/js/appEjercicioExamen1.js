


let op = 0;

// Fomar de la planilla 
const planilla = {
    // pedimos los datos automaticamente
    nombrePlanilla: prompt("Ingrese el nombre de la planilla:"),
    nombreEmpresa: prompt("Ingrese el nombre de la empresa:"),
    // declaramos los empleados como array para hacer push luego
    empleados: [],
    totalPagoPlanilla: 0,
};

//
while (op !== 1) {

    // en cada iteracion se resetea entonces no hay problema ademas que asi podemos cambiar el valor

    const nombreEmpleado = prompt("Ingrese el nombre del empleado (o escriba '1' para terminar):");
    

    // uso del trim para eliminar espacios

    if (nombreEmpleado.trim() === '1' ) {
        op = 1;
        break;
    }

    // Pedimos los datos del empleado segun la estructura 
    const edadEmpleado = parseInt(prompt("Ingrese la edad del empleado:"));
    const saldoBaseEmpleado = parseFloat(prompt("Ingrese el saldo base del empleado:"));

    const iss = saldoBaseEmpleado * 0.15;  // 15%
    const infop = saldoBaseEmpleado * 0.02;  //2%
    const montoAPagar = saldoBaseEmpleado - (iss + infop);

    // declaramos la estructura y le pasamos los valores que teniamos 
    const empleado = {
        nombre: nombreEmpleado,
        edad: edadEmpleado,
        saldoBase: saldoBaseEmpleado,
        iss: iss,
        infop: infop,
        montoAPagar: montoAPagar,
    };

    // realizamos el push al arreglo en el array empleados con los datos de nuestra estructura previa {empleado}
    planilla.empleados.push(empleado);
    // actualizamos el total a pagar de la planilla
    planilla.totalPagoPlanilla += montoAPagar;
}


// Mostramos todos los datos de la planilla 
console.log("Datos de la Planilla:");
console.log("Nombre de la Planilla:", planilla.nombrePlanilla);
console.log("Nombre de la Empresa:", planilla.nombreEmpresa);
console.log("Empleados:");

// la tabla -- Es para mayor orden pero se va desaser luego
console.log("Nombre     \tEdad      \tSaldo Base        \tISS       \tINFOP     \tTOTAL");


// EL of es el equivalente al for segun el .legth del array , Basicamente esto
// for (let i = 0; i < planilla.empleados.length; i++) {
    
// }
for (const empleado of planilla.empleados) {
    
    // FORMATO EN QUE SE IMPRIME cada cosa
    // el uso de los || es el or,    basicamente decimos: "Imprime esto "  o "Impreme esto de aqui"
    // El t es por el formato de tabla 
    console.log(`${empleado.nombre}\t${empleado.edad || ''}\t${empleado.saldoBase || ''}\t${empleado.iss || ''}\t${empleado.infop || ''}\t${empleado.montoAPagar || ''}`);
}

// Mostramos el total a pagar de la planilla
console.log("Total a pagar en la Planilla:", planilla.totalPagoPlanilla);