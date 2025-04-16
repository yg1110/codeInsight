const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  let [A, B, C] = input[i].split(" ").map(Number);
  const leftJump = B - A;
  const rightJump = C - B;
  console.log(Math.max(leftJump, rightJump) - 1);
}