const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = arr.length - 1;
for(let i = 0; i < n; i++) {
    const [a, b] = arr.shift().split(" ").map(Number);
    console.log(a + b);
}