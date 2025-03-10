const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const N = +input;

function fibo(n) {
    if(n === 0) return 1;
    if(n <= 2) return n;
    return n * fibo(n-1);
}

console.log(fibo(N));