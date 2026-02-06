const fs = require("fs");
const [A, B] = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);
console.log(A * B);