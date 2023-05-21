// https://projecteuler.net/problem=2

function calcFibo(limit, ary = [1, 2]) {
    const lnth = ary.length;
    const num = ary[lnth - 1] + ary[lnth - 2];

    if (num > limit) {
        return ary;
    } else {
        ary.push(num);
        return calcFibo(limit, ary);
    }
}

function solution2() {
    const limit = 4_000_000;
    const fiboAry = calcFibo(limit);

    const evenSum = fiboAry.filter(num => num % 2 <= 0).reduce((acc, cur) => acc + cur, 0);

    return evenSum;
}

console.log(solution2());