// Arrow Functions

const saudacao = (nome) => `Fala ${nome}, blz!!!`;
console.log(saudacao("Isaias"));

const somar = ([...numeros]) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  console.log(Array.isArray(numeros));
  return total;
};
console.log(somar([1, 4, 5, 10, 10]));

const potencia = (base) => (exp) => Math.pow(base, exp);
console.log(potencia(2)(8));
