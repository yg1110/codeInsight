const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = +input.shift();
for (let i = 0; i < T; i++) {
  const N = +input.shift();
  const bear = input.splice(0, N);
  const maxBear = bear.sort((a, b) => {
    const value1 = a.split(" ")[1];
    const value2 = b.split(" ")[1];
    return value2 - value1;
  })[0];
  console.log(maxBear.split(" ")[0]);
}