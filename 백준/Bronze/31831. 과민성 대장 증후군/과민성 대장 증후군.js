const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [N, M] = input[0].split(" ");
const arr = input[1].split(" ").map(Number);
let stress = 0;
let cnt = 0;
for (let i = 0; i < N; i++) {
  stress += arr[i];
  if (stress < 0) stress = 0;
  if (stress >= M) cnt++;
}
console.log(cnt);