const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const sum = lines[1]
  .split("")
  .reduce((acc, cur) => acc + cur.charCodeAt(0) - 64, 0);
console.log(sum);