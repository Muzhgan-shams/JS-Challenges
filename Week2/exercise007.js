// create an 200 value array
// the values should be between 10 and 99
// sort Asce

function generateRandomNumbers() {
  let myArray = new Array(200);

  // 1. Fill the array
  for (let i = 0; i < myArray.length; i++) {
    myArray[i] = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  }
  console.log("Generated numbers: ", myArray);

  // 2. Sort the array (Ascending)
  for (let j = 0; j < myArray.length; j++) {
    for (let i = 0; i < myArray.length - j - 1; i++) {
      // CHANGED < to > for Ascending order
      if (myArray[i] > myArray[i + 1]) {
        let tmp = myArray[i];
        myArray[i] = myArray[i + 1];
        myArray[i + 1] = tmp;
      }
    }
  }
  console.log("After sorting (Ascending): ", myArray);
}

generateRandomNumbers();

// Sort an array

function bubbleSort(arr) {
  let n = arr.length;

  // Outer loop: Tells us how many times to pass through the array
  for (let i = 0; i < n; i++) {
    // Inner loop: Does the actual comparing of neighbors
    // (n - i - 1) is a trick to avoid checking numbers already sorted at the end
    for (let j = 0; j < n - i - 1; j++) {
      // RULE: If the left neighbor is bigger than the right neighbor...
      if (arr[j] > arr[j + 1]) {
        // THE SWAP LOGIC
        let temp = arr[j]; // 1. Save left value in temp
        arr[j] = arr[j + 1]; // 2. Move right value to the left
        arr[j + 1] = temp; // 3. Move temp value to the right
      }
    }
  }
  return arr;
}

const unsorted = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(unsorted)); // [1, 2, 5, 5, 6, 9]
