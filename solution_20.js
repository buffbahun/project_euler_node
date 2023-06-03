// https://projecteuler.net/problem=20

function factorial(num) {
    if (num <= 1) {
        return 1n
    }

    return BigInt(num) * factorial(num - 1);
}

function solution20() {
    let fac = factorial(100);
    
    return fac.toString().split("")
              .map(numStr => Number(numStr))
              .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution20());