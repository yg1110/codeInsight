const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr[0];
const len = arr[1].length;
let command = "";
for(let i=0; i<len; i++) {
    let target = arr[1][i];
    for(let j=2; j<=N; j++) {
        const current = arr[j][i];
        if(target !== current) {
            target = "?";
            break;
        }
    }
    command += target;
}
console.log(command);