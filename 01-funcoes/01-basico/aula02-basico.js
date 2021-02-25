function func1(func) {
  if (typeof func !== "function") {
    return;
  }

  return func(); //Passando uma função como parâmetro
}

function funcReturn() {
  return `Eu sou uma função`;
}

console.log(func1(funcReturn));
