const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const N = arr.shift();
for(let i=0; i<N-1; i++) {
    for(let j=i+1; j<N; j++) {
        if(arr[i] > arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}
console.log(arr.join("\n"));