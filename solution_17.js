// https://projecteuler.net/problem=17

const mapDigitToWord = [
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [14, "fourteen"],
    [15, "fifteen"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"],
    [20, "twenty"],
    [30, "thirty"],
    [40, "forty"],
    [50, "fifty"],
    [60, "sixty"],
    [70, "seventy"],
    [80, "eighty"],
    [90, "ninety"],
    [100, "hundred"],
    [1000, "thousand"]
];

function solution17() {
    const oneToNine = mapDigitToWord.filter(mp => mp[0] < 10)
                        .map(mp => mp[1].length)
                        .reduce((acc, cur) => acc + cur, 0);

    const tenToNineteen = mapDigitToWord.filter(mp => mp[0] > 9 && mp[0] < 20)
                            .map(mp => mp[1].length)
                            .reduce((acc, cur) => acc + cur, 0);

    const oneToNinetynine = (oneToNine * 9) 
                            + tenToNineteen 
                            + ( mapDigitToWord
                                .filter(mp => mp[0] > 19 && mp[0] < 100)
                                .map(mp => mp[1].length)
                                .reduce((acc, cur) => acc + cur, 0) * 10 ); 
                            
    const oneToThousand = (oneToNinetynine * 10) 
                           + (oneToNine * 100) 
                           + ( mapDigitToWord.find(mp => mp[0] === 100)[1].length * 900 )
                           + ("and".length * 891)
                           + mapDigitToWord.find(mp => mp[0] === 1)[1].length
                           + mapDigitToWord.find(mp => mp[0] === 1000)[1].length;

    return oneToThousand;

}

console.log(solution17());