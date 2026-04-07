const fs = require("fs");
let result = [];
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +lines[0];
const K = +lines[1];
for (let i = 2; i < 2 + K; i++) {
  const [a, b] = lines[i].split(" ").map(Number);
  result.push((Math.min(a - 1, b - 1, N - a, N - b) % 3) + 1);
}
console.log(result.join("\n"));