// https://projecteuler.net/problem=7

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

function getPrimeNth(nth) {
    let count = 0;
    
    for (let num = 2;; num++) {
        if (isPrime(num)) count++;
        if (nth === count) return num;
    }
}

function solution7() {
    const nthNumber = 10001;

    return getPrimeNth(nthNumber);
}

console.log(solution7());