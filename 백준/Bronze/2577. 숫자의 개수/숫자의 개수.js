const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const nums = (arr[0] * arr[1] * arr[2]).toString().split("");
const ans = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
};
nums.forEach(num => {
    ans[num] += 1;
});
console.log(Object.values(ans).join("\n"));