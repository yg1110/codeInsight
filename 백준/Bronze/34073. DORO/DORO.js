const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
let out = "";
for (let i = 1; i < input.length; i++) {
  out += input[i] + "DORO ";
}
console.log(out.trim());