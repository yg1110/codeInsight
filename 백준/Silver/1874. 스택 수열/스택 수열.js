const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = () => {
  const N = input.shift();
  const stack = [];
  const result = [];
  let target = input.shift();
  let number = 0;
  while (true) {
    if (target > number) {
      result.push('+');
      stack.push(++number);
    }
    if (target === number) {
      result.push('-');
      stack.pop();
      if (input.length === 0) break;
      target = input.shift();
    }
    if (target < number) {
      if (stack[stack.length - 1] === target) {
        result.push('-');
        stack.pop();
        if (input.length === 0) break;
        target = input.shift();
      } else {
        return 'NO';
      }
    }
  }
  return result.join('\n');
};

console.log(solution());