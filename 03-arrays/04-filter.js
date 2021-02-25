const people = [
  { id: 1, person: "Isaias" },
  { id: 11, person: "Janaina" },
  { id: 2, person: "Kerol" },
  { id: 22, person: "Joãozin" },
  { id: 10, person: "Pedro" },
];

function searchName(person) {
  return people.filter(
    (el) => el.person.toLowerCase().indexOf(person.toLowerCase()) > -1
  );
}

console.log(searchName("ro"));
