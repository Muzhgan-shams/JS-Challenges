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
      result = "Invalid Operator";
      break;
  }

  return result;
}
console.log(calculator(3, 0, ""));
console.log(calculator(3, 0, "/"));
console.log(calculator(3, 0, "&"));

// Traffic Light System using switch-case
// Description: Input a color (Red, Yellow, Green) and display an action (Stop, Ready, Go).

function getTrafficAction(color) {
  if (!color) {
    return "Please enter one of these colors: red, green, yellow";
  }

  switch (color.trim().toUpperCase()) {
    case "RED":
      return "Stop";
    case "YELLOW":
      return "Ready";
    case "GREEN":
      return "Go";
    default:
      return "Please enter a valid traffic light color";
  }
}
console.log(getTrafficAction("red"));
console.log(getTrafficAction("re"));
console.log(getTrafficAction(""));
