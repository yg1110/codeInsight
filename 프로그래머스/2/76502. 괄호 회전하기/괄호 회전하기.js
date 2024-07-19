function checkBracket(bracket) {
    const stack = [];
    for(let i=0; i<bracket.length; i++) {
        if(bracket[i] === "[" || bracket[i]  === "{" || bracket[i] === "(") {
            stack.push(bracket[i]);
        } else {
            const current = stack.pop();
            if(bracket[i] === "]" && current !== "[") return false;
            if(bracket[i] === "}" && current !== "{") return false;
            if(bracket[i] === ")" && current !== "(") return false;
        }
    }
    return stack.length === 0;
}
function solution(s) {
    if(s.length === 1) return 0;
    let bracket = s;
    let count = +checkBracket(s);
    for(let i=1; i<s.length; i++) {
        bracket = bracket.substring(1) + bracket[0];
        count += +checkBracket(bracket);
    }
    return count;
}