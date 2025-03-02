let [N, ...nums] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
nums.sort((a, b) => a - b);
let mode = {};
let sum = 0;
let median = nums[Math.floor(nums.length / 2)];

function getMode(mode) {
    if(mode.length === 1) return mode[0][0];
    if(mode[0][1] === mode[1][1]) return mode[1][0];
    for(let i=0; i<mode.length-1; i++) {
        if(mode[i][1] !== mode[i+1][1]) return mode[i][0];
    }
}

for(let i=0; i<N; i++) {
    sum += nums[i];
    mode[nums[i]] = (mode[nums[i]] || 0) + 1;
}

mode = getMode(Object.entries(mode).sort(([key1, value1], [key2, value2]) => {
    if(value1 === value2) return key1 - key2;
    return value2 - value1;
}));

console.log(Math.round(sum / N).toString());
console.log(median);
console.log(mode);
console.log(Math.abs(nums[nums.length - 1] - nums[0]));