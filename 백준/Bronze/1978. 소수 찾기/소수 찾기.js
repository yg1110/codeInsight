const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr[0];
const nums = arr[1].split(" ").map(Number);
const ans = nums.filter(num => {
    if(num === 1) return false;
    for(let i=2; i<num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
});
console.log(ans.length);