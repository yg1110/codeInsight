const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const node = Array.from({ length: N + 1 }, () => []);
const visit = Array.from({ length: N + 1 }, () => false);
const queue = [1];
const result = [];
for (let i = 1; i < N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  node[a].push(b);
  node[b].push(a);
}

visit[1] = true;
let head = 0;
while (queue.length > head) {
  const cur = queue[head++];
  for (const next of node[cur]) {
    if (visit[next]) continue;
    visit[next] = true;
    result[next] = cur;
    queue.push(next);
  }
}

console.log(result.join("\n").trim());