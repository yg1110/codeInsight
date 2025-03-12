let arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const N = arr.shift();
let dasom = arr.shift();
let ans = 0;
while(true) {
    let isEnd = true;
    arr = arr.sort((a, b) => b - a);
    for(let i=0; i<arr.length; i++) {
        if(dasom <= arr[i]) {
            dasom++;
            arr[i]--;
            ans++;
            isEnd = false;
            break;
        }
    }
    if(isEnd) break;
}
console.log(ans);