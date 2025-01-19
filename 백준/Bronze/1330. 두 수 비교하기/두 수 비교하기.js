const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
if(arr[0] < arr[1]) {
    console.log("<");
}
if(arr[0] > arr[1]) {
    console.log(">");
}
if(arr[0] === arr[1]) {
    console.log("==")
}