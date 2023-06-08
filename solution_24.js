// https://projecteuler.net/problem=24

function factorial(num) {
    if (num <= 1) {
        return 1
    }

    return num * factorial(num - 1);
}

function nthPermutation(nth, digitAry, seq = []) {
    const aryLength = digitAry.length;
    if (aryLength <= 1) {
        seq.push(digitAry.pop());
        return seq;
    }

    const totalPermutations = factorial(aryLength);
    const position = Math.ceil(nth / (totalPermutations / aryLength)) - 1;
    seq.push(...digitAry.splice(position, 1));

    const nextNth = nth % (totalPermutations / aryLength) <= 0 ? 
                        (totalPermutations / aryLength) 
                        : nth % (totalPermutations / aryLength);

    return nthPermutation(nextNth, digitAry, seq);

}

function solution24() {
    const nthSequence = 1_000_000;
    const firstSequence = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return nthPermutation(nthSequence, firstSequence).join("");
}

console.log(solution24());