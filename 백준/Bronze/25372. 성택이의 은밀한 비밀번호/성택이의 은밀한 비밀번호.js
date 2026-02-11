const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
for (let i = 1; i <= N; i++) {
  const len = input[i].length;
  console.log(len >= 6 && len <= 9 ? "yes" : "no");
}