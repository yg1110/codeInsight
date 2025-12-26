const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const nums = input.split("").map((n) => (n === "6" || n === "9" ? 6 : +n));
const numsObj = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
};
let max = 0;
nums.forEach((num) => {
  numsObj[num]++;
});
Object.entries(numsObj).forEach(([key, value]) => {
  max = Math.max(max, key === "6" ? Math.ceil(value / 2) : value);
});
console.log(max);