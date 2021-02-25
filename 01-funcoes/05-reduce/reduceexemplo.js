let arr = [2, 4, 6, 8, 10];

const somaTotal = (acumulador, valorAtual) => {
  return acumulador + valorAtual;
};

console.log(arr.reduce(somaTotal));
