// Event Loops(Microtasks, Macrotasks)
// Microtasks: Promises, queueMicrotask
// Macrotasks: setTimeout, setInterval, I/O events

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Synchronous
console.log("Start");

function heavyTask() {
  for (let i = 0; i < 1e9; i++) {} // CPU-heavy loop
  console.log("Heavy task done");
}

heavyTask();
console.log("End");
