const [doc, target] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let count = 0;
for(let i=0; i<doc.length - target.length + 1; i++) {
    const current = doc.slice(i, i + target.length);
    if(current === target) {
        count++;
        i += target.length - 1;
    }
}
console.log(count);