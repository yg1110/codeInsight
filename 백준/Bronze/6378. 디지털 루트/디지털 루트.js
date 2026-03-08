const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
let out = "";
for (let i = 0; i < input.length - 1; i++) {
  let root = input[i];
  while (root.length > 1) {
    root = String(root.split("").reduce((acc, cur) => acc + Number(cur), 0));
  }
  out += root + "\n";
}

console.log(out.trim());