const fruits = ["apple", "grapes", "pineapple"];

function filterFruits(fruit) {
  return fruits.filter((el) => {
    return el.toLowerCase().indexOf(fruit.toLowerCase()) > -1;
  });
}

console.log(filterFruits("pi"));
