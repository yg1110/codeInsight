const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf8").trim());
const startYear = 2024;
const startMonth = 8;
const add = (N - 1) * 7;
const totalMonthsFromZero = startMonth - 1 + add;
const year = startYear + Math.floor(totalMonthsFromZero / 12);
const month = (totalMonthsFromZero % 12) + 1;
process.stdout.write(`${year} ${month}\n`);