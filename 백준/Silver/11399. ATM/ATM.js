const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const arr = input[1].split(" ").map(Number).sort((a, b) => a - b);

let beforeSum = 0;
const sum = arr.reduce((acc, cur) => {
    beforeSum += cur;
    return acc += beforeSum;
}, 0);
console.log(sum);