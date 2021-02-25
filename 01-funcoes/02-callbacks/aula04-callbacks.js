function exec(fn, n1, n2) {
  return fn(n1, n2);
}

const sum = (n1, n2) => console.log(n1 + n2);
const subtrair = (n1, n2) => console.log(n1 - n2);

exec(sum, 1, 1);
exec(subtrair, 20, 10);
