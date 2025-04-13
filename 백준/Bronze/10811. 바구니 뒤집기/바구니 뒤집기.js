const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = [...Array(N)].map((_, i) => i + 1);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ");
  const reverseArr = arr.slice(a - 1, b).reverse();
  arr.splice(a - 1, b - a + 1, ...reverseArr);
}
console.log(arr.join(" "));