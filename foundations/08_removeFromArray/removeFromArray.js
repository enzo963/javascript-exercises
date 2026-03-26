const removeFromArray = function (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] === arr[j]) {
                const index = arr1.indexOf(arr1[i]);

                if (index > -1) {
                    arr1.splice(index, 1);
                }
            }
        }
    }
};

// I 'am invincible  Dev

// Do not edit below this line
module.exports = removeFromArray;
