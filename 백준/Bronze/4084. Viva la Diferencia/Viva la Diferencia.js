const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const check = (a, b, c, d) => a === b && b === c && c === d;
const calculate = (a, b, c, d) => [
  Math.abs(a - b),
  Math.abs(b - c),
  Math.abs(c - d),
  Math.abs(d - a),
];
for (let i = 0; i < lines.length - 1; i++) {
  let cnt = 0;
  let [a, b, c, d] = lines[i].split(" ").map(Number);
  while (!check(a, b, c, d)) {
    cnt++;
    [a, b, c, d] = calculate(a, b, c, d);
  }
  console.log(cnt);
}