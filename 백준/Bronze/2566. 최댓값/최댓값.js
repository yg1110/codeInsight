const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let max = 0;
let index = [1, 1];
for (let i = 0; i < 9; i++) {
  const arr = input[i].split(" ").map(Number);
  for (let j = 0; j < 9; j++) {
    if (arr[j] > max) {
      max = arr[j];
      index[0] = i + 1;
      index[1] = j + 1;
    }
  }
}
console.log(max);
console.log(index[0], index[1]);