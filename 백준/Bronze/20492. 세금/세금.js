const N = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()

const a = +N * 0.78;
const b = (+N * 0.8) + ((+N * 0.2) * 0.78);

console.log(`${a} ${b}`);