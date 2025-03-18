const word1 = require("fs").readFileSync("/dev/stdin").toString().trim();
const word2 = word1.split("").reverse().join("");
console.log(word1 === word2 ? 1 : 0);