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

const p1 = Promise.resolve(3);
const p2 = myPromise(8);
const p3 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("foo"), 100)
);

const promises = [p1, p2, p3];

Promise.any(promises).then((result) => console.log(result));
