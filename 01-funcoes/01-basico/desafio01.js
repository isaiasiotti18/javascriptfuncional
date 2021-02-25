function calcular(n1) {
  return function (n2) {
    return function (fn) {
      return fn(n1, n2);
    };
  };
}

const soma = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;

console.log(calcular(10)(2)(soma));
console.log(calcular(10)(2)(subtrair));
console.log(calcular(10)(2)(mult));
