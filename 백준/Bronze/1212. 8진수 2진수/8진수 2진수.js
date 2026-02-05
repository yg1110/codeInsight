const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
if (input === "0") {
  console.log("0");
} else {
  let out = "";
  out += parseInt(input[0], 8).toString(2);
  for (let i = 1; i < input.length; i++) {
    out += parseInt(input[i], 8).toString(2).padStart(3, "0");
  }
  console.log(out);
}