const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const map = [];
const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];
let ans = 0;

function initMap() {
  for (let i = 0; i < N; i++) {
    const region = input[i].split(" ").map(Number);
    map.push(region);
  }
}

function rainingMap(rain, visit) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] <= rain) {
        visit[i][j] = true;
      }
    }
  }
}

function checkMap(visit) {
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visit[i][j]) {
        cnt++;
        bfs({ i, j }, visit);
      }
    }
  }
  ans = Math.max(ans, cnt);
  return cnt;
}

function bfs(node, visit) {
  let idx = 0;
  const { i, j } = node;
  const queue = [];
  queue.push(node);
  visit[i][j] = true;
  while (idx < queue.length) {
    const cur = queue[idx++];
    for (let d = 0; d < 4; d++) {
      const ni = cur.i + di[d];
      const nj = cur.j + dj[d];
      if (ni >= 0 && ni < N && nj >= 0 && nj < N && !visit[ni][nj]) {
        visit[ni][nj] = true;
        queue.push({ i: ni, j: nj });
      }
    }
  }
}

function solution() {
  initMap();
  for (let t = 0; t <= 100; t++) {
    const visit = Array.from({ length: map.length }, () =>
      Array(map.length).fill(false)
    );
    rainingMap(t, visit);
    const isEnd = checkMap(visit) === 0;
    if (isEnd) return ans;
  }
  return 0;
}

console.log(solution());