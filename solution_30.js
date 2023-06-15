// https://projecteuler.net/problem=30

function numToDigits(num, digitLst = []) {
    const quotent = Math.trunc(num / 10);

    const remainder = num % 10;
    digitLst.push(remainder);

    if (quotent <= 0) return digitLst;
    else return numToDigits(quotent, digitLst);
}

function solution30() {
    const start = 10;
    const end = 999_999;

    const results = [];

    for (let num = start; num <= end; num++) {
        const digits = numToDigits(num);
        const powerSum = digits.reduce((acc, cur) => acc + cur ** 5, 0);
        if (powerSum === num) results.push(num);
    }

    return results.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution30());