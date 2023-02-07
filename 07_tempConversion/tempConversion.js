const convertToCelsius = function(degrees) {

  // Calculate temperature in celsius and round to 1 decimal place
  const Celsius = Math.round(((degrees - 32) * 5/9) * 10) / 10;

  // Return celsius
  return Celsius;
};

const convertToFahrenheit = function(degrees) {

  // Calculate temperature in farenheit and round to 1 decimal place
  const Farenheit = Math.round(((degrees * 9/5) + 32) * 10) / 10;

  // Return farenheit
  return Farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
