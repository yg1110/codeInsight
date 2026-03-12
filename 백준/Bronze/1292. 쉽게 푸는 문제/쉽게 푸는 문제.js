const fs = require("fs");
const [A, B] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
let start = 0;
let end = 1;
let cnt = 1;
const N = Array(1000 + 1);
N[0] = 0;
while (cnt <= 1000) {
  start = cnt;
  for (let i = start; i < start + end; i++) {
    N[i] = N[i - 1] + end;
    cnt++;
  }
  end++;
}
console.log(N[B] - N[A - 1]);