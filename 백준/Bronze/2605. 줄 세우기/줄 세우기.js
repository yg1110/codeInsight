const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solution = () => {
  const n = +input[0];
  const order = input[1].split(' ').map(Number);
  const result = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = 1; i < n; i++) {
    const idx = i - order[i];
    const temp = result[i];
    result.splice(i, 1);
    result.splice(idx, 0, temp);
  }
  return result.join(' ');
};

console.log(solution());
