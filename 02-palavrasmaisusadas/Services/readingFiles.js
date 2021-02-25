const fs = require("fs");

function readFile(file) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(file, { encoding: "utf-8" });
      resolve(content.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function readFiles(files) {
  return Promise.all(files.map((file) => readFile(file)));
}

module.exports = {
  readFile,
  readFiles,
};
