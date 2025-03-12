const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
let result = "";
const prefixsum = [arr[0]];
for(let i=1; i<arr.length; i++) {
    prefixsum[i] = prefixsum[i-1] + arr[i];
}
for(let t=0; t<M; t++) {
    const [start, end] = input[t].split(" ").map(Number);
    const sum = prefixsum[end - 1] - (prefixsum[start - 2] || 0);
    result += sum + "\n";
}
console.log(result);