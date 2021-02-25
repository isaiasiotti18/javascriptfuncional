function bomDia() {
  return "Bom dia";
} // Função declarativa

const boaTarde = () => {
  return "Boa tarde";
}; // Function Expression

function somar(a = 0, b = 0) {
  // Definindo valores padrões para os parâmetros
  return a + b;
}

console.log(bomDia());
console.log(boaTarde());

const result = somar(3, 4);
const multParams = somar(3, 1, 5, 6, 6);
const notAnumber = somar(1); // Retorna um tipo NaN

console.log(result);
console.log(multParams); // O js não reclama se passar vários parametros
console.log(notAnumber);
