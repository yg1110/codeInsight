const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const [N, M] = input.shift().split(' ').map(Number);
  const board = input.map((v) => v.split(''));
  let answer = 64;
  for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
      let target1 = 'W';
      let target2 = 'B';
      let cnt1 = 0;
      let cnt2 = 0;
      for (let k = i; k < i + 8; k++) {
        for (let l = j; l < j + 8; l++) {
          if (board[k][l] !== target1) {
            cnt1++;
          }
          if (board[k][l] !== target2) {
            cnt2++;
          }
          if (l === j + 7) continue;
          target1 = target1 === 'W' ? 'B' : 'W';
          target2 = target2 === 'W' ? 'B' : 'W';
        }
      }
      answer = Math.min(answer, cnt1, cnt2);
    }
  }
  return answer;
};

console.log(solution());