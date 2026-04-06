const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +lines[0];
const result = [];
for (let i = 0; i < N; i++) {
  const a = lines[1][i];
  const b = lines[3][i];
  const c = lines[2][i];
  const d = lines[4][i];
  if (a === b) {
    if (c === d) {
      result.push(c);
    } else {
      console.log("htg!");
      process.exit();
    }
  }
}
console.log(result.join(""));