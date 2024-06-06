const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const board = input.map((item) => item.split(" ").map(Number));
let result = "Hing";
const dfs = (i, j) => {
  if (board[i][j] === -1) {
    result = "HaruHaru";
    return;
  }
  if (board[i][j] === 0) return;
  const ni = i + board[i][j];
  const nj = j + board[i][j];
  if (ni >= 0 && ni < N) {
    dfs(ni, j);
  }
  if (nj >= 0 && nj < N) {
    dfs(i, nj);
  }
};
dfs(0, 0);
console.log(result);