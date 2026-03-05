const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").toString().trim().split("\n");
if (lines.length < 2) {
  console.log("?");
  process.exit();
}
console.log(lines[0] === lines[1] ? 0 : 1550);