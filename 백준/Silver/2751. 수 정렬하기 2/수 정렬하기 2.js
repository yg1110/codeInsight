const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const [N, ...nums] = arr;
console.log(nums.sort((a, b) => a - b).join('\n'));