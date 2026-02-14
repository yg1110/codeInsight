const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K, P] = input[0].split(" ").map(Number);
const bread = input[1].split(" ");
let ans = 0;

function checkDefective(i) {
  let cnt = 0;
  for (let j = 0; j < K; j++) {
    const index = K * i + j;
    if (bread[index] === "0") {
      cnt++;
    }
    if (cnt >= P) return false;
  }
  return true;
}

for (let i = 0; i < N; i++) {
  ans += checkDefective(i) ? 1 : 0;
}
console.log(ans);