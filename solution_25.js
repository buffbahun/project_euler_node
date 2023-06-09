// https://projecteuler.net/problem=25

function solution25() {
    let startNum1 = 1n;
    let startNum2 = 1n;

    let nth = 2;

    let fabi = 0n;

    while (fabi.toString().length < 1000) {
        fabi = startNum1 + startNum2;
        startNum2 = startNum1;
        startNum1 = fabi;
        nth++;
    }

    return nth;
}

console.log(solution25());