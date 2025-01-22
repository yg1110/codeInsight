const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = arr[0];
const numbers = arr[1].split(" ").map(Number);
const v = +arr[2];
const findNumbers = numbers.filter(n => n === v);
console.log(findNumbers.length);