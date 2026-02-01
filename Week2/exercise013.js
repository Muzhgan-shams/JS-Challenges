// 25. Number Guessing Game
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNum);

function guessNumber(guessNum) {
  if (guessNum > randomNum) {
    return "Too high";
  } else if (guessNum < randomNum) {
    return "Too low";
  } else {
    return "Win!";
  }
}
console.log(guessNumber(10));
console.log(guessNumber(12));
console.log(guessNumber(100));

// 26. Convert Decimal to Binary
// Description: Convert a decimal number to its binary representation.
function getBinary(decimal) {
  //   return decimal.toString(2); (base 2)
  let result = "";
  while (decimal !== 0) {
    let remainder = decimal % 2; // grab the remainder first
    result += remainder; // add it to string
    decimal = Math.floor(decimal / 2); // Move to the next number
  }
  return result.split("").reverse().join("");
}
console.log(getBinary(10));
console.log(getBinary(13));

// Binary to decimal
function getDecimal(binary) {
  return parseInt(binary, 2);
}
console.log(getDecimal("0001"));
