// Linked Lists
const list = {
  value: 10,
  next: {
    value: 20,
    next: {
      value: 30,
      next: null,
    },
  },
};

function printList(head) {
  let current = head; // Start at the head

  while (current !== null) {
    // Keep going until the chain ends
    console.log(current.value); // Print the value
    current = current.next; // Move to the next node
  }
}
console.log(printList(list));
