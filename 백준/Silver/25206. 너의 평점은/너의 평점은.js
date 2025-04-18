const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const GRADE = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let credit = 0;
let grade = 0;
for (let i = 0; i < input.length; i++) {
  const [_, c, g] = input[i].split(" ");
  if (g !== "P") {
    credit += parseFloat(c);
    grade += parseFloat(c) * GRADE[g];
  }
}
const result = grade / credit;
console.log(result.toFixed(6));