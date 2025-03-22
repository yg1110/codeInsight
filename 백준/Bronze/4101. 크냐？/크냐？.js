const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let result = "";
for(let i=0; i<arr.length - 1; i++) {
    const [a, b] = arr[i].split(" ").map(Number);
    result += a > b ? "Yes" : "No"
    if(i < arr.length - 2) {
        result += "\n";
    }
}
console.log(result);