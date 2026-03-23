const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
let T = +lines[0];
const N = +lines[1];
const candy = lines[2].split(" ").map(Number);
for (let i = 0; i < N; i++) {
  T -= candy[i];
}
console.log(`Padaeng_i ${T > 0 ? "Cry" : "Happy"}`);