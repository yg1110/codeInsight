const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = arr.shift().split(" ").map(Number);
const memo = {};
let result = "";

for(let i=0; i<N; i++) {
    const [site, password] = arr[i].split(" ");
    memo[site] = password;
}

for(let i=N; i<N+M; i++) {
    const site = arr[i];
    result += memo[site] + '\n';
}

console.log(result);