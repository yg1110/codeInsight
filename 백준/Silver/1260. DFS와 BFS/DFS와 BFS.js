const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, V] = arr.shift().split(' ').map(Number);

const makeGraph = () => {
  const graph = Array.from({ length: N + 1 }, () => []);
  for (let i = 0; i < M; i++) {
    const [a, b] = arr[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph.map((nodes) => nodes.sort((a, b) => a - b));
};

const getBfs = (graph) => {
  let queue = graph[V];
  const visit = new Array(N + 1).fill(false);
  visit[V] = true;
  const result = [V];
  while (queue.length) {
    const now = queue.shift();
    if (!visit[now]) {
      visit[now] = true;
      result.push(now);
      queue = queue.concat(graph[now]);
    }
  }
  return result.join(' ');
};

const getDfs = (graph) => {
  const result = [V];
  const visit = new Array(N + 1).fill(false);
  visit[V] = true;
  const dfs = (nodes) => {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (visit[node]) continue;
      visit[node] = true;
      result.push(node);
      dfs(graph[node]);
    }
  };
  dfs(graph[V]);
  return result.join(' ');
};

const graph = makeGraph();
console.log(getDfs(graph));
console.log(getBfs(graph));