const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const k = input.shift().split(' ').map(Number);

const result = [];
for (let i = 0; i < m; i++) {
  const score = Math.floor((k[i] * 100) / n);
  if (score <= 4) {
    result.push(1);
  } else if (score <= 11) {
    result.push(2);
  } else if (score <= 23) {
    result.push(3);
  } else if (score <= 40) {
    result.push(4);
  } else if (score <= 60) {
    result.push(5);
  } else if (score <= 77) {
    result.push(6);
  } else if (score <= 89) {
    result.push(7);
  } else if (score <= 96) {
    result.push(8);
  } else {
    result.push(9);
  }
}

console.log(result.join(' '));