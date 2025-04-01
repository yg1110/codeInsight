const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = arr[0];
let result = "";
for(let i=1; i<=N; i++) {
    const [a, b] = arr[i].split(" ").map(Number);
    result += `Case #${i}: ${a + b}\n`
}
console.log(result);