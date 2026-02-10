const [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const burn = Math.floor(A / 2);
console.log(Math.min(burn, B));