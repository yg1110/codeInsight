const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const arr1 = input[1].split(" ");
const M = +input[2];
const arr2 = input[3].split(" ");
const nums = {};
let result = "";
for(let i=0; i<N; i++) {
    nums[arr1[i]] = 1;
}
for(let i=0; i<M; i++) {
    result += nums[arr2[i]] ? "1" : "0";
    if(i < M - 1) result += " ";
}
console.log(result);