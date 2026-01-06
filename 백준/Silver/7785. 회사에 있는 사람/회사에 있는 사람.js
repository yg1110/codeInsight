const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];

const map = new Map();
for (let i = 1; i <= N; i++) {
  const [name, inout] = input[i].split(" ");
  if (inout === "enter") {
    map.set(name, name);
  } else {
    map.delete(name);
  }
}
console.log([...map.values()].sort().reverse().join("\n"));