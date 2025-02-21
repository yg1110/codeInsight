const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const Q = +arr[0];
for(let t=1; t<=Q; t++) {
    const S = arr[t];
    let ans = 0;
    for(let i=0; i<S.length - 2; i++) {
        const word = S.substring(i, i+3);
        if(word === "WOW") ans++;
    }
    console.log(ans);
}