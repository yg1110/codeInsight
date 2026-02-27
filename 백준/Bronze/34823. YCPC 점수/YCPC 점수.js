const fs = require("fs");
let input = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
process.stdout.write(
  Math.min(input[0], Math.floor(input[1] / 2), input[2]) + "\n",
);