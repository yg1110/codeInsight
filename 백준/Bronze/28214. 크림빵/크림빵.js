const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K, P] = input[0].split(" ").map(Number);
const bread = input[1].split(" ");
let ans = 0;
for (let i = 0; i < N; i++) {
  const br = bread.splice(0, K).sort();
  ans += br[Math.floor(br.length / 2)] === "1" ? 1 : 0;
}
console.log(ans);