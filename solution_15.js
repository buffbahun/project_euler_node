// https://projecteuler.net/problem=15

function factorial(num) {
    if (num <= 1) {
        return 1n
    }

    return BigInt(num) * factorial(num - 1);
}

function solution15() {
    const grid = 20;

    return factorial(2 * grid) / (factorial(grid) * factorial(grid)); 
}

console.log(solution15());