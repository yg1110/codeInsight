const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const nums = new Array(9).fill(0);
input.split("").forEach((num) => {
  if (num === "6" || num === "9") nums[6] += 0.5;
  else nums[num]++;
});
console.log(Math.ceil(Math.max(...nums)));