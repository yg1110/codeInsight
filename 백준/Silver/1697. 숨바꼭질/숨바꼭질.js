const [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const MAX = 100000;
const queue = [];
const visit = Array(MAX + 1).fill(false);
let idx = 0;
queue.push({ pos: N, time: 0 });
while (idx < queue.length) {
  const { pos, time } = queue[idx++];
  if (pos === K) {
    console.log(time);
    return;
  }
  const next = [pos + 1, pos - 1, pos * 2];
  for (const n of next) {
    if (visit[n]) continue;
    if (n > MAX || n < 0) continue;
    visit[n] = true;
    queue.push({ pos: n, time: time + 1 });
  }
}