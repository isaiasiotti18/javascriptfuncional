const names = ["Isaias", "Janaina", "Kerolaine", "Pedro"];

function myNameIs(array) {
  return Array.from(array, (name) => {
    return `Meu nome é ${name}`;
  });
}
const isaias = "isaias";

function nameArray(string) {
  return Array.from(string.toUpperCase());
}
console.log(nameArray(isaias));

console.log(myNameIs(names));
