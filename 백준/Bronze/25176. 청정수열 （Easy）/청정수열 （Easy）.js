const fs = require("fs");
const N = +fs.readFileSync(0, "utf8").trim();
let result = 1;
for (let i = N; i > 0; i--) {
  result *= i;
}
console.log(result);