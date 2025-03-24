const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1, N + 1).map(item => item.split(" ").map(Number));
const K = +input[N + 1];
const dir = input.slice(N + 2);
let ans = "";
for(let d=0; d<K; d++) {
    let sum = 0;
    const [si, sj, ei, ej] = dir[d].split(" ").map(Number);
    for(let i=si-1; i<ei; i++) {
        for(let j=sj-1; j<ej; j++) {
            sum += arr[i][j];
        }
    }
    ans += sum;
    if(d !== K - 1) {
        ans += "\n"
    }
}
console.log(ans);