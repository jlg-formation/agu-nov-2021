const fs = require("fs");

const promisify =
  (fn) =>
  (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  };

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

(async () => {
  try {
    const files = await readdir(".");
    console.log("files: ", files);
    const content = await readFile(files[0], { encoding: "utf-8" });
    console.log("content: ", content);
  } catch (err) {
    console.log("err: ", err);
  }
})();
