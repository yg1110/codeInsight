const arr = require("fs").readFileSync(0, "utf-8") .toString().trim().split("\n").map(Number);
if(arr[0] > 0 && arr[1] > 0) {
    console.log(1);
}
if(arr[0] > 0 && arr[1] < 0) {
    console.log(4);
}
if(arr[0] < 0 && arr[1] > 0) {
    console.log(2);
}
if(arr[0] < 0 && arr[1] < 0) {
    console.log(3);
}