function execFn(func, name) {
  return func(name);
}

const myName = (name) => `Meu nome é ${name}.`;

const result = execFn(myName, "Isaias");

console.log(result);
// Meu nome é Isaias
