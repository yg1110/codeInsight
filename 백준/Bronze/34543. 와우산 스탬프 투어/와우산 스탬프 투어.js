const fs = require("fs");
let total = 0;
const [N, W] = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);
total += N * 10;
if (N >= 3) total += 20;
if (N === 5) total += 50;
if (W > 1000) total -= 15;
console.log(total > 0 ? total : 0);