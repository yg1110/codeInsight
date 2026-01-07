const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();
const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];
for (let t = 0; t < T; t++) {
  const [M, N, K] = input.shift().split(" ").map(Number);
  const map = [];
  const visit = [];
  let cnt = 0;

  function dfs(node) {
    const { i, j } = node;
    for (let d = 0; d < 4; d++) {
      const ni = i + di[d];
      const nj = j + dj[d];
      if (
        ni >= 0 &&
        ni < N &&
        nj >= 0 &&
        nj < M &&
        map[ni][nj] === 1 &&
        !visit[ni][nj]
      ) {
        visit[ni][nj] = true;
        dfs({ i: ni, j: nj });
      }
    }
  }

  for (let i = 0; i < N; i++) {
    map.push(Array(M).fill(0));
    visit.push(Array(M).fill(false));
  }
  for (let k = 0; k < K; k++) {
    const [j, i] = input.shift().split(" ").map(Number);
    map[i][j] = 1;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1 && !visit[i][j]) {
        cnt++;
        dfs({ i, j });
      }
    }
  }
  console.log(cnt);
}