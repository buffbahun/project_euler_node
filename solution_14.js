// https://projecteuler.net/problem=14

function collatzSequence(nthNum) {
    let startNum = nthNum;
    let sequence = [];

    while (true) {
        sequence.push(startNum);
        if (startNum === 1) {
            return sequence;
        }

        startNum = startNum % 2 <= 0 ? startNum / 2 : 3 * startNum + 1;
    }
}

function solution14() {
    const largestChain = {num: null, length: -Infinity};

    for (let num = 1; num < 1_000_000; num++) {
        const sequence = collatzSequence(num);

        if (sequence.length <= largestChain.length) continue;

        largestChain.num = num;
        largestChain.length = sequence.length;
    }

    return largestChain.num;
}

console.log(solution14());