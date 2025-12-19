let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const target = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
for (let i = 0; i < target.length; i++) {
  const reg = new RegExp(target[i], "g");
  input = input.replace(reg, ".");
}
console.log(input.length);