const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr.shift();
const coord = arr.map(item => 
    item.split(" ")
    .map(Number))
    .sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0]
    }
);
for(let i=0; i<N; i++) {
    console.log(coord[i].join(" "));
}