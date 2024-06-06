const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const board = input.map((item) => item.split(""));
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const bfs1 = () => {
  let cnt = 0;
  const visit = board.map((item) => Array(item.length).fill(false));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visit[i][j]) continue;
      cnt++;
      const queue = [[i, j]];
      visit[i][j] = true;
      while (queue.length) {
        const now = queue.pop();
        for (let i = 0; i < 4; i++) {
          const ni = now[0] + dy[i];
          const nj = now[1] + dx[i];
          if (ni < 0 || ni >= N || nj < 0 || nj >= N) continue;
          if (visit[ni][nj]) continue;
          if (board[now[0]][now[1]] === board[ni][nj]) {
            visit[ni][nj] = true;
            queue.push([ni, nj]);
          }
        }
      }
    }
  }
  return cnt;
};
const bfs2 = () => {
  let cnt = 0;
  const visit = board.map((item) => Array(item.length).fill(false));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visit[i][j]) continue;
      cnt++;
      const queue = [[i, j]];
      visit[i][j] = true;
      while (queue.length) {
        const now = queue.pop();
        for (let i = 0; i < 4; i++) {
          const ni = now[0] + dy[i];
          const nj = now[1] + dx[i];
          if (ni < 0 || ni >= N || nj < 0 || nj >= N) continue;
          if (visit[ni][nj]) continue;
          if (board[now[0]][now[1]] === "R" || board[now[0]][now[1]] === "G") {
            if (board[ni][nj] === "R" || board[ni][nj] === "G") {
              visit[ni][nj] = true;
              queue.push([ni, nj]);
            }
          } else {
            if (board[ni][nj] === "B") {
              visit[ni][nj] = true;
              queue.push([ni, nj]);
            }
          }
        }
      }
    }
  }
  return cnt;
};

const a = bfs1();
const b = bfs2();

console.log(a, b);