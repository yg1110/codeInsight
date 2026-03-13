const fs = require("fs");
const [N, T, C, P] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);
console.log(Math.floor((N - 1) / T) * C * P);