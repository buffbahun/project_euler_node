// https://projecteuler.net/problem=28

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

function spiralDiagnolSeqSummation(nth) {
   // bottom-left sequence --> 4n2 + 1 
   // bottom-right sequence --> 4n2 - 2n + 1 
   // top-left sequence --> 4n2 + 2n + 1 
   // top-right sequence --> 4n2 + 4n + 1 
   // sequence summation --> [Σ 16n2 + 4n + 4] + 1 = (16n3 + 30n2 + 26n + 3) / 3

    return ( 16 * (nth**3) + 30 * (nth**2) + 26 * nth + 3 ) / 3;
}

function solution28() {
    const cubeLength = 1001;
    const nth = ( cubeLength - 1 ) / 2;

    return spiralDiagnolSeqSummation(nth);
}

console.log(solution28());