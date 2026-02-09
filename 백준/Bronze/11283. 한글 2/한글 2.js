const input = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(input.charCodeAt(0) - 0xac00 + 1);