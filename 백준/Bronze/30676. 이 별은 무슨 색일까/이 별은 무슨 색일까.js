const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
function solution() {
  switch (true) {
    case input < 425:
      return "Violet";
    case input < 450:
      return "Indigo";
    case input < 495:
      return "Blue";
    case input < 570:
      return "Green";
    case input < 590:
      return "Yellow";
    case input < 620:
      return "Orange";
    default:
      return "Red";
  }
}
console.log(solution());