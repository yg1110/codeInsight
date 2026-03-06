const fs = require("fs");
const [A, B] = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const M = (B - A) / 400;
const result = 1 / (1 + Math.pow(10, M));
process.stdout.write(result + "\n");