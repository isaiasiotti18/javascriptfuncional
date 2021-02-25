const array = [0, 1, 2, 3, 4];

const acumular = array.reduce((acc, valorAtual) => {
  return acc + valorAtual;
});

console.log(acumular);
