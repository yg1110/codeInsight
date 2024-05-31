const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const N = +input.shift();
  const op = input.shift();
  const command = ['+', '-', '*', '/'];
  const stack = [];
  for (let i = 0; i < op.length; i++) {
    const target = op[i];
    if (command.includes(target)) {
      const b = stack.pop();
      const a = stack.pop();
      if (target === '+') stack.push(a + b);
      if (target === '-') stack.push(a - b);
      if (target === '*') stack.push(a * b);
      if (target === '/') stack.push(a / b);
    } else {
      const number = target.charCodeAt(0) - 'A'.charCodeAt(0);
      stack.push(+input[number]);
    }
  }
  return stack.pop().toFixed(2);
};

console.log(solution());