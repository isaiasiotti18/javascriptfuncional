const fs = require("fs");
const path = require("path");

module.exports = function (dir) {
  return new Promise((resolve, reject) => {
    try {
      const directory = fs.readdirSync(dir);
      const files = directory.map((file) => path.join(dir, file));
      resolve(files);
    } catch (e) {
      reject(e);
    }
  });
};
