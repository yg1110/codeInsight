const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");
const alpha = {};
for(let i=97; i<=122; i++) {
    alpha[i] = 0;
}
for(let i=0; i<input.length; i++) {
    const index = input[i].charCodeAt();
    alpha[index] += 1;
}
console.log(Object.values(alpha).join(" "));