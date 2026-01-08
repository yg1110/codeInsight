const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const N = +input;

const a = [];
const b = [];

a[0] = 1;
b[0] = 0;
for (let i = 1; i <= N; i++) {
  a[i] = b[i - 1];
  b[i] = a[i - 1] + b[i - 1];
}

console.log(a[N], b[N]);