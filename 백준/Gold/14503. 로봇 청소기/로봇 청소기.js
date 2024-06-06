const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let [r, c, d] = input.shift().split(" ").map(Number);
const map = [...input.map((v) => v.split(" ").map(Number))];
const solution = () => {
  const mappingDirection = {
    0: 0,
    1: 3,
    2: 2,
    3: 1,
  };
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  d = mappingDirection[d];
  let count = 0;
  while (true) {
    let isClean = false;
    if (map[r][c] === 0) {
      map[r][c] = count + 2;
      count++;
    }
    for (let i = 0; i < 4; i++) {
      d = (d + 1) % 4;
      const nx = c + dx[d];
      const ny = r + dy[d];
      if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
      if (map[ny][nx] === 0) {
        c = nx;
        r = ny;
        isClean = true;
        break;
      }
    }
    if (!isClean) {
      const nx = dx[d] === 1 ? -1 : dx[d] === -1 ? 1 : 0;
      const ny = dy[d] === 1 ? -1 : dy[d] === -1 ? 1 : 0;
      c = c + nx;
      r = r + ny;
      if (map[r][c] === 1) break;
    }
  }
  return count;
};

console.log(solution());