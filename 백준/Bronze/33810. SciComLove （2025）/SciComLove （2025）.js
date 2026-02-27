const fs = require("fs");
let input = fs.readFileSync(0, "utf8").toString().trim();
const target = "SciComLove";
let cnt = 0;
for (let i = 0; i < target.length; i++) {
  if (target[i] !== input[i]) cnt++;
}
process.stdout.write(cnt + "\n");