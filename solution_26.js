// https://projecteuler.net/problem=26

function findRecurDecimalCycle(denominator, numerator = 1, decimals = [], quotList = []) {
    while (numerator <= denominator) numerator *= 10;

    const index = quotList.indexOf(numerator);
    if (index >= 0) return decimals.slice(index);

    const quotent = Math.trunc(numerator / denominator);
    const remainder = numerator % denominator;

    if (remainder <= 0) return [];

    quotList.push(numerator);
    decimals.push(quotent);

    return findRecurDecimalCycle(denominator, remainder, decimals, quotList);
}

function solution26() {
    const denominatorLimit = 1000;
    let longestRecurringDenominator = {d: null, length: -Infinity};

    for (let denominator = 2; denominator < denominatorLimit; denominator++) {
        const recurringList = findRecurDecimalCycle(denominator);
        if (recurringList.length && recurringList.length > longestRecurringDenominator.length) {
            longestRecurringDenominator = {d: denominator, length: recurringList.length};
        }
    }

    return longestRecurringDenominator.d;
}

console.log(solution26());