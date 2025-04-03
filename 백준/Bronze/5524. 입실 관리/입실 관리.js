const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr[0];
for(let i=1; i<=N; i++) {
    console.log(arr[i].toLowerCase())
}