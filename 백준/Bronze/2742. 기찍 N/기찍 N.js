const N = +require("fs").readFileSync("/dev/stdin").toString().trim();
const result = Array.from({ length: N }).reduce((acc, cur, index) => acc += N - index + "\n", "");
console.log(result);