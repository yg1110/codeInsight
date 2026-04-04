const fs = require("fs");
let idx = 0;
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +lines[idx++];
const map = new Map();
for (let i = 0; i < N; i++) {
  const [s, op] = lines[idx++].split(" ");
  map.set(op, s);
}
const result = lines[idx++]
  .split("")
  .map((s) => map.get(s))
  .join("");
const [S, E] = lines[idx].split(" ").map(Number);
console.log(result.substring(S - 1, E));