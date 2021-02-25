const vegetables = ["batata", "tomate", "pimenta", "pimentao"];

function addVegetableInList(vegetables, vegetable) {
  if (vegetables.indexOf(vegetable) <= -1) {
    vegetables.push(vegetable);
    return `The ${vegetable} was added to the list`;
  }

  return `The ${vegetable} already exist in te list`;
}

const newAdd = addVegetableInList(vegetables, "couve-flor");
console.log(newAdd);

const secondAdd = addVegetableInList(vegetables, "tomate");
console.log(secondAdd);

console.log(vegetables);
