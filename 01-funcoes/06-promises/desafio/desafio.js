const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "arquivo.txt");

function read(file) {
  return new Promise((resolve) => {
    fs.readFile(file, (_, contentFile) => {
      resolve(contentFile.toString());
    });
    console.log("Arquivo Lido.");
  });
}

read(filePath).then((content) => console.log(content));
