const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const X = +input[0];
const N = +input[1];
let total = 0;
for (let i = 2; i < N + 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  total += a * b;
  if (total > X) break;
}
console.log(total === X ? "Yes" : "No");