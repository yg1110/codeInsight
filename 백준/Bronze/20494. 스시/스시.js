const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const T = +lines[0];
let cnt = 0;
for (let i = 1; i <= T; i++) {
  cnt += lines[i].length;
}
console.log(cnt);