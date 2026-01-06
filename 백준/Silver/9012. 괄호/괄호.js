const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];

function verification(brackets) {
  const stack = [];
  for (const b of brackets) {
    if (b === "(") {
      stack.push(b);
    } else {
      const current = stack.pop();
      if (current !== "(") return "NO";
    }
  }
  return stack.length === 0 ? "YES" : "NO";
}

let ans = "";
for (let i = 1; i <= N; i++) {
  const brackets = input[i].split("");
  ans += verification(brackets) + "\n";
}

console.log(ans.trim());