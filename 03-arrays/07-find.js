const professionals = [
  { id: 1, name: "Isaias", occupation: "Programador" },
  { id: 2, name: "Kerolaine", occupation: "Gerente Comercial" },
  { id: 3, name: "Janaina", occupation: "Personal Trainer" },
  { id: 4, name: "Pedro", occupation: "Programador" },
];

function searchId(id) {
  const result = professionals.find((el) => el.id === id);

  return result ? result : `ID ${id} não existe.`;
}

console.log(searchId(2));
