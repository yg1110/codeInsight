const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const result = [];
for (let i = 0; i < lines.length - 1; i++) {
  result.push(lines[i].split("").reverse().join(""));
}
console.log(result.join("\n"));