const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);
let idx = 0;
let result = "";
const T = +lines[idx];
for (let tc = 1; tc <= T; tc++) {
  idx += 2;
  const bits = lines[idx]
    .replaceAll("O", "0")
    .replaceAll("I", "1")
    .match(/.{8}/g)
    .map((b) => String.fromCharCode(parseInt(b, 2)))
    .join("");
  result += `Case #${tc}: ${bits}\n`;
}
process.stdout.write(result.trim());