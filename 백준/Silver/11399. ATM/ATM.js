const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const arr = input[1].split(" ").map(Number).sort((a, b) => a - b);

let sum = 0;
for(let i=0; i<N; i++) {
    for(let j=0; j<i+1; j++) {
        sum += arr[j];
    }
}
console.log(sum);