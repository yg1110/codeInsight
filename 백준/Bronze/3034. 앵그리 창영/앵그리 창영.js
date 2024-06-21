const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, W, H] = input.shift().split(' ').map(Number);
const maxSize = Math.sqrt(Math.pow(W, 2) + Math.pow(H, 2));
for (let i = 0; i < N; i++) {
  const num = +input.shift();
  console.log(num > maxSize ? 'NE' : 'DA');
}