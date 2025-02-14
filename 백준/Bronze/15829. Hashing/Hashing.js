const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const word = arr[1].split("");
const sum = word.reduce((acc, curr, index) => {
    const alpha = curr.charCodeAt(0) - 96;
    const hash = Math.pow(31, index);
    return acc + (alpha * hash);
}, 0);
console.log(sum);