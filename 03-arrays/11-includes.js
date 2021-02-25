const names = ["Isaias", "Janaina", "Kerolaine", "Pedro"];

function verifyElement(array, pattern) {
  return array.includes(pattern);
}

const verifyNames = verifyElement(names, "Eliseu");
console.log(verifyNames);

const numbers = [2, 4, 8, 10, 7];
const verify = numbers.includes(7);
console.log(verify);
