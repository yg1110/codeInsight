let [A, B] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
if(A === 1 && B === 1) {
    console.log(1);
    console.log(1);
    return;
}
if(A < B) [B, A] = [A, B];
for(let i=B; i>0; i--) {
    if(A % i === 0 && B % i === 0) {
        console.log(i);
        break;
    }
}
for(let i=1; i<=A*B; i++) {
    const a = B*i;
    for(let j=1; j<A*B; j++) {
        const b = A*j;
        if(a === b) {
            console.log(a);
            return;
        }
        if(a < b) {
            break;
        }
    }
}