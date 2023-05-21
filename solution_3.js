// https://projecteuler.net/problem=3

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

function getPrimeFactors(num, primeFactors = []) {
    const isNumPrime = isPrime(num);

    if (isNumPrime) {
        primeFactors.push(num);
        return [...new Set(primeFactors)];
    }

    for (let div = 2; div < num; div++) {
        const remainder = num % div;

        if (remainder <= 0 && isPrime(div)) {
            primeFactors.push(div);
            return getPrimeFactors(num / div, primeFactors);
        }
    }
    
}

function solution3() {
    let num = 600851475143;
    
    return Math.max( ...getPrimeFactors(num) );
}

console.log(solution3());