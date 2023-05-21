// https://projecteuler.net/problem=5

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

function powLessThan(num, limit) {
    if (num >= limit) return -1;
    let pow = num;
    while (pow <= limit) {
        pow *= num;
    }

    return pow / num;
}

function solution5() {
    const limit = 20;
    const primeList = getPrimeList(limit);

    return primeList.map(num => powLessThan(num, limit)).reduce((acc, cur) => acc * cur, 1);
    
}

console.log(solution5());