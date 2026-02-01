// 22. Collatz Sequence (Hailstone Numbers)
// Description: Take a number n.
// • If n is even, divide it by 2.
// • If n is odd, multiply it by 3 and add 1.
// • Repeat until n = 1.
// • Count the number of steps to reach 1.

// Use while loop when you don't know how many steps it takes to reach the goal.
function countCollatzSequence(num) {
  let result = [num]; // Initialize array with starting number
  let steps = 0;
  while (num !== 1) {
    if ((num & 1) === 0) {
      // Check if even (last bit is 0), odd (last bit is 1)
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    result.push(num);
    steps++;
  }
  return `Steps: ${steps}\nResult: ${result.join(" -> ")}`;
}
console.log(countCollatzSequence(6));

// 23. Calculate Factorial Using Recursion
// Description: Implement factorial(n), which calculates the factorial of n using recursion.
//e.g. Input:5, Output:120

function getFactorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * getFactorial(n - 1);
  }
}
console.log(getFactorial(5));

// 24. Generate Pascal’s Triangle
// Description: Implement pascalTriangle(rows), which prints Pascal’s Triangle up to n rows.

/* function getPascalTri(n) {
  let result = [[1]];
  for (let i = 1; i < n; i++) {
    let prevRow = result[i - 1];
    let currentRow = [1]; // Every row starts with 1
    for (let j = 1; j < i; j++) {
      currentRow.push(prevRow[j - 1] + prevRow[j]);
    }
    currentRow.push(1); // Every row ends with 1
    result.push(currentRow);
  }
  return result;
}
console.log(getPascalTri(5)); */

// Second approch
function getPascalTri(n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    let val = 1; // The first value in every row is always 1

    for (let j = 0; j <= i; j++) {
      result += val + " ";

      // Calculate the next value in the row based on the current one
      // We use Math.floor to keep it an integer
      val = (val * (i - j)) / (j + 1);
    }
    result += "\n";
  }

  return result;
}

console.log(getPascalTri(5));
