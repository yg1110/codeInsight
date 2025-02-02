const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +arr[0];
for(let i=1; i<=T; i++) {
    const [H, W, N] = arr[i].split(" ").map(Number);
    const floor = N % H || H;
    const room = Math.ceil(N / H);
    console.log(`${floor}${room.toString().padStart(2, '0')}`);
}