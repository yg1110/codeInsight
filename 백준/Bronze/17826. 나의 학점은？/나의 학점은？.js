const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const scores = input[0].split(" ").map(Number);
const my = +input[1];

const idx = scores.indexOf(my);
let grade;

if (idx < 5) grade = "A+";
else if (idx < 15) grade = "A0";
else if (idx < 30) grade = "B+";
else if (idx < 35) grade = "B0";
else if (idx < 45) grade = "C+";
else if (idx < 48) grade = "C0";
else grade = "F";

console.log(grade);