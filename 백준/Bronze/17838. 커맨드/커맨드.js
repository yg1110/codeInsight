const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const T = +input[0];
let result = "";
function solution(N) {
  if (N.length !== 7) return 0;
  const a = N[0].charAt();
  const b = N[2].charAt();
  if (a === b) return 0;
  if (
    N[0] === a &&
    N[1] === a &&
    N[2] === b &&
    N[3] === b &&
    N[4] === a &&
    N[5] === b &&
    N[6] === b
  ) {
    return 1;
  }
  return 0;
}
for (let t = 1; t <= T; t++) {
  result += solution(input[t]) + "\n";
}
console.log(result.trim());