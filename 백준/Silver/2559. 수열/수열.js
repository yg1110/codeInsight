const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);
let temp = 0;
let max = -Infinity;

for (let i = 0; i < K; i++) {
  temp += arr[i];
  max = temp;
}

for (let i = K; i < arr.length; i++) {
  temp += arr[i] - arr[i - K];
  max = Math.max(max, temp);
}

console.log(max);