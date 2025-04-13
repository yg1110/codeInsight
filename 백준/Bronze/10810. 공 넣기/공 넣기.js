const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = new Array(N).fill(0);
for (let t = 1; t <= M; t++) {
  const [start, end, num] = input[t].split(" ").map(Number);
  for (let i = start - 1; i < end; i++) {
    arr[i] = num;
  }
}
console.log(arr.join(" "));