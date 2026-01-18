// Reverse a number
// Description: Reverse the digits of an integer.

function getReversedNum(num) {
  let reversed = "";
  let numStr = num.toString();
  for (let i = numStr.length - 1; i >= 0; i--) {
    reversed += numStr[i];
  }
  return parseFloat(reversed);
}
console.log(getReversedNum(123456));

// Count digits in a number
// Description: Find how many digits are in a number.

function getNumberCount(num) {
  const temStr = num.toString();
  const len = temStr.length;
  return len;
}
console.log(getNumberCount(7845));
console.log(getNumberCount(7845363));

// Method: something.action()
// Function: Action(something)

// Sum of digits
// Description: Calculate the sum of all digits of a number.

function getSumOfDigits(n) {
  let num = n.toString();
  let sum = 0;
  for (let i = 0; i <= num.length - 1; i++) {
    sum += Number(num[i]);
  }
  return sum;
}
console.log(getSumOfDigits(123));
console.log(getSumOfDigits(12));
console.log(getSumOfDigits(12387465));
