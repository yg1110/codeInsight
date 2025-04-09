const nums = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const a = parseInt(nums[0]);
const b = nums[1].split("").map(Number);

let result = "";
for (let i = b.length - 1; i >= 0; i--) {
  result += a * b[i] + "\n";
}
result += a * parseInt(nums[1]);
console.log(result);