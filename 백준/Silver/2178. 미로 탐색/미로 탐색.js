const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const [n, m] = input[0].split(' ').map(Number);
  const graph = input.slice(1).map((v) => v.split('').map(Number));
  const visited = Array.from(Array(n), () => Array(m).fill(false));
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const queue = [{ x: 0, y: 0 }];
  while (queue.length) {
    const { x, y } = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (graph[nx][ny] === 0) continue;
      if (visited[nx][ny]) continue;
      visited[nx][ny] = true;
      graph[nx][ny] = graph[x][y] + 1;
      queue.push({ x: nx, y: ny });
    }
  }
  return graph[n - 1][m - 1];
};

console.log(solution());