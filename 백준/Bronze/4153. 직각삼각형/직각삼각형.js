const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
for(let i=0; i<arr.length-1; i++) {
    const [a, b, c] = arr[i].split(" ").map(Number).sort((a, b) => a - b);
    const ans = Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2);
    console.log(ans === 0 ? "right" : "wrong");
}