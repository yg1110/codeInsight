const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr[0];
const people = arr[1].split(" ").map(Number);
const [T, P] = arr[2].split(" ").map(Number);
const sum = people.reduce((acc, cur) => acc += Math.ceil(cur / T), 0);
console.log(sum);
console.log(Math.floor(N/P), N%P);