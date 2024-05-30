function solution() {
  const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  const N = +input[0];
  const students = input[1].split(' ').map(Number);
  const [B, C] = input[2].split(' ').map(Number);
  const result = students
    .map((student) => student - B)
    .filter((student) => student > 0)
    .reduce((acc, cur) => acc + Math.ceil(cur / C), 0);
  return N + result;
}
console.log(solution());