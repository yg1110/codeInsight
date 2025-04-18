const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const total = input[0];
let sum = 0;
for (let i = 1; i < input.length; i++) {
  sum += input[i];
}
console.log(total - sum);