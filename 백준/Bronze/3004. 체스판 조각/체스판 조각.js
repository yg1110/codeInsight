const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const a = Math.floor(+input / 2);
const b = +input - a;
console.log((a + 1) * (b + 1));
