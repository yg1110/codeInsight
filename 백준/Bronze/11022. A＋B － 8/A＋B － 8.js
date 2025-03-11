const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr.shift();
let result = "";
for(let i=0; i<N; i++) {
    const [a, b] = arr[i].split(" ").map(Number);
    result += `Case #${i+1}: ${a} + ${b} = ${a+b}\n`;
}
console.log(result);