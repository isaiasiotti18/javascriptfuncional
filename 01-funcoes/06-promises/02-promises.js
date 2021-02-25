// setTimeout(() => {
//   console.log("exec cb");

//   setTimeout(() => {
//     console.log("exec cb...");
//   }, 1000);
// }, 2000);

function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executando Promise...");
      resolve();
    }, tempo);
  });
}

esperarPor()
  .then(() => esperarPor())
  .then(() => esperarPor());
