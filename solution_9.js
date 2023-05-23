// https://projecteuler.net/problem=9

function solution9() {
    // a < b < c, a + b + c = 1000
    let b = 0;
    let c = 0;

    for (let a = 1; a < Math.trunc(1000 / 3); a++) {
        b = (500 * (1000 - 2 * a)) / (1000 - a);
        c = 1000 - a - b;

        if (b === Math.trunc(b) && a + b + c === 1000) {
            return [a, b, c];
        }
    }
}

console.log(solution9().reduce((acc, cur) => acc * cur, 1));