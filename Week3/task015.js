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

// Asynchronous - runs without blocking the main thread
console.log("Start");

setTimeout(() => console.log("Timeout done"), 0);

console.log("End");

// setTimeout (Macrotask)
console.log("Start");

setTimeout(() => console.log("Timeout done"), 0);

console.log("End");

// Promises (Microtask)
console.log("Start");

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");

// Async/Await
async function fetchData() {
  console.log("Fetching...");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log("Data:", data.title);
}

console.log("Start");
fetchData();
console.log("End");

//Async Iterators
async function* asyncNumbers() {
  let i = 0;
  while (i < 3) {
    await new Promise((r) => setTimeout(r, 500));
    yield i++;
  }
}

(async () => {
  for await (const num of asyncNumbers()) {
    console.log(num);
  }
})();

// Parallel Async with Promise.all
async function task(id, delay) {
  return new Promise((r) => setTimeout(() => r(`Task ${id} done`), delay));
}

async function run() {
  const results = await Promise.all([task(1, 1000), task(2, 500)]);
  console.log(results);
}

run();

// Race Conditions (Promise.race)
Promise.race([
  new Promise((r) => setTimeout(() => r("Fast"), 500)),
  new Promise((r) => setTimeout(() => r("Slow"), 1000)),
]).then(console.log);

// Sync = predictable, but blocks.

// Async = non‑blocking, but requires understanding of event loop, microtasks, and promises.
