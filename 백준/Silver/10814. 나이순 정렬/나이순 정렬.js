const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr.shift();
const members = arr.sort((a, b) => {
    const [age1, name1] = a.split(" ");
    const [age2, name2] = b.split(" ");
    if(+age1 > +age2) return 1;
    else if(+age1 < +age2) return -1;
    else return 0;
});
console.log(members.join("\n"));