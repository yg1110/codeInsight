const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +arr[0];
let result = "";
for(let i=1; i<=T*2-1; i+=2) {
    let min = Infinity;
    let max = -Infinity;
    const N = +arr[i];
    const nums = arr[i+1].split(" ").map(Number);
    for(let j=0; j<N; j++) {
        min = Math.min(min, nums[j]);
        max = Math.max(max, nums[j]);
    }
    result += `${min} ${max}`;
    if(i < T*2) result += '\n';
}
console.log(result);