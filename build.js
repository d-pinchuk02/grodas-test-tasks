const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// https://stackoverflow.com/a/22185855
var copyRecursiveSync = function (src, dest) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

fs.mkdirSync("./build");

console.log("Building project 1...");
execSync("cd task1 && npm run build", { stdio: "inherit" });
console.log("Copying project 1 files");
fs.renameSync("./task1/build", "./build/task1");

console.log("Building project 2...");
console.log("Copying project 2 files");
copyRecursiveSync("./task2", "./build/task2");

console.log("Done!");
