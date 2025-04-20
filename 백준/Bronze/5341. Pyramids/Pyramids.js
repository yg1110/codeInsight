const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const N = Number(input[i]);
  console.log((N * (N + 1)) / 2);
}