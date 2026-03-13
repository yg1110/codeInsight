const fs = require("fs");
const [A, B] = fs
  .readFileSync(0, "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
const a = Math.ceil(B[1] / A[0]);
const b = Math.ceil(A[1] / B[0]);
console.log(a > b ? "PLAYER B" : a < b ? "PLAYER A" : "DRAW");