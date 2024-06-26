const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const seal = input[1].split('');
let ans = 0;
while (true) {
  let isSuccess = true;
  const goldChip = 'BRONZESILVER'.split('');
  for (let i = 0; i < goldChip.length; i++) {
    let hasSeal = false;
    const target = goldChip[i];
    for (let j = 0; j < N; j++) {
      const current = seal[j];
      if (target === current) {
        hasSeal = true;
        seal.splice(j, 1);
        break;
      }
    }
    if (!hasSeal) {
      isSuccess = false;
      break;
    }
  }
  if (!isSuccess) {
    break;
  }
  ans++;
}
console.log(ans);