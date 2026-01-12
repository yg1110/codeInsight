const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [C, R] = input[0].split(" ").map(Number);
const K = +input[1];

if (K > R * C) {
  console.log(0);
  process.exit(0);
}

const map = [];
const hash = new Map();

for (let i = 0; i < R; i++) {
  map.push(Array.from({ length: C }).fill(0));
}

const di = [-1, 0, 1, 0];
const dj = [0, 1, 0, -1];
let d = 0;
let y = R;
let x = 0;
for (let i = 1; i <= R * C; i++) {
  let ni = y + di[d];
  let nj = x + dj[d];
  if (ni >= 0 && ni < R && nj >= 0 && nj < C && map[ni][nj] === 0) {
    y = ni;
    x = nj;
  } else {
    d = (d + 1) % 4;
    ni = y + di[d];
    nj = x + dj[d];
    y = ni;
    x = nj;
  }

  map[y][x] = i;
  hash.set(i, { i: y, j: x });
}

const result = hash.get(K);
console.log(result ? `${result.j + 1} ${R - result.i}` : 0);