// Temperature converter (Celsius ↔ Fahrenheit)
// Description: Convert temperature from Celsius to Fahrenheit and vice versa.

// Fahrenheit degree is smaller than a Celsius degree (specifically $1.8$ times smaller), and Fahrenheit starts "later" (at 32 instead of 0)

// Converting Celsius to Fahrenheit -> F = (C * 1.8) + 32
// Converting Fahrenheit to Celsius -> C = (F - 32) / 1.8

function convertTemperature(value, type) {
  let unit = type.trim().toUpperCase();
  let temp = 0;

  if (unit === "C") {
    temp = `${value * 1.8 + 32} Fahrenheit`;
  } else if (unit === "F") {
    temp = `${((value - 32) / 1.8).toFixed(2)} Celsius`;
  } else {
    return "Wrong value or type";
  }

  return `The ${value} ${unit} is equal to ${temp}`;
}
console.log(convertTemperature(80, "f"));
