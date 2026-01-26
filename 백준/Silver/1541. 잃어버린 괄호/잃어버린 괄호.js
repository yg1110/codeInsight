const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const parts = input.split("-");
const getSum = (x) =>
  x
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b, 0);
let ans = getSum(parts[0]);
for (let i = 1; i < parts.length; i++) {
  ans -= getSum(parts[i]);
}
console.log(ans);