const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let result = "";
for(let i=0; i<arr.length - 1; i++) {
    const nums = arr[i].split("");
    let width = 2 + nums.length - 1;
    for(let j=0; j<nums.length; j++) {
        if(nums[j] === "0") width += 4;
        else if(nums[j] === "1") width += 2;
        else width += 3;
    }
    result += width + "\n";
}
console.log(result);