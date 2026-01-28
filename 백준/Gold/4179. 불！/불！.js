const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const map = [];
const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];
const moveVisit = [];
const fireVisit = [];
let move = [];
let fire = [];
let cnt = 0;

for (let i = 1; i <= N; i++) {
  map.push(input[i].split(""));
  fireVisit.push(Array.from({ length: M }, () => false));
  moveVisit.push(Array.from({ length: M }, () => false));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "J") {
      moveVisit[i][j] = true;
      move.push({ i, j });
      map[i][j] = ".";
    }
    if (map[i][j] === "F") {
      fireVisit[i][j] = true;
      fire.push({ i, j });
    }
  }
}

function fireBfs() {
  const current = fire;
  let head = 0;
  fire = [];
  while (current.length > head) {
    const { i, j } = current[head++];
    for (let d = 0; d < 4; d++) {
      const ni = di[d] + i;
      const nj = dj[d] + j;
      if (
        ni >= 0 &&
        ni < N &&
        nj >= 0 &&
        nj < M &&
        !fireVisit[ni][nj] &&
        map[ni][nj] === "."
      ) {
        fire.push({ i: ni, j: nj });
        fireVisit[ni][nj] = true;
      }
    }
  }
}

function moveBfs() {
  const current = move;
  let head = 0;
  move = [];
  while (current.length > head) {
    const { i, j } = current[head++];
    if (i === N - 1 || i === 0 || j === M - 1 || j === 0) {
      console.log(cnt);
      process.exit();
    }
    for (let d = 0; d < 4; d++) {
      const ni = di[d] + i;
      const nj = dj[d] + j;
      if (
        ni >= 0 &&
        ni < N &&
        nj >= 0 &&
        nj < M &&
        !fireVisit[ni][nj] &&
        !moveVisit[ni][nj] &&
        map[ni][nj] === "."
      ) {
        move.push({ i: ni, j: nj });
        moveVisit[ni][nj] = true;
      }
    }
  }
}

while (move.length) {
  cnt++;
  fireBfs();
  moveBfs();
}

console.log("IMPOSSIBLE");