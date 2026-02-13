const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = +input[0];
for (let i = 1; i <= T; i++) {
  console.log("$" + (Number(input[i]) * 0.8).toFixed(2));
}