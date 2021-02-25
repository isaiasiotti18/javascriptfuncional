const professionals = [
  { id: 1, name: "Isaias", occupation: "Programador" },
  { id: 2, name: "Kerolaine", occupation: "Gerente Comercial" },
  { id: 3, name: "Janaina", occupation: "Personal Trainer" },
  { id: 4, name: "Pedro", occupation: "Programador" },
];

function searchId(id) {
  const result = professionals.findIndex((el) => el.id === id);

  if (result <= -1) {
    return `Id not found!`;
  }

  const remove = professionals.splice(result, 1);
  return remove;
}

console.log(searchId(3));
console.log(professionals);
