// A function that adds two numbers
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumbers(20, 90));

// Add multiple numbers
function addMultipleNumbers(...num) {
  let sum = 0;
  for (const n of num) {
    sum += n;
  }
  return sum;
}

console.log(addMultipleNumbers(1, 2, 3, 4, 5));
console.log(addMultipleNumbers(89, 58));
