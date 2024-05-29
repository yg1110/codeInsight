const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b);

const solution = () => {
  const sum = input.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (sum - input[i] - input[j] === 100) {
        return input.filter((x) => x !== input[i] && x !== input[j]).join('\n');
      }
    }
  }
};

console.log(solution());