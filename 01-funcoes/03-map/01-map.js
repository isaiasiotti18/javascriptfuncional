// Maior que zero
// Divisivel por 1 e por ele mesmo
// Números multiplos não são primos

const numeros = [1, 4, 3, 6, 7, 19, 97, 40, 2, 13];

function primo(dividendo) {
  for (let i = 2; i < dividendo; i++)
    if (dividendo % i === 0) {
      return `${dividendo} não é primo`;
    }

  return `${dividendo} é primo`;
}

numeros.map((numero) => console.log(primo(numero)));
