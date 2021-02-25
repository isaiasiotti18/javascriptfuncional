function aleatoryNum(min, max) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve) => {
    const factor = max - min + 1;
    const aleatory = parseInt(Math.random() * factor) + min;

    resolve(aleatory);
  });
}

aleatoryNum(20, 60)
  .then((num) => num * 10)
  .then((numX10) => `O número gerado foi ${numX10}`)
  .then(console.log);
