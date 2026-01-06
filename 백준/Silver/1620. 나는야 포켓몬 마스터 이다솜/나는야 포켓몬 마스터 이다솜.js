const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const valueMap = new Map();
const indexMap = new Map();
const isNumber = (input) => !isNaN(Number(input));
let ans = "";
for (let i = 0; i < N + 1; i++) {
  valueMap.set(input[i], i);
  indexMap.set(i, input[i]);
}
for (let i = N + 1; i < N + M + 1; i++) {
  if (isNumber(input[i])) {
    ans += indexMap.get(+input[i]) + "\n";
  } else {
    ans += valueMap.get(input[i]) + "\n";
  }
}
console.log(ans.trim());