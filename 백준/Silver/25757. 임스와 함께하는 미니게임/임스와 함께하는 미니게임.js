const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const [N, K] = input[0].split(' ');
  const divider = K === 'Y' ? 1 : K === 'F' ? 2 : 3;
  const people = new Set();
  for (let i = 1; i <= Number(N); i++) {
    people.add(input[i]);
  }
  return Math.floor(people.size / divider);
};

console.log(solution());