const [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let ans = 1;
let prev = 0;
for (let i = 1; i < A; i++) {
  prev += i;
}
for (let i = A; i <= B; i++) {
  const sum = prev + i;
  prev = sum;
  ans = (ans * (sum % 14579)) % 14579;
}
console.log(ans);