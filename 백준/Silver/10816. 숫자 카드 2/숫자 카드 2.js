const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr[0];
const M = +arr[2];
const nums = arr[1].split(" ");
const picks = arr[3].split(" ");
const numsObj = {};
nums.forEach(num => {
    if(numsObj[num]) numsObj[num]++;
    else numsObj[num] = 1;
});
const result = picks.map(pick => numsObj[pick] || 0).join(" ");
console.log(result);