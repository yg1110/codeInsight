const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const N = arr.shift();
if(N === 0) {
    console.log(N);
    return;
}
const index = Math.round(N * 0.15);
const datas = arr.sort((a, b) => a - b).slice(index, N - index);
const level = Math.round(
    datas.reduce((acc, cur) => acc += cur, 0) / datas.length
);
console.log(level);