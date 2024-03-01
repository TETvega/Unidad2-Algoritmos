
// Imprimir los numeros del 1 al 100
// Cuando encontremos Multiplos de 3 , 6 , 9  y 12  que se imprima la palabra FIZZ
// y en multiplos de 5 , 10, 15 , 20   BUZZ

// cuando encuentre multiplos de 15, 30 , 45 se escriba FIZZBUZZ


for (let i = 0; i <=100; i++) {
    op =0;

    if (i % 3 === 0 ) {
        op=1
    }
    if (i % 5 === 0 ) {
        op=2
    }
    if (i % 15 ==0) {
        op=3
    }
    
if (op!=0) {
    switch (op) {
        case 1:
            console.log(`FIZZ`);
            break;
    
        case 2:
            console.log(`BUZZ`);
            break;
        case 3:
            console.log(`FIZZBUZZ`);
            break;
        default:
            break;
    }
}else{
    console.log(i);
}
}

// Forma Corta
for (let i = 0; i <=100; i++) {
    if (i % 15 ==0) {
        console.log(`${i}  FIZZBUZZ`);
    }else if (i % 5 === 0 ) {
        console.log(`${i}  BUZZ`);
    }else if (i % 3 === 0 ) {
        console.log(`${i}  FIZZ`);
    }

    
    
}