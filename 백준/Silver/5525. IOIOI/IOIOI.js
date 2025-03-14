const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const M = +input[1];
const S = input[2];
const target = "I".padStart(N * 2 + 1, "IO");
let count = 0;
for(let i=0; i<M; i++) {
    const word = S.substring(i, i + target.length);
    if(word === target) count++;
}
console.log(count);