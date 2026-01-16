// Grade Calculator (0–100 → A–F)
// Description: Input a student’s marks (0–100) and print the grade based on a scale.

function calculateGrade(mark) {
  if (mark < 0 || mark > 100) {
    return "Please enter a valid mark";
  }
  if (mark >= 90) return "Grade: A";
  if (mark >= 80) return "Grade: B";
  if (mark >= 60) return "Grade: C";
  if (mark >= 50) return "Grade: D";

  return "Grade: F (Fail)"; // Anything else must be 0-49
}

console.log(calculateGrade(60));

// Leap Year Checker
// Description: Determine if a given year is a leap year.
// It takes approximately 365.242 days for the Earth to orbit the Sun once.

// RULE 1: A year must be divisible by 4 to be a candidate.
// RULE 2: If it is also divisible by 100, it is NOT a leap year...
// RULE 3: ...UNLESS it is also divisible by 400. Then it is a leap year again!

function checkLeapYear(year) {
  if (year <= 0) {
    return "Please enter a valid year";
  } else {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
      return `${year} is a leap year`;
    } else {
      return `${year} is not a leap year`;
    }
  }
}
console.log(checkLeapYear(2003));
console.log(checkLeapYear(2000));
console.log(checkLeapYear(2024));
