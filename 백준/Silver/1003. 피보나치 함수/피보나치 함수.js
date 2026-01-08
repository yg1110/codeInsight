const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();
const nums = input.map(Number);
const max = [...nums].sort((a, b) => b - a)[0];

const zero = [];
const one = [];
zero[0] = 1;
zero[1] = 0;
one[0] = 0;
one[1] = 1;

for (let i = 2; i <= max; i++) {
  one[i] = one[i - 1] + one[i - 2];
  zero[i] = zero[i - 1] + zero[i - 2];
}

for (let i = 0; i < T; i++) {
  console.log(zero[input[i]], one[input[i]]);
}