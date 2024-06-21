const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
const boll = [0, 1, 2, 3];
const swap = (a, b) => {
  const temp = boll[a];
  boll[a] = boll[b];
  boll[b] = temp;
};
for (let i = 0; i < N; i++) {
  const [a, b] = input.shift().split(' ').map(Number);
  swap(a, b);
}
console.log(boll.indexOf(1));