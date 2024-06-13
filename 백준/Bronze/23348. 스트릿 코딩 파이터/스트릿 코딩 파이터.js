const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const SCOPE = input.shift().split(' ').map(Number);
  const N = +input.shift();
  let maxScope = 0;
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      const scope = input.shift().split(' ').map(Number);
      for (let k = 0; k < scope.length; k++) {
        sum += scope[k] * SCOPE[k];
      }
    }
    maxScope = Math.max(maxScope, sum);
  }
  return maxScope;
};

console.log(solution());