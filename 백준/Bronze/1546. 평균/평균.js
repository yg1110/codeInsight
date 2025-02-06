const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr[1];
const score = arr[1].split(" ").map(Number).sort((a, b) => b - a);
let ans = 0;
for(let i=0; i<score.length; i++) {
    ans += score[i] / score[0] * 100;
}
console.log(ans / score.length);