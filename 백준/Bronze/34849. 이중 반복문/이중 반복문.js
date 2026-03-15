const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const N = Math.pow(+input, 2);
const max = 100000000;
console.log(N > max ? "Time limit exceeded" : "Accepted");
