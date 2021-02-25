async function esperarPor(tempo = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Passou ${tempo / 1000} Segundos`);
      resolve();
    }, tempo);
  });
}

async function exec() {
  await esperarPor(5000);

  await esperarPor(2000);

  await esperarPor(1500);
}

exec();
