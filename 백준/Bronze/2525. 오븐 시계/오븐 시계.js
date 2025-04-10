const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const getMin = (a, b) => a * 60 + b;
const getTime = (time) => {
  const hour = Math.floor(time / 60) % 24;
  const min = time % 60;
  return [hour, min];
};
const [A, B] = input[0].split(" ").map(Number);
const C = +input[1];
const time = getMin(A, B + C);
const [hour, min] = getTime(time);
console.log(`${hour} ${min}`);