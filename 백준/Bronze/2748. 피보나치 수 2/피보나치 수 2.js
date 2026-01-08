const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const N = +input;

let a = 0n;
let b = 1n;
for (let i = 2; i <= N; i++) {
  const c = a + b;
  a = b;
  b = c;
}
console.log(b.toString());