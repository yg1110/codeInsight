const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
let [N, L] = lines[0].split(" ").map(Number);
const h = lines[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
  if (h[i] <= L) L++;
  else break;
}
console.log(L);