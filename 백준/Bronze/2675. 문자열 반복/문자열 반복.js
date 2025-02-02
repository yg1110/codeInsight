const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
for(let i=0; i<+arr[0]; i++) {
    const [R, S] = arr[i + 1].split(" ");
    const word = S.split("").reduce((acc, cur) => acc += cur.repeat(+R), "");
    console.log(word);
}