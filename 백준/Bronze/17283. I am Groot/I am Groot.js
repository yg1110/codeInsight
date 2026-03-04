const fs = require("fs");
const lines = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
const R = lines[1] / 100;
let L = lines[0];
let stick = 1;
let out = 0;
while (Math.floor(L * R) > 5) {
  L = Math.floor(L * R);
  stick *= 2;
  out += L * stick;
}
process.stdout.write(out + "\n");