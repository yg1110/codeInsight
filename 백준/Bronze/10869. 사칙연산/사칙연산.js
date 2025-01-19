const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log(arr[0] + arr[1]);
console.log(arr[0] - arr[1]);
console.log(arr[0] * arr[1]);
console.log(Math.floor(arr[0] / arr[1]));
console.log(arr[0] % arr[1]);