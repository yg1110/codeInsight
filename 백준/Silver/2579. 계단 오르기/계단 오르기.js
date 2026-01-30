const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];
const dp = [];
dp[0] = input[1];
dp[1] = input[1] + input[2];
dp[2] = Math.max(input[1] + input[3], input[2] + input[3]);
for (let i = 3; i < N; i++) {
  dp[i] = Math.max(dp[i - 2], dp[i - 3] + input[i]) + input[i + 1];
}
console.log(dp[N - 1]);