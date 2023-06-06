// https://projecteuler.net/problem=23

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

function calcSumOfNaturalNumber(n) {
    if (n <= 0) {
        console.error("Number should be greater than 0.")
        return 0;
    }

    return ( n * (n + 1) ) / 2;
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

function isAbundantNumber(num) {
    const factors = getFactors(num);
    const factorSum = factors.reduce((acc, cur) => acc + cur, 0);
    return factorSum > num;
}

function getAbundantNumbers(limit) {
    const abundantNumList = [];

    for (let num = 2; num < limit; num++) {
        if (isAbundantNumber(num)) abundantNumList.push(num);
    }

    return abundantNumList;
}

function getAbundantNumbersSum(limit) {
    const abundantNumList = getAbundantNumbers(limit);
    const sumsList = [];

    for (let indx1 = 0; indx1 < abundantNumList.length; indx1++) {
        for (let indx2 = indx1; indx2 < abundantNumList.length; indx2++) {
            const sum = abundantNumList[indx1] + abundantNumList[indx2];
            if (sum > limit) break;

            sumsList.push(sum);
        }
    }

    return [...new Set(sumsList)].reduce((acc, cur) => acc + cur, 0);
}

function solution23() {
    const limit = 28123;

    const sumOfAbundantNumbers = getAbundantNumbersSum(limit);
    const sumOfAllNaturalNumbers = calcSumOfNaturalNumber(limit);

    return sumOfAllNaturalNumbers - sumOfAbundantNumbers;
}

console.log(solution23());