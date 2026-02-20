const input = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(+input % 2 === 1 ? "1" : "2");