const sumAll = function (a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Error";
    }

    let min = Math.min(a, b);
    let max = Math.max(a, b);

    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum
};

console.log(sumAll(5, 1));

// Do not edit below this line
module.exports = sumAll;
