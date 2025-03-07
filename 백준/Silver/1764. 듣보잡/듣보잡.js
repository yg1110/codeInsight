const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = arr.shift().split(" ").map(Number);
const unListen = new Set(arr.splice(0, N));
let result = [];
for(let i=0; i<M; i++) {
    if(unListen.has(arr[i])) {
        result.push(arr[i]);
    }
}
const ans = result.sort();
console.log(ans.length);
console.log(ans.join('\n'));