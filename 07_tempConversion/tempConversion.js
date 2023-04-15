const convertToCelsius = function(temperatureF) {
  return parseFloat(((temperatureF - 32) * (5/9)).toFixed(1))
};

const convertToFahrenheit = function(temperatureC) {
  return parseFloat(((temperatureC * (9 / 5) + 32)).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
