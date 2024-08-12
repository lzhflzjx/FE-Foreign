console.log("Start");

setTimeout(function() {
  console.log("Timeout");
}, 0);

Promise.resolve().then(function() {
  console.log("Promise 1");

  setTimeout(function() {
    console.log("Promise Timeout");
  }, 0);
});

Promise.resolve().then(function() {
  console.log("Promise 2");
});

console.log("End");
// Start
// End
// Promise 1
// Promise 2
// Timeout
// Promise Timeout