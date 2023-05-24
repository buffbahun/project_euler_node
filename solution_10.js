// https://projecteuler.net/problem=10

function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;

    let limit = num;

    for (let div = 2; div < limit; div++) {
        const remainder = num % div;

        if (remainder <= 0) return false;

        limit = Math.trunc(num / div);
    }

    return true;
}

function getPrimeList(limit) {
    let primeList = [];

    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) primeList.push(num);
    }

    return primeList;
}

function solution10() {
    const primeList = getPrimeList(2_000_000);
    const sum = primeList.reduce((acc, cur) => acc + cur, 0);
    return sum;
}

console.log(solution10());