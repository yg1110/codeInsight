const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let sum = 0;
const nums = [];
for(let i=1; i<arr.length; i++) {
    const num = +arr[i];
    if(num === 0) sum -= nums.pop();
    else {
        sum += num;
        nums.push(num);
    }
}
console.log(sum);