const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const cards = input[1].split(" ");
const target = input[3].split(" ");
const nums = new Map();
let ans = "";

cards.forEach(c => {
  const n = nums.get(c);
  if(n) {
    nums.set(c, n + 1);
  } else {
    nums.set(c, 1);
  }
});

target.forEach(t => ans += (nums.get(t) || 0) + " ");
console.log(ans.trim());