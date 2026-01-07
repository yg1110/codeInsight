const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visit = Array(N + 1).fill(false);
visit[0] = true;
let cnt = 0;

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

while (true) {
  const index = visit.findIndex((v) => !v);
  if (index === -1) break;
  cnt++;
  bfs(index);
}

function bfs(node) {
  const queue = [];
  queue.push(node);
  visit[node] = true;
  while (queue.length) {
    const current = queue.shift();
    for (const next of graph[current]) {
      if (!visit[next]) {
        visit[next] = true;
        queue.push(next);
      }
    }
  }
}

console.log(cnt);