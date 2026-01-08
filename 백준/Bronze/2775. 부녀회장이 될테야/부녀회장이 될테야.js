const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const MAX = 14;
const T = input[0];
const dp = Array.from({ length: MAX + 1 }, () =>
  Array.from({ length: MAX + 1 }).fill(0)
);

for (let i = 1; i <= MAX; i++) {
  dp[0][i] = i;
}
let idx = 1;

for (let t = 0; t < T; t++) {
  const k = input[idx++];
  const n = input[idx++];
  for (let i = 1; i <= k; i++) {
    dp[i][1] = 1;
    for (let j = 2; j <= n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  console.log(dp[k][n]);
}