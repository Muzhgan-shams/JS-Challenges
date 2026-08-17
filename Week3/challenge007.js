// Factorial using loop
function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialIterative(5)); // 120

// Recursion Template
function solve(input) {
  // Base case: smallest valid input.
  if (isBaseCase(input)) return baseAnswer;

  // Reduce the problem and combine the result.
  return combine(input, solve(smallerInput));
}

// Factorial using resursion
function factorialRecursive(n) {
  if (n === 0) return 1; // Base case
  return n * factorialRecursive(n - 1); // Recursive step
}

console.log(factorialRecursive(5)); // 120

// Revers a String with recursion
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // "olleh"

// Recursive Array Sum
function sumArray(nums, index = 0) {
  if (index === nums.length) return 0;
  return nums[index] + sumArray(nums, index + 1);
}

console.log(sumArray([2, 4, 6])); // 12

// Greatest Common Devisor
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  return b === 0 ? a : gcd(b, a % b);
}

console.log(gcd(48, 18)); // 6

// palindrome check - recursion
function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, left + 1, right - 1);
}

console.log(isPalindrome("racecar")); // true
