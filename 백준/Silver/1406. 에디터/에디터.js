const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const left = lines[0].trim().split("");
const right = [];
const n = Number(lines[1]);

for (let i = 2; i < 2 + n; i++) {
  const cmd = lines[i].trim();
  if (cmd === "L") {
    if (left.length) right.push(left.pop());
  } else if (cmd === "D") {
    if (right.length) left.push(right.pop());
  } else if (cmd === "B") {
    if (left.length) left.pop();
  } else {
    left.push(cmd[2]);
  }
}
console.log(left.join("") + right.reverse().join(""));