let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice", "Bob"];

function countName(array) {
  return array.reduce((allNames, name) => {
    name in allNames ? allNames[name]++ : (allNames[name] = 1);

    return allNames;
  }, {});
}

console.log(countName(names));
