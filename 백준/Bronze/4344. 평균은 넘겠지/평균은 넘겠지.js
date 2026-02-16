const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
for (let i = 1; i <= N; i++) {
  const [C, ...score] = input[i].split(" ").map(Number);
  const aver = Math.floor(score.reduce((acc, cur) => acc + cur, 0) / C);
  const stu = score.filter((s) => s > aver);
  const percent = ((stu.length / C) * 100).toFixed(3);
  console.log(percent + "%");
}