const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();
const MOD = 20000303;

let r = 0;
for (let i = 0; i < input.length; i++) {
  const d = input.charCodeAt(i) - 48;
  r = (r * 10 + d) % MOD;
}

console.log(r.toString());