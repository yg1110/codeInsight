const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr.shift();
for (let i = 0; i < N; i++) {
  const [a, b] = arr.shift().split(' ').map(Number);
  console.log(a + b);
}