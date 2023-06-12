// https://projecteuler.net/problem=27

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

    for (let num = 2; num < limit; num++) {
        if (isPrime(num)) primeList.push(num);
    }

    return primeList;
}

function quadatricEqu(a, b, n) {
    return (n ** 2) + (a * n) + b;
}

function solution27() {
    // n2 + an + b

    const bList = getPrimeList(1000);
    let paramsVal = {a: null, b: null, n: -Infinity};

    bList.forEach(b => {
        for (let a = (-1 * b) + 1; a < 1000; a++) {
            let n = 0;
            if (b % 2 <= 0 && Math.abs(a) % 2 <= 0) {
                while (isPrime( quadatricEqu(a, b, n) )) {
                    n++;
                }
            }

            if (b % 2 > 0 && Math.abs(a) % 2 > 0) {
                while (isPrime( quadatricEqu(a, b, n) )) {
                    n++;
                }
            }

            if (n - 1 > paramsVal.n) paramsVal = {a: a, b: b, n: n - 1}
        }
    });

    return paramsVal.a * paramsVal.b;
}

console.log(solution27());