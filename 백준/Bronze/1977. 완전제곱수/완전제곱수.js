const fs = require("fs");
const [M, N] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
let sum = 0;
let min = Infinity;
for (let i = M; i <= N; i++) {
  if (Number.isInteger(Math.sqrt(i))) {
    sum += i;
    min = Math.min(min, i);
  }
}
if (min === Infinity) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(min);
}