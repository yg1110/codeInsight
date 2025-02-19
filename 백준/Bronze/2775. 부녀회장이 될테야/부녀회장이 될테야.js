const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const T = arr[0];
for(let t=0; t<T; t++) {
    const ans = [];
    const [k, n] = [arr[t * 2 + 1], arr[t * 2 + 2]]
    for(let i=0; i<=k; i++) {
        const current = [];
        for(let j=1; j<=n; j++) {
            current.push(j);
        }
        ans.push(current);
    }
    for(let i=1; i<=k; i++) {
        for(let j=0; j<n; j++) {
            let sum = 0;
            for(let l=0; l<=j; l++) {
                sum += ans[i-1][l];
            }
            ans[i][j] = sum;
        }
    }
    console.log(ans[k][n-1]);
}