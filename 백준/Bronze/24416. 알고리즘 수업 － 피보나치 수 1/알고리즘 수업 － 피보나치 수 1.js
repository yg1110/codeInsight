const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const N = +input;

let cnt = 0;
function fibo(n) {
  if (n <= 2) {
    cnt++;
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
}

fibo(N);
console.log(cnt, N - 2);