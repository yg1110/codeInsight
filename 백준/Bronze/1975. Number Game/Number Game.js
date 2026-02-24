const fs = require("fs");
const [T, ...input] = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
const out = [];
function trailingZeros(n, b) {
  let k = 0;
  while (n % b === 0) {
    k++;
    n = Math.floor(n / b);
  }
  return k;
}
for (let t = 0; t < T; t++) {
  let sum = 0;
  const N = input[t];
  for (let b = 2; b <= N; b++) {
    sum += trailingZeros(N, b);
  }
  out.push(sum);
}
console.log(out.join("\n"));