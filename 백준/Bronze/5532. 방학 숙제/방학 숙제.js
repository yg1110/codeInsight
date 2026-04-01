const fs = require("fs");
const [L, A, B, C, D] = fs
  .readFileSync(0, "utf8")
  .trim()
  .split("\n")
  .map(Number);
const kor = Math.ceil(A / C);
const math = Math.ceil(B / D);
console.log(L - Math.max(kor, math));