const os = require("os");
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync("./content/first-sync.txt", `Edited the first file`);
// writeFileSync("./content/first.txt", ` Edited the first file`, { flag: "a" });

console.log(readFileSync("./content/first.txt", "utf8"));
