const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = [];
const visit = [];
const ans = [];
const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];
for (let i = 1; i <= N; i++) {
  map.push(input[i].split(""));
  visit.push(Array(M).fill(false));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "1" && !visit[i][j]) {
      bfs({ i, j, cnt: 1 });
    }
  }
}

function bfs(node) {
  const queue = [];
  let idx = 0;
  queue.push(node);

  while (idx < queue.length) {
    const current = queue[idx++];
    for (let d = 0; d < 4; d++) {
      const ni = current.i + di[d];
      const nj = current.j + dj[d];
      if (
        ni >= 0 &&
        ni < N &&
        nj >= 0 &&
        nj < M &&
        !visit[ni][nj] &&
        map[ni][nj] === "1"
      ) {
        visit[ni][nj] = true;
        queue.push({ i: ni, j: nj, cnt: current.cnt + 1 });
        if (ni === N - 1 && nj === M - 1) {
          ans.push(current.cnt + 1);
        }
      }
    }
  }
}

ans.sort((a, b) => a - b);
console.log(ans[0]);