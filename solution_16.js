// https://projecteuler.net/problem=16

function solution16() {
    const num = 2n ** 1000n

    return num.toString().split("").reduce((acc, cur) => Number(cur) + acc, 0);
}

console.log(solution16());