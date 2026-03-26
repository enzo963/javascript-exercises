const convertToCelsius = function (fahrenheit) {
  return Number(((fahrenheit - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  return Number((celsius * 9 / 5 + 32).toFixed(1));
};

convertToCelsius(32) // 0
convertToCelsius(100) // 37.8
convertToFahrenheit(0) // 32
convertToFahrenheit(37.8) // 100


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
