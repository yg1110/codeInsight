const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const nums = arr[1].split(" ").map(Number);
let max = -1000000;
let min = 1000000;
for(let i=0; i<nums.length; i++) {
    if(nums[i] > max) max = nums[i];
    if(nums[i] < min) min = nums[i];
}
console.log(`${min} ${max}`);