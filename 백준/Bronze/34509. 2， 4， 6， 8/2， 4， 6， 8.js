outer: for (let i = 10; i < Infinity; i += 2) {
  const n = i.toString().split("").reverse();
  const rN = +n.join("");
  if (rN % 4 !== 0) continue;
  let sum = 0;
  for (let j = 0; j < n.length; j++) {
    if (n[j] === "8") continue outer;
    sum += +n[j];
  }
  if (sum % 6 !== 0) continue;
  console.log(i);
  break;
}