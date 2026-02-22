const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
let ans = "";
for (let i = input.length - 1; i >= 0; i--) {
  ans += input[i];
}
process.stdout.write(ans + "\n");