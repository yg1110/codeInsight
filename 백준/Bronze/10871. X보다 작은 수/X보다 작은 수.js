const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = arr.shift().split(" ");
const numbers = arr.shift().split(" ").map(Number);
const sortedNumbers = numbers.filter(n => n < M);
console.log(sortedNumbers.join(" "));