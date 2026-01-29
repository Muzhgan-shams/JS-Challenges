// 20. Body Mass Index (BMI) Calculator
// Description: Given weight (kg) and height (m), calculate BMI using:
// BMI = weight / (height * height)

function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
  let result = "";
  if (bmi < 18.5) result = "Underweight";
  else if (bmi < 25) result = "Normal weight";
  else if (bmi < 30) result = "Overweight";
  else if (bmi >= 30) result = "Obese";
  else return "Please enter your weight in kg and your height in meters";

  return `${bmi.toFixed(2)} (${result})`;
}
console.log(calculateBMI(50, 1.69));
console.log(calculateBMI(70, 1.75));

// 21. Password Strength Checker
// Description: A strong password must:
// • Be at least 8 characters long.
// • Contain at least one uppercase letter, one lowercase letter, and one number.

function checkPassword(pass) {
  const hasMinLength = pass.length >= 8; // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  const hasUppercase = /[A-Z]/.test(pass);
  const hasLowercase = /[a-z]/.test(pass);
  const hasNumber = /\d/.test(pass);

  if (!hasMinLength) return "Weak, too short. Needs 8+ characters.";
  if (!hasUppercase) return "Weak, missing an uppercase letter.";
  if (!hasLowercase) return "Weak, missing a lowercase letter.";
  if (!hasNumber) return "Weak, should be at least one number.";

  return "Strong";
}
console.log(checkPassword("pass"));
console.log(checkPassword("MyPass123"));

// Regex
// ^: Beginning Anchor
// (?=.*[a-z]): Positive Lookahead for Lowercase
// (?=.*[A-Z]): Positive Lookahead for Uppercase
// (?=.*\d): Positive Lookahead for Digits
// .{8,}: Minimum Length Quantifier
// $: Ending Anchor
