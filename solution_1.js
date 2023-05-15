// https://projecteuler.net/problem=1

function calcHcf(a, b) {
    const greater = a > b ? a : b;
    const smaller = greater === a ? b : a;

    const remainder = greater % smaller;

    if (remainder <= 0) {
        return smaller;
    } else {
        return calcHcf(smaller, greater - smaller);
    }
}

function calcLcm(a, b) {
    const hcf = calcHcf(a, b);

    return (a * b) / hcf;
}

function calcSumOfNaturalNumber(n) {
    if (n <= 0) {
        console.error("Number should be greater than 0.")
        return 0;
    }

    return ( n * (n + 1) ) / 2;
}

function solution1() {
    const firstNum = 3;
    const secondNum = 5;
    const limit = 1000;

    const lcm = calcLcm(firstNum, secondNum);

    return (
        ( firstNum * calcSumOfNaturalNumber(Math.trunc( (limit - 1) / firstNum )) ) +
        ( secondNum * calcSumOfNaturalNumber(Math.trunc( (limit - 1) / secondNum )) ) -
        ( lcm * calcSumOfNaturalNumber(Math.trunc( (limit - 1) / lcm )) )
    );
}

console.log(solution1());