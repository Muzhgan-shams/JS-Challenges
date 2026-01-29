// 17. Pattern Printing – Right-angled Triangle
function rightAngledTriangle(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}
console.log(rightAngledTriangle(4));

// 18. Pattern Printing – Right-aligned Triangle
function rightAlignedTriangle(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
      result += " ";
    }
    for (let k = 1; k <= i; k++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}
console.log(rightAlignedTriangle(4));

// 19. Pattern Printing – Pyramid
function pyramid(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
      result += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}
console.log(pyramid(5));
