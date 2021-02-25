function funcOrNot(value, chanceError) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceError) {
        reject("Ocorreu um erro.");
      } else {
        resolve(value);
      }
    } catch (e) {
      reject(e);
    }
  });
}
funcOrNot("Success...", 0.5)
  .then(console.log)
  .catch((err) => console.log(`Erro: ${err}`));
