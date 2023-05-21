// https://projecteuler.net/problem=4

function checkPalindromeNumber(num) {
    const digitLst = numToDigits(num);
    const digitLenght = digitLst.length;

    for (let i = 0; i < Math.ceil(digitLenght / 2); i++) {
        if (digitLst[i] !== digitLst[digitLenght - (i + 1)]) return false;
    }

    return true;
}

function numToDigits(num, digitLst = []) {
    const quotent = Math.trunc(num / 10);

    const remainder = num % 10;
    digitLst.push(remainder);

    if (quotent <= 0) return digitLst;
    else return numToDigits(quotent, digitLst);
}

function solution4() {
    let largestPalindrome = -Infinity;

    let second = 999;

    for (let num1 = 999; num1 > 99; num1--) {
        for (let num2 = second; num2 > 99; num2--) {

            const product = num1 * num2;
            if (checkPalindromeNumber(product) && product > largestPalindrome) largestPalindrome = product;

        }
        second--;
    }

    return largestPalindrome;
}

console.log(solution4());