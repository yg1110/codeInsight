const [A, B, C] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const nums = (A * B * C).toString().split("").map(Number);
const num = {};
for (let i = 0; i < 10; i++) {
  num[i] = 0;
}
for (let i = 0; i < nums.length; i++) {
  num[nums[i]]++;
}

console.log(Object.values(num).join("\n"));