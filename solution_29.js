// https://projecteuler.net/problem=29

function solution29() {
    // let a = 2n;
    // let b = 2n;
    const pows = [];

    for (let a = 2n; a <= 100n; a++) {
        for (let b = 2n; b <= 100n; b++) {
            pows.push(a ** b);
        }
    }

    return [...new Set(pows)].length;
}

console.log(solution29());