const path = require("path");

const readDir = require("./Services/readDir");
const fn = require("./Services/readingFiles");
const isAInclude = require("./Services/isAInclude");
const isAVoid = require("./Services/isAVoid");
const validateExtension = require("./Services/validateExtension");
const isANumber = require("./Services/isANumber");
const removeSpecialCaracteres = require("./Services/removeSpecialCaracteres");
const countingWords = require("./Services/countingWords");
const orderBy = require("./Services/orderBy");

const symbols = [
  ".",
  "?",
  "-",
  ",",
  '"',
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

const dirPath = path.join(__dirname, "legendas");

readDir(dirPath)
  .then((files) => validateExtension(files, ".srt"))
  .then((files) => fn.readFiles(files))
  .then((array) => array.join(" "))
  .then((contentsAll) => contentsAll.split("\n"))
  .then(isAVoid)
  .then((lines) => isAInclude(lines, "-->"))
  .then((lines) => isANumber(lines))
  .then(removeSpecialCaracteres(symbols))
  .then((array) => array.join(" "))
  .then((words) => words.split(" "))
  .then(isAVoid)
  .then((lines) => isANumber(lines))
  .then(countingWords)
  .then(orderBy("qtd", "desc"))
  .then(console.log);

// read(directoryPath).then((rd) => console.log(rd));
