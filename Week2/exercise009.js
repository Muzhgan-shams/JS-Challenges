// 15. Check for Armstrong number
// Description: A number is Armstrong if the sum of its digits raised to the power of the number of digits equals the number itself.

function checkArmstrong(num) {
  let tempStr = num.toString();
  let power = tempStr.length;
  let sum = 0;
  for (let i = 0; i < power; i++) {
    let digit = Number(tempStr[i]);
    sum += digit ** power;
  }
  return sum === num ? "Armstrong" : "Not Armstrong";
}
console.log(checkArmstrong(153));
console.log(checkArmstrong(123));

// 16. Fibonacci sequence
// Description: Print the Fibonacci sequence up to N terms.
// next = parent + grandparent

function getFibonacciSequence(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let base = [0, 1];

  for (let i = 2; i < n; i++) {
    let next = base[i - 1] + base[i - 2];
    base.push(next);
  }
  return base;
}
console.log(getFibonacciSequence(7));
// 0, 1, 1, 2, 3, 5, 8
