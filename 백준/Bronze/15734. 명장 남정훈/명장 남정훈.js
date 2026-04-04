const fs = require("fs");
let [L, R, A] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);
while (A > 0) {
  if (L > R) {
    R++;
    A--;
  } else {
    L++;
    A--;
  }
}
console.log(Math.min(L, R) * 2);