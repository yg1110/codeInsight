const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");
const stack = [];
let ans = "";
const popWord = () => {
    let word = "";
    while(stack.length > 0) {
        word += stack.pop();
    }
    return word;
}
const appendWord = (index) => {
    let word = "<";
    while(input[index] !== ">") {
        index++;
        word += input[index];
    }
    return { word, index }
}
for(let i=0; i<input.length; i++) {
    if(input[i] === "<") {
        const { word, index } = appendWord(i);
        ans += popWord();
        ans += word;
        i = index;
    }
    else if(input[i] === " ") ans += popWord() + " ";
    else stack.push(input[i]);
}
if(stack.length > 0) ans += popWord();
console.log(ans.trim());