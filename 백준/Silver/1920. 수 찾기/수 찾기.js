const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr[0];
const A = new Set(arr[1].split(" "));
const M = +arr[2];
const B = arr[3].split(" ");
B.forEach(item => {
    const hasItem = A.has(item);
    console.log(hasItem ? '1' : '0')
})