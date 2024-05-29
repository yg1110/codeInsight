const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = () => {
  let sum = 0;
  const numbers = {};
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
    numbers[input[i]] = numbers[input[i]] + 1 || 1;
  }
  const entries = Object.entries(numbers).sort((a, b) => b[1] - a[1]);
  return [sum / input.length, entries[0][0]].join('\n');
};

console.log(solution());