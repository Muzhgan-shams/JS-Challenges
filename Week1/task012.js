// Simple Calculator using switch-case
// Description: Input two numbers and an operator (+, -, *, /) and compute the result.

function calculator(num1, num2, sign) {
  // --- GUARD CLAUSE ---
  // If this is true, the function DIES here.
  // We don't need an 'else' because the code below only runs if this fails.
  if (!sign || sign.length === 0) {
    return "Enter a valid sign";
  }
  let result;

  switch (sign) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Can not divide by zero"; //number divide by zero = infinity
      break;
    default:
      "Invalid Operator";
      break;
  }

  return result;
}
console.log(calculator(3, 0, ""));
