const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +lines[0];
let result = "";
function play(a, b) {
  for (let i = 4; i >= 1; i--) {
    if ((a[i] || 0) > (b[i] || 0)) return "A";
    if ((a[i] || 0) < (b[i] || 0)) return "B";
  }
  return "D";
}
for (let i = 1; i <= N * 2; i += 2) {
  const a = lines[i].split(" ").reduce((acc, cur, idx) => {
    if (idx > 0) {
      acc[+cur] = (acc[+cur] || 0) + 1;
      return acc;
    }
    return acc;
  }, {});
  const b = lines[i + 1].split(" ").reduce((acc, cur, idx) => {
    if (idx > 0) {
      acc[+cur] = (acc[+cur] || 0) + 1;
      return acc;
    }
    return acc;
  }, {});
  result += play(a, b) + "\n";
}
console.log(result.trim());