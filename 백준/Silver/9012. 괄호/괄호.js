const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
for(let i=1; i<arr.length; i++) {
    const bracket = arr[i].split("");
    const stack = [];
    let VPS = "YES";
    for(let j=0; j<bracket.length; j++) {
        if(bracket[j] === "(") stack.push(bracket[j]);
        if(bracket[j] === ")") {
            if(stack[stack.length - 1] !== "(") {
                VPS = "NO";
                break;
            };
            stack.pop();
        }
    }
    if(stack.length > 0) VPS = "NO";
    console.log(VPS);
}