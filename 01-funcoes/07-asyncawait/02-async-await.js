function aleatoryNum(min, max, banNumbers) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve, reject) => {
    try {
      const factor = max - min + 1;
      const aleatory = parseInt(Math.random() * factor) + min;

      if (banNumbers.includes(aleatory)) {
        return reject("Número repetido.");
      }

      return resolve(aleatory);
    } catch (error) {
      reject(error);
    }
  });
}

async function numberGenerate(qtdNumbers) {
  const numbers = [];
  for (let _ of Array(qtdNumbers).fill()) {
    numbers.push(await aleatoryNum(1, 60, numbers));
  }

  return numbers;
}

numberGenerate(10).then(console.log).catch(console.log);
