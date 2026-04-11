const fs = require("fs");
let [A, B, C] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);
let cnt = 0;
while (true) {
  const left = B - A;
  const right = C - B;
  if (left > right) {
    C = B;
    B = B - 1;
  } else if (right > left) {
    A = B;
    B = B + 1;
  } else if (left > 1) {
    A = B;
    B = B + 1;
  } else {
    break;
  }
  cnt++;
}
console.log(cnt);