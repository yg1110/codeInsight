const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
for(let i=0; i<arr.length - 1; i++) {
    const num1 = arr[i];
    const num2 = arr[i].split("").reverse().join("");
    const a = num1.slice(0, Math.floor(num1.length / 2));
    const b = num2.slice(0, Math.floor(num2.length / 2));
    console.log(a === b ? 'yes' : 'no');
}