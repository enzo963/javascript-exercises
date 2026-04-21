const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let Result = 0;
  for (let i = 0; i < array.length; i++) {
    Result += array[i];
  }
  return Result;
};

const multiply = function (array) {
  let Result = 1;
  for (let i = 0; i < array.length; i++) {
    Result *= array[i];
  }
  return Result;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num1) {
  if (num1 === 0 || num1 === 1) {
    return 1;
  }

  let Result = 1;
  for (let i = num1; i > 1; i--) {
    Result *= i;
  }
  return Result;
};





// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
