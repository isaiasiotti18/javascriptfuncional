const primeiroElemento = (el) => el[0];
const primeiraLetra = (string) => string[0];
const letraMaiuscula = (letra) => letra.toUpperCase();

const p = new Promise((resolve) => {
  resolve(["isaias", "Kerolaine", "Janaina", "Pedro", "Eliseu"]);
});

p.then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMaiuscula)
  .then(console.log);
