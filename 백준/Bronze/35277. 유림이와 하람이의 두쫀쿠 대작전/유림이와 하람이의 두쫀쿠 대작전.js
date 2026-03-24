const fs = require("fs");
const N = +fs.readFileSync(0, "utf8").trim();
const price = 900 + 60 + 600 + 170 + 160 + 110;
console.log(Math.floor(N / price));