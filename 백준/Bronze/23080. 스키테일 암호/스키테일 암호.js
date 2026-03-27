const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +lines[0];
const ribbon = lines[1];
let str = ribbon[0];
for (let i = N; i < ribbon.length; i += N) {
  str += ribbon[i];
}
process.stdout.write(`${str}\n`);