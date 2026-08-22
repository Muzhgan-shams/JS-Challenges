// Valid Parentheses
// Open brackets must be closed by the same type
// Open brackets must be closed in the correct order
// Every close bracket has a corresponding open bracket

function isValid(s) {
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    // If it's a closing bracket
    if (map[char]) {
      const top = stack.pop();
      if (top !== map[char]) return false;
    } else {
      // It's an opening bracket
      stack.push(char);
    }
  }

  return stack.length === 0;
}
