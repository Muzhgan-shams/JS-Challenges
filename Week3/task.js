//  Fibonocci Sequence
// next = parent + grandparent
function getFibonacci(num) {
  if (num <= 0) return "";
  if (num === 1) return 0;
  let arr = [0, 1]; // [0,1,1]
  for (let i = 2; i < num; i++) {
    let next = arr[i - 1] + arr[i - 2]; // arr[2-1] + arr[2-2] = arr[1] + arr[0] = 1 + 0 = 1
    arr.push(next);
  }
  return arr;
}
console.log(getFibonacci(5));

const right = (num) => {
  let result = "";
  let arr = ["A", "B", "C", "D"];
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      result += arr[j] + " ";
    }
    result += "\n";
  }
  return result;
};
console.log(right(4));
