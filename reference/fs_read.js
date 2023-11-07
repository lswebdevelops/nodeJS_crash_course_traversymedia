// file read

const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// rename file

fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "hellomyworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("file renamed");
  }
);
