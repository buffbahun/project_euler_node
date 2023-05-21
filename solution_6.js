// https://projecteuler.net/problem=6

function calcSumOfNaturalNumber(n) {
    if (n <= 0) {
        console.error("Number should be greater than 0.")
        return 0;
    }

    return ( n * (n + 1) ) / 2;
}

function calcSumOfNaturalNumberSquare(n) {
    if (n <= 0) {
        console.error("Number should be greater than 0.")
        return 0;
    }

    return ( n * (n + 1) * (2*n + 1) ) / 6;
}

function solution6() {
    const nthNum = 100;

    const diff = ( calcSumOfNaturalNumber(nthNum) ** 2 ) - calcSumOfNaturalNumberSquare(nthNum);

    return diff;
}

console.log(solution6());