// https://projecteuler.net/problem=22

const fs = require('fs');

function solution22() {
    const names = fs.readFileSync(__dirname + "/names.txt", "utf8");
    const namesList = names.split(",")
                            .map(str => str.trim().replaceAll('\"', "").toUpperCase())
                            .sort()
                            .map(name => name.split("").reduce((acc, cur) => acc + (cur.charCodeAt(0) - 64),0))
                            .map((numVal, index) => numVal * (index + 1));

    return namesList.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution22());