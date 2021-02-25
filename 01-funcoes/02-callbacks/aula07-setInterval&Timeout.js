// const callback = () => console.log("Vou ficar executando...");
// setInterval(callback, 5000);

// setTimeout(() => {
//   console.log("Depois de 5s eu vou ser executado.");
// }, 5000);

const sayHi = (who) => console.log(`Hello ${who}!`);
setTimeout(sayHi, 2000, "Isaias");
