const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "arquivo.txt");

function callback(err, contentFile) {
  console.log(contentFile.toString());
}

fs.readFile(filePath, {}, callback);
