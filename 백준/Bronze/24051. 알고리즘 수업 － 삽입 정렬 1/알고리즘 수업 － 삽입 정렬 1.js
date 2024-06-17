const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

function insertionSort(A) {
  let count = 0;
  for (let i = 1; i < N; i++) {
    let loc = i - 1;
    let newItem = A[i];
    while (loc >= 0 && newItem < A[loc]) {
      A[loc + 1] = A[loc];
      loc--;
      count++;
      if (M === count) {
        return A[loc + 1];
      }
    }
    if (loc + 1 !== i) {
      count++;
      A[loc + 1] = newItem;
      if (M === count) {
        return newItem;
      }
    }
  }
  return -1;
}

console.log(insertionSort(arr));