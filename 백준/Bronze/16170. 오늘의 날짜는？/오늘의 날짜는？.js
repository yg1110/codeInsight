const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const date = new Date();
console.log(date.getFullYear());
console.log((date.getMonth() + 1).toString().padStart(2, "0"));
console.log(date.getDate().toString().padStart(2, "0"));