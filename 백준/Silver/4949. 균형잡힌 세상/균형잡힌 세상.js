const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const checkBracket = (stack, bracket) => {
    while(stack.length) {
        let str = stack.pop();
        if(bracket === "]" && str === "(") return false;
        if(bracket === "]" && str === ")") return false;
        if(bracket === ")" && str === "[") return false;
        if(bracket === ")" && str === "]") return false;
        if(bracket === "]" && str === "[") return true;
        if(bracket === ")" && str === "(") return true;
    }
    return false;
}

for(let i=0; i<arr.length-1; i++) {
    const stack = [];
    const hasBracket = false;
    const strArray = arr[i].split("");
    let isBracket = "yes";
    for(let j=0; j<strArray.length; j++) {
        const str = strArray[j];
        if(str === "]" || str === ")") {
            isBracket = checkBracket(stack, str) ? "yes" : "no";
            if(isBracket === "no") break;
        }
        else {
            stack.push(str);
        }
    }
    if(isBracket === "yes") {
        const remaining = stack.includes("[") || stack.includes("(");
        isBracket = remaining ? "no" : "yes";
    }
    console.log(isBracket);
}