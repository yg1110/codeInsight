const [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((item) => [...item].reverse().join(""));
console.log(A > B ? A : B);
