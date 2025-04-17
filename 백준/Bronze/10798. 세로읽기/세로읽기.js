const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(""));
let ans = "";
const maxLength = Math.max(...input.map((row) => row.length));

for (let j = 0; j < maxLength; j++) {
  for (let i = 0; i < 5; i++) {
    if (input[i][j]) ans += input[i][j];
  }
}

console.log(ans);