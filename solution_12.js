// https://projecteuler.net/problem=12

function calcSumOfNaturalNumber(n) {
    if (n <= 0) {
        console.error("Number should be greater than 0.")
        return 0;
    }

    return ( n * (n + 1) ) / 2;
}

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


function getFactors(num) {
    const factors = [1];

    if (isPrime(num)) {
        factors.push(num);
        return factors;
    }

    let limit = num;

    for (let div = 2; div < limit; div++) {
        const remainder = num % div;

        if (remainder <= 0) {
            factors.push(div, num / div);
        }
        limit = Math.trunc(num / div);

    }

    factors.push(num);
    return [...new Set(factors)];
}

function solution12() {
    let nth = 1;
    while(true) {
        const sumOfNth = calcSumOfNaturalNumber(nth);
        const factors = getFactors(sumOfNth);
        if (factors.length > 500) return sumOfNth;
        nth++;
    }
}

console.log(solution12());