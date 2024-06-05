const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const visited = Array(N).fill(false);
let result = 0;

const dfs = (visited, target) => {
  if (target.length === N) {
    let sum = 0;
    for (let i = 0; i < N - 1; i++) {
      sum += Math.abs(target[i] - target[i + 1]);
    }
    result = Math.max(result, sum);
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    target.push(arr[i]);
    dfs(visited, target);
    visited[i] = false;
    target.pop();
  }
};

dfs(visited, []);
console.log(result);