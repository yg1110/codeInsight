const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
let idx = 0;
let prevLimitKm = 0;
let prevDriveKm = 0;
let fined = 0;
const [N, M] = lines[idx++].split(" ").map(Number);
const load = Array(100).fill(0);
for (let i = 0; i < N; i++) {
  const [km, h] = lines[idx++].split(" ").map(Number);
  for (let j = prevLimitKm; j < prevLimitKm + km; j++) {
    load[j] = h;
  }
  prevLimitKm += km;
}
for (let i = 0; i < M; i++) {
  const [km, h] = lines[idx++].split(" ").map(Number);
  for (let j = prevDriveKm; j < prevDriveKm + km; j++) {
    if (load[j] < h) fined = Math.max(fined, h - load[j]);
  }
  prevDriveKm += km;
}
console.log(fined);