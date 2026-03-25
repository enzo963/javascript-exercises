const repeatString = function (string, num) {
    let result = "";
    if (num < 0) {
        return "Error";
    }
    else if (num === 0) {
        return '';
    }
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
};


console.log(repeatString('enzo', 5));
console.log(repeatString('enzo', 0));
console.log(repeatString('enzo', -4));

// Do not edit below this line
module.exports = repeatString;
