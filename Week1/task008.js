// Compute Simple and Compound Interest
// Description: Given Principal (P), Rate (R), and Time (T), compute:
// Simple Interest = (P × R × T) / 100
// Compound Interest = P × ((1 + R/100) ^ T - 1)

// Simple Interest: You only earn money on the original amount you started with.
// How it works: If you put in $1,000 at a 10% interest rate, you earn $100 every year. Total after 3 years: $1,300.

// Compound Interest: You earn money on your original amount plus all the interest you’ve already made.
// You earn interest on your original money PLUS all the interest you’ve already earned from previous years. Total after 3 years: $1,331.

function getInterestAmount(principal, rate, time) {
  if (principal >= 0 && rate >= 0 && time >= 0) {
    let simpleInterest = (principal * rate * time) / 100;
    let compoundInterest = principal * ((1 + rate / 100) ** time - 1);
    return {
      "simple Interest": `Simple Interest of $${principal} over ${time} years is ${(
        simpleInterest + principal
      ).toFixed(2)}`,
      "Compound Interest": `Compund Interest of $${principal} over ${time} years is ${(
        compoundInterest + principal
      ).toFixed(2)}`,
    };
  } else {
    return "Please enter all valid values";
  }
}
console.log(getInterestAmount(1000, 0, 3));

// --- THE "OR" SHORT-CIRCUIT (||) ---
// If the FIRST thing is TRUE, it skips the rest and says "GO!"
// Use it when you only need ONE condition to be met.
// Example: if (isWeekend || isHoliday) { sleepIn(); }

// --- THE "AND" SHORT-CIRCUIT (&&) ---
// If the FIRST thing is FALSE, it skips the rest and says "STOP!"
// Use it when EVERY condition must be perfect.
// Example: if (hasTicket && hasID) { enterConcert(); }
