// https://projecteuler.net/problem=21

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

    return [...new Set(factors)];
}

function factorSum(num) {
    const factors = getFactors(num);

    if (factors.length <= 1) return -1;

    return factors.reduce((acc, cur) => acc + cur, 0);
}

function solution21() {
    const numLimit = 10_000;
    const ambicalNumList = [];

    for (let num = 2; num < numLimit; num++) {
        if (ambicalNumList.includes(num)) continue;

        const factorSum1 = factorSum(num);

        if (factorSum1 !== num && factorSum(factorSum1) === num) ambicalNumList.push(num, factorSum1);
    }

    return ambicalNumList.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution21());