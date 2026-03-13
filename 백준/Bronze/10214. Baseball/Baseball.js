const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
let idx = 0;
const T = +lines[idx++];
for (let t = 0; t < T; t++) {
  let Y = 0;
  let K = 0;
  for (let i = 0; i < 9; i++) {
    const [y, k] = lines[idx++].split(" ").map(Number);
    Y += y;
    K += k;
  }
  if (Y > K) console.log("Yonsei");
  else if (Y < K) console.log("Korea");
  else console.log("Draw");
}