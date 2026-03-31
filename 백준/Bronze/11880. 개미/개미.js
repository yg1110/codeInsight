const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const T = +lines[0];
let result = "";
for (let i = 1; i <= T; i++) {
  const [a, b, c] = lines[i].split(" ").map(Number);
  const min = Math.min(
    (a + b) ** 2 + c ** 2,
    (a + c) ** 2 + b ** 2,
    (b + c) ** 2 + a ** 2,
  );
  result += min + "\n";
}
console.log(result.trim());