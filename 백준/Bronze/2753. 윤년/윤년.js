const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const year = Number(input);
if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(1);
}
else {
    console.log(0);
}