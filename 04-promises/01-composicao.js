function myPromise(maiorQue10 = 0) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (maiorQue10 < 10)
          return reject(`Erro! O número passado é menor que 10.`);

        return resolve(`${maiorQue10} é maior que 10`);
      }, 2000);
    } catch (e) {
      reject(e);
    }
  });
}

const maior = myPromise(11);

maior.then(console.log).catch((err) => console.log(err));
