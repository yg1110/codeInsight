const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = [];
const visit = [];
const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];
let cnt = 0;
let max = 0;

function init() {
  for (let i = 1; i <= N; i++) {
    map.push(input[i].split(" "));
    visit.push(Array.from({ length: M }, () => false));
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === "1" && !visit[i][j]) {
        cnt++;
        visit[i][j] = true;
        bfs({ i, j });
      }
    }
  }
}

function bfs(node) {
  const queue = [];
  queue.push(node);
  let idx = 0;
  while (queue.length > idx) {
    const { i, j } = queue[idx++];
    for (let d = 0; d < 4; d++) {
      const ni = di[d] + i;
      const nj = dj[d] + j;
      if (
        ni >= 0 &&
        ni < N &&
        nj >= 0 &&
        nj < M &&
        !visit[ni][nj] &&
        map[ni][nj] === "1"
      ) {
        visit[ni][nj] = true;
        queue.push({ i: ni, j: nj });
      }
    }
  }
  max = Math.max(max, idx);
}

init();
console.log(cnt + "\n" + max);