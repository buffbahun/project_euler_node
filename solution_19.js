// https://projecteuler.net/problem=19

const monthToDays = new Map([
    [1, 31],
    [2, 28],
    [3, 31],
    [4, 30],
    [5, 31],
    [6, 30],
    [7, 31],
    [8, 31],
    [9, 30],
    [10, 31],
    [11, 30],
    [12, 31],
]);

function solution19() {
    let startDay = ((( (4 * 30) + (7 * 31) + 28 ) % 7) + 2) % 7;
    let daysSum = 0;
    let monthOnSunday = 0;

    if (startDay === 1) monthOnSunday++;

    for (let year = 1901; year <= 2000; year++) {
        for (let month = 1; month <= 12; month++) {
            daysSum += (month === 2 && year % 4 <= 0 ? monthToDays.get(month) + 1 : monthToDays.get(month));
            
            if (((daysSum % 7) + startDay) % 7 === 1) monthOnSunday++;
        }
    }

    return monthOnSunday;
}

console.log(solution19());