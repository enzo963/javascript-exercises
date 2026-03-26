const reverseString = function (enzo) {
    let restult = '';

    for (let i = enzo.length - 1; i >= 0; i--) {
        restult += enzo[i];
    }
    return restult;
};


// Do not edit below this line
module.exports = reverseString;