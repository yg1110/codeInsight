const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const dir = ["N", "E", "S", "W"];
let idx = 0;
for (let i = 0; i < 10; i++) {
  if (input[i] === "1") {
    idx = (idx + 1) % dir.length;
  } else if (input[i] === "2") {
    idx = (idx + 2) % dir.length;
  } else {
    idx = (idx + 3) % dir.length;
  }
}
console.log(dir[idx]);