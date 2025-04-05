const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");
const dial2 = ["A", "B", "C"];
const dial3 = ["D", "E", "F"];
const dial4 = ["G", "H", "I"];
const dial5 = ["J", "K", "L"];
const dial6 = ["M", "N", "O"];
const dial7 = ["P", "Q", "R", "S"];
const dial8 = ["T", "U", "V"];
const dial9 = ["W", "X", "Y", "Z"];

const sec = input.reduce((acc, curr) => {
    if(dial2.includes(curr)) acc += 3;
    if(dial3.includes(curr)) acc += 4;
    if(dial4.includes(curr)) acc += 5;
    if(dial5.includes(curr)) acc += 6;
    if(dial6.includes(curr)) acc += 7;
    if(dial7.includes(curr)) acc += 8;
    if(dial8.includes(curr)) acc += 9;
    if(dial9.includes(curr)) acc += 10;
    return acc;
}, 0);

console.log(sec);