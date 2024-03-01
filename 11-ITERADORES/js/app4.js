
let i = 1;

// while no tienen incremento manual por eso se tiene que poner el i++

while (i <=10) {
    console.log(`numero ${i}`);

    i++;
}


i=0;
/// WHILE DEL FIZZ BUZZ

while (i<=100) {
    if (i % 15 ==0) {
        console.log(`${i}  FIZZBUZZ`);
    }else if (i % 5 === 0 ) {
        console.log(`${i}  BUZZ`);
    }else if (i % 3 === 0 ) {
        console.log(`${i}  FIZZ`);
    } else {
        console.log(`${i}`);
    }
    i++;
}