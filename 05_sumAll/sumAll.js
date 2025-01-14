const sumAll = function (start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR";
    }
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// A cool way to swap variables
let min = 10, max = 2;
if (min > max) {
    [min, max] = [max, min];
}
console.log(min, max)
// Do not edit below this line
module.exports = sumAll;
