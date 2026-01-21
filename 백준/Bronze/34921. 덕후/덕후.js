const [A, T] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const P = 10 + 2 * (25 - A + T);
console.log(Math.max(0, P));