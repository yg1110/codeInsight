const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const queue = [];

function init() {
  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 0; i < graph.length; i++) {
    graph[i].sort((a, b) => a - b);
  }
}

function bfs(node) {
  let result = "";
  queue.push(node);
  const visited = Array(N + 1).fill(false);
  visited[node] = true;
  while (queue.length) {
    const current = queue.shift();
    result += current + " ";
    for (const next of graph[current]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
  return result.trim();
}

function dfsFunc(node) {
  let result = node + " ";
  const visited = Array(N + 1).fill(false);
  function dfs(node) {
    visited[node] = true;
    for (const next of graph[node]) {
      if (!visited[next]) {
        result += next + " ";
        dfs(next);
      }
    }
    return result.trim();
  }
  return dfs(node);
}

init();
console.log(dfsFunc(V));
console.log(bfs(V));