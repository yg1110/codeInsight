const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const map = [];
const visit = [];
const ans = [];
for (let i = 0; i < N; i++) {
  map.push(input[i].split(""));
  visit.push(Array.from({ length: N }, () => false));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === "1" && !visit[i][j]) {
      const cnt = bfs(i, j);
      ans.push(cnt);
    }
  }
}

function bfs(i, j) {
  const queue = [];
  const di = [-1, 1, 0, 0];
  const dj = [0, 0, -1, 1];
  let cnt = 1;
  queue.push({ i, j });
  visit[i][j] = true;
  while (queue.length) {
    const current = queue.shift();
    for (let d = 0; d < 4; d++) {
      const ni = current.i + di[d];
      const nj = current.j + dj[d];
      if (
        ni >= 0 &&
        ni < N &&
        nj >= 0 &&
        nj < N &&
        !visit[ni][nj] &&
        map[ni][nj] === "1"
      ) {
        cnt++;
        visit[ni][nj] = true;
        queue.push({ i: ni, j: nj });
      }
    }
  }
  return cnt;
}

ans.sort((a, b) => a - b);
console.log(ans.length);
console.log(ans.join("\n"));