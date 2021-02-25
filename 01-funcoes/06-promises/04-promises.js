function aleatoryNum(min, max, time) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve) => {
    setTimeout(() => {
      const factor = max - min + 1;
      const aleatory = parseInt(Math.random() * factor) + min;
      resolve(aleatory);
    }, time);
  });
}

function generateSeveralNumbers() {
  return Promise.all([
    aleatoryNum(1, 60, 4000),
    aleatoryNum(1, 60, 2000),
    aleatoryNum(1, 60, 500),
    aleatoryNum(1, 60, 1000),
  ]);
}

generateSeveralNumbers().then((number) => console.log(number));
