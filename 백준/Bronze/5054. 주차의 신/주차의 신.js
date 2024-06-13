const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const t = +input.shift();
for (let i = 0; i < t; i++) {
  const n = +input.shift();
  const store = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const middle = Math.floor(store.length / 2);
  const left = store[middle] - store[0];
  const right = store[store.length - 1] - store[0];
  const base = store[store.length - 1] - store[middle];
  console.log(left + base + right);
}