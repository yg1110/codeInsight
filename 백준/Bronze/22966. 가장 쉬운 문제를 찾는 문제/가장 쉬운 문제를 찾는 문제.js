const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +lines[0];
let ans = {
  title: "",
  level: Infinity,
};
for (let i = 1; i <= N; i++) {
  const [title, level] = lines[i].split(" ");
  if (ans.level > +level) {
    ans.title = title;
    ans.level = +level;
  }
}
console.log(ans.title);