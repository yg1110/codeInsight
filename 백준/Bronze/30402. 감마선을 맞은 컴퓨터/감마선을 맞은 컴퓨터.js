function solution(lines) {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("w")) {
      return "chunbae";
    }
    if (lines[i].includes("b")) {
      return "nabi";
    }
    if (lines[i].includes("g")) {
      return "yeongcheol";
    }
  }
  return "";
}
console.log(solution(require("fs").readFileSync(0, "utf8").trim().split("\n")));