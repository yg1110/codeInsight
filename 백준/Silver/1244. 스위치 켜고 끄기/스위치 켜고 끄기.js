const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const t = +input.shift();
  const arr = input.shift().split(" ").map(Number);
  const n = +input.shift();
  const result = [];
  for (let i = 0; i < n; i++) {
    const [gender, num] = input[i].split(" ").map(Number);
    if (gender === 1) {
      for (let i = num - 1; i < t; i += num) {
        arr[i] = arr[i] === 0 ? 1 : 0;
      }
    } else {
      arr[num - 1] = arr[num - 1] === 0 ? 1 : 0;
      for (let i = 1; i <= t / 2; i++) {
        const li = num - i - 1;
        const ri = num + i - 1;
        if (li < 0 || ri >= arr.length) break;
        if (arr[li] !== arr[ri]) break;
        arr[li] = arr[li] === 0 ? 1 : 0;
        arr[ri] = arr[ri] === 0 ? 1 : 0;
      }
    }
  }
  for (let i = 0; i < arr.length; i += 20) {
    const chunk = arr.slice(i, i + 20);
    result.push(chunk.join(" "));
  }
  return result.join("\n");
};

console.log(solution());