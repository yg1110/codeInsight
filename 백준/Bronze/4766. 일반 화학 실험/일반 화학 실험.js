const fs = require("fs");
let input = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
let result = "";
for (let i = 1; i < input.length - 1; i++) {
  result += (input[i] - input[i - 1]).toFixed(2) + "\n";
}
process.stdout.write(result);