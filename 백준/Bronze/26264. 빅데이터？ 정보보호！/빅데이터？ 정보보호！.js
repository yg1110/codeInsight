const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
let bigdata = 0;
let security = 0;
for (let i = 0; i < lines[1].length; i++) {
  if (lines[1][i] === "b") {
    bigdata++;
    i += 6;
  } else {
    security++;
    i += 7;
  }
}
if (bigdata > security) console.log("bigdata?");
else if (bigdata < security) console.log("security!");
else console.log("bigdata? security!");