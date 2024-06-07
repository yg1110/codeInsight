const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input.shift();
const reverseBuilder = (arr, si, ei) => {
  let result = '[';
  for (let i = ei - 1; i >= si; i--) {
    result += arr[i];
    if (i !== si) {
      result += ',';
    }
  }
  result += ']';
  return result;
};
const builder = (arr, si, ei) => {
  let result = '[';
  for (let i = si; i < ei; i++) {
    result += arr[i];
    if (i !== ei - 1) {
      result += ',';
    }
  }
  result += ']';
  return result;
};
const solution = () => {
  const p = input.shift();
  let n = input.shift();
  const arr = input.shift().slice(1, -1).split(',');
  let isReverse = false;
  let si = 0;
  let ei = n;
  for (let j = 0; j < p.length; j++) {
    const command = p[j];
    if (command === 'R') {
      isReverse = !isReverse;
    }
    if (command === 'D') {
      if (n <= 0) {
        return 'error';
      }
      n--;
      if (isReverse) {
        ei--;
      } else {
        si++;
      }
    }
  }
  return isReverse ? reverseBuilder(arr, si, ei) : builder(arr, si, ei);
};
for (let i = 0; i < T; i++) {
  console.log(solution());
}