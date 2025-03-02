const [N, K] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const arr = Array.from(new Array(N), (_, i) => i + 1);
const result = [];
let count = 0;
while(arr.length) {
    count++;
    if(count === K) {
        result.push(arr.shift());
        count = 0;
    }
    else {
        const item = arr.shift();
        arr.push(item);
    }
}
console.log(`<${result.join(', ')}>`);