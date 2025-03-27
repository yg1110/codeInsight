const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr.shift();
let ans = 1;
const domino = arr.map(item => item.split(" ").map(Number)).sort((a, b) => a[0] - b[0]);
for(let i=0; i<N-1; i++) {
    const [a1, l1] = domino[i];
    const [a2, l2] = domino[i+1];
    if(a1 + l1 < a2) ans++;
}
console.log(ans);