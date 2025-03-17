const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = arr.shift().split(" ").map(Number);
const S = new Set();
let count = 0;
for(let i=0; i<N; i++) {
    S.add(arr[i]);
}
for(let i=N; i<N+M; i++) {
    if(S.has(arr[i])) count++;
}
console.log(count);