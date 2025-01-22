const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = arr.shift().split(" ").map(Number);
const A = [];
const B = [];
for(let i=0; i<N; i++) {
    A.push(arr.shift().split(" ").map(Number));
}
for(let i=0; i<N; i++) {
    B.push(arr.shift().split(" ").map(Number));
}

for(let i=0; i<N;i ++) {
    let map = [];
    for(let j=0; j<M; j++) {
        map.push(A[i][j] + B[i][j]);
    }
    console.log(map.join(" "));
}